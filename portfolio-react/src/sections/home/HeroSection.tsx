export default function HeroSection() {
  return (
    <div className="px-6 sm:px-8 flex flex-col gap-8 pb-12 pt-12 sm:pt-20">
      <span 
        className="uppercase border border-main-brown/35 px-4 py-1.5 inline-block w-fit bg-home-bg rounded-full text-xs tracking-widest font-bold text-main-brown"
      >
        portfolio
      </span>
      <div className="flex flex-col gap-4 px-2">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-none">
          안창기
        </h1>
        <p className="text-5xl sm:text-7xl md:text-8xl uppercase font-black text-main-brown font-hero leading-[0.75] tracking-tight">
          front-end<br />
          developer
        </p>
        <p className="font-medium text-sm sm:text-lg md:text-xl mt-6 sm:mt-10 text-main-black/70">
          사용자에게 일관된 경험을 제공할 수 있도록,<br />
          정보 구조와 UI 흐름을 설계하고 구현하는 데 관심이 많습니다.
        </p>
      </div>
    </div>
  );
}