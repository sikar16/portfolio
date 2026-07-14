import { useEffect, useState } from "react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Services", "services"],
  ["Contact", "contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : ""
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-xl font-bold">
          <span className="text-primary">{"<"}</span>SY<span className="text-primary">{"/>"}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`} />
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-muted-foreground">
            <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`} />
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-primary text-xl">
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-5 py-3">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
