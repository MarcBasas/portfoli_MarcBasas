import React from "react";
import "./NotFoundPage.css";  
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => (
  <>
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
  <div className="notfound-container">
    <h1 className="notfound-title">Página no encontrada</h1>
    <p className="notfound-text">Lo siento, la página que buscas no existe o ha sido eliminada.</p>
  </div>  
  </>
);

export default NotFoundPage; 