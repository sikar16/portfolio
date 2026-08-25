import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

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
    component: Index,
});

export function Index() {
    return (
        <>
            <SEO
                title="Home"
                description="Portfolio of Sikar Yosef, a Software Engineer specializing in frontend (React, Next.js) and mobile (Flutter) development based in Jimma, Ethiopia. Explore my projects, skills, and experience."
                canonical="/"
                ogType="website"
            />
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
        </>
    );
}


















