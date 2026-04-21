import { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import { skills } from "../../data/skills";


export default function SkillSection() {
  /* category 선택 */
  const [activeCategory, setActiveCategory] = useState("");

  /* icon 선택 */
  const [selectedIcon, setSelectedIcon] = useState();

  return (
    <section>
      <SectionTitle title={"skills"} />
      <div>
        {/* icon-category */}
        {/* 
          카테고리 선택 
          - 해당 아이콘을 제외한 나머지 아이콘 블러처리
          - 선택 한 번 더 누르면 원상복귀
        */}
        <ul>
          <li></li>
        </ul>
        <div>
          {/* icon-image */}
        </div>
        <p>
          {/* icon-description */}
          {/* 
            아이콘 선택하면 해당 아이콘에 맞는 description
          */}
        </p>
      </div>
    </section>
  );
}

/*
skills.ts 구조
{
  id: "html",
  name: "HTML",
  category: "Language",
  img: icons.html,
  description: "HTML의 기본적인 구조와 태그를 자유롭게 활용 할 수 있습니다.",
}
*/