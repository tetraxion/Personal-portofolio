import { notFound } from "next/navigation";
import { projects } from "@/lib/project";
import { MainContent } from "@/components/main-content";
import { ProjectDetailClient } from "./client-page";

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static params so Next.js can prerender all project pages at build time
export function generateStaticParams() {
    return projects.map((p) => ({
        slug: p.slug,
    }));
}

// Generate dynamic SEO metadata per project
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    
    if (!project) return {};

    return {
        title: `${project.title} | Projects | Dwi Lutfi`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    
    // Server-side validation
    const projectExists = projects.some((p) => p.slug === slug);
    if (!projectExists) return notFound();

    return (
        <MainContent>
            <ProjectDetailClient slug={slug} />
        </MainContent>
    );
}