import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Arrow from "../public/images/arrow_down.png";
import Star from "../public/images/icon_staroflight.png";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

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

const headingVariants = {
  hidden: {
    y: "20vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      // duration: 0.75,
      type: "spring",
      // stiffness: 80,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const h6Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const mainVariants = {
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      {/* <div id="invertedcursor"></div> */}
      <motion.main variants={mainVariants} exit="exit">
        {/* <Image src={Arrow} alt="arrow" width="50" height="100" /> */}
        <div className="index_wrapper">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="index_container"
          >
            <h1 className="index_h1">WEB</h1>
            <div className="index_sub">
              <div className="star_container">
                <Image src={Star} alt="icon star of light" />
              </div>
              <motion.h6 variants={h6Variants}>Visual</motion.h6>
              <div className="star_container">
                <Image src={Star} alt="icon star of light" />
              </div>
              <motion.h6 variants={h6Variants}>Interaction</motion.h6>
              <div className="star_container">
                <Image src={Star} alt="icon star of light" />
              </div>
              <motion.h6 variants={h6Variants}>Creative</motion.h6>
              <div className="star_container">
                <Image src={Star} alt="icon star of light" />
              </div>
            </div>
            <h1 className="index_h1">DESIGNER</h1>
          </motion.div>
          {/* <div className="logo_index__container">
            <Logo src={Logo} id="logo_index" />
          </div> */}
        </div>
      </motion.main>
    </Layout>
  );
}
