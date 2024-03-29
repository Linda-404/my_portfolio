import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

// import images
import Image from "next/image";
import HireMeme from "../public/images/hire_me.jpg";

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

export default function About() {
  return (
    <Layout>
      <Head title="About Me" />
      <motion.main variants={mainVariants} exit="exit">
        <div className="flex_wrapper">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="heading_container"
          >
            <h1>
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span>M</span>
              <span>e</span>
            </h1>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="content_container about"
          >
            <section>
              {/* <h2>👋🤓✨🤹‍♀️🎨🤡</h2> */}
              <h2>
                Hi, my name is <span>Linda</span>👋
              </h2>
              <div className="text_container">
                <p>
                  Front-end development graduate of 2022 from Noroff -School of
                  technology and digital media. With this basic knowledge I want
                  to start a career in webdesign! With no prior experience in
                  the field I think the program has given me a lot of{" "}
                  <span>tools</span> and
                  <span>understanding</span> to build on.
                </p>
                <p>
                  I desided after working as a vet tec and receptionist for 9
                  years, that I wanted to challenge myself and pursue an
                  interest that had been linguring for quite some time:{" "}
                  <span>webdesign.</span> I choose the front-end studies as I am
                  both interested in designing and coding so I wanted to get an
                  introductory to both subjects.
                </p>
              </div>
            </section>

            <section>
              <h2>
                <span>Me</span> as a webdesigner
              </h2>
              <p>
                I love to <span>dig deep</span> in design choices and trends
                online to pick apart why and how some work and others don´t, and
                see what I would do differently or use it as{" "}
                <span>inspiration</span> for my own design ideas. I see the
                importance of universal web design and aim to meet those
                standards. I try to <span>challenge myself</span> with different
                brands to expand my understanding of target audiences outside of
                my personal scope and experiences.
              </p>
              <p>
                I think some of the most <span>exiting</span> parts of webdesign
                is the everlasting evolution of technology and keeping up with
                trends, there is always something new to learn and test out!
              </p>
            </section>

            <section>
              <h2>Some of the topics from the studies:</h2>
              <div>
                <ul className="about_list">
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
              <h2>What am I up to now?</h2>
              <div>
                <p>
                  I´m currently using my time designing in adobe XD, exploring
                  different techniques and playing around with{" "}
                  <span>design trends</span> to build on my skills.
                </p>
                <p>
                  Also, I´m working together with another developer on a website
                  called Spoilralert. We did a beta version of this project as
                  my <span>project exam.</span>
                </p>
              </div>
            </section>

            <section>
              <h2>Hobbies</h2>
              <div>
                <ul className="about_list">
                  <li>Meme and webdesign scrolling</li>
                  <li>Sketching</li>
                  <li>Logo designs</li>
                  <li>Cross stitching</li>
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
              <h2>Bio</h2>
              <ul className="about_list">
                <li>🆔 Linda Nilsson, 39</li>
                <li>👨‍👩‍👧‍👦 SO, two kids and a dog</li>
                <li>🏠 Vestby, Norway</li>
              </ul>
            </section>

            <section>
              <h2>Sales pitch</h2>
              <div>
                <div>
                  <h3>What am I looking for?</h3>
                  <p>
                    I´m looking for a place were I can continue to grow and be
                    creative. Where I can be part of solving problems and design
                    great solutions for the users in mind.
                  </p>
                </div>
                <div>
                  <h3>Work ethics and Values:</h3>
                  <p>
                    I think its important to always stay <span>positive</span>{" "}
                    and bring good spirit to the workplace and make an effort to
                    bond with co workers, as they are practically your second
                    family.
                  </p>
                  <p>
                    <span>Open, honest and trustworthy</span>
                  </p>
                  <p>
                    At my previous workplace I acted as a senior receptionist
                    and had a central part in training new staff, and equally
                    important, make them feel welcome and included in the social
                    spectrum. I believe that if you feel as part of something
                    bigger you will go the extra mile to contribute and have
                    pride in your work.
                  </p>
                </div>
              </div>

              {/* <div className="meme__container">
                <Image
                  src={HireMeme}
                  alt="hire me meme"
                  width="900"
                  height="700"
                />
              </div> */}
            </section>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </Layout>
  );
}
