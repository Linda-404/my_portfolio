import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import DoodleCasette from "../public/images/doodle_casette.png";
import Footer from "../components/layout/Footer";

// import images
import ArtsyImg from "../public/images/Artsy_Design.png";
import GoFishImg from "../public/images/GoFish_Design.png";
import SuckerPunchImg from "../public/images/SuckerPunch_Design.png";
import SpoilrImg from "../public/images/screenshot_spoilralert.png";
import BimImg from "../public/images/screenshot_bim_blog.png";
import WitchImg from "../public/images/screenshot_witchescaultron.png";
import PeezyImg from "../public/images/screenshot_peezy.png";
import StyleguideImg from "../public/images/screenshot_styleguide.png";
import Star from "../public/images/icon_staroflight.png";

export default function Home() {
  return (
    <Layout>
      <Head title="Projects" />
      <Header />
      <main>
        <div className="flex_wrapper">
          <div className="heading_container">
            <h1>
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </h1>
          </div>
          <div className="content_container">
            <div className="card__container">
              <div className="card_title">
                <div className="star_container">
                  <Image src={Star} alt="icon star of light" />
                </div>
                <h2>Design examples</h2>
                <div className="star_container">
                  <Image src={Star} alt="icon star of light" />
                </div>
              </div>

              <div className="card__design">
                <Image src={ArtsyImg} alt="Artsy xd design" />
              </div>
              <div className="card__design">
                <Image src={GoFishImg} alt="Go fish xd design" />
              </div>
              <div className="card__design">
                <Image src={SuckerPunchImg} alt="Sucker punch xd design" />
              </div>
            </div>

            <div className="card__container">
              <div className="card_title">
                <div className="star_container">
                  <Image src={Star} alt="icon star of light" />
                </div>
                <h2>Coded examples</h2>
                <div className="star_container">
                  <Image src={Star} alt="icon star of light" />
                </div>
              </div>

              <div className="card">
                <div className="card__content">
                  <Image
                    src={SpoilrImg}
                    alt="screenshot spoilralert"
                    width="600"
                    height="300"
                  />
                  <div className="card__content__text">
                    <Title title="Spoilralert" />
                  </div>
                </div>

                <div className="card__content">
                  <div className="card__content__text">
                    <SubTitle title="Built with:" />
                    <Paragraph text="Next js, Sass" />
                  </div>
                  <div className="card__content__text">
                    <SubTitle title="Description:" />
                    <Paragraph
                      text="A movie db site with user added spoilers. 
                              Users can search for a specific title and choose from a dropdown of suggested titles. 
                              If title doesn't exist in spoilralert db, they can search from full movie db and add request or spoilr (if logged in). 
                              Spoilers are by default hidden so the site can also be used just as a regular movie db. 
                              I built this as my project exam for my studies in front-end development."
                    />
                  </div>
                  <div className="card__link__container">
                    <a
                      href="https://dev--spoilralert.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Site
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
              </div>

              <div className="card">
                <div className="card__content">
                  <Image
                    src={BimImg}
                    alt="screenshot bad influence mom blog"
                    width="600"
                    height="300"
                  />
                  <div className="card__content__text">
                    <Title title="Bad Influence Mom" />
                  </div>
                </div>

                <div className="card__content">
                  <div className="card__content__text">
                    <SubTitle title="Built with:" />
                    <Paragraph text="HTML, Javascript, CSS" />
                  </div>
                  <div className="card__content__text">
                    <SubTitle title="Description:" />
                    <Paragraph
                      text="A personal blog site.
                      Users can read blogposts and other content."
                    />
                  </div>
                  <div className="card__link__container">
                    <a
                      href="https://badinfluencemom-v2.netlify.app/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Site
                    </a>
                    <a
                      href="https://github.com/Linda-404/badinfluencemom_blog"
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card__content">
                  <Image
                    src={StyleguideImg}
                    alt="screenshot styleguide"
                    width="600"
                    height="300"
                  />
                  <div className="card__content__text">
                    <Title title="Styleguide" />
                  </div>
                </div>

                <div className="card__content">
                  <div className="card__content__text">
                    <SubTitle title="Built with:" />
                    <Paragraph text="React, CSS" />
                  </div>
                  <div className="card__content__text">
                    <SubTitle title="Description:" />
                    <Paragraph text="A styleguide for a made up home decor site. Users can select style from menu to get details." />
                  </div>
                  <div className="card__link__container">
                    <a
                      href="https://styleguide-linda-nilsson.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Site
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

              <div className="card">
                <div className="card__content">
                  <Image
                    src={WitchImg}
                    alt="screenshot witches cauldron"
                    width="600"
                    height="300"
                  />
                  <div className="card__content__text">
                    <Title title="Witches Cauldron" />
                  </div>
                </div>

                <div className="card__content">
                  <div className="card__content__text">
                    <SubTitle title="Built with:" />
                    <Paragraph text="Next js, Sass" />
                  </div>
                  <div className="card__content__text">
                    <SubTitle title="Description:" />
                    <Paragraph
                      text="A cocktail drink site. Users can choose cocktails from a list and get detailed information on ingredients and instructions. 
                              I built this as my course assignment for Javascript frameworks, in my studies in front-end development."
                    />
                  </div>
                  <div className="card__link__container">
                    <a
                      href="https://witches-cauldron.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Site
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
              </div>

              <div className="card">
                <div className="card__content">
                  <Image
                    src={PeezyImg}
                    alt="screenshot peezy"
                    width="600"
                    height="300"
                  />
                  <div className="card__content__text">
                    <Title title="Peezy" />
                  </div>
                </div>

                <div className="card__content">
                  <div className="card__content__text">
                    <SubTitle title="Built with:" />
                    <Paragraph text="HTML, Javascript, bootstrap, Sass" />
                  </div>
                  <div className="card__content__text">
                    <SubTitle title="Description:" />
                    <Paragraph
                      text="An online Shoe Store for urban and sport sneakers. 
                              I built this as my first semester project year 2 for my studies in front-end development. 
                              Goal for this project was to create an e-commerce website that has both customer-facing and admin sections. 
                              Both sections should be responsive and the website will be populated by a Strapi API supplied by Noroff."
                    />
                  </div>
                  <div className="card__link__container">
                    <a
                      href="https://peezy-shoes.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Site
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
