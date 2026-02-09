
import { motion } from 'framer-motion';
import { FiUser, FiUsers, FiClipboard, FiVideo, FiTrendingUp, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { FaBrain, FaRobot } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.04, y: -8, transition: { duration: 0.4 } }
};

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0f2a 45%, #180033 100%)'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle ambient glows – matching coach profile vibe */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(144,43,209,0.12),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,208,203,0.10),transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,176,255,0.08),transparent_60%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto px-6 md:px-10 lg:px-12 py-28 md:py-40 text-center z-50 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#902bd1]/8 via-[#00d0cb]/8 to-transparent"
        />

        <div className="absolute inset-0 w-full h-full">
          <img
            src="/img/hero-soccer-field1.png"
            alt="Professional football match in action"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">  {/* ← added wrapper like home for consistency */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-tight tracking-tight text-white drop-shadow-[0_8px_30px_rgba(144,43,209,0.4)]"
          >
            The Future of Football
            <br />
            <span className="bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent [-webkit-background-clip:text] ">
              Powered by AI & Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light"
          >
            Runaini fuses intuitive management tools with advanced AI-driven features to connect coaches, players, and administrators—elevating training, performance analysis, and club operations in the rapidly evolving world of football technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
            className="mt-12 flex flex-wrap justify-center gap-5 md:gap-7"
          >
            {[
              { label: "AI Video Analysis", color: "#902bd1" },
              { label: "Performance Analytics", color: "#00d0cb" },
              { label: "Real-Time Insights", color: "#4fb0ff" }
            ].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-7 py-3.5 bg-gray-900/50 backdrop-blur-md rounded-full text-lg font-medium border border-gray-700/60 hover:border-gray-500 transition-all"
                style={{ borderColor: `${item.color}40`, color: item.color }}
              >
                {item.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              At Runaini, we see football's future as one where <strong>AI augments human talent</strong>—not replaces it. We harness emerging technologies like intelligent video breakdown, predictive performance metrics, and real-time feedback to help coaches develop elite players, empower athletes to maximize potential, and allow administrators to scale operations efficiently.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed">
              Born for the modern game, Runaini turns data overload into actionable intelligence, fostering smarter training, deeper insights, and stronger connections across the football ecosystem.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gray-900/70 backdrop-blur-lg rounded-3xl p-10 lg:p-12 border border-gray-700/50 shadow-2xl">
              <blockquote className="text-3xl md:text-4xl italic font-medium text-gray-100 leading-relaxed bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent">
                "Where cutting-edge AI meets the passion of the pitch—unlocking tomorrow's champions today."
              </blockquote>
              <div className="mt-10 flex items-center justify-center gap-4 text-gray-400">
                <FaBrain size={32} className="text-[#00d0cb]" />
                <span className="text-lg font-medium">AI-Powered Football Evolution</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Roles */}
      <section className="relative py-28 md:py-40 bg-gradient-to-b from-[#0a0f1f] to-[#05070f] overflow-hidden">
  {/* Very subtle background enhancement */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(144,43,209,0.06),transparent_40%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,208,203,0.05),transparent_50%)]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16 md:mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent drop-shadow-xl"
      >
        Built for Every Role in Modern Football
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
      >
        Whether you're running the club, coaching the team, or playing on the pitch — Runaini delivers AI-powered tools tailored exactly to your needs.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {[
        {
          icon: FiUsers,
          title: "Administrators",
          color: "#4fb0ff",
          desc: "Centralized control with AI-driven insights — manage users, automate scheduling, streamline payments, monitor system health, and unlock club-wide performance analytics."
        },
        {
          icon: FiClipboard,
          title: "Coaches",
          color: "#902bd1",
          desc: "Create smarter sessions with AI planning tools, dive deep into video breakdowns, deliver precise real-time feedback, and track long-term player development with predictive metrics."
        },
        {
          icon: FiUser,
          title: "Players",
          color: "#00d0cb",
          desc: "Receive personalized training plans, monitor your metrics in real time, get instant coach feedback through intelligent systems, and build a data-rich performance profile."
        }
      ].map((role, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className={`
            group relative rounded-3xl overflow-hidden
            bg-gradient-to-b from-gray-900/60 to-gray-950/70
            backdrop-blur-xl border border-gray-800/60
            hover:border-[${role.color}]/40 hover:shadow-2xl hover:shadow-[${role.color}]/15
            transition-all duration-500
          `}
        >
          {/* Very subtle top accent */}
          <div className={`
            absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[${role.color}] to-transparent
            opacity-60 group-hover:opacity-100 transition-opacity duration-500
          `} />

          {/* Icon area */}
          <div className="pt-10 pb-6 px-8 flex justify-center">
            <div className={`
              w-20 h-20 rounded-2xl
              bg-gradient-to-br from-[${role.color}]/20 to-transparent
              border border-[${role.color}]/30
              flex items-center justify-center
              shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_${role.color}30]
              transition-all duration-500
            `}>
              <role.icon size={44} className="text-white drop-shadow-md" />
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-10 text-center">
            <h3 className={`
              text-3xl md:text-4xl font-extrabold mb-5
              bg-gradient-to-r from-cyan-950 via-[${role.color}] to-cyan-950
              bg-clip-text text-transparent
              group-hover:brightness-110 transition-all duration-400
            `}>
              {role.title}
            </h3>

            <p className="text-gray-200/90 leading-relaxed text-lg font-light">
              {role.desc}
            </p>
          </div>

          {/* Optional very subtle background pattern (disabled by default) */}
          {/* You can uncomment if you want a light football field texture behind */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <img src="/img/subtle-field-pattern.png" alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Core Features */}
      <section className="container mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-32 bg-gradient-to-b from-transparent via-[#0a0f2a]/40 to-transparent">
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#902bd1] via-[#00d0cb] to-[#4fb0ff] bg-clip-text text-transparent"
        >
          Core AI-Powered Functionalities
        </motion.h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
  {[
            {
              img: "/img/vid_ana.png",
              title: "Advanced Video Analysis",
              desc: "AI-driven breakdowns of performances, automatic tagging, pattern recognition, and tactical insights.",
              color: "#902bd1"
            },
            {
              img: "/img/performance_tracking.png",
              title: "Performance Tracking & Analytics",
              desc: "Real-time metrics, predictive trends, and personalized development pathways powered by intelligent algorithms.",
              color: "#00d0cb"
            },
            {
              img: "/img/scheduling.png",
              title: "Smart Scheduling",
              desc: "AI-optimized agendas, match planning, and event coordination for maximum efficiency.",
              color: "#4fb0ff"
            },
            {
              img: "/img/feedback.png",
              title: "Real-Time Feedback",
              desc: "Instant, data-backed coaching insights delivered seamlessly across the platform.",
              color: "#00d0cb"
            },
            {
              img: "/img/payment.png",
              title: "Integrated Payment Management",
              desc: "Secure, streamlined handling of fees and subscriptions.",
              color: "#902bd1"
            },
            {
              img: "/img/intelligent profiling.png",
              title: "Intelligent Profiling",
              desc: "Dynamic player and coach profiles enriched with performance history and AI recommendations.",
              color: "#4fb0ff"
            }
          ].map((feature, idx) => (
    <motion.div
      key={idx}
      variants={itemVariants}
      className={`
        group relative overflow-hidden rounded-2xl 
        bg-gray-900/30 backdrop-blur-sm border border-gray-700/50
        hover:border-[${feature.color}]/50 hover:shadow-2xl hover:shadow-[${feature.color}]/20
        transition-all duration-500 hover:scale-[1.02]
      `}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Image + overlays container */}
      <div className="relative aspect-auto h-72 md:h-80">
        <img
          src={feature.img}
          alt={feature.title}
          className={`
            absolute inset-0 w-full h-full object-cover transition-all duration-700
            group-hover:scale-110 group-hover:brightness-50
          `}
        />

        {/* Dark overlay on hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/30
          opacity-40 group-hover:opacity-80 transition-opacity duration-600
        `} />

        {/* Top color accent */}
        <div className={`
          absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[${feature.color}] to-transparent
          opacity-0 group-hover:opacity-90 transition-opacity duration-500
        `} />

        {/* Content overlay - always visible title + hover description */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
          <p 
            className={`
              mt-3 text-gray-100 text-lg leading-relaxed
              opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-600 delay-150
              drop-shadow-md
            `}
          >
            {feature.desc}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </section>

    </motion.div>
  );
};

export default About;