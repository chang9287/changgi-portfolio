import { NavLink } from "react-router-dom";

export default function Header() {

  const HEADER_NAV_LIST = [
    { path: "/", title: "Home"},
    { path: "/about", title: "About"},
    { path: "/projects", title: "Projects"},
    { path: "/contact", title: "Contact"}
  ]

  return (
    <header className="w-full h-16 border">
      <div className="max-w-[1280px] mx-auto h-full border flex justify-between items-center px-3">
        <button className="dark-mode-btn border px-4 py-2">버튼</button>
        <nav className="header-nav">
          <ul className="flex gap-5">
            {HEADER_NAV_LIST. map((list) => (
              <li key={list.path}>
                <NavLink
                  to={list.path}
                  end={list.path === "/"}
                  className={({isActive}) => 
                    `block font-bold text-2xl ${
                      isActive 
                      ? "text-[#A18A7B]" 
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
      </div>
    </header>
  );
}