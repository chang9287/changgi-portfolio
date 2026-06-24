import HeroSection from "../sections/home/HeroSection";
import HomeNav from "../components/parts/HomeNav";

const GRID_BACKGROUND = `
  [background-image:linear-gradient(rgba(108,93,83,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(108,93,83,0.06)_1px,transparent_1px)]
  dark:[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
  [background-size:60px_60px]
`;

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px-64px)] flex flex-col">
      <div className={`bg-main-bg w-full ${GRID_BACKGROUND}`}>
        <div className="max-w-6xl w-full mx-auto">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto mt-8 px-4 pb-8">
        <HomeNav />
      </div>
    </main>
  );
}