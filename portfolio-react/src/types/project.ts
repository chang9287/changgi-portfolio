import type { Skill } from "@/data/skillColors";

/* 타입 정의 */
type Preview = {
  title: string;
  image: string;
}

export type ProjectData = {
  id: string;
  order: number;
  title: string;
  summary: string;
  thumbnail: string;
  keyPoints: string[];
  skills: Skill[];
  period: string;
  role: string;
  type: "personal" | "team";
  demo?: string;
  github?: string;
  previews: Preview[];
  responsive: boolean;
}

export type Project = ProjectData & {
  content: string;
}