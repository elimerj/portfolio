import houseOfGamesImage from '@/assets/house-of-game.png';
import tesloShopImage from '@/assets/teslo-shop.png';
import superHeroUniverseImage from '@/assets/superhero-universe.png';

interface LocalizedText {
  es: string;
  en: string;
}

interface ProjectConfig {
  id: string;
  name: string;
  description: LocalizedText;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const ProjectsData: ProjectConfig[] = [
  {
    id: 'house-of-games',
    name: 'House Of Games',
    description: {
      en: 'Video game e-commerce platform with authentication, shopping cart, user management and admin panel.',
      es: 'Plataforma de e-commerce para videojuegos con autenticación, carrito de compras, gestión de usuarios y panel de administrador.',
    },

    tech: ['Express', 'Node.js', 'MySQL', 'Sequelize'],
    image: houseOfGamesImage,
    liveUrl: 'https://house-of-games-7jqd.onrender.com/',
    codeUrl: 'https://github.com/elimerj/grupo_5_ProyectoIntegradorDG',
  },
  {
    id: 'teslo-shop',
    name: 'Teslo Shop',
    description: {
      en: 'Modern e-commerce with admin dashboard, product management, stock control and authentication.',
      es: 'E-commerce moderno con panel de administración, gestión de productos, control de stock y autenticación.',
    },

    tech: ['React', 'TypeScript', 'MongoDB', 'Docker', 'Redis'],
    image: tesloShopImage,
    liveUrl: 'https://teslo-shop-react-ts.netlify.app/',
    codeUrl: 'https://github.com/elimerj/teslo-shop-app-react',
  },
  {
    id: 'superhero-universe',
    name: 'Superhero Universe',
    description: {
      en: 'Real-time superheroes platform with live data, search and dynamic stats.',
      es: 'Plataforma de superhéroes con datos en tiempo real, buscador y estadísticas dinámicas.',
    },
    tech: ['React', 'TypeScript', 'Context API', 'Docker', 'Redis'],
    image: superHeroUniverseImage,
    liveUrl: 'https://react-app-heroes-proyect.netlify.app/',
    codeUrl: 'https://github.com/elimerj/heroes-app-frontend',
  },
];
