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
        <Heading title="Contact" />
        <section className="contact">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/linda-nilsson-8b82b01b2/">
                💻 Linkedin profile
              </a>
            </li>
            <li>📧 linda.ellekari@gmail.com</li>
          </ul>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
