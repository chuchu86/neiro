import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fef3c7]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fef3c7]/95 backdrop-blur-sm border-b-3 border-black">
        <div className="container flex items-center gap-4 py-3">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-['Nunito'] font-semibold">Назад</span>
            </a>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-['Unbounded'] font-black mb-8 text-black">
              Политика конфиденциальности
            </motion.h1>

            <motion.div variants={fadeInUp} className="space-y-6 font-['Rubik'] text-gray-800">
              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты информации о физических лицах, которые посещают веб-сайт школанейробит.рф (далее — «Сайт»), а также пользуются услугами, предоставляемыми ООО «НейроБит» (далее — «Компания»).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">2. Оператор персональных данных</h2>
                <p>
                  Оператором персональных данных является ООО «НейроБит», зарегистрированное по адресу: Санкт-Петербург, Российская Федерация.
                </p>
                <p>
                  Контактная информация оператора:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: hello@neurobit.school</li>
                  <li>Телефон: +7 (999) 123-45-67</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">3. Какую информацию мы собираем</h2>
                <p>
                  Компания собирает следующие категории персональных данных:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>При заполнении формы записи на пробный урок:</strong> имя ребёнка, номер телефона родителя/опекуна, возраст ребёнка</li>
                  <li><strong>При использовании Сайта:</strong> IP-адрес, информация о браузере, время и дата посещения, страницы, которые вы посещали</li>
                  <li><strong>При общении с нами:</strong> содержание переписки, если вы связываетесь с Компанией через форму обратной связи или электронную почту</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">4. Цели обработки персональных данных</h2>
                <p>
                  Компания обрабатывает персональные данные в следующих целях:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Обработка заявок на пробный урок и запись на курсы</li>
                  <li>Связь с клиентами по телефону или электронной почте</li>
                  <li>Предоставление информации об услугах и программах обучения</li>
                  <li>Улучшение качества Сайта и услуг</li>
                  <li>Соблюдение требований законодательства Российской Федерации</li>
                  <li>Аналитика и статистика использования Сайта</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">5. Правовые основания обработки</h2>
                <p>
                  Обработка персональных данных осуществляется на основании:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Согласия субъекта персональных данных (для лиц старше 14 лет) или согласия законного представителя (для лиц до 14 лет)</li>
                  <li>Исполнения договора об оказании услуг</li>
                  <li>Соблюдения требований законодательства Российской Федерации</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">6. Защита персональных данных</h2>
                <p>
                  Компания принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения, включая:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Использование защищённых каналов передачи данных (HTTPS)</li>
                  <li>Ограничение доступа к персональным данным</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Обучение сотрудников правилам обработки персональных данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">7. Передача персональных данных третьим лицам</h2>
                <p>
                  Компания не передаёт персональные данные третьим лицам без согласия субъекта, за исключением случаев, предусмотренных законодательством Российской Федерации.
                </p>
                <p>
                  Персональные данные могут быть переданы:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Государственным органам в соответствии с требованиями законодательства</li>
                  <li>Поставщикам услуг (хостинг-провайдеры, сервисы аналитики), которые обрабатывают данные только в целях оказания услуг</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">8. Сроки хранения персональных данных</h2>
                <p>
                  Персональные данные хранятся в течение времени, необходимого для достижения целей их обработки, но не менее чем в течение сроков, установленных законодательством Российской Федерации.
                </p>
                <p>
                  После достижения целей обработки персональные данные удаляются или обезличиваются.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">9. Права субъектов персональных данных</h2>
                <p>
                  Каждый субъект персональных данных имеет право:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Получить информацию о том, какие персональные данные о нём обрабатываются</li>
                  <li>Требовать уточнения, дополнения или удаления персональных данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                  <li>Получить копию персональных данных в структурированном виде</li>
                  <li>Обратиться с жалобой в уполномоченный орган по защите прав субъектов персональных данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">10. Обработка данных несовершеннолетних</h2>
                <p>
                  Для обработки персональных данных лиц в возрасте до 14 лет требуется согласие их законного представителя (родителя или опекуна).
                </p>
                <p>
                  Для лиц в возрасте от 14 до 18 лет требуется как согласие самого несовершеннолетнего, так и согласие его законного представителя.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">11. Файлы cookies</h2>
                <p>
                  Сайт использует файлы cookies для улучшения пользовательского опыта и аналитики. Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на функциональность Сайта.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">12. Изменения в Политике конфиденциальности</h2>
                <p>
                  Компания оставляет за собой право изменять настоящую Политику. Изменения вступают в силу с момента их опубликования на Сайте.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">13. Контактная информация</h2>
                <p>
                  Если у вас есть вопросы по поводу этой Политики конфиденциальности или обработки ваших персональных данных, пожалуйста, свяжитесь с нами:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: hello@neurobit.school</li>
                  <li>Телефон: +7 (999) 123-45-67</li>
                  <li>Адрес: Санкт-Петербург, Российская Федерация</li>
                </ul>
              </section>

              <section className="bg-[#f43f5e] text-white p-6 rounded-lg border-3 border-black mt-8">
                <p className="text-sm">
                  <strong>Дата вступления в силу:</strong> 30 мая 2026 года
                </p>
              </section>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
