
import {
  ArrowRight,
  BarChart3,
  Code2,
  LayoutDashboard,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import heroSystems from "../assets/shreestack-hero-systems.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-28">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e955,transparent_32%),radial-gradient(circle_at_bottom_left,#6366f155,transparent_35%)]" />

      {/* Background Image */}
      <motion.img
        src={heroSystems}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="
          pointer-events-none
          absolute
          right-[-55%]
          top-24
          h-[360px]
          w-[650px]
          max-w-none
          object-cover
          opacity-25
          mix-blend-screen

          sm:right-[-25%]
          sm:top-24
          sm:h-[500px]
          sm:w-[800px]
          sm:opacity-40

          md:right-[-12%]
          md:h-[580px]
          md:w-[900px]
          md:opacity-50

          lg:right-[-6%]
          lg:top-16
          lg:h-[720px]
          lg:w-[1080px]
          lg:opacity-70
        "
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 38%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 38%, transparent 75%)",
        }}
      />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Main Content */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          gap-10
          lg:grid-cols-[0.92fr_1.08fr]
          lg:items-center
          lg:gap-16
        "
      >
        
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          
          {/* Badge */}
          <span
            className="
              mb-5
              inline-flex
              rounded-full
              border
              border-sky-400/30
              bg-sky-400/10
              px-3
              py-1.5
              text-xs
              font-medium
              text-sky-300

              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            Websites • Dashboards • Smart Business Systems
          </span>

          {/* Heading */}
          <h1
            className="
              text-3xl
              font-bold
              leading-[1.15]
              
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Build Digital Systems That Help Your{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Business Grow
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-relaxed
              text-slate-300

              sm:mt-6
              sm:text-lg
            "
          >
            ShreeStack Digital Solutions helps businesses establish a stronger
            online presence through websites, dashboards, and custom digital
            solutions.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3

              sm:mt-8
              sm:flex-row
              sm:gap-4
            "
          >
            <a
              href="#contact"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-sky-400
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-950
                transition
                hover:bg-sky-300

                sm:w-auto
                sm:px-7
                sm:text-base
              "
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>

            <a
              href="#work"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                px-6
                py-3
                text-sm
                font-semibold
                transition
                hover:bg-white/10

                sm:w-auto
                sm:px-7
                sm:text-base
              "
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto lg:max-w-lg"
        >
          {/* Glow */}
          <div className="absolute -inset-6 bg-sky-400/10 blur-3xl sm:-inset-8" />

          <div
            className="
              relative
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-1
            "
          >
            <HeroCard
              icon={<Code2 size={21} />}
              title="Business Websites"
              text="Professional websites built to create trust and drive enquiries."
            />

            <HeroCard
              icon={<LayoutDashboard size={21} />}
              title="Admin Dashboards"
              text="Manage leads, users, data, and business operations."
            />

            <HeroCard
              icon={<Zap size={21} />}
              title="Automation Tools"
              text="Reduce repetitive work with smart digital workflows."
            />

            <HeroCard
              icon={<BarChart3 size={21} />}
              title="Growth Focused"
              text="Built for performance, clarity, and conversion."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCard({ icon, title, text }) {
  return (
    <div
      className="
        flex
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-slate-950/60
        p-3.5
        shadow-xl
        shadow-slate-950/20
        backdrop-blur-md
        transition
        hover:border-sky-400/40
        hover:bg-slate-950/70

        sm:gap-4
        sm:p-5
      "
    >
      {/* Icon */}
      <div className="shrink-0 pt-0.5 text-sky-400">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-sm font-semibold sm:text-lg">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Hero;
