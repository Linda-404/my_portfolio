import Nav from "../Nav";
import Logo from "../../public/images/logo1.png";
import Image from "next/image";
import Heading from "../Heading";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="logo_dialog">
        <div>
          <Image src={Logo} alt="personal logo" width="100" height="100" />
        </div>
        <div className="dialog">
          <Heading title={router.pathname == "/about" ? "About Me" : ""} />
          <Heading title={router.pathname == "/projects" ? "Projects" : ""} />
          <Heading title={router.pathname == "/contact" ? "Contact" : ""} />
          <div className="left-point"></div>
        </div>
      </div>
      <Nav />
    </header>
  );
}
