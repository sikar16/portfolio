import { experience } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Experience() {
    return (
        <section id="experience" className="bg-card/30 py-24">
            <div className="mx-auto max-w-4xl px-5">
                <SectionHeading eyebrow="Where I've worked" title="Experience" />
                <div className="relative">
                    <div className="absolute top-0 left-4 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
                    <div className="space-y-10">
                        {experience.map((e, i) => (
                            <Reveal key={e.company}>
                                <div
                                    className={`relative pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1.5 left-2.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background md:left-auto ${i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                                            }`}
                                    />
                                    <div className="glow-border rounded-xl bg-card p-6 text-left">
                                        <span className="text-xs font-medium text-primary">{e.period}</span>
                                        <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                                        <p className="text-sm text-muted-foreground">{e.company}</p>
                                        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                                            {e.points.map((pt) => (
                                                <li key={pt} className="flex gap-2">
                                                    <i className="fa-solid fa-angle-right mt-1 text-xs text-primary" />
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
