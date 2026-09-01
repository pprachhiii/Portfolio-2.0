export type Experience = {
  slug: string;
  number: string;
  label: string;

  role: string;
  company: string;
  logo: string;

  duration: string;
  location: string;
  type: string;

  certificateUrl?: string;

  stack: string[];

  description: string;

  highlights: string[];
};

export const experiences: Experience[] = [
  {
    slug: "full-stack-developer-intern",
    number: "01",
    label: "Internship",

    role: "Full-Stack Developer Intern",
    company: "Shreemal Technology",

    logo: "/images/exp1.jpg",

    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",

    certificateUrl:
      "https://drive.google.com/file/d/17TLtzdDpjwcLY7kdwVcebjH1Adz27El6/view?usp=sharing",

    stack: [
      "Next.js 13+",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Upstash",
      "Vercel",
      "Postman",
    ],

    description:
      "Worked as a Full-Stack Developer Intern at Shreemal Technology, contributing across frontend development, backend services, REST API integration, caching, authentication workflows, and production deployment. Built responsive Next.js interfaces using TypeScript and Tailwind CSS while working across frontend and backend systems to deliver production-ready features.",

    highlights: [
      "Built responsive Next.js interfaces using TypeScript and Tailwind CSS, integrating REST APIs across production features.",

      "Improved backend performance with Upstash Redis caching and implemented rate limiting of 5 requests per minute on authentication APIs.",

      "Collaborated across frontend, backend, and API integration to deliver production-ready features using modern full-stack development workflows.",

      "Validated and tested APIs using Postman, improving API reliability and development efficiency.",
    ],
  },

  {
    slug: "backend-developer-intern",
    number: "02",
    label: "Internship",

    role: "Backend Developer Intern",
    company: "GetNomik",

    logo: "/images/exp2.jpg",

    duration: "Jul–Aug 2025",
    location: "Remote",
    type: "Internship",

    certificateUrl:
      "https://drive.google.com/file/d/1pwrkcc7H7bQj1h1Hj5DPLXIAasTpfmjQ/view?usp=sharing",

    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "RBAC",
      "Razorpay",
      "SMTP",
    ],

    description:
      "Worked as a Backend Developer Intern at GetNomik, focusing on REST API development, authentication, authorization, database operations, payments, and transactional communication. Developed backend functionality using Node.js, Express.js, and MySQL while implementing secure authentication and role-based access control.",

    highlights: [
      "Built backend REST APIs using Node.js, Express.js, and MySQL for production applications.",

      "Implemented secure JWT authentication and Role-Based Access Control (RBAC) for 2 user roles.",

      "Integrated Razorpay payment gateway and SMTP email services for transactional workflows.",

      "Optimized MySQL queries across 4+ API endpoints, improving backend performance and database efficiency.",
    ],
  },
];