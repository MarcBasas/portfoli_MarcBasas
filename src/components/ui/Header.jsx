import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../../data/projects";
import useIsMobile from "../../utils/UseIsMobile";
import "./Header.css";
import MobileMenuOverlay from "./MobileMenuOverlay";

/**
 * Componente de encabezado que incluye navegación y logo
 * @component
 * @returns {JSX.Element} El componente Header renderizado
 */
const Header = () => {
  const [showProjects, setShowProjects] = useState(false);
  const location = useLocation();
  const allProjects = [...projects.web, ...projects.games];
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const isMobile = useIsMobile();

  const handleProjectsClick = () => {
    setShowProjects(!showProjects);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProjects && 
          dropdownRef.current && 
          !dropdownRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setShowProjects(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProjects]);

  return (
    <header 
      className="header"  
      role="banner"
      aria-label="Portfolio header with navigation - Marc Basas - Web Developer Portfolio"
    >
      <nav 
        className="header__nav"
        role="navigation"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        >
          <Link 
            to="/about" 
            className="header__link"
            aria-label="Go to About page - Marc Basas Portfolio"
            aria-current={location.pathname === "/about" ? "page" : undefined}
            itemProp="url"
          >
            <span itemProp="name" translate="no">ABOUT</span>
          </Link>

          {!isMobile && (
            <Link 
              to="/" 
              className="header__link header__logo"
              aria-label="Go to Home page - Marc Basas Portfolio"
              aria-current={location.pathname === "/" ? "page" : undefined}
              itemProp="url"
            >
              <img src="/img/Logo.png" alt="Logo" style={{ width: '64px', marginTop: '10px' }} />
            </Link>
          )}

        <div 
          className="header__projects-container"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <button 
            ref={buttonRef}
            className="header__link"
            onClick={handleProjectsClick}
            aria-label={showProjects ? "Close projects list" : "Show projects list"}
            aria-expanded={showProjects}
            aria-controls="projects-dropdown"
            itemProp="name"
            translate="no"
          >
            {isMobile && showProjects ? "CLOSE" : "PROJECTS"}
          </button>
          
          {showProjects && (
            isMobile ? (
              <MobileMenuOverlay allProjects={allProjects} onClose={() => setShowProjects(false)} />
            ) : (
              <div
                ref={dropdownRef}
                className="header__projects-dropdown"
                id="projects-dropdown"
                role="menu"
                aria-label="Projects list"
              >
                {allProjects.map((project, index) => (
                  <Link
                    key={project.id}
                    to={`/project/${project.slug}`}
                    className="header__project-link"
                    role="menuitem"
                    aria-label={`Go to ${project.title} project - Marc Basas Portfolio`}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <span itemProp="name" translate="no">{project.title}</span>
                    <meta itemProp="position" content={index + 1} />
                  </Link>
                ))}
              </div>
            )
          )}
        </div>
      </nav>
    </header>
  );
};
  
export default Header;