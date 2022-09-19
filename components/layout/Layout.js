import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {/* <div id="invertedcursor"></div> */}
      <div className="layout__container">{children}</div>

      {/* <Footer /> */}
    </>
  );
}
