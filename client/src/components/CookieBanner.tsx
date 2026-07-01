import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, согласился ли пользователь с cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Показываем баннер через 1 секунду после загрузки
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container max-w-2xl mx-auto">
            <div className="bg-black border-3 border-white rounded-lg p-6 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleReject}
                className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="pr-8">
                <h3 className="text-white font-['Unbounded'] font-bold text-lg mb-3">
                  🍪 Мы используем файлы cookie
                </h3>
                <p className="text-gray-300 font-['Rubik'] text-sm mb-4">
                  Мы используем файлы cookie для улучшения вашего опыта на сайте, анализа трафика и персонализации контента. 
                  Нажимая «Принять», вы соглашаетесь с использованием cookies в соответствии с нашей{" "}
                  <Link href="/privacy-policy">
                    <a className="text-[#f43f5e] font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                      политикой конфиденциальности
                    </a>
                  </Link>
                  .
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-[#f43f5e] text-white font-['Nunito'] font-bold py-3 px-4 rounded-lg hover:bg-[#e63d5c] transition-colors border-2 border-[#f43f5e]"
                  >
                    ✓ Принять все
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-transparent text-white font-['Nunito'] font-bold py-3 px-4 rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
                  >
                    Отклонить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
