import { articles } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Blog() {
    return (
        <section className="bg-card/30 py-24">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading eyebrow="From my desk" title="Latest Articles" />
                <div className="grid gap-6 md:grid-cols-3">
                    {articles.map((a) => (
                        <Reveal key={a.title}>
                            <div className="glow-border flex h-full flex-col rounded-xl bg-card p-6">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{a.category}</span>
                                    <span className="text-muted-foreground">{a.date}</span>
                                </div>
                                <h3 className="mt-3 font-semibold">{a.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                                <a href="#" className="mt-4 text-sm font-medium text-primary hover:underline">
                                    Read More <i className="fa-solid fa-arrow-right ml-1 text-xs" />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
