import HeroSection from "../sections/home/HeroSection";
import HomeNav from "../components/sections/HomeNav";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px-64px)] flex flex-col">
      <div className="bg-home-bg w-full">
        <div className="max-w-[1280px] w-full mx-auto">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-[1280px] w-full mx-auto mt-8 px-4 pb-8">
        <HomeNav />
      </div>
    </main>
  );
}