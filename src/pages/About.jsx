import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/ui/Footer";
import "./About.css";
import useIsMobile from "../utils/UseIsMobile";

const About = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Helmet>
        {/* Título, descripción, autor*/}
        <title>About | Marc Basas - Web Developer & Game Developer Barcelona</title>
        <meta 
          name="description" 
          content="Conoce a Marc Basas, programador web autónomo en Barcelona especializado en desarrollo frontend y fullstack. Experiencia en servicios de programación web para empresas, desarrollo de aplicaciones a medida y soluciones digitales. Freelancer con formación en desarrollo web y videojuegos."
        />
        <meta 
          name="keywords" 
          content="programador autonomo barcelona, programador web autonomo, Marc Basas, freelancer barcelona, desarrollador independiente barcelona, servicios programacion web barcelona, experiencia programador web, formacion desarrollo web, programador frontend barcelona, programador fullstack barcelona"
        />
        <meta name="author" content="Marc Basas" />

        {/* Open Graph*/}
        <meta property="og:title" content="About | Marc Basas - Web Developer & Game Developer Barcelona" />
        <meta property="og:description" content="Conoce la experiencia y formación de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, con servicios de programación para empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marcbasas.com/about" />
        <meta property="og:site_name" content="Marc Basas - Programador Web Autónomo Barcelona" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Marc Basas - Web Developer & Game Developer Barcelona" />
        <meta name="twitter:description" content="Programador web autónomo en Barcelona con experiencia en desarrollo frontend y fullstack. Servicios de programación web para empresas y proyectos personalizados." />
        <meta name="twitter:url" content="https://www.marcbasas.com/about" />

        {/* Canonical*/}
        <link rel="canonical" href="https://www.marcbasas.com/about/" />
      </Helmet>

      <main 
        className={`about-page${isMobile ? ' about-page--mobile' : ''}`}
        role="main"
        aria-label="About Marc Basas - Professional Background and Experience - Web Developer Portfolio"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div 
          className="about-content"
          itemScope
          itemType="https://schema.org/Person"
        >
          <section 
            className="about-section1"
            aria-labelledby="about-title"
            itemProp="description"
          >
            <h2 
              id="about-title"
              itemProp="name"
            >
              About
            </h2>
            <p>
              I'm a freelance web developer based in Barcelona, specializing in frontend and fullstack development. I create functional websites using fundamental technologies like HTML, CSS, and JavaScript, along with modern tools like React, Angular, or Vue when they add value and efficiency to the project.
            </p>
            <p>
              As a freelance developer, I focus on providing practical solutions that help businesses and creatives materialize their projects.
            </p>
            <p>
              In my free time, I develop small games with Unity, Pygame, or pure JavaScript for fun.
            </p>
            <p>
              I also worked for two years at a consulting company. The first year I developed backend systems in Java, and the second year I worked on web applications with React and Node.js from Figma designs. This experience solidified me as a web developer before becoming a freelancer.
            </p>
          </section>

          <section 
            className="about-section2"
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
              2024–2025, Currently working as a freelance web developer in Barcelona.
            </p>
            <p>
              2023-2024, NTTDATA<br/>
              Frontend Developer. <br/>
              Developed web applications using React, JavaScript/TypeScript. 
              Collaborated with design and backend teams to ensure seamless UX/UI.
            </p>
            <p>
              2022-2023, NTTDATA<br/>
              Backend Developer. <br/>
              Built microservices with Spring Boot, Apache Kafka, and MongoDB.
              Automated CI/CD pipelines with Jenkins for deployment.
            </p>
            <p>
              2023–Present, Universitat Oberta de Catalunya<br/>
              Master's Degree in Design and Programming of Video Games.
            </p>
            <p>
              2015 - 2019, Universitat de Vic<br/>
              Bachelor’s Degree in Multimedia, Applications and Video Games.
            </p>
          </section>
        </div>

        <div className="about-image-container">
          <img 
            src="/img/About_img.webp"
            alt=""
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
