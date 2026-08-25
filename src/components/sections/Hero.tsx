import { useEffect, useRef, useState } from "react";
import { useTyping } from "../../hooks/use-portfolio";
import { profile } from "../../data/portfolio";

// adjust path to your custom hook

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(true);
    const typed = useTyping(profile.titles, 90, 1400, inView);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.15 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home" className={`relative flex min-h-screen items-center pt-24 pb-16${inView ? "" : " hero-paused"}`}>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="float-blob absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl motion-reduce:animate-none" />
                <div
                    className="float-blob absolute top-1/3 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl motion-reduce:animate-none"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="float-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl motion-reduce:animate-none"
                    style={{ animationDelay: "4s" }}
                />
            </div>

            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <p className="mb-4 font-display text-primary">Hi,</p>
                    <h1 className="text-4xl font-bold sm:text-6xl">{profile.name}</h1>
                    <h2 className="mt-3 flex min-h-[2.5rem] items-center text-2xl font-semibold text-muted-foreground sm:text-3xl">
                        <span className="text-gradient">{typed}</span>
                        <span className="blink ml-1 text-primary">|</span>
                    </h2>
                    <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{profile.bio}</p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                        >
                            View My Work
                        </a>
                        <a
                            href="/files/Sikar_Yosef_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
                        >
                            <i className="fa-solid fa-file-pdf mr-2" />
                            See my CV
                        </a>
                    </div>

                    <div className="mt-8 flex gap-5 text-xl text-muted-foreground">
                        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="GitHub">
                            <i className="fa-brands fa-github" />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin" />
                        </a>
                        <a
                            href="mailto:sikarmahi6123@gmail.com"
                            className="hover:text-primary"
                            aria-label="Email"
                        >
                            <i className="fa-solid fa-envelope" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl" />
                        <img
                            src="/profile.png"
                            alt="Sikar Yosef"
                            width={968}
                            height={968}
                            className="relative h-60 w-60 rounded-2xl object-cover  sm:h-72 sm:w-72 lg:h-100 lg:w-200"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}