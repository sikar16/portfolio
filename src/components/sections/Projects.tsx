import { projects } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading eyebrow="My recent work" title="Featured Projects" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <Reveal key={p.name}>
                        <div className="glow-border flex h-full flex-col overflow-hidden rounded-xl bg-card">
                            {/* Project Image */}
                            <div className="relative h-52 w-full overflow-hidden">
                                <img
                                    src={p.sampleImage}
                                    alt={p.name}
                                    className="h-full w-full object-scale-down transition-transform duration-500 hover:scale-105"
                                />

                                {/* Category Badge */}
                                <span className="absolute top-3 left-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-primary">
                                    {p.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-lg font-semibold">{p.name}</h3>

                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {p.desc}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 flex gap-4 text-sm">
                                    {/* <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square mr-1.5" />
                                        Live Demo
                                    </a> */}

                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        <i className="fa-brands fa-github mr-1.5" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}