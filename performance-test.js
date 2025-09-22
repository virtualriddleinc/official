#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');

async function runPerformanceTest() {
  console.log('🚀 Performance test başlatılıyor...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Network monitoring
  const requests = [];
  const responses = [];
  
  page.on('request', request => {
    requests.push({
      url: request.url(),
      resourceType: request.resourceType(),
      timestamp: Date.now()
    });
  });
  
  page.on('response', response => {
    responses.push({
      url: response.url(),
      status: response.status(),
      resourceType: response.request().resourceType(),
      timestamp: Date.now(),
      headers: response.headers()
    });
  });
  
  // Navigate to the page
  console.log('📄 Sayfa yükleniyor...');
  const startTime = Date.now();
  
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  const loadTime = Date.now() - startTime;
  
  // Get performance metrics
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0,
      cumulativeLayoutShift: performance.getEntriesByType('layout-shift').reduce((sum, entry) => sum + entry.value, 0),
      totalBlockingTime: performance.getEntriesByType('longtask').reduce((sum, entry) => sum + entry.duration, 0)
    };
  });
  
  // Analyze CSS loading
  const cssRequests = requests.filter(req => 
    req.resourceType === 'stylesheet' || 
    req.url.includes('.css')
  );
  
  const cssResponses = responses.filter(resp => 
    resp.resourceType === 'stylesheet' || 
    resp.url.includes('.css')
  );
  
  // Check for render-blocking resources
  const renderBlockingCSS = cssRequests.filter(req => {
    const response = cssResponses.find(resp => resp.url === req.url);
    return response && response.status === 200;
  });
  
  console.log('\n📊 PERFORMANS METRİKLERİ:');
  console.log('========================');
  console.log(`⏱️  Toplam Yükleme Süresi: ${loadTime}ms`);
  console.log(`🎨 First Paint: ${metrics.firstPaint.toFixed(2)}ms`);
  console.log(`📝 First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`);
  console.log(`🖼️  Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms`);
  console.log(`📐 Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}`);
  console.log(`⏳ Total Blocking Time: ${metrics.totalBlockingTime.toFixed(2)}ms`);
  
  console.log('\n🎨 CSS ANALİZİ:');
  console.log('================');
  console.log(`📄 Toplam CSS İsteği: ${cssRequests.length}`);
  console.log(`✅ Başarılı CSS Yüklemesi: ${cssResponses.filter(r => r.status === 200).length}`);
  console.log(`❌ Başarısız CSS Yüklemesi: ${cssResponses.filter(r => r.status !== 200).length}`);
  
  if (renderBlockingCSS.length > 0) {
    console.log('\n🚫 RENDER-BLOCKING CSS:');
    renderBlockingCSS.forEach(req => {
      console.log(`   - ${req.url}`);
    });
  } else {
    console.log('\n✅ Render-blocking CSS bulunamadı!');
  }
  
  // Check for critical CSS
  const hasInlineCSS = await page.evaluate(() => {
    const styleTags = document.querySelectorAll('style');
    return styleTags.length > 0;
  });
  
  console.log(`\n💡 Kritik CSS (Inline): ${hasInlineCSS ? '✅ Var' : '❌ Yok'}`);
  
  // Performance score
  let score = 100;
  if (metrics.largestContentfulPaint > 2500) score -= 30;
  if (metrics.firstContentfulPaint > 1800) score -= 20;
  if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
  if (metrics.totalBlockingTime > 300) score -= 20;
  if (renderBlockingCSS.length > 0) score -= 10;
  
  console.log(`\n🏆 PERFORMANS SKORU: ${Math.max(0, score)}/100`);
  
  if (score >= 90) {
    console.log('🎉 Mükemmel performans!');
  } else if (score >= 70) {
    console.log('👍 İyi performans, küçük iyileştirmeler yapılabilir.');
  } else if (score >= 50) {
    console.log('⚠️  Orta performans, optimizasyon gerekli.');
  } else {
    console.log('🚨 Düşük performans, acil optimizasyon gerekli!');
  }
  
  await browser.close();
  
  console.log('\n✅ Performance test tamamlandı!');
}

runPerformanceTest().catch(console.error);
