import { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import { skills } from "../../data/skills";

/* Categories 메뉴 */
const categories = [
  "Language", 
  "Styling", 
  "Front-End", 
  "Library", 
  "Tools", 
  "Design"
]

export default function SkillSection() {
  /* 카테고리 active상태관리 */
  const [activeCategory, setActiveCategory] = useState("");

  /* 아이콘 선택 상태관리 */
  const [selectedIcon, setSelectedIcon] = useState("");
  
  /* 선택된 아이콘 찾기 */
  const selectedSkill = skills.find((skill) => skill.id === selectedIcon );

  return (
    <section>
      <SectionTitle title={"skills"} />
      <div className="mt-8 mx-4 flex flex-col gap-10">
        {/* categories 메뉴 */}
        <div className="w-full px-6">
          <ul className="bg-home-bg py-1 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 w-full justify-items-center rounded-2xl">
          {categories.map((category) => (
            <li key={category} className="py-2">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory((click) => (click ===   category ? "" : category));
                  setSelectedIcon("");
                }}
                className={`outline-none font-bold cursor-pointer text-xl hover:text-skills-active-category transition duration-200 ${activeCategory === category ? "text-skills-active-category underline" : "text-skills-category"}`}
              >
                {category}
              </button>
            </li>
          ))}
          </ul>
        </div>
        {/* Skills 아이콘 이미지 */}
        <div className="px-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4 justify-items-center w-full py-3">
          {skills.map((skill) => {
            const isblur = activeCategory !== "" && skill.category !== activeCategory;

            return (
              <button 
                key={skill.id}
                type="button"
                disabled={isblur}
                onClick={() => 
                  setSelectedIcon((click) => (click === skill.id ? "" : skill.id))
                }
                className={`
                  outline-none cursor-pointer w-20 h-20
                  ${isblur ? "blur-[5px] opacity-40" : ""} 
                  ${selectedIcon === skill.id ? "shadow-[0_0_0_2px_#222]" : ""}
                `}
              >
                <img 
                  src={skill.img} 
                  alt={skill.name}
                  className="w-full h-full"
                />
              </button>
              
            );
          })}
          </div>
        </div>
        {/* Skills 아이콘 경험 */}
        <div className="px-6">
          <h6 className={`
            text-lg text-gray-500 font-bold ml-1 mb-1 
            ${selectedSkill ? "text-main-black" : ""}
          `}>
            {selectedSkill ? selectedSkill.name : "선택된 기술"}
          </h6>
          <p className={`
            border border-main-black rounded-2xl py-3 px-6 text-md leading-relaxed text-gray-500 
            ${selectedSkill ? "text-main-black" : ""}
          `}>
            {selectedSkill ? selectedSkill.description : "기술 아이콘을 선택하면 사용 경험을 볼 수 있습니다."}
          </p>
        </div>
      </div>
    </section>
  );
}