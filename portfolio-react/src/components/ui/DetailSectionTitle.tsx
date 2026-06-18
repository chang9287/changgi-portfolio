type DetailSectionTitleProps = {
  title: string;
}

export default function DetailSectionTitle({ title }: DetailSectionTitleProps) {
  return (
    <h1 className="text-xl sm:text-3xl font-extrabold mt-16 mb-2">{title}</h1>
  );
}