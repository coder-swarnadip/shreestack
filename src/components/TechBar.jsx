import { techStack } from "../data/siteData";

function TechBar() {
  return (
    <section className="border-y border-white/10 bg-slate-900/60 px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechBar;