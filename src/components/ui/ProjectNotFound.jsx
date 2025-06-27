import React from "react";
import "./ProjectNotFound.css";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const ProjectNotFound = ({ previewImage }) => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="project-notfound-container">
      <div 
        className="project-notfound-background"
        style={{ backgroundImage: previewImage ? `url(${previewImage})` : 'none' }}
      />
      <div className="project-notfound-content">
        <h1 className="project-notfound-title">Project under development.</h1>
        <p className="project-notfound-text">The project you are looking for is still under construction.</p>
      </div>
    </div>
  </>
);

ProjectNotFound.propTypes = {
  previewImage: PropTypes.string
};

export default ProjectNotFound; 