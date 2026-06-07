import { CheckCircle2, ArrowRight } from "lucide-react";
import { pricingPlans } from "../data/siteData";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-24 bg-slate-900/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Launch Partner Pricing
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Special pricing for our first few projects.
          </h2>

          <p className="mt-5 text-slate-400 leading-relaxed">
            To celebrate the launch of ShreeStack Digital Solutions, we are offering
            special introductory pricing for early clients.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            className={`relative rounded-3xl border p-7 transition ${
                plan.highlighted
                  ? "border-sky-400 bg-sky-400/10 shadow-2xl shadow-sky-950/40 lg:-translate-y-3"
                  : "border-white/10 bg-white/[0.04] hover:border-sky-400/50"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-sky-400 px-4 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </span>
              )}

              <p className="text-sm text-sky-400">{plan.tag}</p>

              <h3 className="mt-3 text-2xl font-semibold">{plan.name}</h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {plan.description}
              </p>

              <div className="mt-7">
                <p className="text-sm text-slate-500 line-through">
                  Regular {plan.regularPrice}
                </p>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Launch
                </p>

                <div className="mt-1 flex flex-wrap items-end gap-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.offerPrice}
                  </span>
                  <span className="mb-1 text-sm text-slate-400">starting</span>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-sky-400"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                    : "border border-white/15 text-white hover:bg-white/10"
                }`}
              >
                Choose Plan <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Final pricing depends on project requirements, timeline, and feature complexity.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
