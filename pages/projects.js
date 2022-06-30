import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import SpoilrImg from "../public/images/screenshot_spoilralert.png";
import WitchImg from "../public/images/screenshot_witchescaultron.png";
import PeezyImg from "../public/images/screenshot_peezy.png";
import StyleguideImg from "../public/images/screenshot_styleguide.png";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <Layout>
      <Head title="Projects" />
      <div className="wrapper">
        <Header />
        <main>
          <Heading title="Projects" />
          <section>
            <p>
              Here is a small collection of some projects that I´ve built. They
              are not fully functional and from different stages of my studies.
              All projects had between 2-7 weeks from idea to finished product.
            </p>
          </section>

          <div className="card__container">
            <div className="card">
              <div>
                <Image
                  src={SpoilrImg}
                  width="400"
                  height="200"
                  alt="screenshot spoilralert"
                />
                <Title title="Spoilralert" />
                <div>
                  <SubTitle title="Built with:" />
                  <Paragraph text="Next js, Sass" />
                </div>
                <div>
                  <SubTitle title="Description:" />
                  <Paragraph
                    text="A movie db site with user added spoilers. 
                  Users can search for a specific title and choose from a dropdown of suggested titles. 
                  If title doesn't exist in spoilralert db, they can search from full movie db and add request or spoilr (if logged in). 
                  Spoilers are by default hidden so the site can also be used just as a regular movie db. 
                  I built this as my project exam for my studies in front-end development."
                  />
                </div>
              </div>
              <div className="card__link__container">
                <a
                  href="https://dev--spoilralert.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/spoilralert/spoilralert"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <Image
                  src={WitchImg}
                  width="400"
                  height="200"
                  alt="screenshot witches cauldron"
                />
                <Title title="Witches Cauldron" />
                <div>
                  <SubTitle title="Built with:" />
                  <Paragraph text="Next js, Sass" />
                </div>
                <div>
                  <SubTitle title="Description:" />
                  <Paragraph
                    text="A cocktail drink site. Users can choose cocktails from a list and get detailed information on ingredients and instructions. 
                  I built this as my course assignment for Javascript frameworks, in my studies in front-end development."
                  />
                </div>
              </div>
              <div className="card__link__container">
                <a
                  href="https://witches-cauldron.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/Linda-404/witches-cauldron"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <Image
                  src={PeezyImg}
                  width="400"
                  height="200"
                  alt="screenshot peezy"
                />
                <Title title="Peezy" />
                <div>
                  <SubTitle title="Built with:" />
                  <Paragraph text="HTML, Javascript, bootstrap, Sass" />
                </div>
                <div>
                  <SubTitle title="Description:" />
                  <Paragraph
                    text="An online Shoe Store for urban and sport sneakers. 
                I built this as my first semester project year 2 for my studies in front-end development. 
                Goal for this project was to create an e-commerce website that has both customer-facing and admin sections. 
                Both sections should be responsive and the website will be populated by a Strapi API supplied by Noroff."
                  />
                </div>
              </div>
              <div className="card__link__container">
                <a
                  href="https://peezy-shoes.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/Linda-404/peezy"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <Image
                  src={StyleguideImg}
                  width="400"
                  height="200"
                  alt="screenshot styleguide"
                />
                <Title title="Styleguide" />
                <div>
                  <SubTitle title="Built with:" />
                  <Paragraph text="React, CSS" />
                </div>
                <div>
                  <SubTitle title="Description:" />
                  <Paragraph text="A styleguide for a made up home decor site. Users can select style from menu to get details." />
                </div>
              </div>
              <div className="card__link__container">
                <a
                  href="https://styleguide-linda-nilsson.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/Linda-404/style_guide"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </Layout>
  );
}
