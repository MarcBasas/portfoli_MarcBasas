import React from "react";
import "./NotFoundPage.css";  
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
  <>
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
  <div className="notfound-container">
    <h1 className="notfound-title">Page not found</h1>
    <p className="notfound-text">Sorry, the page you are looking for does not exist or has been deleted.</p>
  </div>  
  </>
);

export default NotFoundPage; 