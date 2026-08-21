import { useState } from "react";
import { projects } from "@/data/projects";
import type { Skill } from "@/data/skillColors";
import type { Option } from "@/components/parts/ProjectFilter";
import ProjectFilter from "@/components/parts/ProjectFilter";
import ProjectCard from "@/components/parts/ProjectCard";

export default function Projects() {
  /* 필터 상태관리 */
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedType, setSelectedType] = useState<"personal" | "team" | null>(null);
  const [selectedResponsive, setSelectedResponsive] = useState(false);

  /* 필터링 함수 */
  const filteredProjects = projects.filter((project) => {
    /* 스킬 필터 */
    const matchesSkills = 
      selectedSkills.length === 0 || 
      selectedSkills.every((skill) => project.skills.includes(skill));

    /* 타입 필터 */
    const matchesType = 
      selectedType === null || selectedType === project.type;

    /* 반응형 필터 */
    const matchesResponsive = 
      !selectedResponsive || project.responsive;

    return (
      matchesSkills && matchesType && matchesResponsive
    ); 
  })

  /* skills 버튼 클릭 함수 */
  const handleSkillButtonClick = (skill: Skill) => {
    setSelectedSkills((prevSkills) => (
      prevSkills.includes(skill)
        ? prevSkills.filter((prevSkill) => prevSkill !== skill)
        : [...prevSkills, skill]
    ))
  }

  /* Options 버튼 클릭 함수 */
  const handleOptionButtonClick = (option: Option) => {
    //만약 반응형이라면
    if(option.responsive) {
      setSelectedResponsive((prev) => !prev);
      return;
    }
    setSelectedType(option.type ?? null);
  }

  return (
    <main className="py-16 px-4 bg-main-bg min-h-[calc(100vh-64px-64px)]">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-20">
        {/* 프로젝트 필터 */}
        <ProjectFilter 
          projects={projects}
          onClickSkillButton={handleSkillButtonClick}
          onClickOptionButton={handleOptionButtonClick}
          selectedSkills={selectedSkills}
          selectedType={selectedType}
          selectedResponsive={selectedResponsive}
        />
        
        {/* 프로젝트 카드 */}
        <div>
          {filteredProjects.length === 0 ? (
            <p className="py-10 text-center text-lg text-project-empty">
              조건에 맞는 프로젝트가 없습니다.
            </p>
          ) : (
            <div className="flex flex-col gap-10">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}