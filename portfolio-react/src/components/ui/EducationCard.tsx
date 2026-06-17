type EducationCardProps = {
  eduTitle: string;
  eduDetail: string;
  eduPeriod: string;
  eduResult: string;
}

export default function EducationCard({ eduTitle, eduDetail, eduPeriod, eduResult }: EducationCardProps) {
  return (
    <div className="mx-4 mt-6 sm:mt-8 flex flex-col gap-3">
      <h3 className="text-2xl lg:text-3xl font-bold text-edu-title px-2 sm:px-6">
        {eduTitle}
      </h3>
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center justify-between px-2 sm:px-6">
        <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-[1.1]">
          {eduDetail}
        </span>
        <span className="text-base sm:text-lg lg:text-xl self-end lg:self-auto font-bold text-edu-period">
          {eduPeriod}
        </span>
      </div>
      <p className="text-base lg:text-lg font-bold text-edu-result px-2 sm:px-6">
        {eduResult}
      </p>
    </div>
  );
}
 