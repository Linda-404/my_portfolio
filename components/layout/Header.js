import Nav from "../Nav";
import Logo from "../../public/images/logo1.png";
import Image from "next/image";
import Heading from "../Heading";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div>
        <div className="logo_dialog">
          <Link href="/">
            <a className="header__logo">
              <Image src={Logo} alt="personal logo" width="100" height="100" />
            </a>
          </Link>
          <div className="dialog">
            <Heading title={router.pathname == "/about" ? "About Me" : ""} />
            <Heading title={router.pathname == "/projects" ? "Projects" : ""} />
            <Heading title={router.pathname == "/contact" ? "Contact" : ""} />
            <div className="left-point"></div>
          </div>
        </div>
      </div>

      <Nav />
    </header>
  );
}
