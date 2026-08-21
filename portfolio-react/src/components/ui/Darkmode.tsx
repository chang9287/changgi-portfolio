import { useEffect, useState } from "react";
import { Sun, Moon, Sparkle } from "lucide-react";

const commonCloudStyle = "xi-cloud absolute group-hover:animate-mode-float";
const commonStarStyle = "absolute group-hover:animate-mode-float";

/* 초기 테마 설정 */
const getInitialTheme = () => {
  /* 로컬 스토리지에 저장된 theme 있는지 확인 */
  const savedTheme = localStorage.getItem("theme");

  /* 있다면 가져오는데 dark면 true, 아니면 false */
  return savedTheme === "dark";
}

export default function Darkmode() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleModeToggle = () => {
    setIsDark(prev => {
      const nextTheme = !prev;

      localStorage.setItem("theme", nextTheme ? "dark" : "light");

      return nextTheme;
    });
  };

  /* Style */
  const lightModeVisible = isDark ? "opacity-0" : "opacity-100";
  const darkModeVisible = isDark ? "opacity-100" : "opacity-0";

  return (
    <label className={`inline-block cursor-pointer w-20 h-10 rounded-3xl relative overflow-hidden group ${isDark ? "bg-[linear-gradient(135deg,#2C3240,#495057)]" : "bg-[linear-gradient(135deg,#BFD9E6,#F4E4AE)]"}`}>
      <input 
        type="checkbox"
        checked={isDark}
        onChange={handleModeToggle}
        className="sr-only" 
      />
      {/* 아이콘 */}
      <div className={`z-10 w-8 h-8 rounded-full grid place-items-center absolute left-1 top-1/2 -translate-y-1/2 transition-transform duration-300 border ${isDark ? "translate-x-10 bg-dark-moon-bg border-dark-moon-border" : "bg-dark-sun-bg border-dark-sun-border"}`}>
        {/* 라이트 모드 */}
        <Sun size={20} color="#F2B94B" fill="#F2B94B" className={`col-start-1 row-start-1 ${lightModeVisible}`} />

        {/* 다크 모드 */}
        <Moon size={20} strokeWidth={1} color="#FFD95A" fill="#FFD95A" className={`col-start-1 row-start-1 ${darkModeVisible}`} />
      </div>
      {/* 배경 */}
      {/* 라이트 모드 */}
      {/* 구름 1 */}
      <i className={`top-2 right-2 text-lg text-white/90 ${commonCloudStyle} ${lightModeVisible}`} />
      {/* 구름 2 */}
      <i className={`top-5 right-8 text-sm text-white/80 ${commonCloudStyle} group-hover:[animation-delay:0.4s] ${lightModeVisible}`} />

      {/* 다크 모드 */}
      {/* 별 1 */}
      <Sparkle size={9} color="#FFF2B2" fill="#FFF2B2" className={`left-3 top-3 ${commonStarStyle} ${darkModeVisible}`} />
      {/* 별 2 */}
      <Sparkle size={6} color="#FFF2B2" fill="#FFF2B2" className={`left-10 top-2 group-hover:[animation-delay:0.4s] ${commonStarStyle} ${darkModeVisible}`} />
      {/* 별 3 */}
      <Sparkle size={5} color="#FFF2B2" fill="#FFF2B2" className={`left-7 top-6 group-hover:[animation-delay:0.8s] ${commonStarStyle} ${darkModeVisible}`} />
    </label>
  );
}