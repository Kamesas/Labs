"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type tProps = {
  url: string;
  title: string;
};

export const NavItem = ({ url, title }: tProps) => {
  const path = usePathname();

  const activeClass =
    url === path ? "text-orange-300" : "hover:text-white text-white/80";

  return (
    <li
      className={`${activeClass} flex items-center relative transition-colors duration-300 uppercase tracking-wider`}
    >
      <Link href={url} className="font-medium font-fira">
        {title}
      </Link>
    </li>
  );
};
