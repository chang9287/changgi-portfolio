import { projects } from "@/data/projects";
import ProjectFilter from "@/components/parts/ProjectFilter";
import ProjectCard from "@/components/parts/ProjectCard";

export default function Projects() {
  console.log(projects);

  return (
    <main className="py-16 px-4 border">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-20 border">
        {/* 프로젝트 필터 */}
        <ProjectFilter />

        {/* 프로젝트 카드 */}
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}