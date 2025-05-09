import { cinevisionDemo } from './demos/cinevision-demo';
import { portfolioDemo } from './demos/portfolio-demo';

export const projects = {
  web: [
    {
      id: 1,
      title: "Prueba web final 1",
      slug: "webFinal1-html",
      webType: "final",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: "/img/pruebaWebFinal1-preview.webp",
      images: [
        "/img/pruebaWebFinal1-desktop.webp",
        "/img/pruebaWebFinal1-mobile.webp"
      ],
      websiteUrl: "https://webfinal1.com"
    },
    {
      id: 2,
      title: "CineVision Studios",
      slug: "cinevision-studios",
      webType: "demo",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: "/img/cinevision-preview.webp",
      files: cinevisionDemo
    },
    {
      id: 3,
      title: "Portfolio Demo",
      slug: "portfolio-demo",
      webType: "demo",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: "/img/portfolio-preview.webp",
      files: portfolioDemo
    }
  ],
  games: [
    {
      id: 4,
      title: "Space Shooter",
      slug: "space-shooter",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: "/img/space-preview.webp",
      url: "/games/Constelations/build/web/index.html"
    },
    {
      id: 5,
      title: "Flappy Blob",
      slug: "flappy-blob",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: "/img/flappy-preview.webp",
      url: "/games/flappy-blob/index.html"
    },
    {
      id: 6,
      title: "Brick Breaker",
      slug: "brick-breaker",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      previewImage: "/img/brickbreaker-preview.webp",
      url: "/games/brick-breaker/index.html"
    }
  ]
};
