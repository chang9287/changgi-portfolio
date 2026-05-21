import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps ) {
  return (
    <div className="border">
      <div>썸네일</div>
      <div>
        <span>{project.type}</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div>
          {project.keyPoints}
        </div>
      </div>
      
    </div>
  );
}