import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <nav id="hamburger-nav">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <div id="nav-items">
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>Home.</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? "active" : ""}>About.</a>
        </Link>
        <Link href="/projects">
          <a className={router.pathname == "/projects" ? "active" : ""}>
            Projects.
          </a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname == "/contact" ? "active" : ""}>
            Contact.
          </a>
        </Link>
      </div>
    </nav>
  );
}
