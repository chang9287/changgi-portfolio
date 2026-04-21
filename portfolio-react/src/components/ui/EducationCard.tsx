type EducationCardProps = {
  eduTitle: string;
  eduDetail: string;
  eduPeriod: string;
  eduResult: string;
}

export default function EducationCard({ eduTitle, eduDetail, eduPeriod, eduResult }: EducationCardProps) {
  return (
    <div className="mx-4 mt-8 flex flex-col gap-3">
      <h3 className="text-3xl font-bold text-edu-title pl-4">
        {eduTitle}
      </h3>
      <div className="flex items-center justify-between px-6">
        <span className="text-2xl font-bold">
          {eduDetail}
        </span>
        <span className="text-xl font-bold text-edu-period">
          {eduPeriod}
        </span>
      </div>
      <p className="text-lg font-bold text-edu-result px-6">
        {eduResult}
      </p>
    </div>
  );
}
 