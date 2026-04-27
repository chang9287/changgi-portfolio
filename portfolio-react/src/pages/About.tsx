import ProfileSection from "../sections/about/ProfileSection";
import SummarySection from "../sections/about/SummarySection";
import EducationSection from "../sections/about/EducationSection";
import SkillSection from "../sections/about/SkillSection";

export default function About() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-20">
        <ProfileSection />
        <SummarySection />
        <EducationSection />
        <SkillSection />
      </div>
    </main>
  );
}