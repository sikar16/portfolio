import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";

import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Services } from "../components/sections/Services";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Sikar Yosef — Frontend & Mobile App Developer" },
            {
                name: "description",
                content:
                    "Portfolio of Sikar Yosef, a Software Engineer specializing in frontend (React, Next.js) and mobile (Flutter) development based in Jimma, Ethiopia.",
            },
            { property: "og:title", content: "Sikar Yosef — Frontend & Mobile App Developer" },
            {
                property: "og:description",
                content: "Building responsive, AI-powered web and mobile experiences.",
            },
            { property: "og:type", content: "website" },
        ],
    }),
    component: Index,
});

export function Index() {
    return (
        <div className="overflow-x-clip">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Services />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contact />
            <Footer />
        </div>
    );
}


















