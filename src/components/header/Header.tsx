import Link from "next/link";
import { NavItem } from "./NavItem";

// with the nav link 13.5kB
// without the nav link 13.2kB

export const Header = () => {
  const pages = {
    todo: { path: "/todo", title: "Todo" },
    tailwind: { path: "/tailwind", title: "Tailwind" },
    grid: { path: "/grid", title: "CSS grid" },
  } as const;

  return (
    <header className="h-12 flex items-center justify-between px-4">
      <Link href="/" className="text-green-400 font-bold">
        T_odo
      </Link>

      <nav>
        <ul className="flex gap-4">
          {Object.entries(pages).map((page) => {
            const [key, value] = page;

            return <NavItem key={key} title={value.title} url={value.path} />;
          })}
        </ul>
      </nav>
    </header>
  );
};
