import { services } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Services() {
    return (
        <section id="services" className="bg-card/30 py-24">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading eyebrow="What I offer" title="Services" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s) => (
                        <Reveal key={s.title}>
                            <div className="glow-border group h-full rounded-xl bg-card p-7">
                                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <i className={`fa-solid ${s.icon}`} />
                                </span>
                                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                                    Get Started <i className="fa-solid fa-arrow-right ml-1 text-xs" />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}