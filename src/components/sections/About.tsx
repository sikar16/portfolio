import { stats } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";
export function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading eyebrow="Get to know me" title="About Me" />
            <div className="grid gap-12 md:grid-cols-2">
                <Reveal>
                    <p className="leading-relaxed text-muted-foreground">
                        I'm a Software Engineering graduate from Jimma University passionate about building modern web and mobile applications. My expertise spans frontend development, full-stack engineering, and AI-powered solutions, with a focus on creating responsive, accessible, and high-performance digital experiences.
                    </p>

                    <p className="mt-4 leading-relaxed text-muted-foreground">
                        Throughout internships and personal projects, I've developed AI knowledge assistants, inventory management systems, SMS communication platforms, performance report generators, and cross-platform Flutter applications. I enjoy solving real-world problems with clean architecture, intuitive user interfaces, and scalable technologies while continuously learning and collaborating with others.
                    </p>

                    <a
                        href="/files/Sikar_Yosef_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                        <i className="fa-solid fa-download" /> Download CV
                    </a>
                </Reveal>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((s) => (
                        <Reveal key={s.label}>
                            <div className="glow-border h-full rounded-xl bg-card p-6 text-center">
                                <i className={`fa-solid ${s.icon} mb-3 text-2xl text-primary`} />
                                <div className="font-display text-3xl font-bold">{s.value}</div>
                                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}