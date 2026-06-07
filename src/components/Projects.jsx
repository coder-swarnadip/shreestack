import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/siteData";
import { motion } from "framer-motion";

function Projects() {
    return (
        <section id="work" className="px-6 py-24">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                            Case Studies
                        </span>

                        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                            Practical digital systems built around real problems.
                        </h2>
                    </div>

                    <p className="max-w-md text-slate-400 leading-relaxed">
                        These agency-style case studies show how ShreeStack
                        Digital Solutions plans and builds practical websites,
                        dashboards, platforms, and smart business systems.
                    </p>
                </div>

                <div className="mt-16 space-y-8 md:mt-20">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-slate-950/30 transition hover:border-sky-400/50 lg:grid-cols-[0.9fr_1.1fr]"
                        >
                            <ProjectImage project={project} />

                            <div className="flex flex-col justify-center p-2 lg:p-5">
                                <span className="text-sm font-medium text-sky-400">
                                    {project.category}
                                </span>

                                <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-slate-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-7 grid gap-4 md:grid-cols-3">
                                    <CaseBlock title="Challenge" text={project.challenge} />
                                    <CaseBlock title="Solution" text={project.solution} />
                                    <CaseBlock title="Outcome" text={project.outcome} />
                                </div>

                                <div className="mt-7">
                                    <p className="mb-3 text-sm font-semibold text-white">
                                        Services Delivered
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                                        >
                                            <CheckCircle2 size={14} className="text-sky-400" />
                                            {service}
                                        </span>
                                    ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {project.platformUrl && (
                                        <a
                                            href={project.platformUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                                        >
                                            View Platform <ArrowRight size={16} />
                                        </a>
                                    )}

                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300 transition"
                                    >
                                        Build Similar Solution <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectImage({ project }) {
    const [failed, setFailed] = useState(!project.imageSrc);

    if (failed) {
        return (
            <div className="flex min-h-[280px] items-end overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,#0ea5e940,transparent_36%),linear-gradient(135deg,#020617,#0f172a_52%,#082f49)] p-6">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                        Case Study
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                        {project.category}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <img
                src={project.imageSrc}
                alt={project.title}
                onError={() => setFailed(true)}
                className="h-full min-h-[280px] w-full object-cover"
            />
        </div>
    );
}

function CaseBlock({ title, text }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <h4 className="text-sm font-semibold text-white">{title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{text}</p>
        </div>
    );
}

export default Projects;
