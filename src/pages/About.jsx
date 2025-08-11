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
        <title>Sobre Mí | Marc Basas - Programador Web Autónomo Barcelona</title>
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
        <meta property="og:title" content="Sobre Mí | Marc Basas - Programador Web Autónomo Barcelona" />
        <meta property="og:description" content="Conoce la experiencia y formación de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, con servicios de programación para empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marcbasas.com/about" />
        <meta property="og:site_name" content="Marc Basas - Programador Web Autónomo Barcelona" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Mí | Marc Basas - Programador Web Autónomo Barcelona" />
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
              Sobre mí
            </h2>
            <p>
              Soy un programador web autónomo con base en Barcelona, especializado en el desarrollo frontend y fullstack. Creo sitios web funcionales utilizando tecnologías fundamentales como HTML, CSS y JavaScript, además de herramientas modernas como React, Angular o Vue cuando aportan valor y eficiencia al proyecto.
            </p>
            <p>
              Como programador autónomo, me enfoco en ofrecer soluciones prácticas que ayuden a empresas y creativos a materializar sus proyectos.
            </p>
            <p>
              En mi tiempo libre desarrollo pequeños juegos con Unity, Pygame o JavaScript puro por diversión.
            </p>
            <p>
              También trabajé durante dos años en una consultora. El primer año desarrollando sistemas backend en Java, y el segundo trabajando en aplicaciones web con React y Node.js a partir de diseños de Figma. Esta experiencia me consolidó como programador web antes de convertirme en freelance.
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
              Formación y Experiencia
            </h2>
            <p>
              2024–2025, Actualmente trabajando como programador web autónomo en Barcelona.
            </p>
            <p>
              2023-2024, NTTDATA<br/>
              Desarrollador Backend & Frontend. Experiencia que me preparó para mi carrera como programador autónomo.
            </p>
            <p>
              2021–2023, Universitat Oberta de Catalunya<br/>
              Máster en Diseño y Programación de Videojuegos.
            </p>
            <p>
              2015 - 2019, Universitat de Vic<br/>
              Grado en Multimedia. Aplicaciones y Videojuegos.
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
