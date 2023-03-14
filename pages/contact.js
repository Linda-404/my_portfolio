import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, type: "spring" },
  },
};

const contentVariants = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, type: "spring" },
  },
};

const mainVariants = {
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <motion.main variants={mainVariants} exit="exit">
        <div className="flex_wrapper">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="heading_container"
          >
            <h1>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
            </h1>
          </motion.div>
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="content_container"
          >
            <div className="contact_wrapper">
              <ul className="contact_list">
                <li>
                  <a href="https://www.linkedin.com/in/linda-nilsson-8b82b01b2/">
                    💻 Linkedin profile
                  </a>
                </li>
                <li>📧 linda.ellekari@gmail.com</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </Layout>
  );
}
