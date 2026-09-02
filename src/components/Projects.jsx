
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/siteData";
import { motion } from "framer-motion";

function Projects() {
    return (
        <section
            id="work"
            className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
        >
            <div className="relative mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6">

                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-sm sm:tracking-[0.25em]">
                            Case Studies
                        </span>

                        <h2 className="mt-3 text-2xl font-bold leading-tight sm:mt-4 sm:text-3xl md:text-5xl">
                            Practical digital systems built around real problems.
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                        These agency-style case studies show how ShreeStack
                        Digital Solutions plans and builds practical websites,
                        dashboards, platforms, and smart business systems.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8 lg:mt-20">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="
                                grid
                                gap-6
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                p-3
                                shadow-2xl
                                shadow-slate-950/30
                                transition
                                hover:border-sky-400/50

                                sm:gap-8
                                sm:rounded-3xl
                                sm:p-5

                                lg:grid-cols-[0.9fr_1.1fr]
                            "
                        >

                            {/* Project Image */}
                            <ProjectImage project={project} />

                            {/* Project Content */}
                            <div className="flex flex-col justify-center px-1 pb-2 sm:p-2 lg:p-5">

                                {/* Category */}
                                <span className="text-xs font-medium text-sky-400 sm:text-sm">
                                    {project.category}
                                </span>

                                {/* Title */}
                                <h3 className="mt-2 text-xl font-semibold leading-tight sm:mt-3 sm:text-2xl md:text-3xl">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
                                    {project.description}
                                </p>

                                {/* Challenge / Solution / Outcome */}
                                <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 md:grid-cols-3">
                                    <CaseBlock
                                        title="Challenge"
                                        text={project.challenge}
                                    />

                                    <CaseBlock
                                        title="Solution"
                                        text={project.solution}
                                    />

                                    <CaseBlock
                                        title="Outcome"
                                        text={project.outcome}
                                    />
                                </div>

                                {/* Services */}
                                <div className="mt-5 sm:mt-7">

                                    <p className="mb-3 text-sm font-semibold text-white">
                                        Services Delivered
                                    </p>

                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {project.services.map((service) => (
                                            <span
                                                key={service}
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-white/5
                                                    px-3
                                                    py-1.5
                                                    text-[11px]
                                                    text-slate-300

                                                    sm:gap-2
                                                    sm:px-4
                                                    sm:py-2
                                                    sm:text-xs
                                                "
                                            >
                                                <CheckCircle2
                                                    size={13}
                                                    className="shrink-0 text-sky-400"
                                                />

                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div
                                    className="
                                        mt-6
                                        flex
                                        flex-col
                                        gap-2.5

                                        sm:mt-8
                                        sm:flex-row
                                        sm:flex-wrap
                                        sm:gap-3
                                    "
                                >

                                    {project.platformUrl && (
                                        <a
                                            href={project.platformUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                inline-flex
                                                w-full
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-full
                                                border
                                                border-white/15
                                                px-5
                                                py-2.5
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-white/10

                                                sm:w-auto
                                                sm:px-6
                                                sm:py-3
                                            "
                                        >
                                            View Platform
                                            <ArrowRight size={16} />
                                        </a>
                                    )}

                                    <a
                                        href="#contact"
                                        className="
                                            inline-flex
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            bg-sky-400
                                            px-5
                                            py-2.5
                                            text-sm
                                            font-semibold
                                            text-slate-950
                                            transition
                                            hover:bg-sky-300

                                            sm:w-auto
                                            sm:px-6
                                            sm:py-3
                                        "
                                    >
                                        Build Similar Solution
                                        <ArrowRight size={16} />
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


/* -------------------------------- */
/* Project Image                    */
/* -------------------------------- */

function ProjectImage({ project }) {
    const [failed, setFailed] = useState(!project.imageSrc);

    if (failed) {
        return (
            <div
                className="
                    flex
                    min-h-[210px]
                    items-end
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[radial-gradient(circle_at_top_left,#0ea5e940,transparent_36%),linear-gradient(135deg,#020617,#0f172a_52%,#082f49)]
                    p-5

                    sm:min-h-[280px]
                    sm:rounded-2xl
                    sm:p-6
                "
            >
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-sm">
                        Case Study
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white sm:mt-3 sm:text-2xl">
                        {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-300 sm:mt-2 sm:text-sm">
                        {project.category}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900 sm:rounded-2xl">
            <img
                src={project.imageSrc}
                alt={project.title}
                onError={() => setFailed(true)}
                className="
                    h-[210px]
                    w-full
                    object-cover

                    sm:h-full
                    sm:min-h-[280px]
                "
            />
        </div>
    );
}


/* -------------------------------- */
/* Case Study Block                 */
/* -------------------------------- */

function CaseBlock({ title, text }) {
    return (
        <div
            className="
                rounded-xl
                border
                border-white/10
                bg-slate-950/70
                p-3.5

                sm:rounded-2xl
                sm:p-4
            "
        >
            <h4 className="text-xs font-semibold text-white sm:text-sm">
                {title}
            </h4>

            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400 sm:mt-2 sm:text-xs">
                {text}
            </p>
        </div>
    );
}

export default Projects;
