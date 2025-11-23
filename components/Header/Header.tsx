"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={136}
          height={16}
          loading="eager"
        ></Image>
      </Link>

      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li className={css.headerItem}>
            <Link
              href="/"
              className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
            >
              Home
            </Link>
          </li>
          <li className={css.headerItem}>
            <Link
              href="/catalog"
              className={`${css.navLink} ${
                pathname === "/catalog" ? css.active : ""
              }`}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
