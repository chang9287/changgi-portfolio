import type { Project } from "@/types/project";

type ProjectHeroSectionProps = {
  project: Project;
}

/* Common Style */
const commonLinkStyle = "block border px-5 py-3 rounded-xl font-bold text-sm"

export default function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  const projectInfoList = [
    {
      title: "Period",
      content: project.period
    },
    {
      title: "Role",
      content: project.role
    },
    {
      title: "Type",
      content: project.type
    }
  ]

  return (
    <section className="flex flex-col gap-8 px-2">
      <p className="text-main-black/80 text-sm sm:text-base">
        {project.summary}
      </p>
      <div className="flex gap-5">
        <a
          href={project.demo}
          target="_blank" 
          rel="noopener noreferrer"
          className={`${commonLinkStyle} border-projectdetail-hero-demo-border text-white bg-projectdetail-hero-demo hover:bg-projectdetail-hero-hover hover:border-projectdetail-hero-hover-border`}
        >
          View Demo
        </a>
        <a
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${commonLinkStyle} text-main-brown border-main-brown/30 hover:text-main-dark-brown hover:border-main-brown`}
        >
          Github
        </a>
      </div>
      <div 
        className="grid grid-cols-1 md:grid-cols-3 md:py-6 border-y border-main-brown/20"
      >
        {projectInfoList.map((info) => (
          <div 
            key={info.title} 
            className="flex flex-col gap-2 py-4 border-b border-main-brown/10 last:border-b-0 md:py-0 md:px-8 md:border-b-0 md:border-r md:border-main-brown/15 md:last:border-r-0"
          >
            <h3 className="font-semibold text-main-brown">
              {info.title}
            </h3>
            <p className="text-sm text-main-black/80">
              {info.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}