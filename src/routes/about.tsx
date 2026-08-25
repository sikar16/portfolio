import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/about")({
    component: AboutPage,
});

function AboutPage() {
    return (
        <>
            <SEO 
                title="About"
                description="Learn about Sikar Yosef - Software Engineer and graduate from Jimma University. Discover my background, skills, experience, and passion for building modern web and mobile applications."
                canonical="/about"
                ogType="profile"
                schema={{
                    '@type': 'Person',
                    name: 'Sikar Yosef',
                    jobTitle: 'Software Engineer',
                    description: 'Software Engineering graduate passionate about building full-stack web and mobile applications. Experienced with React, Next.js, Flutter, Node.js, PostgreSQL, and modern UI development.',
                    alumniOf: {
                        '@type': 'CollegeOrUniversity',
                        name: 'Jimma University',
                    },
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Addis Ababa',
                        addressCountry: 'Ethiopia',
                    },
                }}
            />
            <div className="overflow-x-clip">
                <Navbar />
                <div className="pt-24">
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                </div>
                <Footer />
            </div>
        </>
    );
}