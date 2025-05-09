import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Componente Layout que proporciona la estructura base de la aplicación
 * @component
 * @description Componente que envuelve toda la aplicación, proporcionando la estructura base con Header y Footer
 * @returns {JSX.Element} El componente Layout renderizado
 */
const Layout = () => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F16704" />
        <link rel="canonical" href="https://marco-portfolio.com" />
      </Helmet>

      <div className="layout" role="document">
        <Header />
        <main role="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
