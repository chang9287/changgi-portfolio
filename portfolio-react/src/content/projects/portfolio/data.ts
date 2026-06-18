import type { ProjectData } from "../../../types/project";
import { myPortfolioImages } from "./images";

const data: ProjectData = {
  id: "portfolio",
  title: "포트폴리오 개인페이지",
  summary: "기존 HTML/CSS/JavaScript 기반 포트폴리오를 React, TypeScript 기반으로 재구성하며 컴포넌트 구조와 데이터 흐름을 개선한 프로젝트입니다.",
  thumbnail: myPortfolioImages.thumbnail,
  keyPoints: [
    "컴포넌트 기반 구조로 리팩토링",
    "TypeScript 적용을 통한 타입 안정성 확보",
    "데이터 기반 렌더링 구조 설계"
  ],
  skills: ["React", "TailwindCSS", "TypeScript"],
  period: "2026.04.08 ~ 2026.05.09",
  role: "기획부터 구조 설계, UI 구현, 데이터 구조 설계 및 전환 작업 전반 수행",
  type: "personal",
  demo: "https://changgi-portfolio.netlify.app/",
  github: "https://github.com/chang9287/changgi-portfolio",
  previews: [
    {
      title: "메인 페이지",
      image: myPortfolioImages.mainPage,
    }
  ],
  responsive: true
}

export default data