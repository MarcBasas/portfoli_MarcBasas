import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/ui/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Marco Vilarrubias - Web Developer Portfolio</title>
        <meta 
          name="description" 
          content="Learn about Marco Vilarrubias, a fullstack developer with experience in web development. Discover his professional journey and skills."
        />
        <meta 
          name="keywords" 
          content="Marco Vilarrubias, Web Developer, Fullstack Developer, Portfolio, About Me, Experience, Web Development"
        />
        <link rel="canonical" href="https://marcovilarrubias.com/about" />
      </Helmet>

      <main 
        className="about-page"
        role="main"
        aria-label="About Marco Vilarrubias - Professional Background and Experience - Web Developer Portfolio"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div 
          className="about-content"
          itemScope
          itemType="https://schema.org/Person"
        >
          <section 
            className="about-section"
            aria-labelledby="about-title"
            itemProp="description"
          >
            <h2 
              id="about-title"
              itemProp="name"
            >
              About me
            </h2>
            <p>
              I’m a web developer who builds straightforward, dependable sites using the basics: HTML, CSS and JavaScript, and popular tools like React, Angular or Vue when they make sense.
              </p>
            <p>
              As a freelancer, I focus on practical solutions to help businesses and creatives get their projects off the ground.
            </p>
              <p>
              In my free time I play around with small games in Unity, Pygame or plain JavaScript just for the fun of it.
              </p>
            <p>
              I also spent two years at a consulting firm. The first year I helped developing Java back-end systems, and the second one I worked on a web app using React and Node.js with Figma designs.
            </p>
          </section>

          <section 
            className="about-section"
            aria-labelledby="experience-title"
            itemProp="knowsAbout"
          >
            <h2 
              id="experience-title"
              itemProp="jobTitle"
            >
              Education and Experience
            </h2>
            <p>
              2024–2025, Currently working freelance as a fullstack developer.
            </p>
            <p>
              2023-2024, NTTDATA<br/>
              Backend & Frontend Developer            </p>
            <p>
              2021–2023, Universitat Oberta de Catalunya<br/>
              Master’s degree in Video Game Design and Programming.
            </p>
            <p>
              2015 - 2019, Universitat de Vic<br/>
              Multimedia. Apps and Games Degree.
            </p>
          </section>
        </div>

        <div className="about-image-container">
          <img 
            src={import.meta.env.BASE_URL + "/img/About_img.webp"} 
            alt="Marco Vilarrubias - Professional Portrait"
            className="about-image"
            itemProp="image"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
