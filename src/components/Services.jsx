import { services } from "../data/siteData";
import { motion } from "framer-motion";
import workflowVisual from "../assets/shreestack-workflow.jpg";

function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e920,transparent_35%)]" />
      <img
        src={workflowVisual}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 h-[300px] w-[620px] max-w-none -translate-x-1/2 object-cover opacity-30 mix-blend-screen md:left-auto md:right-[-220px] md:top-24 md:h-[520px] md:w-[900px] md:translate-x-0 md:opacity-45"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 34%, transparent 74%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 34%, transparent 74%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="relative max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            What We Build
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Digital solutions built for real business problems.
          </h2>

          <p className="mt-5 text-slate-300 leading-relaxed">
            We build websites, dashboards, and tools that help businesses earn
            trust, manage work, and turn online visitors into real enquiries.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.07] transition"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-sky-400/10 p-4 text-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950 transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
