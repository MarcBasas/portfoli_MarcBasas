import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import useIsMobile from "../../utils/UseIsMobile";
import { useContact } from "../../utils/ContactContext";

/**
 * Componente de pie de página que muestra enlaces a proyectos
 * @component
 * @description Muestra una lista de proyectos en el pie de página, con comportamiento especial en páginas de proyecto
 * @returns {JSX.Element} El componente Footer renderizado
 */
const Footer = () => {
  const { showContact, toggleContact, closeContact } = useContact();
  const isMobile = useIsMobile();

  const handleAboutClick = () => {
    toggleContact();
  };

  const handleOverlayClick = (e) => {
    // Solo cerrar si se hace clic en el overlay, no en el contenido
    if (e.target.classList.contains('contact-overlay')) {
      closeContact();
    }
  };

  return (
    <>
      <footer 
        className="footer"
        role="contentinfo"
        aria-label="Portfolio footer - contact information and copyright - Marc Basas - Web Developer Portfolio"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div 
          className="footer__left"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <button 
            className="footer_contact" 
            onClick={handleAboutClick}
            aria-label="Show contact information and about details - Marc Basas Portfolio"
            aria-expanded={showContact}
            aria-controls="about-content"
            itemProp="name"
          >CONTACT</button>
        </div>
        <div 
          className="footer__right"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          {isMobile ? (
            <Link 
              to="/" 
              className="footer__copyright"
              onClick={closeContact}
              aria-label="Go to Home page - Marc Basas Portfolio"
              itemProp="url"
            >
              HOME
            </Link>
          ) : (
            <p 
              className="footer__copyright" 
              aria-label="Copyright Marc Basas Portfolio 2025"
              itemProp="copyrightYear"
            >
              © 2025
            </p>
          )}
        </div>
      </footer>

      {showContact && (
        <div 
          className="contact-overlay" 
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <div 
            className="contact-content"
            id="about-content"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <h2 
              id="contact-title" 
              className="visually-hidden"
              itemProp="name"
            >
              Marc Basas - Contact Information - Portfolio Details - Web Developer - REACT Developer - FrontEnd Developer - Web Designer - Game Developer
            </h2>
            <p itemProp="description">For inquiries and orders:<br/>
            <p><br/></p>
              <a 
                href="mailto:marcbasasdev@gmail.com"
                itemProp="email"
              >
                marcbasasdev@gmail.com <br />
              </a>
              <a
                href="tel:+34615502988"
                itemProp="telephone"
              >
                +34 615502988 <br />
              </a>
            <a 
                href="https://github.com/MarcBasas"
                itemProp="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/MarcBasas <br />
              </a>
            </p>
            <p itemProp="description">¡Thanks for visiting!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
