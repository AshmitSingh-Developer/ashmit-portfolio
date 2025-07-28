
export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
}

 export const Projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      des: "A comprehensive analytics platform built with React, TypeScript, and machine learning algorithms for real-time data insights and predictive modeling.",
      img: "/profile-image.png",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      ],
      link: "https://example.com",
      github: "https://github.com/Ayush-1978-B"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      des: "An immersive 3D portfolio experience using Three.js, React, and modern web technologies with stunning visual effects and smooth interactions.",
      img: "/profile-image.png",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      ],
      link: "https://example.com",
      github: "https://github.com/example/repo"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      des: "A modern e-commerce solution with advanced features including real-time inventory, payment processing, and comprehensive admin dashboard.",
      img: "/profile-image.png",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      ],
      link: "https://example.com",
      github: "https://github.com/example/repo"
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/profile-image.png",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      ],
      link: "/ui.apple.com",
      github: "https://github.com/example/repo",
    },
  ];