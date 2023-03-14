import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const headingvariants = {
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, type: "tween" },
  },
};

const contentvariants = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, type: "tween" },
  },
};

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      {/* <Header /> */}
      <main>
        <div className="flex_wrapper">
          <motion.div
            variants={headingvariants}
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
            variants={contentvariants}
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
      </main>
      <Footer />
    </Layout>
  );
}
