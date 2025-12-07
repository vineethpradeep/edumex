export const coursesData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    badge: "Featured",
    price: 149,
    originalPrice: 199,
    level: "Beginner",
    duration: "8 Weeks",
    title: "Digital Marketing Fundamentals",
    description:
      "Master the essentials of digital marketing, from SEO and content marketing to social media campaigns. Earn an Edumex certificate.",
    instructorImg: "https://randomuser.me/api/portraits/women/1.jpg",
    instructorName: "Sarah Johnson",
    instructorRole: "Marketing Expert",
    rating: 4.8,
    students: 842,
    delay: 200,
    whatYouLearn: [
      "SEO fundamentals and keyword research",
      "Content strategy and planning",
      "Social media marketing campaigns",
      "Email marketing and automation",
      "Google Analytics & Ads basics",
    ],
    curriculum: [
      {
        module: "Module 1: Introduction to Digital Marketing",
        lessonsCount: "5 lessons • 2 hours",
        lessons: [
          {
            title: "Digital Marketing Overview",
            icon: "bi bi-play-circle",
            duration: "20 min",
          },
          {
            title: "SEO Basics",
            icon: "bi bi-play-circle",
            duration: "25 min",
          },
        ],
      },
      {
        module: "Module 2: Social Media & Content Marketing",
        lessonsCount: "4 lessons • 3 hours",
        lessons: [
          {
            title: "Facebook & Instagram Marketing",
            icon: "bi bi-play-circle",
            duration: "30 min",
          },
          {
            title: "LinkedIn Strategies",
            icon: "bi bi-play-circle",
            duration: "35 min",
          },
        ],
      },
    ],
    pricing: {
      price: 149,
      originalPrice: 199,
      features: [
        { icon: "bi bi-clock", text: "8 weeks duration" },
        { icon: "bi bi-trophy", text: "Edumex Certificate" },
        { icon: "bi bi-phone", text: "Mobile & desktop access" },
        { icon: "bi bi-infinity", text: "Lifetime access" },
      ],
    },
    info: [
      { label: "Level", value: "Beginner" },
      { label: "Students", value: "842 enrolled" },
      { label: "Language", value: "English" },
      { label: "Prerequisites", value: "No prior experience required" },
      { label: "Last Updated", value: "Nov 2025" },
    ],
    tags: ["Marketing", "SEO", "Social Media", "Edumex Certificate"],
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    badge: "New",
    price: 89,
    originalPrice: 149,
    level: "Intermediate",
    duration: "6 Weeks",
    title: "Web Development with JavaScript",
    description:
      "Learn modern JavaScript and React to build interactive web applications. Complete the course to get Edumex certified.",
    instructorImg: "https://randomuser.me/api/portraits/men/1.jpg",
    instructorName: "Michael Chen",
    instructorRole: "Full Stack Developer",
    rating: 5.0,
    students: 620,
    delay: 300,
    whatYouLearn: [
      "Modern JavaScript fundamentals",
      "DOM manipulation & events",
      "Frontend frameworks (React)",
      "Backend basics (Node.js)",
      "Deploying web apps",
    ],
    curriculum: [
      {
        module: "Module 1: JavaScript Fundamentals",
        lessonsCount: "6 lessons • 3 hours",
        lessons: [
          {
            title: "Variables & Data Types",
            icon: "bi bi-play-circle",
            duration: "20 min",
          },
          {
            title: "Functions & Scope",
            icon: "bi bi-play-circle",
            duration: "25 min",
          },
        ],
      },
      {
        module: "Module 2: React.js Basics",
        lessonsCount: "5 lessons • 4 hours",
        lessons: [
          {
            title: "Components & JSX",
            icon: "bi bi-play-circle",
            duration: "30 min",
          },
          {
            title: "State & Props",
            icon: "bi bi-play-circle",
            duration: "35 min",
          },
        ],
      },
    ],
    pricing: {
      price: 89,
      originalPrice: 149,
      features: [
        { icon: "bi bi-clock", text: "6 weeks duration" },
        { icon: "bi bi-trophy", text: "Edumex Certificate" },
        { icon: "bi bi-phone", text: "Mobile & desktop access" },
      ],
    },
    info: [
      { label: "Level", value: "Intermediate" },
      { label: "Students", value: "620 enrolled" },
      { label: "Language", value: "English" },
      { label: "Prerequisites", value: "Basic HTML & CSS" },
      { label: "Last Updated", value: "Nov 2025" },
    ],
    tags: [
      "JavaScript",
      "React",
      "Frontend",
      "Web Development",
      "Edumex Certificate",
    ],
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Certificate",
    price: 129,
    originalPrice: 199,
    level: "Beginner",
    duration: "4 Weeks",
    title: "Introduction to Data Science",
    description:
      "Start your journey in data science with Python, visualization, and basic machine learning. Earn an Edumex certificate upon completion.",
    instructorImg: "https://randomuser.me/api/portraits/women/2.jpg",
    instructorName: "Dr. Emily Watson",
    instructorRole: "Data Scientist",
    rating: 4.9,
    students: 1020,
    delay: 400,
    whatYouLearn: [
      "Python for data analysis",
      "Data visualization with matplotlib & seaborn",
      "Introduction to machine learning",
      "Data cleaning & preprocessing",
    ],
    curriculum: [
      {
        module: "Module 1: Python for Data Science",
        lessonsCount: "5 lessons • 2 hours",
        lessons: [
          {
            title: "Python Basics",
            icon: "bi bi-play-circle",
            duration: "25 min",
          },
          {
            title: "Data Structures & Loops",
            icon: "bi bi-play-circle",
            duration: "30 min",
          },
        ],
      },
      {
        module: "Module 2: Data Analysis & Visualization",
        lessonsCount: "6 lessons • 3 hours",
        lessons: [
          {
            title: "Pandas DataFrames",
            icon: "bi bi-play-circle",
            duration: "35 min",
          },
          {
            title: "Matplotlib & Seaborn Charts",
            icon: "bi bi-play-circle",
            duration: "40 min",
          },
        ],
      },
    ],
    pricing: {
      price: 129,
      originalPrice: 199,
      features: [
        { icon: "bi bi-clock", text: "4 weeks duration" },
        { icon: "bi bi-trophy", text: "Edumex Certificate" },
        { icon: "bi bi-phone", text: "Mobile & desktop access" },
      ],
    },
    info: [
      { label: "Level", value: "Beginner" },
      { label: "Students", value: "1020 enrolled" },
      { label: "Language", value: "English" },
      { label: "Last Updated", value: "Nov 2025" },
    ],
    tags: ["Data Science", "Python", "Machine Learning", "Edumex Certificate"],
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Certificate",
    price: 99,
    originalPrice: 149,
    level: "Intermediate",
    duration: "5 Weeks",
    title: "React.js Fundamentals",
    description:
      "Learn React.js, hooks, state management, and build interactive web apps. Complete the course and get certified by Edumex.",
    instructorImg: "https://randomuser.me/api/portraits/women/3.jpg",
    instructorName: "Jessica Lee",
    instructorRole: "Frontend Developer",
    rating: 4.7,
    students: 520,
    delay: 400,
    whatYouLearn: [
      "React components & JSX",
      "State & Props",
      "Hooks and Context API",
      "Routing & navigation",
    ],
    curriculum: [
      {
        module: "Module 1: React Basics",
        lessonsCount: "6 lessons • 3 hours",
        lessons: [
          {
            title: "JSX & Components",
            icon: "bi bi-play-circle",
            duration: "25 min",
          },
          {
            title: "Props & State",
            icon: "bi bi-play-circle",
            duration: "30 min",
          },
        ],
      },
      {
        module: "Module 2: React Advanced",
        lessonsCount: "5 lessons • 4 hours",
        lessons: [
          {
            title: "Hooks & Context API",
            icon: "bi bi-play-circle",
            duration: "35 min",
          },
          {
            title: "Routing & Navigation",
            icon: "bi bi-play-circle",
            duration: "40 min",
          },
        ],
      },
    ],
    pricing: {
      price: 99,
      originalPrice: 149,
      features: [
        { icon: "bi bi-clock", text: "5 weeks duration" },
        { icon: "bi bi-trophy", text: "Edumex Certificate" },
        { icon: "bi bi-phone", text: "Mobile & desktop access" },
      ],
    },
    info: [
      { label: "Level", value: "Intermediate" },
      { label: "Students", value: "520 enrolled" },
      { label: "Language", value: "English" },
      { label: "Last Updated", value: "Nov 2025" },
    ],
    tags: ["React", "JavaScript", "Frontend", "Edumex Certificate"],
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1653564142033-ab3532091515?q=80&w=3430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Certificate",
    price: 129,
    originalPrice: 199,
    level: "Advanced",
    duration: "6 Weeks",
    title: "Python for Machine Learning",
    description:
      "Explore Python libraries for machine learning and AI, including scikit-learn, pandas, and NumPy. Get Edumex certified.",
    instructorImg: "https://randomuser.me/api/portraits/men/2.jpg",
    instructorName: "Dr. Robert Smith",
    instructorRole: "Data Scientist",
    rating: 4.9,
    students: 612,
    delay: 400,
    whatYouLearn: [
      "Python for ML and AI",
      "Data preprocessing and cleaning",
      "Model building with scikit-learn",
      "Evaluation and optimization",
    ],
    curriculum: [
      {
        module: "Module 1: Python ML Basics",
        lessonsCount: "5 lessons • 3 hours",
        lessons: [
          {
            title: "Python Refresher",
            icon: "bi bi-play-circle",
            duration: "20 min",
          },
          {
            title: "Numpy & Pandas",
            icon: "bi bi-play-circle",
            duration: "30 min",
          },
        ],
      },
      {
        module: "Module 2: ML Models",
        lessonsCount: "6 lessons • 4 hours",
        lessons: [
          {
            title: "Linear Regression",
            icon: "bi bi-play-circle",
            duration: "35 min",
          },
          {
            title: "Decision Trees",
            icon: "bi bi-play-circle",
            duration: "40 min",
          },
        ],
      },
    ],
    pricing: {
      price: 129,
      originalPrice: 199,
      features: [
        { icon: "bi bi-clock", text: "6 weeks duration" },
        { icon: "bi bi-trophy", text: "Edumex Certificate" },
        { icon: "bi bi-phone", text: "Mobile & desktop access" },
      ],
    },
    info: [
      { label: "Level", value: "Advanced" },
      { label: "Students", value: "612 enrolled" },
      { label: "Language", value: "English" },
      { label: "Last Updated", value: "Nov 2025" },
    ],
    tags: ["Python", "Machine Learning", "AI", "Edumex Certificate"],
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Certificate",
    price: 149,
    originalPrice: 199,
    level: "Beginner",
    duration: "4 Weeks",
    title: "UI/UX Design Masterclass",
    description:
      "Learn UI/UX design, wireframing, prototyping, and creating user-centered interfaces. Complete the course to earn an Edumex certificate.",
    instructorImg: "https://randomuser.me/api/portraits/men/3.jpg",
    instructorName: "David Miller",
    instructorRole: "UI/UX Designer",
    rating: 4.6,
    students: 489,
    delay: 400,
    whatYouLearn: [
      "UI/UX principles and best practices",
      "Wireframing and prototyping",
      "Designing user-centered interfaces",
      "Usability testing and iteration",
    ],
    curriculum: [
      {
        module: "Module 1: UI Design Fundamentals",
        lessonsCount: "5 lessons • 3 hours",
        lessons: [
          {
            title: "Design Principles",
            icon: "bi bi-play-circle",
            duration: "20 min",
          },
          {
            title: "Color & Typography",
            icon: "bi bi-play-circle",
            duration: "25 min",
          },
        ],
      },
      {
        module: "Module 2: UX Design",
        lessonsCount: "4 lessons • 2 hours",
        lessons: [
          {
            title: "User Research",
            icon: "bi bi-play-circle",
            duration: "30 min",
          },
          {
            title: "Wireframing & Prototyping",
            icon: "bi bi-play-circle",
            duration: "35 min",
          },
        ],
      },
    ],
    pricing: {
      price: 149,
      originalPrice: 199,
      features: [
        { icon: "bi bi-clock", text: "4 weeks duration" },
        { icon: "bi bi-trophy", text: "Edumex Certificate" },
        { icon: "bi bi-phone", text: "Mobile & desktop access" },
      ],
    },
    info: [
      { label: "Level", value: "Beginner" },
      { label: "Students", value: "489 enrolled" },
      { label: "Language", value: "English" },
      { label: "Last Updated", value: "Nov 2025" },
    ],
    tags: ["UI/UX", "Design", "Prototyping", "Edumex Certificate"],
  },
];
