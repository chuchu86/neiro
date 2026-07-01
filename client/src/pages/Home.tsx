/**
 * НейроБит — Школа нейросетей для подростков
 * Design: Neo-Brutalism / Creative Playground
 * Colors: Cream bg, Coral primary, Indigo secondary, Yellow accent
 * Typography: Unbounded (headings), Nunito (subheadings), Rubik (body)
 * Signature: Thick black borders, offset shadows, slight rotations
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Music, Video, BookOpen, Users, Zap, Star, ChevronDown, MapPin, Phone, Mail, ArrowRight, Wand2, Crown, TrendingUp, Heart, Gamepad2, PenTool, Mic, Film, ImageIcon, Type, FileText, Megaphone, Layers, Headphones, Clapperboard } from "lucide-react";

const HERO_IMG = "/manus-storage/hero_banner_v3_118d8a75.webp";
const COURSE_TEXT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462536055/kfApDbsq4Wm3NDTsxdK9Dc/course_text-CjiGjQm9YBrAc7oVYqjfvd.webp";
const COURSE_DESIGN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462536055/kfApDbsq4Wm3NDTsxdK9Dc/course_design-Aqk5KF6yfhmPFDAQYXUHEn.webp";
const COURSE_MUSIC_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462536055/kfApDbsq4Wm3NDTsxdK9Dc/course_music-Uc9fWEHpVpHbM3y9sMdnUu.webp";
const COURSE_VIDEO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462536055/kfApDbsq4Wm3NDTsxdK9Dc/course_video-JoZmtCPcvxEAaVZYMJFxcH.webp";
const MAGIC_POSTER = "/manus-storage/hero_banner_corrected_9c72935d.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MagicSection />
      <WhySection />
      <ValueSection />
      <CoursesDetailSection />
      <IncludedSection />
      <HowItWorksSection />
      <PricingSection />
      <ParentsSection />
      <TrialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fef3c7]/95 backdrop-blur-sm border-b-3 border-black">
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#f43f5e] border-3 border-black rounded-lg flex items-center justify-center rotate-[-3deg]">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-['Unbounded'] font-bold text-lg md:text-xl text-black">НейроБит</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#courses" className="font-['Nunito'] font-semibold text-black hover:text-[#f43f5e] transition-colors">Направления</a>
          <a href="#pricing" className="font-['Nunito'] font-semibold text-black hover:text-[#f43f5e] transition-colors">Тарифы</a>
          <a href="#how" className="font-['Nunito'] font-semibold text-black hover:text-[#f43f5e] transition-colors">Как проходит</a>
          <a href="#parents" className="font-['Nunito'] font-semibold text-black hover:text-[#f43f5e] transition-colors">Родителям</a>
          <a href="#trial" className="brutal-btn bg-[#f43f5e] text-white px-5 py-2 rounded-lg text-sm">
            Пробный урок
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 brutal-card bg-white rounded-lg flex items-center justify-center">
          <div className="flex flex-col gap-1">
            <span className="w-5 h-0.5 bg-black block"></span>
            <span className="w-5 h-0.5 bg-black block"></span>
            <span className="w-5 h-0.5 bg-black block"></span>
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#fef3c7] border-t-3 border-black px-4 pb-4">
          <a href="#courses" onClick={() => setMobileOpen(false)} className="block py-2 font-['Nunito'] font-semibold">Направления</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block py-2 font-['Nunito'] font-semibold">Тарифы</a>
          <a href="#how" onClick={() => setMobileOpen(false)} className="block py-2 font-['Nunito'] font-semibold">Как проходит</a>
          <a href="#parents" onClick={() => setMobileOpen(false)} className="block py-2 font-['Nunito'] font-semibold">Родителям</a>
          <a href="#trial" onClick={() => setMobileOpen(false)} className="brutal-btn bg-[#f43f5e] text-white px-5 py-2 rounded-lg text-sm inline-block mt-2">Пробный урок</a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-10 md:pb-16 relative">
      <div className="absolute top-20 left-4 w-16 h-16 bg-[#facc15] border-3 border-black rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-8 w-12 h-12 bg-[#6366f1] border-3 border-black rotate-45 animate-wiggle opacity-60" />
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-[#f43f5e] border-2 border-black rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />

      <div className="container">
        {/* Крупный арт сверху */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative mb-8 md:mb-12"
        >
          <div className="brutal-card rounded-2xl overflow-hidden bg-white max-w-4xl mx-auto">
            <img src={HERO_IMG} alt="Подростки создают контент с помощью нейросетей" className="w-full h-auto" />
          </div>
          <div className="absolute -top-4 -right-2 md:-right-4 bg-[#facc15] border-3 border-black rounded-full w-20 h-20 flex items-center justify-center rotate-12 animate-wiggle">
            <span className="font-['Unbounded'] font-bold text-xs text-center leading-tight">90+<br/>нейро<br/>сетей</span>
          </div>
        </motion.div>

        {/* Текст под артом */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-block bg-[#6366f1] text-white px-4 py-1.5 rounded-full border-2 border-black text-sm font-['Nunito'] font-bold mb-5 rotate-[-1deg]">
            Санкт-Петербург · 10-16 лет
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 text-black font-['Unbounded']">
            Твой навык —{" "}
            <span className="text-[#f43f5e]">для других магия!</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-800 font-['Nunito'] font-bold mb-3 max-w-2xl mx-auto">
            Пока другие просто смотрят — ты создаёшь крутые картинки, свои треки и вирусные ролики
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 font-['Nunito'] font-semibold mb-6">
            Научись этому с нейронкой. Офлайн-школа в Питере
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            <a href="#trial" className="brutal-btn bg-[#f43f5e] text-white px-6 py-3 rounded-xl text-base md:text-lg inline-flex items-center gap-2">
              <Zap className="w-5 h-5" /> Бесплатный пробный урок
            </a>
            <a href="#courses" className="brutal-btn bg-white text-black px-6 py-3 rounded-xl text-base md:text-lg inline-flex items-center gap-2">
              Узнать больше <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== NEW: Психологический блок "Магия" ===== */
function MagicSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0f172a] border-y-3 border-black relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/20 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f43f5e]/10 rounded-full blur-[80px]" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block bg-[#f43f5e] text-white px-4 py-1.5 rounded-full border-2 border-[#f43f5e]/50 text-sm font-['Nunito'] font-bold mb-4">
              <Wand2 className="w-4 h-4 inline mr-1" /> Почему это меняет всё
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
              Пока одноклассники скроллят —{" "}
              <span className="text-[#facc15]">ты создаёшь</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#f43f5e] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] font-bold text-white text-base mb-1">Ты — впереди трендов</h4>
                  <p className="text-gray-300 text-sm">Друзья будут спрашивать: «Как ты это сделал?!» Ты владеешь инструментами, о которых большинство даже не слышало.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#6366f1] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] font-bold text-white text-base mb-1">Контент, который цепляет</h4>
                  <p className="text-gray-300 text-sm">Вирусные ролики, крутые генерации, мемы нового уровня. Твои посты будут собирать лайки, пока другие постят фото еды.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#facc15] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] font-bold text-white text-base mb-1">Магия для окружающих</h4>
                  <p className="text-gray-300 text-sm">Совмести фото друзей в новые образы. Оживи рисунок. Создай трек за 5 минут. Для всех вокруг это будет выглядеть как волшебство.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#4ade80] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-['Nunito'] font-bold text-white text-base mb-1">Это реально весело</h4>
                  <p className="text-gray-300 text-sm">Никакой зубрёжки. Ты просто играешь с технологиями будущего и создаёшь то, что хочешь. Каждое занятие — новый WOW.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-3 border-white/20 shadow-2xl">
              <img src={MAGIC_POSTER} alt="Твой навык — для них магия" className="w-full h-auto" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-3 -left-3 bg-[#f43f5e] border-2 border-white/30 rounded-full px-3 py-1.5 animate-float">
              <span className="text-white font-['Nunito'] font-bold text-xs">🔥 Вирусный контент</span>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#6366f1] border-2 border-white/30 rounded-full px-3 py-1.5 animate-wiggle">
              <span className="text-white font-['Nunito'] font-bold text-xs">✨ Навык будущего</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    { icon: <Zap className="w-6 h-6" />, title: "Быстрый результат", desc: "Уже на первом занятии создашь свой шедевр — аватарку, трек или анимацию!", color: "bg-[#f43f5e]" },
    { icon: <Star className="w-6 h-6" />, title: "Без скуки", desc: "Никаких лекций и конспектов. Только практика, эксперименты и WOW-эффект.", color: "bg-[#6366f1]" },
    { icon: <Users className="w-6 h-6" />, title: "Крутое комьюнити", desc: "Найди единомышленников, которые так же горят нейросетями, как и ты.", color: "bg-[#facc15]" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Навыки будущего", desc: "ИИ уже меняет мир. Те, кто освоит его сейчас — будут впереди всех.", color: "bg-[#4ade80]" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y-3 border-black">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-black">
            Почему это <span className="text-[#6366f1] rotate-[-1deg] inline-block">круто</span>?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 font-['Nunito'] font-semibold max-w-2xl mx-auto">
            Мы создали школу, в которую подростки хотят приходить сами
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} variants={fadeInUp} className="brutal-card rounded-xl p-6 bg-[#fef3c7]" style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}>
              <div className={`w-12 h-12 ${r.color} border-3 border-black rounded-lg flex items-center justify-center text-white mb-4`}>
                {r.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-black">{r.title}</h4>
              <p className="text-gray-700 text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ===== NEW: Блок ценности обучения — «Это не просто напиши промт» ===== */
function ValueSection() {
  const beginnerSteps = [
    { text: "Написал промт наугад", quality: 15 },
    { text: "Не нравится — пишу ещё раз", quality: 25 },
    { text: "Опять не то... Ладно, сойдёт", quality: 30 },
  ];

  const proSteps = [
    { text: "Анализ референсов и постановка задачи", quality: 40 },
    { text: "Построение пайплайна: идея → промт → доработка", quality: 65 },
    { text: "Контроль качества и итерации", quality: 85 },
    { text: "Финальный результат — именно то, что нужно", quality: 98 },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fef3c7] border-y-3 border-black">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-12">
          <motion.div variants={fadeInUp} className="inline-block bg-[#1e1b4b] text-white font-['Nunito'] font-bold text-sm px-4 py-1.5 rounded-full border-2 border-black mb-4">
            💡 Ценность обучения
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-black">
            Да написать запрос <span className="text-[#f43f5e] inline-block rotate-[-1deg]">любой может</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-700 font-['Nunito'] font-semibold max-w-3xl mx-auto">
            Конечно! Но между случайной генерацией и профессиональным результатом — система навыков.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Левая колонка — Новичок */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="brutal-card rounded-2xl p-6 md:p-8 bg-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-300 border-3 border-black rounded-lg flex items-center justify-center">
                <span className="text-lg">😐</span>
              </div>
              <h3 className="font-['Unbounded'] font-bold text-lg text-black">Новичок</h3>
            </div>
            <div className="space-y-4">
              {beginnerSteps.map((step, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-['Nunito'] font-semibold text-gray-700">{step.text}</span>
                    <span className="text-xs font-bold text-gray-400">{step.quality}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 border-2 border-black rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.quality}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      className="h-full bg-gray-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl">
              <p className="text-sm text-gray-500 font-['Nunito'] italic">«Нейросеть не умеет то, что мне нужно...»</p>
            </div>
          </motion.div>

          {/* Правая колонка — Выпускник НейроБит */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="brutal-card rounded-2xl p-6 md:p-8 bg-[#1e1b4b] border-3 border-[#6366f1]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#6366f1] border-3 border-white/30 rounded-lg flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="font-['Unbounded'] font-bold text-lg text-white">Выпускник НейроБит</h3>
            </div>
            <div className="space-y-4">
              {proSteps.map((step, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-['Nunito'] font-semibold text-white/90">{step.text}</span>
                    <span className="text-xs font-bold text-[#4ade80]">{step.quality}%</span>
                  </div>
                  <div className="h-3 bg-white/10 border-2 border-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.quality}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      className={`h-full rounded-full ${
                        step.quality >= 90 ? 'bg-[#4ade80]' :
                        step.quality >= 60 ? 'bg-[#6366f1]' :
                        'bg-[#6366f1]/70'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#6366f1]/20 border-2 border-[#6366f1]/40 rounded-xl">
              <p className="text-sm text-white/90 font-['Nunito'] italic">«Я точно знаю, как получить нужный результат»</p>
            </div>
          </motion.div>
        </div>

        {/* Нижний блок — усиление */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="brutal-card rounded-2xl p-6 md:p-8 bg-white text-center max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl font-['Nunito'] font-bold text-black leading-relaxed">
            Мы учим не кнопки нажимать — мы учим <span className="text-[#6366f1]">думать как креативный продюсер</span>.
            Понимать последовательность, выбирать правильные инструменты, строить дорожную карту проекта от идеи до готового продукта.
          </p>
          <p className="mt-4 text-base text-gray-600 font-['Nunito']">
            Это разница между <span className="line-through text-gray-400">«повезло один раз»</span> и <span className="font-bold text-[#f43f5e]">«могу всегда»</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== NEW: Детальное раскрытие каждого направления ===== */
function CoursesDetailSection() {
  const [activeTab, setActiveTab] = useState(0);

  const courses = [
    {
      id: "text",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Текст",
      subtitle: "Копирайтер · Сценарист · Автор",
      color: "bg-[#6366f1]",
      borderColor: "border-[#6366f1]",
      textColor: "text-[#6366f1]",
      img: COURSE_TEXT_IMG,
      price: "30 000 ₽",
      tools: "ChatGPT · Claude · Gemini",
      tagline: "Слова — это суперсила. Научись управлять ИИ так, чтобы он писал за тебя лучше, чем ты сам.",
      skills: [
        { icon: <Type className="w-4 h-4" />, name: "Промпт-инжиниринг", desc: "Научишься «разговаривать» с ИИ так, чтобы получать идеальные результаты с первого раза" },
        { icon: <Megaphone className="w-4 h-4" />, name: "Посты и тренды", desc: "Создавай вирусные посты для соцсетей, которые собирают лайки и репосты" },
        { icon: <FileText className="w-4 h-4" />, name: "Сценарии для видео", desc: "Пиши сценарии для YouTube и TikTok, которые удерживают внимание" },
        { icon: <PenTool className="w-4 h-4" />, name: "Рассказы и книги", desc: "Создай свою мини-книгу или комикс с помощью ИИ-соавтора" },
        { icon: <Gamepad2 className="w-4 h-4" />, name: "Браузерные игры", desc: "Напиши текстовый квест или интерактивную историю, в которую можно играть" },
        { icon: <TrendingUp className="w-4 h-4" />, name: "Контент-план", desc: "Научись генерировать идеи для блога на месяц вперёд за 10 минут" },
      ],
      results: ["Портфолио из 10+ текстовых проектов", "Свой блог или канал с контентом", "Навык промпт-инжиниринга для любых задач", "Текстовый квест или мини-книга"]
    },
    {
      id: "design",
      icon: <Palette className="w-6 h-6" />,
      title: "Дизайн",
      subtitle: "Художник · Иллюстратор · Дизайнер",
      color: "bg-[#f43f5e]",
      borderColor: "border-[#f43f5e]",
      textColor: "text-[#f43f5e]",
      img: COURSE_DESIGN_IMG,
      price: "30 000 ₽",
      tools: "Midjourney · Flux · Ideogram · Recraft",
      tagline: "Превращай любую идею в картинку за секунды. Создавай то, что другим и не снилось.",
      skills: [
        { icon: <ImageIcon className="w-4 h-4" />, name: "Генерация картинок", desc: "Создавай любые изображения: от фотореализма до аниме и абстракции" },
        { icon: <Users className="w-4 h-4" />, name: "Виртуальные фотосессии", desc: "Помести себя или друзей в любую локацию мира — от Марса до подиума" },
        { icon: <Layers className="w-4 h-4" />, name: "Коллажи и совмещение", desc: "Совмещай фото друзей в новые образы, создавай мемы и арты" },
        { icon: <Star className="w-4 h-4" />, name: "Стикеры и персонажи", desc: "Делай свои стикерпаки для Telegram и уникальных персонажей" },
        { icon: <Crown className="w-4 h-4" />, name: "Обложки и баннеры", desc: "Дизайн обложек для альбомов, рекламных баннеров, постеров" },
        { icon: <Gamepad2 className="w-4 h-4" />, name: "Оформление для игр", desc: "Создавай арт для новелл, комиксов и игровых проектов" },
      ],
      results: ["Портфолио из 20+ уникальных работ", "Свой стикерпак в Telegram", "Обложка для музыкального альбома", "Оформление для соцсетей и каналов"]
    },
    {
      id: "music",
      icon: <Music className="w-6 h-6" />,
      title: "Музыка",
      subtitle: "Битмейкер · Продюсер · Музыкант",
      color: "bg-[#facc15]",
      borderColor: "border-[#facc15]",
      textColor: "text-[#b45309]",
      img: COURSE_MUSIC_IMG,
      price: "30 000 ₽",
      tools: "Suno · Udio · ElevenLabs",
      tagline: "Создавай треки в любом жанре — от фонка до классики. Без знания нот и инструментов.",
      skills: [
        { icon: <Headphones className="w-4 h-4" />, name: "Создание треков", desc: "Генерируй полноценные песни в любом стиле: поп, рэп, фонк, рок, электроника" },
        { icon: <Mic className="w-4 h-4" />, name: "Написание текстов", desc: "Пиши тексты песен с ИИ-соавтором, подбирай рифмы и ритм" },
        { icon: <ImageIcon className="w-4 h-4" />, name: "Обложки к альбомам", desc: "Создавай визуальное оформление для своих релизов" },
        { icon: <Film className="w-4 h-4" />, name: "Видеоряд к клипу", desc: "Генерируй визуализации и фоны для музыкальных видео" },
        { icon: <Sparkles className="w-4 h-4" />, name: "Саунд-дизайн", desc: "Создавай звуковые эффекты, джинглы и фоновую музыку" },
        { icon: <TrendingUp className="w-4 h-4" />, name: "Релиз на площадках", desc: "Узнай, как выложить свой трек на Spotify, Apple Music и VK Музыка" },
      ],
      results: ["Мини-альбом из 5+ треков", "Обложки для каждого трека", "Навык создания музыки в любом жанре", "Готовый трек для публикации на площадках"]
    },
    {
      id: "video",
      icon: <Video className="w-6 h-6" />,
      title: "Видео",
      subtitle: "Режиссёр · Аниматор · Клипмейкер",
      color: "bg-[#4ade80]",
      borderColor: "border-[#4ade80]",
      textColor: "text-[#166534]",
      img: COURSE_VIDEO_IMG,
      price: "40 000 ₽",
      tools: "Kling · Runway · Seedance · Veo",
      tagline: "Оживляй картинки, создавай мультфильмы и вирусные ролики. Стань нейро-режиссёром.",
      skills: [
        { icon: <Sparkles className="w-4 h-4" />, name: "Оживление картинок", desc: "Превращай любое изображение в видео — персонажи двигаются, пейзажи оживают" },
        { icon: <Film className="w-4 h-4" />, name: "Мультфильмы из рисунков", desc: "Нарисуй персонажа — и он заживёт! Создавай мультики уровня Pixar" },
        { icon: <Clapperboard className="w-4 h-4" />, name: "Вирусные ролики", desc: "Делай контент для TikTok и Reels, который набирает миллионы просмотров" },
        { icon: <Wand2 className="w-4 h-4" />, name: "Motion Design", desc: "Создавай анимированные логотипы, заставки и графику для видео" },
        { icon: <Users className="w-4 h-4" />, name: "Видео с собой", desc: "Помести себя в любой сценарий: космос, средневековье, киберпанк" },
        { icon: <Star className="w-4 h-4" />, name: "Короткометражки", desc: "Создай полноценный мини-фильм по своему сценарию с ИИ-актёрами" },
      ],
      results: ["Портфолио из 10+ видеоработ", "Музыкальный клип на свой трек", "Короткометражный фильм", "Навык создания вирусного видеоконтента"]
    }
  ];

  const active = courses[activeTab];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-10">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-black">
            4 направления — <span className="text-[#f43f5e]">4 суперсилы</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 font-['Nunito'] font-semibold max-w-2xl mx-auto">
            Каждый курс — 3 месяца погружения. Выбери свой путь или пройди все!
          </motion.p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {courses.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(i)}
              className={`brutal-btn px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === i
                  ? `${c.color} text-white`
                  : "bg-white text-black"
              }`}
            >
              {c.icon} {c.title}
            </button>
          ))}
        </div>

        {/* Active course detail */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="brutal-card rounded-2xl overflow-hidden bg-white"
        >
          {/* Header with image */}
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
              <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <div className={`${active.color} border-2 border-black rounded-lg px-3 py-1.5 inline-flex items-center gap-2 text-white mb-2`}>
                  {active.icon}
                  <span className="font-['Nunito'] font-bold">{active.title}</span>
                </div>
                <p className="text-white/90 text-sm font-['Nunito'] font-semibold">{active.subtitle}</p>
              </div>
            </div>

            <div className="md:col-span-3 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <p className={`${active.textColor} font-['Nunito'] font-bold text-sm`}>{active.tools}</p>
                <div className="bg-black text-white px-3 py-1 rounded-lg font-['Unbounded'] font-bold text-sm">
                  {active.price} / 3 мес
                </div>
              </div>
              <p className="text-gray-700 text-base mb-6 font-['Nunito'] font-semibold">{active.tagline}</p>

              {/* Skills grid */}
              <h4 className="font-bold text-base mb-3 text-black">Что научишься делать:</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {active.skills.map((skill, i) => (
                  <div key={i} className={`flex items-start gap-2.5 p-3 rounded-lg border-2 ${active.borderColor}/30 bg-gray-50`}>
                    <div className={`${active.color} w-7 h-7 rounded flex items-center justify-center text-white shrink-0 mt-0.5`}>
                      {skill.icon}
                    </div>
                    <div>
                      <p className="font-['Nunito'] font-bold text-sm text-black">{skill.name}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <h4 className="font-bold text-base mb-3 text-black">Результат за 3 месяца:</h4>
              <div className="flex flex-wrap gap-2">
                {active.results.map((r, i) => (
                  <span key={i} className={`${active.color}/10 ${active.textColor} border ${active.borderColor}/30 px-3 py-1.5 rounded-full text-xs font-['Nunito'] font-bold`}>
                    ✓ {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== NEW: Блок «Всё включено. Без боли.» ===== */
function IncludedSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Единая платформа — 90+ нейросетей",
      desc: "Не нужно покупать отдельные подписки на ChatGPT, Midjourney, Suno и десятки других сервисов. Всё собрано в одном месте и работает стабильно.",
      color: "bg-[#6366f1]"
    },
    {
      icon: "💳",
      title: "Оплата в рублях. Без VPN.",
      desc: "Никаких танцев с виртуальными картами, иностранными платёжками и прокси-серверами. Оплатил — работаешь. Всё легально и просто.",
      color: "bg-[#f43f5e]"
    },
    {
      icon: "📱",
      title: "Доступ навсегда — с любого устройства",
      desc: "Платформа остаётся у тебя после обучения. Заходи с ноутбука, телефона или планшета — из дома, из школы, откуда угодно.",
      color: "bg-[#4ade80]"
    },
    {
      icon: "👨‍👩‍👧",
      title: "Родителям не придётся разбираться",
      desc: "Никаких «мам, купи мне подписку за $20 через VPN». Один платёж — и ребёнок работает со всеми инструментами без ограничений.",
      color: "bg-[#facc15]"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y-3 border-black">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-black">
            Всё <span className="text-[#6366f1] rotate-[-1deg] inline-block">включено</span>. <span className="text-[#f43f5e] rotate-[1deg] inline-block">Без боли.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 font-['Nunito'] font-semibold max-w-2xl mx-auto">
            Забудь про VPN, виртуальные карты и 10 разных подписок. У нас всё работает из коробки.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeInUp} className="brutal-card rounded-xl p-6 bg-[#fef3c7]" style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}>
              <div className={`w-12 h-12 ${b.color} border-3 border-black rounded-lg flex items-center justify-center text-white mb-4 text-xl`}>
                {b.icon}
              </div>
              <h4 className="font-['Unbounded'] font-bold text-base mb-2 text-black">{b.title}</h4>
              <p className="text-gray-700 text-sm font-['Nunito']">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Приходи на пробный урок", desc: "Бесплатно! Создай свой первый шедевр за 2 часа и пойми, подходит ли тебе.", color: "bg-[#f43f5e]" },
    { num: "02", title: "Выбери направление", desc: "Текст, Дизайн, Музыка или Видео — или возьми пакет «Все 4» со скидкой!", color: "bg-[#6366f1]" },
    { num: "03", title: "Занимайся 1 раз в неделю", desc: "2 часа офлайн в нашей студии + интересные домашки для закрепления.", color: "bg-[#facc15]" },
    { num: "04", title: "Создавай и делись!", desc: "За 3 месяца соберёшь портфолио из своих работ. Покажи друзьям и миру!", color: "bg-[#4ade80]" },
  ];

  return (
    <section id="how" className="py-16 md:py-24 bg-[#6366f1] border-y-3 border-black relative overflow-hidden">
      <div className="absolute top-10 right-10 w-24 h-24 bg-[#facc15] border-3 border-black rounded-full opacity-30 animate-float" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#f43f5e] border-3 border-black rotate-45 opacity-30 animate-wiggle" />

      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-white">
            Как это работает?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-white/80 font-['Nunito'] font-semibold max-w-2xl mx-auto">
            Всего 4 шага от «что такое нейросеть?» до «смотри, что я создал!»
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeInUp} className="brutal-card rounded-xl p-6 bg-white" style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}>
              <div className={`${s.color} border-3 border-black rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                <span className="font-['Unbounded'] font-bold text-sm text-white">{s.num}</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black">{s.title}</h4>
              <p className="text-gray-700 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-black">
            Тарифы
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 font-['Nunito'] font-semibold max-w-2xl mx-auto">
            Выбери один курс или возьми всё сразу с выгодой!
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 1 направление */}
          <motion.div variants={fadeInUp} className="brutal-card rounded-2xl p-6 bg-white">
            <div className="bg-[#6366f1] border-3 border-black rounded-lg px-3 py-1 inline-block text-white font-['Nunito'] font-bold text-sm mb-4">
              1 направление
            </div>
            <h3 className="text-2xl font-black mb-1">30 000 ₽</h3>
            <p className="text-sm text-gray-500 mb-4">за 3 месяца</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li className="flex items-start gap-2"><span className="text-[#4ade80] font-bold">✓</span> 12 офлайн-занятий (1 раз/нед)</li>
              <li className="flex items-start gap-2"><span className="text-[#4ade80] font-bold">✓</span> Домашние задания с обратной связью</li>
              <li className="flex items-start gap-2"><span className="text-[#4ade80] font-bold">✓</span> Доступ к платформе SYNTX.AI</li>
              <li className="flex items-start gap-2"><span className="text-[#4ade80] font-bold">✓</span> Портфолио по итогу курса</li>
              <li className="flex items-start gap-2"><span className="text-[#4ade80] font-bold">✓</span> Сертификат по окончании</li>
            </ul>
            <p className="text-xs text-gray-500 mb-3">* Видео-направление — 40 000 ₽</p>
            <a href="#trial" className="brutal-btn bg-white text-black px-5 py-2.5 rounded-lg text-sm w-full block text-center">
              Выбрать
            </a>
          </motion.div>

          {/* 2 направления */}
          <motion.div variants={fadeInUp} className="brutal-card rounded-2xl p-6 bg-[#6366f1] text-white">
            <div className="bg-white/20 border-2 border-white/40 rounded-lg px-3 py-1 inline-block font-['Nunito'] font-bold text-sm mb-4">
              2 направления
            </div>
            <h3 className="text-2xl font-black mb-1">50 000 ₽</h3>
            <p className="text-sm text-white/70 mb-1">за 6 месяцев</p>
            <p className="text-sm text-white/90 font-['Nunito'] font-bold mb-4">или 8 300 ₽/мес в рассрочку</p>
            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> 2 курса на выбор последовательно</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> 24 офлайн-занятия за полгода</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Полный доступ к SYNTX.AI</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Портфолио из 2 направлений</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Экономия 10 000 ₽</li>
            </ul>
            <a href="#trial" className="brutal-btn bg-white text-[#6366f1] px-5 py-2.5 rounded-lg text-sm w-full block text-center font-bold">
              Выбрать пакет
            </a>
          </motion.div>

          {/* Все 4 направления */}
          <motion.div variants={fadeInUp} className="brutal-card rounded-2xl p-6 bg-[#f43f5e] text-white relative" style={{ transform: "rotate(-1deg) scale(1.05)" }}>
            <div className="absolute -top-3 -right-3 bg-[#facc15] border-3 border-black rounded-full w-16 h-16 flex items-center justify-center rotate-12">
              <span className="font-['Unbounded'] font-bold text-[10px] text-black text-center leading-tight">ХИТ!</span>
            </div>
            <div className="bg-white/20 border-2 border-white/40 rounded-lg px-3 py-1 inline-block font-['Nunito'] font-bold text-sm mb-4">
              Все 4 направления
            </div>
            <h3 className="text-2xl font-black mb-1">90 000 ₽</h3>
            <p className="text-sm text-white/70 mb-1">за 12 месяцев</p>
            <p className="text-sm text-white/90 font-['Nunito'] font-bold mb-4">или 7 500 ₽/мес в рассрочку</p>
            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Все 4 курса последовательно</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> 48 офлайн-занятий за год</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Полный доступ к SYNTX.AI</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Портфолио из 4 направлений</li>
              <li className="flex items-start gap-2"><span className="font-bold">✓</span> Экономия 40 000 ₽</li>
            </ul>
            <a href="#trial" className="brutal-btn bg-white text-[#f43f5e] px-5 py-2.5 rounded-lg text-sm w-full block text-center font-bold">
              Забрать пакет
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== NEW: Секция для родителей ===== */
function ParentsSection() {
  return (
    <section id="parents" className="py-16 md:py-24 bg-white border-y-3 border-black">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <div className="inline-block bg-[#6366f1] text-white px-4 py-1.5 rounded-full border-2 border-black text-sm font-['Nunito'] font-bold mb-4">
              <Heart className="w-4 h-4 inline mr-1" /> Для родителей
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-black">
              Почему это <span className="text-[#6366f1]">полезно</span> вашему ребёнку?
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 gap-5">
            <motion.div variants={fadeInUp} className="brutal-card rounded-xl p-5 bg-[#fef3c7]">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-[#6366f1]" /> Навыки, которые будут кормить</h4>
              <p className="text-sm text-gray-700">ИИ-специалисты — самая востребованная профессия 2025-2030. Ваш ребёнок освоит инструменты, которые через 5 лет будут обязательны в любой профессии.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="brutal-card rounded-xl p-5 bg-[#fef3c7]">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-[#f43f5e]" /> Созидание вместо потребления</h4>
              <p className="text-sm text-gray-700">Вместо бесконечного скроллинга TikTok ребёнок учится создавать контент. Та же энергия — но направленная на развитие и самовыражение.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="brutal-card rounded-xl p-5 bg-[#fef3c7]">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2"><Users className="w-5 h-5 text-[#facc15]" /> Мотивированное окружение</h4>
              <p className="text-sm text-gray-700">Ваш ребёнок будет среди сверстников, которые тоже хотят создавать, а не просто «сидеть в телефоне». Это формирует правильные привычки.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="brutal-card rounded-xl p-5 bg-[#fef3c7]">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-[#4ade80]" /> Безопасная среда</h4>
              <p className="text-sm text-gray-700">Занятия проходят офлайн под контролем педагога. Платформа SYNTX.AI имеет фильтрацию контента. Никакого вредного контента.</p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 text-center">
            <p className="text-gray-600 font-['Nunito'] font-semibold mb-4">Не уверены? Приведите ребёнка на бесплатный пробный урок — и увидите его горящие глаза сами!</p>
            <a href="#trial" className="brutal-btn bg-[#6366f1] text-white px-6 py-3 rounded-xl inline-flex items-center gap-2 font-bold">
              <ArrowRight className="w-5 h-5" /> Записаться на пробный урок
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrialSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", age: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const TELEGRAM_BOT_TOKEN = "8410494779:AAFm9pP08owg5H6_KaB4XJUFxMN_4n9GIWI";
  const TELEGRAM_CHAT_ID = "1282806764";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.age) {
      alert("Заполните все поля!");
      return;
    }

    if (!agreed) {
      alert("Пожалуйста, согласитесь на обработку персональных данных");
      return;
    }

    setLoading(true);
    try {
      const message = `📝 Новая заявка на пробный урок!\n\n👤 Имя ребёнка: ${formData.name}\n📱 Телефон родителя: ${formData.phone}\n🎂 Возраст: ${formData.age} лет\n\n⏰ Время: ${new Date().toLocaleString("ru-RU")}`;

      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", age: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при отправке. Проверьте интернет.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="trial" className="py-16 md:py-24 bg-[#facc15] border-y-3 border-black relative overflow-hidden">
      <div className="absolute top-5 left-5 w-20 h-20 bg-[#f43f5e] border-3 border-black rounded-full opacity-30 animate-wiggle" />
      <div className="absolute bottom-5 right-5 w-14 h-14 bg-[#6366f1] border-3 border-black rotate-12 opacity-30 animate-float" />

      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-black">
            Бесплатный пробный урок
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-800 font-['Nunito'] font-semibold mb-3 max-w-xl mx-auto">
            Приходи и создай свой первый шедевр! За 2 часа ты:
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-sm font-['Nunito'] font-bold">🎨 Сделаешь виртуальную фотосессию</span>
            <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-sm font-['Nunito'] font-bold">🎬 Оживишь свой рисунок</span>
            <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-sm font-['Nunito'] font-bold">🎵 Создашь свой первый трек</span>
            <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-sm font-['Nunito'] font-bold">✍️ Напишешь вирусный пост</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="brutal-card rounded-2xl p-6 md:p-8 bg-white max-w-md mx-auto rotate-[-0.5deg]">
            <h4 className="font-bold text-lg mb-4 text-black">Записаться на пробный урок</h4>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-green-600 font-['Nunito'] font-bold text-lg">Спасибо! Мы вам скоро перезвоним 📞</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Имя ребёнка"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-3 border-black rounded-lg font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-[#f43f5e]"
                />
                <input
                  type="tel"
                  placeholder="Телефон родителя"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-3 border-black rounded-lg font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-[#f43f5e]"
                />
                <input
                  type="number"
                  placeholder="Возраст ребёнка"
                  min="10"
                  max="16"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 border-3 border-black rounded-lg font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-[#f43f5e]"
                />
                <div className="flex items-start gap-3 p-3 bg-[#f43f5e]/10 rounded-lg border-2 border-[#f43f5e]">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 mt-0.5 cursor-pointer border-2 border-black rounded"
                  />
                  <label htmlFor="agree" className="text-sm font-['Rubik'] text-gray-700 cursor-pointer">
                    Я согласен(а) на обработку персональных данных и ознакомился(ась) с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#f43f5e] font-bold hover:underline">политикой конфиденциальности</a> и <a href="/data-processing" target="_blank" rel="noopener noreferrer" className="text-[#f43f5e] font-bold hover:underline">согласием на обработку данных</a>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading || !agreed}
                  className="brutal-btn bg-[#f43f5e] text-white px-6 py-3 rounded-lg w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Отправляю..." : "Записаться бесплатно!"}
                </button>
              </form>
            )}
            <p className="text-xs text-gray-500 mt-3">Нажимая кнопку, вы соглашаетесь с политикой обработки данных</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Нужен ли свой ноутбук?", a: "Нет! В нашей студии 20 мощных компьютеров с доступом ко всем нейросетям. Для домашних заданий подойдёт любой компьютер или планшет с интернетом." },
    { q: "Какой уровень подготовки нужен?", a: "Никакой! Мы начинаем с нуля. Если ребёнок умеет пользоваться компьютером и интернетом — этого достаточно." },
    { q: "Что будет на пробном уроке?", a: "Подросток сразу начнёт творить: создаст виртуальную фотосессию, оживит свой рисунок или сгенерирует трек. Никакой теории — только практика и WOW-эффект!" },
    { q: "Безопасно ли это для ребёнка?", a: "Абсолютно! Мы используем проверенную платформу SYNTX.AI с фильтрацией контента. Все занятия проходят под контролем педагога." },
    { q: "Можно ли оплатить в рассрочку?", a: "Да! Пакет «Все 4 направления» — 7 500 руб./мес на 12 месяцев. Пакет «2 направления» — 8 300 руб./мес на 6 месяцев. На отдельный курс (1 направление) рассрочка не предоставляется." },
    { q: "Что если ребёнку не понравится?", a: "Именно для этого у нас есть бесплатный пробный урок! Ребёнок попробует и сам решит. Если после первого оплаченного занятия передумаете — вернём деньги." },
    { q: "Чем это отличается от YouTube-туториалов?", a: "Живое общение с педагогом, структурированная программа, комьюнити единомышленников и доступ к платным нейросетям (90+) без дополнительных подписок. Плюс — мотивация и дедлайны!" },
    { q: "Можно ли заниматься несколькими направлениями?", a: "Конечно! Пакет «Все 4 направления» позволяет пройти все курсы последовательно за год. А навыки из разных курсов дополняют друг друга: текст + дизайн + музыка = крутое видео!" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-black">
            Частые вопросы
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeInUp} className="brutal-card rounded-xl bg-white overflow-hidden" style={{ transform: `rotate(${i % 2 === 0 ? -0.3 : 0.3}deg)` }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-['Nunito'] font-bold text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-700 text-sm border-t-2 border-black/10 pt-3">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-3 border-black">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#f43f5e] border-2 border-white/30 rounded-lg flex items-center justify-center rotate-[-3deg]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-['Unbounded'] font-bold text-xl">НейроБит</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Офлайн-школа нейросетей для подростков 10-16 лет. Учим создавать будущее через игру и творчество.
            </p>
          </div>

          <div>
            <h4 className="font-['Nunito'] font-bold text-lg mb-3">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Санкт-Петербург</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +7 (999) 123-45-67</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@neurobit.school</div>
            </div>
          </div>

          <div>
            <h4 className="font-['Nunito'] font-bold text-lg mb-3">Навигация</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#courses" className="block hover:text-white transition-colors">Направления</a>
              <a href="#pricing" className="block hover:text-white transition-colors">Тарифы</a>
              <a href="#how" className="block hover:text-white transition-colors">Как проходит</a>
              <a href="#parents" className="block hover:text-white transition-colors">Родителям</a>
              <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
              <a href="#trial" className="block hover:text-white transition-colors">Пробный урок</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs text-gray-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <span className="text-gray-600">•</span>
            <a href="/data-processing" className="hover:text-white transition-colors">Согласие на обработку данных</a>
          </div>
          <div className="text-center text-xs text-gray-500">
            © 2026 НейроБит. Все права защищены. Платформа: SYNTX.AI
          </div>
        </div>
      </div>
    </footer>
  );
}
