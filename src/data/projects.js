import { cinevisionDemo } from './demos/cinevision-demo';
import { portfolioDemo } from './demos/portfolio-demo';

export const projects = {
  web: [
    {
      id: 1,
      category: "demo",
      title: "CINEVISION STUDIOS",
      slug: "cinevision-studios",
      description: "CineVision Studios is an imaginary small indie studio that makes movies and series. This is a demo of their website where you can see its code. It's a simple, classic website with a home page, a about page and a contact page.",
      previewImage: import.meta.env.BASE_URL + "/img/cinevision-preview.webp",
      files: cinevisionDemo
    },
    {
      id: 2,
      category: "demo",
      title: "PORTFOLIO DEMO",
      slug: "portfolio-demo",
      description: `This is a demo of a straightforward portfolio website. The images work as a carousel and the details are hidden in a modal.
      This solution is based on Esmeralda Devlin's portfolio.`,
      previewImage: import.meta.env.BASE_URL + "/img/portfolio-preview.webp",
      files: portfolioDemo
    },
    {
      id: 3,
      category: "final",
      title: "KUMO CREATIVE PROJECT",
      slug: "kumo-creative-project",
      description:"Kumo Creative is a video producer. For this project, I was asked to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",
      previewImage: import.meta.env.BASE_URL + "/img/pruebaWebFinal1-preview.webp",
      video: import.meta.env.BASE_URL + "/vids/KumoCreativeProject.webm",
      poster: import.meta.env.BASE_URL + "/vids/PosterKumoCreativeProject.webp",
      url: "https://kumocreativeproject.com"
    }
  ],
  games: [
    {
      id: 4,
      title: "CONSTELLATIONS",
      slug: "constellations",
      description: "Constelations is a small Pygame demo that draws moving dots and connects those within a certain distance, with an interactive control panel to adjust speed, number of points, and connection distance. With Pygbag, it can run in modern browsers as a WebAssembly application.",
      previewImage: import.meta.env.BASE_URL + "/img/space-preview.webp",
      url: import.meta.env.BASE_URL + "/games/Constelations/build/web/index.html",
      git: "https://github.com/MarcBasas/Constelations_pygame"
    },
    {
      id: 5,
      title: "FLAPPY BLOB",
      slug: "flappy-blob",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: import.meta.env.BASE_URL + "/img/flappy-preview.webp",
      url: import.meta.env.BASE_URL + "/games/ProbaWeb/build/web/index.html"
    },
    {
      id: 6,
      title: "BRICK BREAKER",
      slug: "brick-breaker",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: import.meta.env.BASE_URL + "/img/brickbreaker-preview.webp",
      url: import.meta.env.BASE_URL + "/games/brick-breaker/index.html"
    }
  ]
};
