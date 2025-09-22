import { cinevisionDemo } from './demos/cinevision-demo';
import { crealabDemo } from './demos/crealab-demo';
import { portfolioDemo } from './demos/portfolio-demo';
// Fallback si no existe import.meta.env
const BASE = typeof import.meta !== 'undefined' && import.meta.env
  ? import.meta.env.BASE_URL
  : '';


export const projects = {
  web: [
    {
      id: 1,
      category: "final",
      title: "KUMO CREATIVE",
      titleMin: "Kumo Creative Project",
      slug: "kumo-creative-project",
      finished: true,
      description:"Kumo Creative is a video production company. For this project, they asked me to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",
      previewImage: BASE + "img/LandingPreview_KumoCreative.webp",
      video: BASE + "vids/KumoCreativeProject.webm",
      poster: BASE + "vids/PosterKumoCreativeProject.webp",
      url: "https://kumocreativeproject.com",
      keywords: "Kumo Creative, Kumo Creative Project, Video Producer, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Kumo Creative Project Website, Kumo Creative Project Website, Kumo Creative Project Website React, Kumo Creative Project Website HTML, Kumo Creative Project Website CSS, Kumo Creative Project Website JavaScript"
    },
    {
      id: 2,
      category: "demo",
      title: "CREALAB",
      titleMin: "Crealab",
      slug: "crealab",
      finished: true,
      description:"Crealab is an imaginary advertising and branding studio. This demo features an infinite grid of projects, with modals to view the details of each one. It's a more creative and different website, but simple at the same time",
      previewImage: BASE + "img/LandingPreview_Crealab.webp",
      files: crealabDemo,
      keywords: "Crealab, Crealab Project, Research, Development, Software, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Crealab Project Website, Crealab Project Website Demo, Crealab Project Website React, Crealab Project Website HTML, Crealab Project Website CSS, Crealab Project Website JavaScript"
    },
    {
      id: 3,
      category: "demo",
      title: "CINEVISION STUDIOS",
      titleMin: "CineVision Studios",
      slug: "cinevision-studios",
      finished: true,
      description:"CineVision Studios is an imaginary indie studio that produces movies and series. This is a demo of their website where you can see their code. It's a simple and classic website with necessary data for the client.",
      previewImage: BASE + "img/LandingPreview_CineVision.webp",
      files: cinevisionDemo,
      keywords: "Video production, Videos, Movie Studio, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, CineVision Studios, CineVision Studios Website, CineVision Studios Website Demo, CineVision Studios Website React, CineVision Studios Website HTML, CineVision Studios Website CSS, CineVision Studios Website JavaScript"
    },
    {
      id: 4,
      category: "demo",
      title: "PORTFOLIO DEMO",
      titleMin: "Portfolio",
      slug: "portfolio-demo",
      finished: true,
      description:"This is a demo of a portfolio website. The images work as a carousel and the details are hidden in a modal. This solution is based on Esmeralda Devlin's portfolio.",
      previewImage: BASE + "img/LandingPreview_Portfolio.webp",
      files: portfolioDemo,
      keywords: "Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Portfolio Demo, Portfolio Website, Portfolio Website Demo, Portfolio Website React, Portfolio Website HTML, Portfolio Website CSS, Portfolio Website JavaScript"
    }
  ],
  games: [
    {
      id: 5,
      title: "CONSTELLATIONS",
      titleMin: "Constellations",
      slug: "constellations",
      finished: true,
      description:"This small Pygame game draws moving points and connects those that are within a certain distance. The user can adjust the speed, number of points, and connection distance. With Pygbag, it can run as a WebAssembly application.",
      previewImage: BASE + "img/LandingPreview_Constellations.webp",
      video: BASE + "vids/ProjectVideo_Constellations.webm",
      poster: BASE + "img/LandingPreview_Constellations.webp",
      url: "/games/Constelations/build/web/index.html",
      git: "https://github.com/MarcBasas/Constelations_pygame",
      keywords: "Pygame, WebAssembly, Game, Portfolio, Video Game, Games Development, pygame, pywebview, pyinstaller, constellations pygame, constellations webassembly, constellations game, constellations portfolio, constellations pygame game, constellations webassembly game, constellations portfolio game"
    },
    {
      id: 6,
      title: "CHESSEXCEL",
      titleMin: "ChessExcel",
      slug: "chessExcel",
      finished: true,
      description:"This Excel-based chess game developed in VBA allows users to play chess in a different environment. Packaged as a workbook, it attempts to demonstrate Excel's capabilities.",
      previewImage: BASE + "img/LandingPreview_ChessExcel.webp",
      video: BASE + "vids/ChessExcell.webm",
      poster: BASE + "img/LandingPreview_ChessExcel.webp",
      git: "https://github.com/MarcBasas/ChessExcel",
      keywords: "Excel, VBA, Game, Portfolio, Video Game, Games Development, Chess, Excel VBA, Excel VBA Game, Excel VBA Chess, Chess Excel, Chess Excel Game, Chess Excel VBA, Chess Excel VBA Game"
    },
    {
      id: 7,
      title: "HOBO",
      titleMin: "Hobo",
      slug: "hobo",
      finished: false,
      description:"Hobo is a 2D platformer game based on Unity developed in C# that procedurally generates a random map in each session, allowing players to run, jump and navigate through platforms to collect all the food items scattered throughout the level.",
      previewImage: BASE + "img/LandingPreview_Hobo.webp",
      keywords: "Unity, C#, Game, Portfolio, Video Game, Games Development, Hobo, Unity C#, Unity C# Game, Unity C# Hobo, map generation, random map, platformer, 2D platformer"
    }
  ]
};
