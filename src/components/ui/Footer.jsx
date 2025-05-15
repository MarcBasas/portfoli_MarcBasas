import React, { useState } from "react";
import "./Footer.css";

/**
 * Componente de pie de página que muestra enlaces a proyectos
 * @component
 * @description Muestra una lista de proyectos en el pie de página, con comportamiento especial en páginas de proyecto
 * @returns {JSX.Element} El componente Footer renderizado
 */
const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleAboutClick = () => {
    setShowContact(!showContact);
  };

  const handleOverlayClick = (e) => {
    // Solo cerrar si se hace clic en el overlay, no en el contenido
    if (e.target.classList.contains('contact-overlay')) {
      setShowContact(false);
    }
  };

  return (
    <>
      <footer 
        className="footer"
        role="contentinfo"
        aria-label="Portfolio footer with contact information and copyright - Marco Vilarrubias Basas - Web Developer Portfolio"
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
            aria-label="Show contact information and about details - Marco Vilarrubias Portfolio"
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
          <p 
            className="footer__copyright" 
            aria-label="Copyright Marco Vilarrubias Portfolio 2025"
            itemProp="copyrightYear"
          >
            © 2025
          </p>
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
              Marco Vilarrubias - Contact Information - Portfolio Details - Web Developer - REACT Developer - FrontEnd Developer - Web Designer
            </h2>
            <p itemProp="description">For inquiries & commisions:<br/>
            <p><br/></p>
            <a 
                href="https://github.com/MarcBasas"
                itemProp="GitHub"
              >
                https://github.com/MarcBasas <br />
              </a>
              <a 
                href="mailto:marcvilarrubiasbasas@gmail.com"
                itemProp="email"
              >
                marcvilarrubiasbasas@gmail.com <br />
              </a>
              <a
                href="tel:+34615502988"
                itemProp="telephone"
              >
                +34 615502988 <br />
              </a>
            </p>
            <p itemProp="description">Thanks for visiting!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
