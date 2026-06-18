import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const HEADER_NAV_LIST = [
    { path: "/", title: "Home"},
    { path: "/about", title: "About"},
    { path: "/projects", title: "Projects"},
    { path: "/contact", title: "Contact"}
  ]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  /* 반응형에서 nav 열었을 때 스크롤 막기 */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    }
  },[isMenuOpen]);

  /* 반응형에서 스크롤 했을 때 header 배경 */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <>
      <header className={`w-full h-16 sticky top-0 transition-all duration-300 z-30 ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)]" : "bg-white"}`}>
        <div className="relative max-w-6xl mx-auto h-full flex justify-between items-center px-3">
          <button className="border px-4 py-2">버튼</button>
          <nav className="hidden sm:block">
            <ul className="flex gap-3 sm:gap-5">
              {HEADER_NAV_LIST.map((list) => (
                <li key={list.path}>
                  <NavLink
                    to={list.path}
                    end={list.path === "/"}
                    className={({isActive}) => 
                      `block font-bold text-2xl ${
                        isActive 
                        ? "text-header-active" 
                        : "text-main-black"
                      }`
                    }
                  >
                    {list.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button 
            onClick={handleMobileMenuOpen}
            className="absolute right-3 top-1/2 -translate-y-1/2  cursor-pointer sm:hidden"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>
      {/* 반응형 뒷 배경 */}
      {isMenuOpen && (
        <div
          onClick={handleMobileMenuClose}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}
      {/* 반응형 nav 메뉴 */}
      <nav 
        className={`fixed top-0 right-0 bg-white w-[max(400px,80dvw)] max-w-dvw h-dvh shadow-[0_0_32px_rgba(0,0,0,0.18)] z-50 transition-transform duration-300 sm:hidden ${isMenuOpen ? "translate-x-0" :"translate-x-full"}`}
      >
        <div className="flex justify-end">
          <button 
            onClick={handleMobileMenuClose} 
            className="cursor-pointer p-4 transition-all duration-300 hover:text-gray-400"
          >
            <X size={30} />
          </button>
        </div>
        <ul className="flex flex-col">
          {HEADER_NAV_LIST.map((list) => (
            <li key={list.path} className="border-b border-gray-200">
              <NavLink
                to={list.path}
                end={list.path === "/"}
                onClick={handleMobileMenuClose}
                className={({isActive}) => 
                  `block font-extrabold text-xl px-6 py-5 hover:text-header-active transition-all duration-300 hover:scale-105 origin-left ${
                    isActive 
                    ? "text-header-active" 
                    : "text-main-black"
                  }`
                }
              >
                {list.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}