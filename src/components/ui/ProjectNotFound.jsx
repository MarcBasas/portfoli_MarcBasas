import React from "react";
import "./ProjectNotFound.css";
import { Helmet } from "react-helmet-async";

const ProjectNotFound = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  <div className="project-notfound-container">
    <h1 className="project-notfound-title">Project not found</h1>
      <p className="project-notfound-text">Sorry, the project you are looking for does not exist or has been deleted.</p>
    </div>
  </>
);

export default ProjectNotFound; 