import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import type { Project } from "@/types/project";
import { skillColors } from "@/data/skillColors";

const commonChevronRight = "text-projectcard-chevronright opacity-0 -translate-x-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-projectcard-chevronright-hover absolute";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps ) {
  return (
    <Link 
      to={`/projects/${project.id}`} 
      className="grid md:grid-cols-[420px_1fr] border border-projectcard-border bg-white dark:bg-projectcard-bg rounded-3xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] group hover:-translate-y-1 relative transition-transform duration-300"
    >
      {/* 이미지 */}
      <div className="w-full aspect-video overflow-hidden border-b md:border-b-0 md:border-r border-projectcard-border">
        <img src={project.thumbnail} alt={project.title} className="block w-full h-full object-cover" />
      </div>
      {/* 텍스트 */}
      <div className="px-5 py-4 flex flex-col justify-center">
        <span className="text-xs text-projectcard-type">
          {project.type} project
        </span>
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold">
          {project.title}
        </h1>
        <p className="text-projectcard-summary text-xs lg:text-sm mt-3">
          {project.summary}
        </p>
        <div className="text-projectcard-keypoints bg-projectcard-keypoints-bg border-projectcard-keypoints-border text-xs lg:text-sm p-2 mt-4 rounded-lg">
          {project.keyPoints.join(" / ")}
        </div>
        <div className="flex gap-1 mt-4">
          {project.skills.map((skill) => (
            <span
              key={skill} 
              className={`${skillColors[skill].bg} ${skillColors[skill].text} text-xs px-2 py-0.5 rounded font-medium`}
            >
              {skill}
            </span>
          ))}
        </div>
        <ChevronRight
          strokeWidth={2}
          size={35}
          className={`right-2 bottom-2 ${commonChevronRight}`}
        />
        <ChevronRight
          strokeWidth={2}
          size={35}
          className={`delay-75 right-5 bottom-2 ${commonChevronRight}`}
        />
      </div>
    </Link>
  );
}