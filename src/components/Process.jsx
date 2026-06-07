import { processSteps } from "../data/siteData";
import { motion } from "framer-motion";
import projectsShowcase from "../assets/shreestack-projects-showcase.jpg";

function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-6 py-24">
      <img
        src={projectsShowcase}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-[360px] w-[680px] max-w-none -translate-x-1/2 object-cover opacity-30 mix-blend-screen md:left-auto md:right-[-260px] md:top-4 md:h-[560px] md:w-[960px] md:translate-x-0 md:opacity-45 lg:right-[-160px]"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 34%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 34%, transparent 76%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            A clear process from idea to launch.
          </h2>

          <p className="mt-5 text-slate-400 leading-relaxed">
            No confusion. No random development. Every project follows a simple
            step-by-step workflow so you know exactly what is happening.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:border-sky-400/50 transition"
            >
              <span className="text-5xl font-bold text-white/10">
                {item.step}
              </span>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
