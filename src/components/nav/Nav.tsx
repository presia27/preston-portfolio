import { navLinks } from "@/data/navItems";
import Link from "next/link";

export function Nav() {
  return (
    <div className="bg-accent-lighter/95 accentShadow">
      <div className="contentMargins flex flex-row justify-between gap-2">
        <div className="content-center">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="PSiaProfileGraphic.png"
              alt="Main Graphic"
              width="56"
              height="56"
              className="rounded-2xl"
            />
          </Link>
        </div>

        <div className="content-center flex flex-row gap-4 p-4">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="hover:underline p-2"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}