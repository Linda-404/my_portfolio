import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Arrow from "../public/images/arrow_down.png";
import Star from "../public/images/icon_staroflight.png";
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
      <Header />
      {/* <div id="invertedcursor"></div> */}
      <main>
        {/* <Image src={Arrow} alt="arrow" width="50" height="100" /> */}
        <div className="index_wrapper">
          <div className="index_container">
            <h1 className="index_h1">WEB</h1>
            <div className="index_sub">
              <div>
                <Image src={Star} alt="icon star of light" />
              </div>
              <h6>Visual</h6>
              <div>
                <Image src={Star} alt="icon star of light" />
              </div>
              <h6>Interaction</h6>
              <div>
                <Image src={Star} alt="icon star of light" />
              </div>
              <h6>Creative</h6>
              <div>
                <Image src={Star} alt="icon star of light" />
              </div>
            </div>
            <h1 className="index_h1">DESIGNER</h1>
          </div>
          {/* <div className="logo_index__container">
            <Logo src={Logo} id="logo_index" />
          </div> */}
        </div>
      </main>

      {/* <Footer /> */}
    </Layout>
  );
}
