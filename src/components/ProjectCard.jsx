import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  const { title, description, previewImage, slug } = data;

  return (
    <Link 
      to={`/project/${slug}`} 
      className="project-card" 
      aria-label={`View ${title} project - Marco Vilarrubias Portfolio - Web Developer Portfolio`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="project-image-container">
        <img
          src={previewImage}
          alt={`Preview of ${title} project - Marco Vilarrubias Portfolio - Web Developer Portfolio`}
          loading="lazy"
          className="project-image"
          itemProp="image"
        />
        <div className="overlay" />
      </div>
      <div className="project-text">
        <h3 itemProp="name">{title}</h3>
        <meta itemProp="description" content={description} />
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
