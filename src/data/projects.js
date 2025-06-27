import { cinevisionDemo } from './demos/cinevision-demo';
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
      description:"Kumo Creative is a video producer. For this project, I was asked to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",
      previewImage: BASE + "img/LandingPreview_KumoCreative.webp",
      video: BASE + "vids/KumoCreativeProject.webm",
      poster: BASE + "vids/PosterKumoCreativeProject.webp",
      url: "https://kumocreativeproject.com",
      keywords: "Kumo Creative, Kumo Creative Project, Video Producer, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Kumo Creative Project Website, Kumo Creative Project Website, Kumo Creative Project Website React, Kumo Creative Project Website HTML, Kumo Creative Project Website CSS, Kumo Creative Project Website JavaScript"
    },
    {
        id: 2,
      category: "demo",
      title: "CINEVISION STUDIOS",
      titleMin: "CineVision Studios",
      slug: "cinevision-studios",
      description: "CineVision Studios is an imaginary small indie studio that makes movies and series. This is a demo of their website where you can see its code. It's a simple, classic website with a home page, a about page and a contact page.",
      previewImage: BASE + "img/LandingPreview_CineVision.webp",
      files: cinevisionDemo,
      keywords: "Video production, Videos, Movie Studio, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, CineVision Studios, CineVision Studios Website, CineVision Studios Website Demo, CineVision Studios Website React, CineVision Studios Website HTML, CineVision Studios Website CSS, CineVision Studios Website JavaScript"
    },
    {
      id: 3,  
      category: "demo",
      title: "PORTFOLIO DEMO",
      titleMin: "Portfolio",
      slug: "portfolio-demo",
      description: `This is a demo of a straightforward portfolio website. The images work as a carousel and the details are hidden in a modal.
      This solution is based on Esmeralda Devlin's portfolio.`,
      previewImage: BASE + "img/LandingPreview_Portfolio.webp",
      files: portfolioDemo,
      keywords: "Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Portfolio Demo, Portfolio Website, Portfolio Website Demo, Portfolio Website React, Portfolio Website HTML, Portfolio Website CSS, Portfolio Website JavaScript"
    }
  ],
  games: [
    {
      id: 4,
      title: "CONSTELLATIONS",
      titleMin: "Constelations",
      slug: "constellations",
      description: "This small Pygame draws moving dots and connects those within a certain distance. With an interactive control panel, the user can adjust speed, number of points, and connection distance. With Pygbag, it can run a WebAssembly application.",
      previewImage: BASE + "img/LandingPreview_Constellations.webp",
      url: BASE + "games/Constelations/build/web/index.html",
      git: "https://github.com/MarcBasas/Constelations_pygame",
      video: BASE + "vids/ProjectVideo_Constellations.webm",
      poster: BASE + "img/LandingPreview_Constellations.webp",
      keywords: "Pygame, WebAssembly, Game, Portfolio, Video Game, Games Development, pygame, pywebview, pyinstaller, constellations pygame, constellations webassembly, constellations game, constellations portfolio, constellations pygame game, constellations webassembly game, constellations portfolio game"
    },
    {
      id: 5,
      title: "CHESSEXCEL",
      titleMin: "ChessExcel",
      slug: "chessExcel",
      description: "This Excel-based chess game developed in VBA lets users play chess with a different environment. Packaged as a workbook, it demonstrates automated logic, UI, and Excel's capabilities.",
      previewImage: BASE + "img/LandingPreview_ChessExcel.webp",
      video: BASE + "vids/ChessExcell.webm",
      poster: BASE + "img/LandingPreview_ChessExcel.webp",
      git: "https://github.com/MarcBasas/ChessExcel",
      keywords: "Excel, VBA, Game, Portfolio, Video Game, Games Development, Chess, Excel VBA, Excel VBA Game, Excel VBA Chess, Chess Excel, Chess Excel Game, Chess Excel VBA, Chess Excel VBA Game"
    },
    {
      id: 6,
      title: "HOBO",
      titleMin: "Hobo",
      slug: "hobo",
      description:"Hobo is a Unity-based 2D platformer developed in C# that procedurally generates a randomized map each session, lets players run, jump, and navigate dynamically placed platforms to collect every food item scattered across the level.",
      previewImage: BASE + "img/LandingPreview_Hobo.webp",
      keywords: "Unity, C#, Game, Portfolio, Video Game, Games Development, Hobo, Unity C#, Unity C# Game, Unity C# Hobo, map generation, random map, platformer, 2D platformer"
    }
  ]
};
