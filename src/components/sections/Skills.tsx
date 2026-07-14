import { skillGroups } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Skills() {
    return (
        <section id="skills" className="bg-card/30 py-24">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading eyebrow="What I work with" title="Skills & Technologies" />
                <div className="grid gap-6 md:grid-cols-3">
                    {skillGroups.map((g) => (
                        <Reveal key={g.title}>
                            <div className="glow-border h-full rounded-xl bg-card p-7">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                                        <i className={`fa-solid ${g.icon}`} />
                                    </span>
                                    <h3 className="text-lg font-semibold">{g.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {g.skills.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}