import { images } from "./image";

export const myProjects = [
  {
    id: 1,
    title: "DevTalks",
    description:
      "DevTalks is an AI-powered Q&A platform built for developers to get instant support, collaborate, and grow.",
    subDescription: [
      "Get instant AI answers to coding questions.",
      "Test skills with quick coding quizzes.",
      "Access curated developer blogs.",
      "Secure login and user management.",
      "Admin can manage users and content.",
      "Responsive design for all devices.",
    ],
    href: "https://dev-talks-1.web.app/",
    github: "https://github.com/AtiqurRahman895/DevTalks",
    image: images.DevTalk,
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Node.js", path: images.Nodejs },
      { id: 4, name: "Express.js", path: images.ExpressJs },
      { id: 5, name: "MongoDB", path: images.MongoDb },
      { id: 6, name: "Firebase", path: images.FireBase },
      { id: 9, name: "Gemini", path: images.Gemini },
    ],
  },

  {
    id: 2,
    title: "BlogHeaven",
    description:
      "BlogHeaven is a dynamic and visually stunning blog platform designed to let users create, explore, and manage blogs effortlessly. It offers a modern interface, smooth animations, and secure authentication for an engaging user experience.",
    subDescription: [
      "Fully responsive design with smooth and intuitive navigation.",
      "Browse blogs by category or instantly find one using the search bar.",
      "Read detailed blog posts with comments and user interactions.",
      "Add your favorite blogs to a personalized wishlist for quick access.",
      "Discover featured and trending blogs highlighted by content quality.",
      "Fast and secure authentication ensures a safe browsing experience.",
    ],
    href: "https://your-blogsphere-live-link.com/",
    github: "https://github.com/yourusername/blogsphere",
    image: images.BlogHeaven,
    tags: [
      { id: 1, name: "React", path: images.React },
      { id: 2, name: "Tailwind CSS", path: images.TailwindCSS },
      { id: 3, name: "Framer Motion", path: images.Framer },
      { id: 4, name: "Node.js", path: images.Nodejs },
      { id: 5, name: "Express.js", path: images.ExpressJs },
      { id: 6, name: "MongoDB", path: images.MongoDb },
    ],
  },
  {
    id: 3,
    title: "Learn-Hub",
    description:
      "Learn-Hub is a full-stack Learning Management System that streamlines online education.",
    subDescription: [
      "Role-Based Access: Tailored dashboards for students, instructors, and admins.",
      "Session Booking: Book live sessions with secure Stripe payments.",
      "Material Upload: Instructors share resources after admin approval.",
      "Admin Panel: Manage users, content, and session reviews easily.",
      "Session Notes: Students can save personal notes for future use.",
    ],
    href: "https://learn-hub-d12e0.web.app/",
    github: "https://github.com/TanvirMain49/Learn-Hub-Client",
    image: images.LearnHub,
    tags: [
      { id: 1, name: "React.js", path: images.React },
      { id: 2, name: "Tailwind CSS", path: images.TailwindCSS },
      { id: 3, name: "Firebase", path: images.FireBase },
      { id: 3, name: "Node.js", path: images.Nodejs },
      { id: 4, name: "Express.js", path: images.ExpressJs },
      { id: 5, name: "MongoDB", path: images.MongoDb },
    ],
  },
  {
    id: 4,
    title: "Game Heaven",
    description:
      "Game Heaven is a dynamic platform for gaming enthusiasts to explore, review, and manage their favorite games.",
    subDescription: [
      "Review Management: Add, update, and delete game reviews.",
      "Personalized Watchlist: Create and manage a list of games to play or follow.",
      "Sorting & Filtering: Sort reviews by rating/year and filter by genre.",
      "Dark/Light Theme Toggle: Switch between themes for a customizable experience.",
    ],
    href: "https://game-heaven-1117d.web.app/",
    github: "https://github.com/TanvirMain49/Game-Heaven-Client",
    image: images.GameHeaven,
    tags: [
      { id: 1, name: "React", path: images.React },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Firebase", path: images.FireBase },
      { id: 4, name: "MongoDB", path: images.MongoDb },
      { id: 5, name: "Express.js", path: images.ExpressJs },
      { id: 6, name: "Node.js", path: images.Nodejs },
    ],
  },
];

