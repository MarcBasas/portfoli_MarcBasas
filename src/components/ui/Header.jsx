import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../../data/projects";
import "./Header.css";

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
      aria-label="Portfolio header with navigation - Marco Vilarrubias Basas - Web Developer Portfolio"
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
          aria-label="Go to About page - Marco Vilarrubias Portfolio"
          aria-current={location.pathname === "/about" ? "page" : undefined}
          itemProp="url"
        >
          <span itemProp="name">ABOUT</span>
          </Link>

        <Link 
          to="/" 
          className="header__link header__logo"
          aria-label="Go to Home page - Marco Vilarrubias Portfolio"
          aria-current={location.pathname === "/" ? "page" : undefined}
          itemProp="url"
        >
          <span itemProp="name">◙</span>
        </Link>

        <div 
          className="header__projects-container"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <button 
            ref={buttonRef}
            className="header__link"
            onClick={handleProjectsClick}
            aria-label="Show projects list - Marco Vilarrubias Portfolio"
            aria-expanded={showProjects}
            aria-controls="projects-dropdown"
            itemProp="name"
          >
            PROJECTS
          </button>
          
          {showProjects && (
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
                  aria-label={`Go to ${project.title} project - Marco Vilarrubias Portfolio`}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name">{project.title}</span>
                  <meta itemProp="position" content={index + 1} />
          </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
  
export default Header;