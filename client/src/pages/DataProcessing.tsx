import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } }
};

export default function DataProcessing() {
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
              Согласие на обработку персональных данных
            </motion.h1>

            <motion.div variants={fadeInUp} className="space-y-6 font-['Rubik'] text-gray-800">
              <section className="bg-[#6366f1] text-white p-6 rounded-lg border-3 border-black">
                <p className="font-bold text-lg">
                  Настоящим я даю свое согласие на обработку моих персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О защите персональных данных»
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">1. Предмет согласия</h2>
                <p>
                  Я даю согласие ООО «НейроБит» (далее — «Компания») на обработку моих персональных данных, включая:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Фамилия, имя, отчество</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты</li>
                  <li>Возраст</li>
                  <li>Информация о месте проживания</li>
                  <li>Иная информация, предоставленная мной добровольно</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">2. Цели обработки персональных данных</h2>
                <p>
                  Я согласен(а) на обработку моих персональных данных в целях:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Рассмотрения моей заявки на участие в пробном уроке</li>
                  <li>Связи со мной по телефону, электронной почте или другим способам связи</li>
                  <li>Предоставления информации об услугах и программах обучения</li>
                  <li>Заключения договора об оказании услуг</li>
                  <li>Выполнения обязательств по договору</li>
                  <li>Проведения маркетинговых и аналитических исследований</li>
                  <li>Улучшения качества услуг</li>
                  <li>Соблюдения требований законодательства Российской Федерации</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">3. Способы обработки персональных данных</h2>
                <p>
                  Я согласен(а) на обработку моих персональных данных следующими способами:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Сбор, систематизация, накопление, хранение, уточнение, обновление, изменение</li>
                  <li>Использование, передача (распространение, предоставление, доступ)</li>
                  <li>Обезличивание, блокирование, удаление, уничтожение</li>
                  <li>Трансграничная передача персональных данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">4. Сроки обработки</h2>
                <p>
                  Я согласен(а) на обработку моих персональных данных в течение всего периода, необходимого для достижения целей обработки, но не менее чем в течение сроков, установленных законодательством Российской Федерации.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">5. Передача персональных данных</h2>
                <p>
                  Я согласен(а) на передачу моих персональных данных следующим категориям получателей:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Сотрудникам и агентам Компании</li>
                  <li>Партнёрам Компании, оказывающим услуги в области образования</li>
                  <li>Поставщикам услуг (хостинг-провайдеры, сервисы коммуникации)</li>
                  <li>Государственным органам в соответствии с требованиями законодательства</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">6. Отзыв согласия</h2>
                <p>
                  Я понимаю, что могу отозвать настоящее согласие в любой момент путём направления письменного заявления на адрес электронной почты Компании: hello@neurobit.school
                </p>
                <p>
                  Отзыв согласия не влияет на законность обработки персональных данных до момента получения Компанией заявления об отзыве согласия.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">7. Согласие на обработку данных несовершеннолетних</h2>
                <p>
                  <strong>Если я являюсь законным представителем (родителем или опекуном) несовершеннолетнего лица:</strong>
                </p>
                <p className="mt-3">
                  Я подтверждаю, что я имею право давать согласие на обработку персональных данных несовершеннолетнего, и даю своё согласие на обработку персональных данных моего ребёнка/подопечного в соответствии с условиями настоящего документа.
                </p>
                <p className="mt-3">
                  Я несу полную ответственность за предоставленную информацию и гарантирую, что имею право давать такое согласие.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">8. Ознакомление с Политикой конфиденциальности</h2>
                <p>
                  Я подтверждаю, что ознакомился(ась) с <Link href="/privacy-policy"><a className="text-[#f43f5e] font-bold hover:underline">Политикой конфиденциальности</a></Link> Компании и согласен(а) с её условиями.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">9. Подтверждение согласия</h2>
                <p>
                  Нажимая кнопку «Записаться на пробный урок» на веб-сайте Компании, я подтверждаю, что:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Я ознакомился(ась) с настоящим Согласием</li>
                  <li>Я даю своё добровольное согласие на обработку моих персональных данных</li>
                  <li>Я понимаю, что могу отозвать согласие в любой момент</li>
                  <li>Я подтверждаю достоверность предоставленной информации</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-['Unbounded'] font-bold text-black mb-3">10. Контактная информация</h2>
                <p>
                  По вопросам обработки персональных данных вы можете связаться с Компанией:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Email: hello@neurobit.school</li>
                  <li>Телефон: +7 (999) 123-45-67</li>
                  <li>Адрес: Санкт-Петербург, Российская Федерация</li>
                </ul>
              </section>

              <section className="bg-[#facc15] p-6 rounded-lg border-3 border-black mt-8">
                <p className="text-sm text-black">
                  <strong>Важно:</strong> Это согласие действует с момента его принятия и до момента его отзыва. Обработка персональных данных, осуществлённая до отзыва согласия, является законной.
                </p>
              </section>

              <section className="bg-[#f43f5e] text-white p-6 rounded-lg border-3 border-black mt-4">
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
