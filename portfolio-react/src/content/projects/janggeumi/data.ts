import type { ProjectData } from "../../../types/project";
import { janggeumiImages } from "./images";

const data: ProjectData = {
  id: "janggeumi",
  order: 5,
  title: "장금이",
  summary: "AI 스프린트를 통해 식재료의 구매부터 보관, 활용, 처리까지 필요한 정보를 단계별로 제공하는 서비스를 기획하고 구현한 팀 프로젝트입니다.",
  thumbnail: janggeumiImages.thumbnail,
  keyPoints: [
    "AI 기반 협업 개발",
    "사용자 흐름을 고려한 메인 설계",
    "AI 기반 콘셉트 이미지 제작"
  ],
  skills: ["NextJS", "TailwindCSS", "TypeScript"],
  period: "2026.07.04 ~ 2026.07.11",
  role: "공동 기획, 서비스 콘셉트를 기반으로 한 AI 이미지 제작 및 메인 페이지 구현 담당",
  type: "team",
  demo: "https://janggeumi.vercel.app/",
  github: "https://github.com/JanggumCheong/Janggeumi",
  previews: [
    {
      id: "main-page",
      title: "메인 페이지",
      image: janggeumiImages.mainPage,
    },
    {
      id: "search-page",
      title: "검색 페이지",
      image: janggeumiImages.searchPage,
    },
    {
      id: "login-page",
      title: "로그인 페이지",
      image: janggeumiImages.loginPage,
    },
    {
      id: "product-detail-purchase-page",
      title: "상품 구매 페이지",
      image: janggeumiImages.productDetailPurchasePage,
    },
    {
      id: "product-detail-storage-page",
      title: "상품 보관 페이지",
      image: janggeumiImages.productDetailStoragePage,
    },
    {
      id: "product-detail-processing-page",
      title: "상품 처리 페이지",
      image: janggeumiImages.productDetailProcessingPage,
    },
    {
      id: "product-detail-storage-detail-page",
      title: "상품 보관 상세 페이지",
      image: janggeumiImages.productDetailStorageDetailPage,
    },
    {
      id: "product-detail-processing-detail-page",
      title: "상품 처리 상세 페이지",
      image: janggeumiImages.productDetailProcessingDetailPage,
    }
  ],
  responsive: true
}

export default data