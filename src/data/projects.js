import { cinevisionDemo } from './demos/cinevision-demo';
import { portfolioDemo } from './demos/portfolio-demo';

export const projects = {
  web: [
    {
      id: 1,
      category: "final",
      title: "KUMO CREATIVE",
      titleMin: "Kumo Creative Project",
      slug: "kumo-creative-project",
      description:"Kumo Creative is a video producer. For this project, I was asked to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",
      previewImage: import.meta.env.BASE_URL + "/img/LandingPreview_KumoCreative.webp",
      video: import.meta.env.BASE_URL + "/vids/KumoCreativeProject.webm",
      poster: import.meta.env.BASE_URL + "/vids/PosterKumoCreativeProject.webp",
      url: "https://kumocreativeproject.com"
    },
    {
        id: 2,
      category: "demo",
      title: "CINEVISION STUDIOS",
      titleMin: "CineVision Studios",
      slug: "cinevision-studios",
      description: "CineVision Studios is an imaginary small indie studio that makes movies and series. This is a demo of their website where you can see its code. It's a simple, classic website with a home page, a about page and a contact page.",
      previewImage: import.meta.env.BASE_URL + "/img/LandingPreview_CineVision.webp",
      files: cinevisionDemo
    },
    {
      id: 3,  
      category: "demo",
      title: "PORTFOLIO DEMO",
      titleMin: "Portfolio",
      slug: "portfolio-demo",
      description: `This is a demo of a straightforward portfolio website. The images work as a carousel and the details are hidden in a modal.
      This solution is based on Esmeralda Devlin's portfolio.`,
      previewImage: import.meta.env.BASE_URL + "/img/LandingPreview_Portfolio.webp",
      files: portfolioDemo
    }
  ],
  games: [
    {
      id: 4,
      title: "CONSTELLATIONS",
      titleMin: "Constelations",
      slug: "constellations",
      description: "This small Pygame draws moving dots and connects those within a certain distance. With an interactive control panel, the user can adjust speed, number of points, and connection distance. With Pygbag, it can run a WebAssembly application.",
      previewImage: import.meta.env.BASE_URL + "/img/LandingPreview_Constellations.webp",
      url: import.meta.env.BASE_URL + "/games/Constelations/build/web/index.html",
      git: "https://github.com/MarcBasas/Constelations_pygame",
      video: import.meta.env.BASE_URL + "/vids/ProjectVideo_Constellations.webm",
      poster: import.meta.env.BASE_URL + "/img/LandingPreview_Constellations.webp"
    },
    {
      id: 5,
      title: "CHESSEXCEL",
      titleMin: "ChessExcel",
      slug: "chessExcel",
      description: "This Excel-based chess game developed in VBA lets users play chess with a different environment. Packaged as a workbook, it demonstrates automated logic, UI, and Excel's capabilities.",
      previewImage: import.meta.env.BASE_URL + "/img/LandingPreview_ChessExcel.webp",
      video: import.meta.env.BASE_URL + "/vids/ChessExcell.webm",
      poster: import.meta.env.BASE_URL + "/img/LandingPreview_ChessExcel.webp",
      git: "https://github.com/MarcBasas/ChessExcel"
    },
    {
      id: 6,
      title: "HOBO",
      titleMin: "Hobo",
      slug: "hobo",
      description:"Hobo is a Unity-based 2D platformer developed in C# that procedurally generates a randomized map each session, lets players run, jump, and navigate dynamically placed platforms to collect every food item scattered across the level.",
      previewImage: import.meta.env.BASE_URL + "/img/LandingPreview_Hobo.webp",
      url: import.meta.env.BASE_URL + "/games/brick-breaker/index.html"
    }
  ]
};
