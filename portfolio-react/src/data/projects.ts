import type { Project } from "../types/project";

type ProjectModules = {
  default: Project;
};

/* import.meta.glob */
const projectModules = import.meta.glob<ProjectModules>('@/content/projects/*/index.ts', {
  eager: true
});

export const projects: Project[] = Object.values(projectModules)
  .map((module) => module.default)
  .sort((a, b) => a.order - b.order);