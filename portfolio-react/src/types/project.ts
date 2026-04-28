/* 타입 정의 */
type Preview = {
  title: string;
  image: string;
}

export type ProjectData = {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  keyPoints: string[];
  skills: string[];
  period: string;
  role: string;
  type: "personal" | "team";
  demo?: string;
  github?: string;
  previews: Preview[];
  responsive: boolean;
}