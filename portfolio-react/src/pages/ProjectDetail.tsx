import { Link, useParams } from "react-router-dom";
import { MoveLeft } from 'lucide-react';
import { projects } from "@/data/projects";
import { 
  ProjectHeroSection,
  ProjectOverviewSection,
  ProjectProblemSection,
  ProjectFeatureSection,
  ProjectPreviewSection,
  ProjectLearnedSection 
} from "@/sections/projects";


export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  return (
    <main className="py-16 px-4 bg-home-bg">
      <div className="max-w-6xl w-full mx-auto flex flex-col border">
        <Link to={'/projects'} className="flex items-center gap-2">
          <MoveLeft size={16} />
          <span>Back to Projects</span>
        </Link>
        <h1>{project?.title}</h1>
        <div className="px-2.5 border">
          <ProjectHeroSection />
          <ProjectOverviewSection />
          <ProjectProblemSection />
          <ProjectFeatureSection />
          <ProjectPreviewSection />
          <ProjectLearnedSection />
        </div>
      </div>
    </main>
  );
}