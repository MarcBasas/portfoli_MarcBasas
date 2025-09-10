import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import ProjectsLoadingIndicator from "./ProjectsLoadingIndicator";
import { ContactProvider } from "../../utils/ContactContext";
import "./Layout.css";

/**
 * Componente Layout que proporciona la estructura base de la aplicación
 * @component
 * @description Componente que envuelve toda la aplicación, proporcionando la estructura base con Header y Footer
 * @returns {JSX.Element} El componente Layout renderizado
 */
const Layout = () => {
  return (
    <ContactProvider>
      <Helmet>
        <html lang="en" />
        <meta name="theme-color" content="#e5ff70" />
      </Helmet>

      <div className="layout" role="document">
        <Header />
        <main role="main">
          <Outlet />
        </main>
        <Footer />
        <ProjectsLoadingIndicator />
      </div>
    </ContactProvider>
  );
};

export default Layout;
