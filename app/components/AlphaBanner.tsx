"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

export default function AlphaBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa yüklendikten 1 saniye sonra pop-up'ı göster
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md sm:max-w-lg">
              <div className="bg-yellow-50 dark:bg-yellow-900/90 backdrop-blur-xl border border-yellow-200 dark:border-yellow-700/60 rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 p-2 rounded-full text-yellow-600 dark:text-yellow-300 hover:bg-yellow-200/50 dark:hover:bg-yellow-700/50 transition-colors z-10"
                  aria-label="Pop-up'ı kapat"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-6 pr-12">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <AlertTriangle className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-xl text-yellow-800 dark:text-yellow-200 mb-3">
                        Alpha Versiyon 🚧
                      </h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed mb-4">
                        Bu site şu an geliştirme aşamasındadır. Bazı özellikler eksik olabilir veya hatalarla karşılaşabilirsiniz.
                      </p>
                      <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                        Geri bildirimleriniz bizi çok mutlu eder! 😊
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 