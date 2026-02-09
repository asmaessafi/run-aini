import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiPlay, FiUsers, FiClipboard, FiTarget, FiActivity, FiMessageSquare, FiShield, FiUserPlus,FiBarChart2,FiTrendingUp, FiUpload, FiUser } from 'react-icons/fi';
import { FaBrain } from "react-icons/fa";


const FootballMarquee = () => {
  const teams = [
    { id: 1, name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    { id: 2, name: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    { id: 3, name: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
    { id: 4, name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
    { id: 5, name: 'Esperance Sportive', logo: 'https://images.seeklogo.com/logo-png/4/2/esperance-sportive-de-tunis-logo-png_seeklogo-49164.png' },
    { id: 6, name: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg' },
    { id: 7, name: 'PSG', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
    { id: 8, name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' }
  ];

  const duplicatedTeams = [...teams, ...teams, ...teams];

  return (
    <div className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedTeams.map((team, index) => (
          <motion.div
            key={`${team.id}-${index}`}
            className="inline-flex flex-col items-center mx-8 md:mx-12 lg:mx-16"
            whileHover={{ scale: 1.15, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-xl border-2 border-gray-700/50 p-3 shadow-xl hover:border-[#00d0cb]/60 hover:shadow-[#00d0cb]/30 transition-all duration-400 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#902bd1]/10 via-[#00d0cb]/10 to-[#4fb0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
              <img
                src={team.logo}
                alt={team.name}
                className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-base md:text-lg font-semibold bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent">
              {team.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const gradientText = "bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent";

  const accentColors = ['#902bd1', '#00d0cb', '#4fb0ff'];

  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0f2a 45%, #180033 100%)'
      }}
    >
      {/* Stronger ambient glow layers */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,#902bd140,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,#00d0cb35,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4fb0ff20,transparent_70%)]" />
      </div>

      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-[#902bd1]/8 via-[#00d0cb]/8 to-transparent z-10"
        />

        {/* Hero Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"           // or "metadata" if file is very large
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src="/vid/soccer1.mp4"
            poster="/img/hero-soccer-field.png" // optional: fallback image while loading
          >
            {/* Optional: fallback content if video fails to load */}
            <source src="/vid/soccer1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Keep the exact same dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 z-10" />
        </div>

        {/* Content layer – increase z-index if needed, but z-10 on overlays should be enough */}
        <div className="relative z-20 text-center max-w-6xl mx-auto">  {/* ← bumped z-index slightly for safety */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-black pb-4 mb-10 ${gradientText} drop-shadow-[0_12px_40px_rgba(144,43,209,0.45)]`}
          >
            Nunaini – AI-Powered Football Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-16 font-light"
          >
            Unlock deeper insights. Elevate performance. Transform the game with automated video analysis, real-time feedback, and intelligent assistance tailored for admins, coaches, and players.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
            <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/signup"
                className={`inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-xl bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] text-white shadow-2xl shadow-[#902bd1]/40 hover:brightness-110 hover:shadow-[#00d0cb]/50 transition-all duration-400`}
              >
                <FiArrowRight className="text-2xl" />
                Get Started
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/demo"
                className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-xl bg-gray-900/80 backdrop-blur-2xl border-2 border-gray-700/50 hover:border-[#00d0cb]/70 text-white shadow-xl hover:shadow-[#00d0cb]/30 transition-all duration-400"
              >
                <FiPlay className="text-2xl" />
                Interactive Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by / Marquee */}
      {/* <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 pb-4 ${gradientText}`}
          >
            Trusted by Elite Clubs
          </motion.h2>

          <FootballMarquee />
        </div>
      </section> */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Subtle background texture/gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(144,43,209,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,208,203,0.06),transparent_50%)] pointer-events-none" />

        <div className="relative max-w-full mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`text-5xl md:text-6xl lg:text-7xl font-black ${gradientText} tracking-tight drop-shadow-xl`}
            >
              Trusted by Elite Clubs Worldwide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Powering performance, analysis, and growth at the highest levels of professional football.
            </motion.p>
          </div>

          {/* Enhanced Marquee – assuming FootballMarquee is a horizontal infinite scroll */}
          <div className="relative">
            {/* Optional subtle edge fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#01091d] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#091532] to-transparent z-10 pointer-events-none" />
            <FootballMarquee />  {/* ← your component – see enhanced version below */}
          </div>

          {/* Optional small trust footer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mt-12 text-gray-500 text-sm md:text-base"
          >
            Partnerships with clubs across UEFA Champions League, Premier League, Ligue 1, Serie A, and more.
          </motion.p>
        </div>
      </section>


      {/* Testimonials / Trust Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 pb-4 ${gradientText}`}
          >
            Trusted by Football Professionals
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                quote: "The AI insights changed how we prepare — game-changing.",
                author: "Head Coach, Pro Academy"
              },
              {
                quote: "Finally, feedback that actually helps me improve every session.",
                author: "Youth Player"
              },
              {
                quote: "Centralized, smart, and saves us hours every week.",
                author: "Academy Director"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-gray-900/80 backdrop-blur-2xl rounded-3xl border-2 border-gray-700/50 hover:border-[#00d0cb]/60 transition-all duration-400 hover:shadow-2xl hover:shadow-[#00d0cb]/20"
              >
                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <p className={`text-base font-bold bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent`}>
                  – {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For / Audience Section */}
      <section ref={ref} className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-6xl lg:text-7xl font-black text-center mb-24 ${gradientText}`}
          >
            Built for the People Who Shape the Game
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {[
              
              {
                title: "Admins / Academies",
                icon: FiUsers,
                color: "#4fb0ff",
                description: "Centralize video, streamline insights, empower your entire staff and squad with powerful analytics tools.",
                features: [
                  "Centralized video library",
                  "Streamlined insights",
                  "Powerful analytics",
                  "Team empowerment"
                ]
              },
              {
                title: "Coaches",
                icon: FiClipboard,
                color: "#902bd1",
                description: "Turn raw footage into tactical breakthroughs and player development plans with AI-driven match and training analysis.",
                features: [
                  "AI-driven match analysis",
                  "Tactical breakdowns",
                  "Player development plans",
                  "Training insights"
                ]
              },
              {
                title: "Players",
                icon: FiUser,
                color: "#00d0cb",
                description: "Get personalized, actionable feedback on technique, positioning, decision-making — accelerate your growth.",
                features: [
                  "Personalized feedback",
                  "Technique analysis",
                  "Positioning insights",
                  "Growth acceleration"
                ]
              }
            ].map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.9 }}
                className={`group relative bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-10 border-2 border-gray-700/50 hover:border-[${audience.color}]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[${audience.color}]/20`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[${audience.color}]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />

                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-[${audience.color}]/30 via-[${audience.color}]/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <audience.icon className="w-12 h-12" style={{ color: audience.color }} />
                </div>

                <h3 className={`text-3xl md:text-4xl font-black mb-6 ${gradientText}`}>
                  {audience.title}
                </h3>

                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  {audience.description}
                </p>

                <ul className="space-y-5">
                  {audience.features.map((feature, idx) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4 text-gray-100 text-lg"
                    >
                      <div className={`w-3 h-3 rounded-full bg-[${accentColors[idx % 3]}] shadow-sm`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Optional subtle background texture/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2a] via-[#0a0f2a]/95 to-[#0a0f2a] opacity-90" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className={`text-6xl md:text-7xl lg:text-8xl text-center font-black leading-tight ${gradientText} drop-shadow-xl mb-24`}>
              Elevate Your Game with Next-Gen AI
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left: Text + Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-10 lg:space-y-16"
            >
              <div className="space-y-8">
                {[
                  {
                    icon: FiActivity,
                    title: "Deep Video & Tactical Analysis",
                    desc: "Auto event detection, heatmaps, pass networks, pressure maps — from any camera angle.",
                    color: "#902bd1"
                  },
                  {
                    icon: FiTarget,
                    title: "Hyper-Personalized Feedback",
                    desc: "Role-specific, data-backed recommendations that actually move the needle on performance.",
                    color: "#00d0cb"
                  },
                  {
                    icon: FiMessageSquare,
                    title: "Conversational AI Coach",
                    desc: "Ask anything — breakdowns, strategy alternatives, opponent scouting, instant answers.",
                    color: "#4fb0ff"
                  },
                  {
                    icon: FiShield,
                    title: "Enterprise-Grade Security & Collaboration",
                    desc: "Role-based access, encrypted data, seamless sharing between staff and players.",
                    color: "#902bd1"
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className={`
                group relative pl-20
                before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5
                before:bg-gradient-to-b before:from-transparent before:via-[${item.color}] before:to-transparent
                before:rounded-full before:opacity-70 group-hover:before:opacity-100
                transition-all duration-400
              `}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[${item.color}]/20 to-transparent flex items-center justify-center border border-[${item.color}]/30 group-hover:scale-110 group-hover:border-[${item.color}]/50 transition-all duration-400`}>
                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3
                          className={`text-2xl font-bold text-white group-hover:text-transparent transition-all duration-400 bg-clip-text group-hover:bg-gradient-to-br from-[${item.color}] to-transparent`}                        >
                          {item.title}
                        </h3>
                        <p className="mt-2 text-gray-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: 4 premium images side by side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 relative"
            >
              {/* Image 1 – Dashboard */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl shadow-black/40 group">
                <img
                  src="img/dashboard.png"
                  alt="AI Football Analysis Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent/0" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg drop-shadow-md">
                    Intelligent Dashboard
                  </p>
                </div>
              </div>

              {/* Image 2 –  / Field Viz */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl shadow-black/40 group">
                <img
                  src="/img/tactical_breakdowns.jpg"
                  alt="Football Heatmap Tactical Visualization"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent/0" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg drop-shadow-md">
                    Tactical Breakdowns
                  </p>
                </div>
              </div>

              {/* Image 3 – Real-Time Insight / Analysis UI */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl shadow-black/40 group">
                <img
                  src="/img/insights.png"
                  alt="AI Football Analysis Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent/0" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg drop-shadow-md">
                    Real-Time Insights
                  </p>
                </div>
              </div>

              {/* Image 4 – Advanced Heatmap / Field Viz */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl shadow-black/40 group">
                <img
                  src="/img/Advanced_heatmaps.png"
                  alt="Football Heatmap Tactical Visualization"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent/0" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg drop-shadow-md">
                    Advanced Heatmaps 
                  </p>
                </div>
              </div>

              {/* Optional overlay gradient for cohesion */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#902bd1]/10 via-[#00d0cb]/10 to-transparent pointer-events-none rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-28 md:py-40 bg-gradient-to-b from-[#0a0f1f] via-[#05070f] to-[#0a0f1f] overflow-hidden">
  {/* Subtle background accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(144,43,209,0.07),transparent_45%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(0,208,203,0.06),transparent_50%)]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16 md:mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight ${gradientText} bg-clip-text text-transparent drop-shadow-xl`}
      >
        From Upload to Victory in Minutes
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
      >
        Upload your footage → Let AI do the heavy lifting → Get actionable insights → Train smarter and win more.
      </motion.p>
    </div>

    {/* Timeline / Process Flow */}
    <div className="relative">
      {/* Connecting line (desktop horizontal, mobile vertical) */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />

      <div className="grid md:grid-cols-5 gap-10 md:gap-6 relative">
        {[
          {
            step: "1",
            title: "Create Account",
            desc: "Sign up in seconds and set up your club or personal profile.",
            icon: FiUserPlus
          },
          {
            step: "2",
            title: "Upload Footage",
            desc: "Drag & drop match videos, training sessions or highlights — any format.",
            icon: FiUpload
          },
          {
            step: "3",
            title: "AI Analysis",
            desc: "Our models automatically detect events, tag moments, generate heatmaps & stats.",
            icon: FaBrain
          },
          {
            step: "4",
            title: "Get Insights",
            desc: "Instant reports, personalized recommendations, tactical breakdowns & visualizations.",
            icon: FiBarChart2
          },
          {
            step: "5",
            title: "Act & Improve",
            desc: "Apply feedback in training, track progress, and elevate performance over time.",
            icon: FiTrendingUp
          }
        ].map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
            whileHover={{ y: -12, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className={`
              group relative flex flex-col items-center text-center
              md:pt-12 pt-0
              px-6 pb-8 rounded-3xl
              bg-gradient-to-b from-gray-900/70 to-gray-950/70
              backdrop-blur-xl border border-gray-800/60
              hover:border-[#00d0cb]/40 hover:shadow-2xl hover:shadow-[#00d0cb]/15
              transition-all duration-500
            `}
          >
            {/* Step number circle */}
            <div className={`
              absolute md:top-0 -top-5
              w-16 h-16 md:w-20 md:h-20
              rounded-full flex items-center justify-center
              bg-gradient-to-br from-[#902bd1] via-[#00d0cb] to-[#4fb0ff]
              text-white text-3xl md:text-4xl font-black
              shadow-xl shadow-black/40
              border-4 border-[#0a0f1f]
              group-hover:scale-110 group-hover:rotate-3
              transition-all duration-500 z-10
            `}>
              {item.step}
            </div>

            {/* Icon */}
            <div className="mt-12 md:mt-16 mb-6">
              <item.icon
                size={48}
                className="text-[#00d0cb] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#00d0cb] group-hover:to-white group-hover:bg-clip-text transition-all">
              {item.title}
            </h3>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Optional CTA at bottom */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center mt-16 md:mt-24"
    >
      {/* <Link
        to="/pricing"
        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] text-white shadow-2xl shadow-[#902bd1]/30 hover:shadow-[#00d0cb]/50 hover:scale-105 transition-all duration-400"
      >
        Get Started Now ! <FiArrowRight size={24} />
      </Link> */}
      <Link
  to="/pricing"
  className={`
    inline-flex items-center gap-3 px-10 py-5 rounded-2xl 
    font-bold text-xl text-white
    bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff]
    shadow-xl shadow-[#902bd1]/30
    relative
    hover:scale-105 hover:shadow-2xl hover:shadow-[#00d0cb]/60
    transition-all duration-500
    animate-float-gentle
  `}
>
  Get Started Now! <FiArrowRight size={24} />
</Link>
    </motion.div>
  </div>
</section>

      {/* Final CTA Section */}
      
      <section className="relative py-40 overflow-hidden "> {/* removed bg-gradient from section */}
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/call_to_action.png"  // ← replace with your actual path, e.g. a stadium/field image
            alt="Football field background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"  // 0.3 = subtle; try 0.2–0.4
          />
          {/* Optional: extra dark overlay if image is too bright/contrasty */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2a]/70 to-[#0a0f2a]/90" />
        </div>

        {/* Original gradient moved here as an overlay layer (optional - can blend better) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2a]/50 to-transparent z-10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center z-20"> {/* z-20 ensures content is above bg */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 ${gradientText} drop-shadow-lg`}
          >
            Ready to See Football Differently?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light"
          >
            Join the future of analysis and development. Start transforming your game today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              to="/signup"
              className={`inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-xl bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] text-white shadow-2xl shadow-[#902bd1]/40 hover:brightness-110 hover:shadow-[#00d0cb]/50 transition-all duration-400`}
            >
              <FiArrowRight className="text-2xl" />
              Create Your Account
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;