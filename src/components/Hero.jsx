import { ArrowRight, BarChart3, Code2, LayoutDashboard, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroSystems from "../assets/shreestack-hero-systems.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e955,transparent_32%),radial-gradient(circle_at_bottom_left,#6366f155,transparent_35%)]" />
      <motion.img
        src={heroSystems}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="pointer-events-none absolute right-[-42%] top-20 h-[420px] w-[720px] max-w-none object-cover opacity-45 mix-blend-screen sm:right-[-22%] md:right-[-10%] md:top-24 md:h-[560px] md:w-[880px] lg:right-[-6%] lg:top-16 lg:h-[720px] lg:w-[1080px] lg:opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 38%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 38%, transparent 75%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex mb-5 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
            Websites • Dashboards • Smart Business Systems
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Digital Systems That Help Your{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Business Grow
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            ShreeStack Digital Solutions helps businesses establish a stronger online
            presence through websites, dashboards, and custom digital solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3 font-semibold text-slate-950 hover:bg-sky-300 transition"
            >
              Start Your Project <ArrowRight size={18} />
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 font-semibold hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative ml-auto w-full max-w-xl lg:max-w-lg"
        >
          <div className="absolute -inset-8 bg-sky-400/10 blur-3xl" />
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <HeroCard icon={<Code2 />} title="Business Websites" text="Professional websites built to create trust and drive enquiries." />
            <HeroCard icon={<LayoutDashboard />} title="Admin Dashboards" text="Manage leads, users, data, and business operations." />
            <HeroCard icon={<Zap />} title="Automation Tools" text="Reduce repetitive work with smart digital workflows." />
            <HeroCard icon={<BarChart3 />} title="Growth Focused" text="Built for performance, clarity, and conversion." />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCard({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/55 p-4 shadow-xl shadow-slate-950/20 backdrop-blur-md sm:p-5">
      <div className="shrink-0 text-sky-400">{icon}</div>
      <div>
        <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
        <p className="mt-1 text-sm text-slate-400">{text}</p>
      </div>
    </div>
  );
}

export default Hero;
