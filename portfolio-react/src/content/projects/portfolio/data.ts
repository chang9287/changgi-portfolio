import type { ProjectData } from "../../../types/project";
import { myPortfolioImages } from "./images";

const data: ProjectData = {
  id: "portfolio",
  order: 4,
  title: "포트폴리오 개인페이지",
  summary: "기존 HTML/CSS/JavaScript 기반 포트폴리오를 React, TypeScript 기반으로 재구성하며 컴포넌트 구조와 데이터 흐름을 개선한 프로젝트입니다.",
  thumbnail: myPortfolioImages.thumbnail,
  keyPoints: [
    "컴포넌트 기반 리팩토링",
    "TypeScript 기반 타입 안정성 확보",
    "데이터 기반 렌더링 구조"
  ],
  skills: ["React", "TailwindCSS", "TypeScript"],
  period: "2026.04.08 ~ 2026.05.09",
  role: "기획부터 구조 설계, UI 구현, 데이터 구조 설계 및 전환 작업 전반 수행",
  type: "personal",
  demo: "https://changgi-portfolio.netlify.app/",
  github: "https://github.com/chang9287/changgi-portfolio",
  previews: [
    {
      id: "home-page",
      title: "Home 페이지",
      image: myPortfolioImages.homePage,
    },
    {
      id: "about-page",
      title: "About 페이지",
      image: myPortfolioImages.aboutPage,
    },
    {
      id: "projects-page",
      title: "Projects 페이지",
      image: myPortfolioImages.projectsPage,
    },
    {
      id: "project-detail-page",
      title: "Project-Detail 페이지",
      image: myPortfolioImages.projectDetailPage,
    },
    {
      id: "contact-page",
      title: "Contact 페이지",
      image: myPortfolioImages.contactPage,
    },
    {
      id: "not-found-page",
      title: "Not-Found 페이지",
      image: myPortfolioImages.notFoundPage,
    }
  ],
  responsive: true
}

export default data