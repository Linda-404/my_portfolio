import Header from "./Header";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  // const router = useRouter();
  return (
    <>
      <Header />
      <div
        // key={router.route}
        // initial="initialState"
        // animate="animateState"
        // exit="exitState"
        // transition={{
        //   duration: 0.2,
        // }}
        // variants={{
        //   initialState: {
        //     opacity: 1,
        //   },
        //   animateState: {
        //     opacity: 1,
        //   },
        //   exitState: {
        //     opacity: 1,
        //   },
        // }}
        className="layout__container"
      >
        {children}
      </div>
      {/* <Header /> */}
      {/* <div id="invertedcursor"></div> */}
      {/* <div className="layout__container">{children}</div> */}

      {/* <Footer /> */}
    </>
  );
}
