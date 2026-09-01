export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  number: string;
  label: string;

  title: string;
  subtitle: string;

  liveUrl: string;
  githubUrl: string;

  stack: string[];

  description: string;

  images: ProjectImage[];

  features: string[];
}

export const projects: Project[] = [
  {
    slug: "car1pro",
    number: "01",
    label: "Featured Project",

    title: "Car1Pro",
    subtitle:
      "A production-oriented automotive marketplace built with modern full-stack architecture.",

    liveUrl: "https://car1pro.vercel.app/",
    githubUrl: "https://github.com/pprachhiii/car1pro",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],

    description:
      "Car1Pro is a full-stack automotive marketplace designed around vehicle discovery, product management, authentication, carts, and orders. The application was built with a production-oriented architecture and focuses on responsive user experiences, reusable components, relational data modeling, and automated deployment.",

    images: [
      {
        src: "/images/projects/car1pro/one.png",
        caption:
          "Homepage - the main entry point for discovering vehicles and exploring the automotive marketplace.",
      },
      {
        src: "/images/projects/car1pro/two.png",
        caption:
          "Vehicle Listings - users can browse and explore available vehicles.",
      },
      {
        src: "/images/projects/car1pro/three.png",
        caption:
          "Vehicle Details - a detailed view containing information about an individual vehicle.",
      },
      {
        src: "/images/projects/car1pro/four.png",
        caption:
          "Dashboard - managing products, orders, and user activity.",
      },
    ],

    features: [
      "Built a full-stack automotive marketplace using Next.js, TypeScript, Prisma ORM, and PostgreSQL.",
      "Developed 15+ REST APIs and relational database models supporting authentication, product management, carts, orders, and CRUD operations.",
      "Built reusable UI components with Radix UI and React Hook Form for responsive and accessible user experiences.",
      "Automated deployment using Docker, GitHub Actions, and Vercel.",
    ],
  },

  {
    slug: "dhara",
    number: "02",
    label: "Featured Project",

    title: "Dhara",
    subtitle:
      "A civic platform designed to turn community reports into actionable public accountability.",

    liveUrl: "https://dhara-six.vercel.app/",
    githubUrl: "https://github.com/pprachhiii/dhara",

    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
    ],

    description:
      "Dhara is a civic engagement platform focused on helping communities report, track, and manage public issues. The platform combines authentication, issue reporting, user management, media uploads, and structured relational data into a responsive full-stack application.",

    images: [
      {
        src: "/images/projects/dhara/one.png",
        caption:
          "Homepage - introducing the civic engagement platform and its core workflows.",
      },
      {
        src: "/images/projects/dhara/two.png",
        caption:
          "Issue Reporting - users can submit and document civic issues.",
      },
      
    ],

    features: [
      "Built a full-stack civic engagement platform using Next.js, TypeScript, Prisma ORM, and PostgreSQL.",
      "Developed 30+ REST APIs and 20+ relational database models supporting authentication, issue reporting, tracking, and user management.",
      "Implemented Zustand for state management and React Hook Form for validated form workflows.",
      "Integrated ImageKit for media uploads and built reusable responsive UI components with Tailwind CSS.",
    ],
  },

  {
    slug: "item-manager",
    number: "03",
    label: "Featured Project",

    title: "Item Manager",
    subtitle:
      "An inventory management application focused on modular architecture and efficient CRUD operations.",

    liveUrl: "https://item-manager-cee0.onrender.com/",
    githubUrl: "https://github.com/pprachhiii/item-manager",

    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],

    description:
      "Item Manager is a full-stack inventory management application focused on efficient product management and modular application architecture. The system connects a React frontend with a Node.js and Express backend through REST APIs and MongoDB.",

    images: [
      {
        src: "/images/projects/item-manager/one.png",
        caption:
          "Dashboard - the central interface for managing inventory.",
      },
      {
        src: "/images/projects/item-manager/two.png",
        caption:
          "Product Management - viewing and managing inventory items.",
      },
      {
        src: "/images/projects/item-manager/3.png",
        caption:
          "Add Item - creating new inventory records through the application.",
      },
    ],

    features: [
      "Built a full-stack inventory management application using React, Node.js, Express.js, and MongoDB.",
      "Implemented complete CRUD operations with REST APIs for inventory and product management.",
      "Integrated frontend and backend through API-driven data synchronization.",
      "Designed a modular component architecture with reusable UI components for scalability and maintainability.",
    ],
  },

  {
    slug: "2070",
    number: "04",
    label: "Featured Project",

    title: "2070",
    subtitle:
      "An interactive dashboard for environmental monitoring, geospatial insights, and data visualization.",

    liveUrl: "https://2070-ten.vercel.app/",
    githubUrl: "https://github.com/pprachhiii/2070",

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "Recharts",
    ],

    description:
      "2070 is an environmental analytics dashboard focused on data visualization, geospatial insights, interactive maps, and environmental monitoring. The interface combines reusable React components with interactive mapping and charting tools.",

    images: [
      {
        src: "/images/projects/2070/one.png",
        caption:
          "Dashboard - the main environmental monitoring interface.",
      },
      {
        src: "/images/projects/2070/two.png",
        caption:
          "Interactive Map - displaying geospatial environmental information.",
      },
      {
        src: "/images/projects/2070/three.png",
        caption:
          "Analytics - visualizing environmental data through charts and metrics.",
      },
            {
        src: "/images/projects/2070/four.png",
        caption:
          "Analytics - visualizing environmental data through charts and metrics.",
      },
      {
        src: "/images/projects/2070/five.png",
        caption:
          "Analytics - visualizing environmental data through charts and metrics.",
      },

    ],

    features: [
      "Built an interactive environmental analytics dashboard using React, TypeScript, and Tailwind CSS.",
      "Developed interactive maps, heatmaps, and geospatial visualizations using Leaflet.",
      "Created reusable chart components using Recharts for data visualization.",
      "Designed a responsive dashboard with reusable UI components and efficient state management.",
    ],
  },

  {
    slug: "stayease",
    number: "05",
    label: "Featured Project",

    title: "StayEase",
    subtitle:
      "A rental marketplace engineered around search, authentication, and media management.",

    liveUrl: "https://stayease-smsm.onrender.com/listings/",
    githubUrl: "https://github.com/pprachhiii/StayEase",

    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "REST APIs",
    ],

    description:
      "StayEase is a full-stack rental marketplace built for property discovery and management. The platform provides property listings, authentication, bookings, search and filtering, image uploads, and user account functionality.",

    images: [
      {
        src: "/images/projects/stayease/one.png",
        caption:
          "Listings - browsing available rental properties.",
      },
      {
        src: "/images/projects/stayease/two.png",
        caption:
          "Property Details - viewing detailed information about a rental property.",
      },
    ],

    features: [
      "Built a full-stack rental marketplace using React, Node.js, Express.js, and MongoDB.",
      "Developed REST APIs, secure authentication, and complete CRUD workflows for property listings, bookings, and user accounts.",
      "Implemented property search, filtering, and image uploads.",
      "Designed a responsive rental experience using reusable frontend components.",
    ],
  },
];