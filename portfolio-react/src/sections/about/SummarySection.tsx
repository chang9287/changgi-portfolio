import SectionTitle from "../../components/ui/SectionTitle";

const SUMMARY_ITEMS = [
  {
    id: 1,
    title: "사용자의 정보 탐색 흐름을 기준으로 UI를 구성합니다.",
    desc: "기능이 구현되어 있다는 사실보다 사용자가 별도의 설명 없이 기능을 발견하고, 원하는 정보까지 자연스럽게 도달할 수 있는지를 중요하게 생각합니다."
  },
  {
    id: 2,
    title: "기술을 선택할 때는 프로젝트에 적합한 판단의 근거를 확인합니다.",
    desc: "Web Vitals와 같은 정량 지표뿐만 아니라 유지보수 비용, 외부 의존성, 프로젝트의 규모와 운영 조건을 함께 비교하며 프로젝트에 적합한 방향을 선택합니다."
  },
  {
    id: 3,
    title: "협업에서는 구현에 앞서 서로의 맥락과 기준을 맞추는 것을 중요하게 생각합니다.",
    desc: "원활한 의사소통과 더불어 현재 상태와 변경 범위, 기대 결과를 명확하게 공유하고 작업 단위와 완료 기준을 함께 맞춰 협업 과정의 혼선과 재작업을 줄이고자 합니다."
  },
  {
    id: 4,
    title: "새로운 기술과 변화를 이해하고 프로젝트에 적절히 활용하는 개발자를 목표로 합니다.",
    desc: "새로운 기술과 도구를 배우는 데 그치지 않고 기존 프로젝트에 직접 적용하며, 기존 방식과 비교해 기술에 대한 이해와 활용 범위를 넓혀가고 있습니다."
  }
]

export default function SummarySection() {
  return (
    <section>
      <SectionTitle title={"summary"} />
      <ul className="px-6 sm:px-10 mt-6 sm:mt-8 text-main-black text-base sm:text-lg lg:text-xl space-y-3 sm:space-y-4">
        {SUMMARY_ITEMS.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg">{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}