import { reasons } from "../data/siteData";
import { motion } from "framer-motion";

function WhyChoose() {
  return (
    <section className="px-6 py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Built like a partner, not just a service provider.
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              A website is not decoration. It should bring trust, enquiries,
              clarity, and better workflow. That is the difference ShreeStack
              aims to create.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-sky-400/50 transition"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-sky-400/10 p-4 text-sky-400">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-semibold">{reason.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
