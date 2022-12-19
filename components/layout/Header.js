import Nav from "../Nav";
import Image from "next/image";
import Heading from "../Heading";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="header_content">
        <Link href="/">
          <a className="header__logo__container">
            <Logo id="header__logo" />
          </a>
        </Link>
        <h6>Linda Nilsson</h6>
      </div>
      <Nav />
    </header>
  );
}
