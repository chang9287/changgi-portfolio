import { icons } from "../assets/icons";

export interface Skill {
  id: string;
  name: string;
  category: string;
  img: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: "html",
    name: "HTML",
    category: "Language",
    img: icons.html,
    description: "HTML의 기본적인 구조와 태그를 자유롭게 활용 할 수 있습니다.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Language",
    img: icons.javascript,
    description: "ES6+ 문법을 활용하여 코드를 작성 할 수 있습니다.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    img: icons.typescript,
    description: "기본 타입, interface, type을 활용하여 데이터 구조를 정의하고, React 프로젝트에 적용하여 코드의 안정성과 가독성을 개선한 경험이 있습니다.",
  },
  {
    id: "css",
    name: "CSS",
    category: "Styling",
    img: icons.css,
    description: "순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.",
  },
  {
    id: "sass",
    name: "SASS",
    category: "Styling",
    img: icons.sass,
    description: "Sass를 활용하여 팀 프로젝트에서 효율적인 스타일 관리를 경험하였습니다.",
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    category: "Styling",
    img: icons.tailwindcss,
    description: "Tailwind CSS의 유틸리티 클래스 기반 스타일링을 활용하여 빠르게 UI를 구성하고, 반응형 레이아웃과 일관된 디자인을 구현한 경험이 있습니다.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Styling",
    img: icons.bootstrap,
    description: "Bootstrap의 기본 구조와 컴포넌트를 활용해 간단한 예제를 제작해본 경험이 있습니다.",
  },
  {
    id: "react",
    name: "React",
    category: "Front-End",
    img: icons.react,
    description: "컴포넌트 기반 구조를 설계하고 JSX를 활용해 UI를 구성하며, 상태 관리와 라우팅, props 전달을 통해 데이터 흐름을 구현한 경험이 있습니다.",
  },
  {
    id: "swiper",
    name: "Swiper",
    category: "Library",
    img: icons.swiper,
    description: "Swiper를 사용해 이미지 슬라이드 쇼를 구현하며 기본 옵션 설정과 구조를 익혔습니다.",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    img: icons.git,
    description: "코드 저장과 버전 기록을 위해 사용했습니다.",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    img: icons.github,
    description: "외부 저장과 협업을 위해 사용하였으며, 자동화된 빌드 및 배포 프로세스를 설정한 경험이 있습니다.",
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "Tools",
    img: icons.netlify,
    description: "다양한 정적 웹 프로젝트를 직접 배포해보며 배포 환경을 경험해봤습니다.",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    img: icons.figma,
    description: "팀 협업, 개인작업으로 인한 프로젝트 기획, 와이어프레임, 스타일가이드를 만든 경험이 있습니다.",
  },
]
