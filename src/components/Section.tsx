import type { ReactNode } from "react";
import { useReveal } from "../hooks/use-portfolio";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, className: rc } = useReveal();
  return (
    <div ref={ref} className={`${rc} ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 font-display text-sm font-medium tracking-widest text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </Reveal>
  );
}
