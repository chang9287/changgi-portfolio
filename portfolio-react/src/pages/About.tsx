import EducationSection from "../sections/about/EducationSection";
import SkillSection from "../sections/about/SkillSection";

export default function About() {
  return (
    <main className="">
      <div className="max-w-[1280px] w-full mx-auto border">
        <EducationSection />
        <SkillSection />
      </div>
    </main>
  );
}