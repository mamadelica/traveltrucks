
import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
          <Link href="/" className={css.logo}>
        <Image src="/icons/logo.svg" alt="Logo" width={136} height={16}></Image>
      </Link>

      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li className={css.headerItem}>
            <Link href="/" className={css.navLink}>Home</Link>
          </li>
          <li className={css.headerItem}>
            <Link href="/catalog" className={css.navLink}>Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
