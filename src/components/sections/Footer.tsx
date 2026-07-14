import { profile } from "../../data/portfolio";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card/40">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
                <div className="text-center sm:text-left">
                    <a href="#home" className="font-display text-xl font-bold">
                        <span className="text-primary">{"<"}</span>SY<span className="text-primary">{"/>"}</span>
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">Building thoughtful web & mobile experiences.</p>
                </div>
                <div className="flex gap-6 text-sm text-muted-foreground">
                    <a href="#home" className="hover:text-primary">Home</a>
                    <a href="#about" className="hover:text-primary">About</a>
                    <a href="#projects" className="hover:text-primary">Projects</a>
                    <a href="#skills" className="hover:text-primary">Skills</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                </div>
                <div className="flex gap-5 text-lg text-muted-foreground">
                    <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="GitHub">
                        <i className="fa-brands fa-github" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin" />
                    </a>
                    <a href={`mailto:${profile.email}`} className="hover:text-primary" aria-label="Email">
                        <i className="fa-solid fa-envelope" />
                    </a>
                </div>
            </div>
            <p className="pb-6 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Sikar Yosef. All rights reserved.
            </p>
        </footer>
    );
}
