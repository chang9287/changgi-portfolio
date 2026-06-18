import type { ProjectData } from "../../../types/project";
import { cafe24Images } from "./images";


const data: ProjectData = {
  id: "cafe24-clone",
  title: "SnapLoom(카페24) 클론코딩",
  summary: "실제 쇼핑몰 서비스의 구매 흐름을 구현하며, 컴포넌트 기반 설계와 전역 상태 관리를 중심으로 UI와 기능을 구현한 클론코딩 프로젝트입니다.",
  thumbnail: cafe24Images.thumbnail,
  keyPoints: [
    "전역 상태 관리를 통한 장바구니 데이터 구조 설계",
    "컴포넌트 재사용성을 고려한 UI 구조 설계"
  ],
  skills: ["React", "CSS3", "JavaScript"],
  period: "2025.01 ~ 2025.02",
  role: "UI 설계 및 구현 전반 담당",
  type: "personal",
  demo: "https://changgi-react-shoppingmall.netlify.app/",
  github: "https://github.com/chang9287/react-shoppingmall",
  previews: [
    {
      title: "메인 페이지",
      image: cafe24Images.mainPage,
    },
    {
      title: "카테고리 페이지",
      image: cafe24Images.categoryPage,
    },
    {
      title: "상품 상세 페이지",
      image: cafe24Images.productDetailPage,
    },
    {
      title: "포토 리뷰 페이지",
      image: cafe24Images.photoReviewPage,
    },
    {
      title: "포토 리뷰 상세 페이지",
      image: cafe24Images.photoReviewDetailPage,
    },
    {
      title: "로그인 페이지",
      image: cafe24Images.loginPage,
    },
    {
      title: "장바구니 페이지",
      image: cafe24Images.cartPage,
    }
  ],
  responsive: false
}

export default data