import { useState } from "react";
import { projects } from "@/data/projects";
import type { Skill } from "@/data/skillColors";
import ProjectFilter from "@/components/parts/ProjectFilter";
import ProjectCard from "@/components/parts/ProjectCard";

export default function Projects() {
  console.log(projects);
  console.log(projects.map((p) => [p.title, p.order]));

  /* 필터 상태관리 */
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedType, setSelectedType] = useState<"personal" | "team" | null>(null);
  const [selectedResponsive, setSelectedResponsive] = useState(false);

  /* 필터링 함수 */
  const filterProjects = () => (
    projects.filter((project) => {
      return (
        (
          // 선택된 skills가 있는지 확인
          // selectedSkills
          selectedSkills.length === 0 
          ? true
          : selectedSkills.every((skill) => project.skills.includes(skill))
        ) &&
        (
          // 선택된 type이 있는지 확인 
          // selectedType
          selectedType === null ? true : selectedType === project.type
        ) && 
        (
          // responsive가 true인지 확인 
          // selectedResponsive
          selectedResponsive ? project.responsive === true : true
        )
      ); 
    })
  )

  /* skills 버튼 클릭 함수 */
  const clickSkillButton = (skill: Skill) => {
    // 기존에 스킬이 존재하는지 확인
    // 존재하면 기존에 존제하던거 제거, 존재하지 않는다면 추가
    setSelectedSkills(
      selectedSkills.includes(skill)
      ? selectedSkills.filter((p) => p !== skill)
      : [...selectedSkills, skill]
    )
  }

  /* Options 버튼 클릭 함수 */
  const clickOptionButton = (option: string) => {
    // 프로젝트 전체 보기
    if(option === "프로젝트 전체 보기") {
      // type 선택값 비우기
      setSelectedType(null);
      // 개인 프로젝트, 팀 프로젝트 선택되어 있다면 선택해제
    }
    // 개인 프로젝트
    else if(option === "개인 프로젝트") {
      // type 선택값 personal
      // 프로젝트 전체 보기, 팀 프로젝트 선택되어 있다면 선택해제
      setSelectedType("personal");
    }
    // 팀 프로젝트
    else if(option === "팀 프로젝트") {
      // type 선택값 team
      // 프로젝트 전체 보기, 개인 프로젝트 선택되어 있다면 선택해제
      setSelectedType("team");
    }
    // 반응형
    if(option === "반응형") {
      // responsive true
      setSelectedResponsive((res) => (
        res === true ? false : true
      ));
    }
  }

  const filteredProjects = filterProjects();

  return (
    <main className="py-16 px-4 bg-home-bg min-h-[calc(100vh-64px-64px)]">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-20">
        {/* 프로젝트 필터 */}
        <ProjectFilter 
          projects={projects} 
          clickSkillButton={clickSkillButton}
          clickOptionButton={clickOptionButton}
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