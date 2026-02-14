import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-12 flex items-center justify-between px-4">
      <Link href="/" className="text-green-400">
        T_odo
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
