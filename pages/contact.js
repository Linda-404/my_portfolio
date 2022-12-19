import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <Header />
      <main>
        <div className="flex_wrapper">
          <div className="heading_container">
            <h1>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
            </h1>
          </div>
          <div className="content_container">
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
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
