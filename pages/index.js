import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Image from "next/image";
import Logo from "../public/images/logo1.png";
import Arrow from "../public/images/arrow_down.png";
import Footer from "../components/layout/Footer";
import Link from "next/link";

// document.body.onmousemove = function (e) {
//   document.documentElement.style.setProperty(
//     "--x",
//     e.clientX + window.scrollX + "px"
//   );
//   document.documentElement.style.setProperty(
//     "--y",
//     e.clientY + window.scrollY + "px"
//   );
// };

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      {/* <Header /> */}
      {/* <div id="invertedcursor"></div> */}
      <main>
        <div className="main__container">
          <div className="main__container__content">
            <div className="main__logo">
              <Image
                src={Logo}
                alt="personal logo"
                width="400"
                height="400"
                className="logo"
              />
            </div>
            <div className="dialog__container">
              <div className="dialog">
                <Heading title="Hello, I´m Linda" />
                <div className="left-point"></div>
              </div>

              <h4>Webdesigner.</h4>
            </div>
          </div>
          <div></div>

          <div className="arrow__container">
            <Image src={Arrow} alt="arrow" width="50" height="100" />
          </div>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

          {/* <nav className="index__nav">
            <button>
              <Link href="/about">About Me</Link>
            </button>
            <button>
              <Link href="/projects">Projects</Link>
            </button>
            <button>
              <Link href="/contact">Contact</Link>
            </button>
          </nav> */}
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
