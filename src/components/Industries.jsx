```jsx
import { motion } from "framer-motion";
import { audiences } from "../data/siteData";

function Industries() {
  return (
    <section
      id="industries"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sky-400">
            Who We Work With
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Digital systems for businesses that need clarity, enquiries, and
            better operations.
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            We help businesses establish a stronger online presence through
            websites, dashboards, and custom digital solutions.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                className="
                  group
                  rounded-2xl
                  sm:rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-3
                  sm:p-5
                  transition
                  hover:border-sky-400/50
                  hover:bg-white/[0.07]
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-3
                    sm:mb-5
                    inline-flex
                    h-9
                    w-9
                    sm:h-12
                    sm:w-12
                    items-center
                    justify-center
                    rounded-xl
                    sm:rounded-2xl
                    bg-sky-400/10
                    text-sky-400
                    transition
                    group-hover:bg-sky-400
                    group-hover:text-slate-950
                  "
                >
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={22} className="hidden sm:block" />
                </div>

                {/* Name */}
                <h3 className="text-xs sm:text-base font-semibold leading-snug text-white">
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
```
