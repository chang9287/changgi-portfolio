import type { Project } from "@/types/project";
import type { Skill } from "@/data/skillColors";

type ProjectFilterProps = {
  projects: Project[];
  clickSkillButton: (skill: Skill) => void;
  clickOptionButton: (option: string) => void;
  selectedSkills: Skill[];
  selectedType: "personal" | "team" | null
  selectedResponsive: boolean;
}

const optionList: string[] = [
  "프로젝트 전체 보기",
  "개인 프로젝트",
  "팀 프로젝트",
  "반응형"
]

const commonButtonStyle = "border cursor-pointer px-3 py-2 text-sm rounded-3xl transition-all duration-300 hover:border-projectfilter-button-accent"

export default function ProjectFilter({
  projects, 
  clickSkillButton, 
  clickOptionButton, 
  selectedSkills, 
  selectedType, 
  selectedResponsive
}: ProjectFilterProps) {

  /* flat 메서드로 skills들 모으기 */
  const flattedSkills = projects.map(p => p.skills).flat();
  console.log(flattedSkills);

  /* set 메서드로 중복제거 및 새 배열에 담기 */
  const skillList = [...new Set(flattedSkills)];
  console.log(skillList);
  
  return (
    <div className="flex flex-col gap-3">
      <div className="p-5 rounded-3xl bg-projectfilter-bg border border-projectfilter-border grid lg:grid-cols-[180px_1fr] gap-5 lg:gap-0">
        <h1 className="font-bold text-2xl lg:pr-20 text-projectfilter-title">Filter</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h6 className="text-projectfilter-subtitle">사용 기술</h6>
            <div className="flex gap-2 flex-wrap">
              {skillList.map((list) => (
                <button 
                  key={list} 
                  onClick={() => clickSkillButton(list)}
                  className={`
                    ${commonButtonStyle} 
                    ${selectedSkills.includes(list) 
                      ? "bg-projectfilter-button-accent text-white border-projectfilter-button-accent" 
                      : "bg-projectfilter-button-bg text-projectfilter-button-text border border-projectfilter-button-border"
                    }
                  `}
                >
                  {list}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-projectfilter-subtitle">프로젝트 옵션</h6>
            <div className="flex gap-2 flex-wrap">
              {optionList.map((list) => (
                <button 
                  key={list} 
                  onClick={() => clickOptionButton(list)}
                  className={`
                    ${commonButtonStyle}
                    ${
                      (
                        (list === "프로젝트 전체 보기" && selectedType === null) ||
                        (list === "개인 프로젝트" && selectedType === "personal") ||
                        (list === "팀 프로젝트" && selectedType === "team") ||
                        (list === "반응형" && selectedResponsive)
                      )
                        ? "bg-projectfilter-button-accent text-white border-projectfilter-button-accent"
                        : "bg-projectfilter-button-bg text-projectfilter-button-text border border-projectfilter-button-border"
                    }
                  `}
                >
                  {list}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-project-empty">프로젝트를 클릭하면 더욱 자세히 볼 수 있습니다.</p>
    </div>
  );
}