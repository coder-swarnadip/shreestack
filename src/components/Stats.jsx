import { motion } from "framer-motion";
import { stats } from "../data/siteData";

function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
