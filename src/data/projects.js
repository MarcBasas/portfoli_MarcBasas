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
      description:"Kumo Creative es una productora de videos. Para este proyecto, me pidieron ayudar con el desarrollo responsivo del sitio web. El sitio ya estaba construido, así que me enfoqué en hacer que se viera bien en todos los dispositivos.",
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
      description:"Crealab es un estudio publicitario y de branding imaginario. Esta demo presenta una cuarícula infinita de proyectos, con modales para ver los detalles de cada uno. Es un sitio web mas creativo y diferente, pero simple al mismo tiempo",
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
      description:"CineVision Studios es un estudio indie imaginario que produce películas y series. Esta es una demo de su sitio web donde puedes ver su código. Es un sitio web simple y clásico con datos necesarios para el cliente.",
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
      description:"Esta es una demo de un sitio web de portfolio. Las imágenes funcionan como un carrusel y los detalles se ocultan en un modal. Esta solución está basada en el portfolio de Esmeralda Devlin.",
      previewImage: BASE + "img/LandingPreview_Portfolio.webp",
      files: portfolioDemo,
      keywords: "Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Portfolio Demo, Portfolio Website, Portfolio Website Demo, Portfolio Website React, Portfolio Website HTML, Portfolio Website CSS, Portfolio Website JavaScript"
    }
  ],
  games: [
    {
      id: 5,
      title: "CONSTELLATIONS",
      titleMin: "Constelations",
      slug: "constellations",
      finished: true,
      description:"Este pequeño juego de Pygame dibuja puntos en movimiento y conecta aquellos que están dentro de una cierta distancia. El usuario puede ajustar la velocidad, el número de puntos y la distancia de conexión. Con Pygbag, puede ejecutarse como una aplicación WebAssembly.",
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
      description:"Este juego de ajedrez basado en Excel desarrollado en VBA permite a los usuarios jugar ajedrez en un entorno diferente. Empaquetado como un libro de trabajo, intenta demostrar las capacidades de Excel.",
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
      description:"Hobo es un juego de plataformas 2D basado en Unity desarrollado en C# que genera procedimentalmente un mapa aleatorio en cada sesión, permite a los jugadores correr, saltar y navegar por plataformas para recoger todos los elementos de comida esparcidos por el nivel.",
      previewImage: BASE + "img/LandingPreview_Hobo.webp",
      keywords: "Unity, C#, Game, Portfolio, Video Game, Games Development, Hobo, Unity C#, Unity C# Game, Unity C# Hobo, map generation, random map, platformer, 2D platformer"
    }
  ]
};
