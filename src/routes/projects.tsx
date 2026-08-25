import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";
import { Projects } from "../components/sections/Projects";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/projects")({
    component: ProjectsPage,
});

function ProjectsPage() {
    return (
        <>
            <SEO 
                title="Projects"
                description="Explore the portfolio of Sikar Yosef - showcasing web applications, mobile apps, and full-stack projects built with React, Next.js, Flutter, and other modern technologies."
                canonical="/projects"
                ogType="website"
            />
            <div className="overflow-x-clip">
                <Navbar />
                <div className="pt-24">
                    <Projects />
                </div>
                <Footer />
            </div>
        </>
    );
}