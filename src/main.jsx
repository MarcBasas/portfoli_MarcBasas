import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


import "./styles/index.css"
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/ui/Layout";
import Landing from "./pages/Landing";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <HashRouter>
    <ScrollToTop />
      <Routes>
        {/* Ruta independiente para el panel de administración */}
        <Route path="/Admin1997" element={<AdminPage />} />
        
        {/* Rutas con layout normal */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </HelmetProvider>
);
