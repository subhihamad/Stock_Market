"use client";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathName = usePathname();
  const isActive = (path: string) => {
    if (path === "/") return pathName === "/";
    return pathName.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-10 font-medium">
      {NAV_LINKS.map((nav, index) => (
        <li key={nav.href}>
          <Link
            href={nav.href}
            className={`hover:text-yellow-500 transition-colors ${isActive(nav.href) ? "text-gray-100" : ""}`}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
