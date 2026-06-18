import { Link, Navigate, useParams } from "react-router-dom";
import { MoveLeft } from 'lucide-react';
import { projects } from "@/data/projects";
import { 
  ProjectHeroSection,
  ProjectPreviewSection,
  ProjectMarkdownSection
} from "@/sections/projects";


export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if(project === undefined) {
    return <Navigate to={'/projects/not-found'} />
  }
  
  return (
    <main className="py-12 sm:py-16 px-4 bg-home-bg">
      <div className="max-w-6xl w-full mx-auto flex flex-col">
        <Link 
          to={'/projects'} 
          className="inline-flex items-center gap-2 text-[#778088] hover:text-main-black transition-all duration-300 text-xs sm:text-base"
        >
          <MoveLeft size={16} />
          <span>Back to Projects</span>
        </Link>
        <h1 className="mt-2 sm:mt-4 text-2xl sm:text-4xl font-bold">
          {project.title}
        </h1>
        <div className="mt-3 sm:px-2.5">
          <ProjectHeroSection project={project} />
          <ProjectPreviewSection project={project} />
          <ProjectMarkdownSection content={project.content} />
        </div>
      </div>
    </main>
  );
}