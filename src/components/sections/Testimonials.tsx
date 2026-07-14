import { testimonials } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Testimonials() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading eyebrow="Kind words" title="Testimonials" />
            <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((t) => (
                    <Reveal key={t.name}>
                        <div className="glow-border flex h-full flex-col rounded-xl bg-card p-7">
                            <div className="mb-3 flex gap-1 text-primary">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <i key={i} className="fa-solid fa-star text-sm" />
                                ))}
                            </div>
                            <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                            <div className="mt-5 flex items-center gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-display font-semibold text-primary">
                                    {t.name.charAt(0)}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}