import { education } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Education() {
    return (
        <section id="education" className="mx-auto max-w-4xl px-5 py-24">
            <SectionHeading eyebrow="My background" title="Education" />
            <Reveal>
                <div className="glow-border rounded-xl bg-card p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-4">
                            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-xl text-primary">
                                <i className="fa-solid fa-graduation-cap" />
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold">{education.degree}</h3>
                                <p className="text-sm text-muted-foreground">{education.school}</p>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-primary">{education.period}</span>
                    </div>
                    <p className="mt-5 text-sm font-medium text-foreground">Relevant Coursework</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {education.courses.map((c) => (
                            <span key={c} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                                {c}
                            </span>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
