import { navLinks } from "@/data/navItems";
import Link from "next/link";

export function Nav() {
  return (
    <div className="">
      <div className="contentMargins flex flex-row justify-between gap-2">
        <div>
          <Link href="/">
            Placeholder
          </Link>
        </div>

        <div className="content-center flex flex-row gap-4 p-4">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}