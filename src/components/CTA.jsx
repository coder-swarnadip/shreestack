import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-sky-400/20 to-indigo-500/20 p-8 md:p-14 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
          Ready To Start?
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          Have an idea? Let’s turn it into a real digital product.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300 leading-relaxed">
          Whether you need a simple business website or a custom dashboard,
          ShreeStack Digital Solutions can help you plan, build, and launch it.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3 font-semibold text-slate-950 hover:bg-sky-300 transition"
        >
          Book Free Consultation <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default CTA;
