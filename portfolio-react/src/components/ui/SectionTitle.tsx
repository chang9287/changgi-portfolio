type SectionTitleProps = {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 
      className="font-title text-6xl lg:text-7xl font-bold uppercase border-b-2 border-gray-300 mx-2 sm:mx-4 px-2" 
    >
      {title}
    </h1>
  );
}