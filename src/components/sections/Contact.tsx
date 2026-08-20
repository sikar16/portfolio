export function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <div className="mb-12 text-center">
                    <p className="mb-2 font-display text-sm font-medium tracking-widest text-primary uppercase">
                        Get in touch
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">Contact Me</h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
                </div>

                <div className="rounded-xl border bg-card p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Let's Work Together 🚀</h3>

                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I'm always interested in new opportunities, exciting projects, and collaborations.
                        Feel free to reach out through any of these channels:
                    </p>

                    <div className="space-y-4 max-w-md mx-auto">
                        <a
                            href="mailto:sikarmahi6123@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-4 rounded-lg border hover:bg-primary/10 transition"
                        >
                            <div className="font-medium">Email</div>
                            <div className="text-muted-foreground">sikarmahi6123@gmail.com</div>
                        </a>

                        <div className="p-4 rounded-lg border">
                            <div className="font-medium">Phone</div>
                            <div className="text-muted-foreground">+251 963797062</div>
                        </div>

                        <div className="p-4 rounded-lg border">
                            <div className="font-medium">Location</div>
                            <div className="text-muted-foreground">Addis Ababa, Ethiopia</div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="https://github.com/sikar16"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border px-6 py-3 transition hover:bg-primary/10"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sikar-yosef-409821289"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border px-6 py-3 transition hover:bg-primary/10"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}