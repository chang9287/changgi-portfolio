import SectionTitle from "../../components/ui/SectionTitle";
import EducationCard from "../../components/ui/EducationCard";

export default function EducationSection() {
  return (
    <section>
      <SectionTitle title={"Education"} />
      <EducationCard 
        eduTitle={"한국해양대학교"}      
        eduDetail={"데이터정보학과"}      
        eduPeriod={"2014.03 ~ 2020.02"}      
        eduResult={"졸업"}      
      />
      <EducationCard 
        eduTitle={"고용노동부 국비지원"}      
        eduDetail={"프론트엔드 개발자(자바 스크립트, 리액트) 실무 양성과정 A "}      
        eduPeriod={"2024.07.30 ~ 2025.01.27"}      
        eduResult={"수료"}      
      />
    </section>
  );
}