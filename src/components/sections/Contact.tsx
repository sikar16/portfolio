import { profile } from "../../data/portfolio";
import { Reveal, SectionHeading } from "../Section";

export function Contact() {
    return (
        <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="float-blob absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl motion-reduce:animate-none" />
                <div
                    className="float-blob absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl motion-reduce:animate-none"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <div className="relative">
                <SectionHeading eyebrow="Get in touch" title="Contact Me" />

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Left side - Message */}
                    <Reveal>
                        <div className="glow-border rounded-2xl bg-card p-8">
                            <h3 className="text-2xl font-semibold mb-4">Let's Work Together 🚀</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm always interested in new opportunities, exciting projects, and collaborations.
                                Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                            </p>

                            <div className="mt-8">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                                >
                                    <i className="fa-solid fa-paper-plane" />
                                    Send me an email
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right side - Contact Info */}
                    <Reveal>
                        <div className="space-y-4">
                            {/* Email */}
                            <a
                                href={`mailto:${profile.email}`}
                                target="_blank"
                                rel="noreferrer"
                                className="glow-border block rounded-xl bg-card p-5 transition-transform hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <i className="fa-solid fa-envelope text-primary text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium">Email</div>
                                        <div className="text-sm text-muted-foreground">{profile.email}</div>
                                    </div>
                                    <i className="fa-solid fa-arrow-up-right-from-square text-muted-foreground/50" />
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                                className="glow-border block rounded-xl bg-card p-5 transition-transform hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <i className="fa-solid fa-phone text-primary text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium">Phone</div>
                                        <div className="text-sm text-muted-foreground">{profile.phone}</div>
                                    </div>
                                    <i className="fa-solid fa-arrow-up-right-from-square text-muted-foreground/50" />
                                </div>
                            </a>

                            {/* Location */}
                            <div className="glow-border rounded-xl bg-card p-5">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <i className="fa-solid fa-location-dot text-primary text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium">Location</div>
                                        <div className="text-sm text-muted-foreground">{profile.location}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="glow-border rounded-xl bg-card p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                            <i className="fa-solid fa-share-nodes text-primary text-xl" />
                                        </div>
                                        <div className="font-medium">Connect with me</div>
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={profile.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:bg-primary/10"
                                            aria-label="GitHub"
                                        >
                                            <i className="fa-brands fa-github text-lg" />
                                        </a>
                                        <a
                                            href={profile.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:bg-primary/10"
                                            aria-label="LinkedIn"
                                        >
                                            <i className="fa-brands fa-linkedin text-lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}