import type { ProjectData } from "../../../types/project";
import { publicRenewalImages } from "./images";

const data: ProjectData = {
  id: "public-renewal",
  title: "공공기관 홈페이지 리뉴얼",
  summary: "정보 구조 재정리와 콘텐츠 우선순위 개선을 통해 사용자가 필요한 정보를 빠르게 탐색할 수 있도록 구성한 웹사이트 리메이크 프로젝트입니다.",
  thumbnail: publicRenewalImages.thumbnail,
  keyPoints: [
    "정보 구조 개선",
    "사용자 흐름 재설계",
    "반응형 웹 구현"
  ],
  skills: ["HTML5", "CSS3", "JavaScript"],
  period: "2024.09 ~ 2024.10",
  role: "기획부터 UI 설계, 디자인, 구현까지 전 과정 수행",
  type: "personal",
  demo: "https://chang9287.github.io/public-renewal/",
  github: "https://github.com/chang9287/public-renewal",
  previews: [
    {
      title: "메인 페이지",
      image: publicRenewalImages.mainPage,
    },
    {
      title: "공지사항 페이지",
      image: publicRenewalImages.noticePage,
    },
    {
      title: "FAQ 페이지",
      image: publicRenewalImages.faqPage,
    }
  ],
  responsive: true
}

export default data