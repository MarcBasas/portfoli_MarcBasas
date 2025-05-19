import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


import "./styles/index.css"
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/ui/Layout";
import Landing from "./pages/Landing";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Scroll from "./pages/Scroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter basename="/portfoli_MarcBasas">
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/scroll" element={<Scroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
