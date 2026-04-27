/* 타입 정의 */
type Previews = {
  title: string;
  image: string;
}

export type Project = {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  keyPoints: string[];
  skills: string[];
  period: string;
  role: string;
  type: string;
  demo?: string;
  github?: string;
  previews: Previews[];
  responsive: boolean;
  content: string;
}