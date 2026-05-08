import type { ProjectData } from "../../../types/project";
import { englishVillageImages } from "./images";

const data: ProjectData = {
  id: "english-village",
  title: "인천영어마을 리뉴얼 프로젝트",
  summary: "직관적이지 않은 UI와 정보 전달 방식을 개선하고, 주요 사용자층을 고려한 구조로 재설계한 리뉴얼 프로젝트입니다.",
  thumbnail: englishVillageImages.thumbnail,
  keyPoints: [
    "주 사용자층 대상 UI/UX 개선",
    "반응형 웹 구현",
    "달력 기반 예약 시스템 구현"
  ],
  skills: ["HTML5", "SCSS", "JavaScript"],
  period: "2024.11 ~ 2024.12",
  role: "기획부터 UI 설계, 디자인, 구현 및 최종 코드 통합 담당",
  type: "team",
  demo: "https://english-village-project.netlify.app/",
  github: "https://github.com/chang9287/English-Village",
  previews: [
    {
      title: "메인 페이지",
      image: englishVillageImages.mainPage,
    },
    {
      title: "마을 소개 페이지",
      image: englishVillageImages.aboutPage,
    },
    {
      title: "오시는 길 페이지",
      image: englishVillageImages.mapPage,
    },
    {
      title: "학습 테스트 페이지",
      image: englishVillageImages.testPage,
    },
    {
      title: "프로그램 신청 페이지",
      image: englishVillageImages.programPage,
    },
    {
      title: "프로그램 예약 페이지",
      image: englishVillageImages.reservationPage,
    }
  ],
  responsive: true
}

export default data