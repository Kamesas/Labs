import Link from "next/link";
import { NavItem } from "./NavItem";

// with the nav link 13.5kB
// without the nav link 13.2kB
//
export const Header = () => {
  const pages = {
    todo: { path: "/todo", title: "Todo" },
    taiwind: { path: "/tailwind", title: "Tailwind" },
    grid: { path: "/grid", title: "Css grid" },
    gsap: { path: "/gsap", title: "GSAP" },
    ttt: { path: "/tic-tac-toe", title: "TTT" },
  } as const;

  return (
    <header className="h-12 flex items-center justify-between px-4">
      <Link href="/" className="text-green-400 font-bold">
        T_odo
      </Link>

      <nav>
        <ul className="flex gap-4">
          {Object.keys(pages).map((page) => {
            const currPage = pages[page as keyof typeof pages];

            return (
              <NavItem key={page} title={currPage.title} url={currPage.path} />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
