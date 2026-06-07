import { motion } from "framer-motion";
import { audiences } from "../data/siteData";

function Industries() {
  return (
    <section id="industries" className="px-6 py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Who We Work With
          </span>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Digital systems for businesses that need clarity, enquiries, and better operations.
          </h2>

          <p className="mt-5 text-slate-300 leading-relaxed">
            We help businesses establish a stronger online presence through
            websites, dashboards, and custom digital solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/50 hover:bg-white/[0.07]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400 group-hover:text-slate-950">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {audience.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;
