import { ArrowRight, CheckCircle2 } from "lucide-react";
import { solutions } from "../data/siteData";
import { motion } from "framer-motion";

function Solutions() {
  return (
    <section id="solutions" className="px-6 py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Featured Solutions
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Built for the people who actually need digital systems.
          </h2>

          <p className="mt-5 text-slate-300 leading-relaxed">
            ShreeStack Digital Solutions focuses on practical systems for businesses,
            institutes, startups, and service teams that need more than a basic page.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-slate-950 p-7 hover:border-sky-400/50 transition"
            >
              <h3 className="text-2xl font-semibold">{solution.title}</h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {solution.description}
              </p>

              <div className="mt-7 space-y-4">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
              >
                Discuss this solution <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
