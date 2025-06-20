"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shrink } from 'lucide-react';

export default function AlphaBanner() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      <AnimatePresence>
        {isMinimized ? (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <button
              onClick={() => setIsMinimized(false)}
              className="w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              aria-label="Uyarıyı genişlet"
            >
              <AlertTriangle className="h-8 w-8 text-white dark:text-yellow-900" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="banner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-sm"
          >
            <div 
              className="relative bg-yellow-50 dark:bg-yellow-900/80 backdrop-blur-xl border border-yellow-200 dark:border-yellow-700/60 rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full text-yellow-600 dark:text-yellow-300 hover:bg-yellow-200/50 dark:hover:bg-yellow-700/50 transition-colors"
                aria-label="Uyarıyı küçült"
              >
                <Shrink className="h-5 w-5" />
              </button>

              <div className="p-5 pr-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <AlertTriangle className="h-7 w-7 text-yellow-500 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-200">
                      Alpha Versiyon 🚧
                    </h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1.5">
                      Bu site şu an geliştirme aşamasındadır. Bazı özellikler eksik olabilir veya hatalarla karşılaşabilirsiniz.
                    </p>
                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mt-3">
                      Geri bildirimleriniz bizi çok mutlu eder! 😊
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 