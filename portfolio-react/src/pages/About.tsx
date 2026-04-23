import ProfileSection from "../sections/about/ProfileSection";
import SummarySection from "../sections/about/SummarySection";
import EducationSection from "../sections/about/EducationSection";
import SkillSection from "../sections/about/SkillSection";

export default function About() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-20">
        <ProfileSection />
        <SummarySection />
        <EducationSection />
        <SkillSection />
      </div>
    </main>
  );
}