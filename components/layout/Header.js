import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header__link">
        <Link href="/">🏠</Link>
      </div>
      <div className="header__link">
        <Link href="/about">🤓</Link>
      </div>
      <div className="header__link">
        <Link href="/projects">🎨</Link>
      </div>
      <div className="header__link">
        <Link href="contact">📮</Link>
      </div>
    </header>
  );
}
