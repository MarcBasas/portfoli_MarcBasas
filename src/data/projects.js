import { cinevisionDemo } from './demos/cinevision-demo';
import { portfolioDemo } from './demos/portfolio-demo';

export const projects = {
  web: [
    {
      id: 1,
      title: "CineVision Studios",
      slug: "cinevision-studios",
      webType: "demo",
      description: "CineVision Studios is an imaginary small indie studio that makes movies and series. This is a demo of their website where you can see its code. It's a simple, classic website with a home page, a about page and a contact page.",
      previewImage: import.meta.env.BASE_URL + "/img/cinevision-preview.webp",
      files: cinevisionDemo,
      gitUrl: ""
    },
    {
      id: 2,
      title: "Portfolio Demo",
      slug: "portfolio-demo",
      webType: "demo",
      description: `This is a demo of a straightforward portfolio website. The images work as a carousel and the details are hidden in a modal.
      This solution is based on Esmeralda Devlin's portfolio.`,
      previewImage: import.meta.env.BASE_URL + "/img/portfolio-preview.webp",
      files: portfolioDemo,
      gitUrl: ""
    },
    {
      id: 3,
      title: "Kumo Creative Project",
      slug: "kumo-creative-project",
      webType: "final",
      description:"Kumo Creative is a video producer. For this project, I was asked to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",
      previewImage: import.meta.env.BASE_URL + "/img/pruebaWebFinal1-preview.webp",
      images: [
        "/img/pruebaWebFinal1-desktop.webp",
        "/img/pruebaWebFinal1-mobile.webp"
      ],
      websiteUrl: "https://kumocreativeproject.com",
      gitUrl: ""
    }
  ],
  games: [
    {
      id: 4,
      title: "Constelations",
      slug: "Constelations",
      description: "Constelations is a small Pygame demo that draws moving dots and connects those within a certain distance, with an interactive control panel to adjust speed, number of points, and connection distance. With Pygbag, it can run in modern browsers as a WebAssembly application.",
      previewImage: import.meta.env.BASE_URL + "/img/space-preview.webp",
      url: import.meta.env.BASE_URL + "/games/Constelations/build/web/index.html",
      gitUrl: "https://github.com/MarcBasas/Constelations_pygame"
    },
    {
      id: 5,
      title: "Flappy Blob",
      slug: "flappy-blob",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: import.meta.env.BASE_URL + "/img/flappy-preview.webp",
      url: import.meta.env.BASE_URL + "/games/ProbaWeb/build/web/index.html",
      gitUrl: ""
    },
    {
      id: 6,
      title: "Brick Breaker",
      slug: "brick-breaker",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: import.meta.env.BASE_URL + "/img/brickbreaker-preview.webp",
      url: import.meta.env.BASE_URL + "/games/brick-breaker/index.html",
      gitUrl: ""
    }
  ]
};
