
import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Projects | UsherTech",
};

export default function Page() {
    const projects = getAllProjects();
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                heading="Solutions"
                desc="Real-world applications of <span>construction automation</span>—proven results for contractors managing complex workflows." />
            <ProjectList />    
        </main>
    );
};
