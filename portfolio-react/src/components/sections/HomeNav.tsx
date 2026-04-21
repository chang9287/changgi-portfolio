import { Link } from "react-router-dom";
import { LucideChevronsRight } from "lucide-react" ;


export default function HomeNav() {
  const HOME_NAV_LIST = [
    { path: "/about", title: "About", type: "internal"},
    { path: "/projects", title: "Projects", type: "internal"},
    { path: "https://github.com/chang9287", title: "Github", type: "external"},
    { path: "/contact", title: "Contact", type: "internal"}
  ]

  /* Common Style */
  const linkClass = "relative border-2 w-72 h-36 font-bold text-5xl flex p-3 items-end rounded-xl text-main-brown border-main-brown group hover:bg-main-brown hover:text-white transition duration-200";
  
  const iconClass = "absolute top-2 right-2 w-14 h-14 stroke-2 opacity-50 group-hover:text-white group-hover:opacity-100 transition duration-200";

  return (
    <section className="flex justify-center gap-3">
      {HOME_NAV_LIST.map((list) => 
        list.type === "external" ? (
          <a
            key={list.title} 
            href={list.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass}`}
          >
            <LucideChevronsRight className={`${iconClass}`} />
            {list.title}
          </a>
        ) : (
          <Link
            key={list.title}
            to={list.path}
            className={`${linkClass}`}
          >
            <LucideChevronsRight className={`${iconClass}`} />
            {list.title}
          </Link>
        )
      )}
    </section>
  );
}
