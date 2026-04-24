import SectionTitle from "../../components/ui/SectionTitle";

export default function SummarySection() {
  return (
    <section>
      <SectionTitle title={"summary"} />
      <div className="px-10 mt-8 text-main-black text-xl space-y-4">
        <p>
          처음에는 화면이 바로 보이는 점이 흥미로워 프론트엔드를 시작했습니다.<br />
          하지만 프로젝트를 진행하며 기능이 있어도 사용자가 쉽게 찾지 못하는 경험을 하게 되었고,
          그 이후로는 사용자 입장에서 자연스럽게 이해되는 구조를 만드는 데 더 집중하게 되었습니다.
        </p>
        <p>
          단순히 기능을 구현하는 것을 넘어,
          사용자가 고민하지 않고 사용할 수 있는 UI 흐름을 만드는 것을 중요하게 생각합니다.
        </p>
      </div>
    </section>
  );
}