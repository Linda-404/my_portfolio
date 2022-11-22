import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Image from "next/image";
import Stain from "../public/images/coffee_stain.png";
import DoodleArrow from "../public/images/doodle_arrow.png";
import DoodleLightning from "../public/images/doodle_lightning.png";
import DoodlePen from "../public/images/doodle_pen.png";
import DoodleScribble from "../public/images/doodle_scribble.png";
import HireMeme from "../public/images/hire_me.jpg";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <Layout>
      <Head title="About Me" />
      <Header />
      <main>
        {/* <Heading title="About Me" /> */}
        {/* <Image src={DoodleLightning} alt="doodle" width="400" height="500" /> */}
        <div className="content__wrapper">
          <section>
            <h3>👋🤓 Hello there reader (and maybe future employer)</h3>
            <div className="sales_section">
              <p>
                I just finished my 2 years as a front-end development student at
                noroff, and with this basic knowledge I want to start a career
                in web design! With no prior experience in the field I think the
                program has given me a lot of tools and understanding to build
                on.
              </p>
            </div>
          </section>

          <section>
            <h3>✨ Some of the topics from the studies:</h3>
            <div>
              <div className="img_container">
                <Image src={DoodlePen} alt="doodle" width="300" height="300" />
              </div>
              <ul>
                <li>Design training (UX,UI)</li>
                <li>Designing and prototyping in Adobe XD</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Tailwind</li>
                <li>Vanilla Javascript</li>
                <li>React</li>
                <li>Next js</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>🤹‍♀️ What am I up to now?</h3>
            <div className="img_container">
              <Image src={DoodleArrow} alt="doodle" width="100" height="100" />
            </div>
            <div>
              <p className="sales_section">
                I am currently working together with another developer on a
                project that will hopefully have release this fall/winter. (We
                did a beta version of this project for my project exam)
              </p>
            </div>

            {/* <p>(We did a beta version of this project for my project exam)</p> */}
          </section>

          <section>
            <h3>🎨 My hobbies</h3>
            <div>
              <div className="img_container">
                <Image
                  src={DoodleScribble}
                  alt="doodle"
                  width="300"
                  height="300"
                />
              </div>
              <ul>
                <li>Meme and webdesign scrolling</li>
                <li>Sketching</li>
                <li>Logo designs</li>
                <li>Gerilla crosstitching</li>
                <li>Play with my kids</li>
                <li>Horror movies</li>
                <li>Escape room</li>
                <li>Jumpscare my SO</li>
                <li>Nap with my dog</li>
                <li>A drink or two with friends</li>
                <li>Making lists..</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bio_section">
              <h3>🤡 Bio</h3>
              <ul>
                <li>🆔 Linda Nilsson, 39</li>
                <li>👨‍👩‍👧‍👦 SO, two kids and a dog</li>
                <li>🏠 Vestby, Norway</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Sales pitch</h2>
            <div className="sales_section">
              <h3>What do I wish for?</h3>
              <p>
                So I´m looking for a job were I can proceed to build on my
                webdesign skills. I would love to be a part of UX/UI in any
                stage of the process really and find the right design solutions.
              </p>
            </div>
            <div className="sales_section">
              <h3>What do you get?</h3>
              <p>A dedicated team mate with a slight caffeine addiction</p>
              <p>An introverted extrovert that laugh at her own jokes</p>
              <p>Will suggest karaoke for friday hangout</p>
              <div className="img_stain">
                <Image src={Stain} alt="coffe stain" width="800" height="800" />
              </div>
            </div>

            <div className="meme__container">
              <Image
                src={HireMeme}
                alt="hire me meme"
                width="900"
                height="700"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
