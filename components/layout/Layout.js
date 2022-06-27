import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <div className="layout__container">{children}</div>

      {/* <Footer /> */}
    </>
  );
}
