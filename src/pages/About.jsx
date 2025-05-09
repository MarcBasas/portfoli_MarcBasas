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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
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
              Experience
            </h2>
            <p>
              2024–2025, Currently working freelance as a fullstack developer.
            </p>
            <p>
              2024, Trabajo 03<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum
            </p>
            <p>
              2022–2024, Trabajo 02<br/>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <p>
              2021, Trabajo 01<br/>
              Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.
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
