type EducationCardProps = {
  eduTitle: string;
  eduDetail: string;
  eduPeriod: string;
  eduResult: string;
}

export default function EducationCard({ eduTitle, eduDetail, eduPeriod, eduResult }: EducationCardProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-edu-title">
        {eduTitle}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">
          {eduDetail}
        </span>
        <span className="text-xl font-bold text-edu-period">
          {eduPeriod}
        </span>
      </div>
      <p className="text-lg font-bold text-edu-result">
        {eduResult}
      </p>
    </div>
  );
}
 