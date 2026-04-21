import { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import { skills } from "../../data/skills";


export default function SkillSection() {
  
  /* Categories 메뉴 */
  const categories = [
    "Language", "", ""
  ]


  /* 작업 순서 */
  // Categories 배열을 가지고 메뉴 만들기
  // 메뉴의 카테고리 클릭시 active상태
  // 처음 상태는 아무것도 선택 안 된 상태
  // 밑에 아이콘 이미지는 map으로 전부 다 불러오기 
  // 메뉴가 클릭되어서 active상태라면 skill.category와 비교
  // 같으면 가만히 두고 다르면 blur처리
  // blur 된 아이콘은 클릭 불가능
  // 아이콘 클릭시 선택된 아이콘에 해당되는 skill의 id값 저장
  // 만약 다시 같은 아이콘 클릭하면 초기화
  // 선택된 아이콘을 기준으로 skills에서 해당 아이콘 찾기
  // 찾은 아이콘의 description을 출력하고
  // 찾은 상태가 아니라면 "기술 아이콘을 선택하면 사용 경험을 볼 수 있습니다." 이게 출력 되어야함

  return (
    <section>
      <SectionTitle title={"skills"} />
      <div>
        {skills.map((skill) => (
          <div key={skill.id}>{skill.category}</div>
        ))}
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