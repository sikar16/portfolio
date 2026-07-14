import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 overflow-x-hidden">
            <div className="mx-auto w-full max-w-6xl px-6">

                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    {/* Contact Information */}
                    <div className="glow-border w-full min-w-0 rounded-xl bg-card p-6">

                        <h3 className="text-xl font-semibold">
                            Let's Work Together 🚀
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            I'm always interested in new opportunities, exciting
                            projects, and collaborations. Whether you need a web
                            application, API, or software solution, let's discuss
                            how I can help.
                        </p>


                        <div className="mt-6 space-y-5">

                            <div className="flex items-center gap-4">
                                <Mail className="shrink-0 text-primary" size={22} />

                                <div className="min-w-0">
                                    <p className="text-sm text-muted-foreground">
                                        Email
                                    </p>

                                    <p className="break-all font-medium">
                                        sikarmahi6123@gmail.com
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <Phone className="shrink-0 text-primary" size={22} />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Phone
                                    </p>

                                    <p className="font-medium">
                                        +251 963797062
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <MapPin className="shrink-0 text-primary" size={22} />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Location
                                    </p>

                                    <p className="font-medium">
                                        Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                        </div>


                        {/* Social Links */}
                        <div className="mt-8 flex gap-4">

                            <a
                                href="https://github.com/sikar16"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border p-3 transition hover:bg-primary/10"
                            >
                                {/* <Github size={20} /> */}
                            </a>


                            <a
                                href="https://www.linkedin.com/in/sikar-yosef-409821289"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border p-3 transition hover:bg-primary/10"
                            >
                                {/* <Linkedin size={20} /> */}
                            </a>

                        </div>

                    </div>



                    {/* Contact Form */}
                    <div className="glow-border w-full min-w-0 rounded-xl bg-card p-6">

                        <form className="space-y-5">


                            <div>
                                <label className="text-sm font-medium">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="
                                        mt-2 w-full rounded-lg border 
                                        bg-background px-4 py-3 
                                        text-base outline-none
                                        focus:ring-2 focus:ring-primary
                                    "
                                />
                            </div>



                            <div>
                                <label className="text-sm font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="
                                        mt-2 w-full rounded-lg border 
                                        bg-background px-4 py-3 
                                        text-base outline-none
                                        focus:ring-2 focus:ring-primary
                                    "
                                />
                            </div>



                            <div>
                                <label className="text-sm font-medium">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="
                                        mt-2 w-full rounded-lg border 
                                        bg-background px-4 py-3 
                                        text-base outline-none
                                        resize-none
                                        focus:ring-2 focus:ring-primary
                                    "
                                />
                            </div>



                            <button
                                type="submit"
                                className="
                                    w-full rounded-lg bg-primary 
                                    py-3 font-medium 
                                    text-primary-foreground
                                    transition hover:opacity-90
                                "
                            >
                                Send Message
                                <i className="fa-solid fa-paper-plane ml-2" />
                            </button>


                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}