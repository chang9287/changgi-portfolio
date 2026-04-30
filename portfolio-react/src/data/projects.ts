import type { Project, ProjectData } from "../types/project";

type DataModules = {
  default: ProjectData;
};

type MdModules = {
  default: string;
};

/* import.meta.glob */
const dataModules = import.meta.glob<DataModules>('@/content/projects/*/data.ts', {
  eager: true
});
const mdModules = import.meta.glob<MdModules>('@/content/projects/*/index.md', {
  eager: true,
  query: '?raw'
});


export const projects: Project[] = Object.entries(dataModules).map(([path, module]) => {

  /* '/'기준으로 잘라서 뒤에서 2번째 요소 꺼내기 */
  const cut = path.split('/');
  const slug = cut[cut.length-2];

  /* data 꺼내기 */
  const data = module.default;

  /* slug기준으로 같은 폴더의 md 찾기 */
  const mdFile = Object.entries(mdModules).find(([mdPath]) => (
    mdPath.includes(slug)
  ));

  /* md의 내용 꺼내기 */
  const mdContent = mdFile ? mdFile[1].default : "";

  /* 합치기 */
  return {
    ...data,
    content: mdContent,
  };
});