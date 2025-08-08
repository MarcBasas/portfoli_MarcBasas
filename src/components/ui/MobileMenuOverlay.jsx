import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { useContact } from "../../utils/ContactContext";
import "./Header.css";

const MobileMenuOverlay = ({ allProjects, onClose }) => {
  const { closeContact } = useContact();

  const handleProjectClick = () => {
    closeContact();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="header__mobile-menu">
      {allProjects.map((project) => (
        <Link
          key={project.id}
          to={`/project/${project.slug}/`}
          className="header__mobile-menu-link"
          onClick={handleProjectClick}
          translate="no"
        >
          {project.title}
        </Link>
      ))}
    </div>,
    document.body
  );
};

export default MobileMenuOverlay; 