export const trainingResourcesCoursesData = {
  courses: [
    {
      id: 1,
      category: "Training Resource",
      title: "Allergens",
      description:
        "Comprehensive training on the 14 regulated allergens, labelling, customer communication and preventing cross-contamination in catering environments.",
      image: "https://source.unsplash.com/featured/?allergen,food",
      badge: "Training Resource",
      price: 49,
      originalPrice: 79,
      level: "Beginner",
      duration: "2 Weeks",
      instructorName: "Alex Carter",
      instructorImg: "https://randomuser.me/api/portraits/men/10.jpg",
      instructorRole: "Food Safety Specialist",
      rating: 4.8,
      students: 350,
      whatYouLearn: [
        "Identify the 14 major allergens",
        "Understand allergic reactions and symptoms",
        "Implement cross-contamination controls",
        "Communicate allergen information to customers",
      ],
      curriculum: [
        {
          module: "Module 1: Allergen Fundamentals",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "What are Allergens?",
              icon: "bi bi-play-circle",
              duration: "15 min",
            },
            {
              title: "Major Allergen Sources",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Controls & Communication",
          lessonsCount: "3 lessons • 1 hour",
          lessons: [
            {
              title: "Avoiding Cross-Contamination",
              icon: "bi bi-play-circle",
              duration: "18 min",
            },
            {
              title: "Customer Communication & Labelling",
              icon: "bi bi-play-circle",
              duration: "22 min",
            },
          ],
        },
      ],
      pricing: {
        price: 49,
        originalPrice: 79,
        features: [
          { icon: "bi bi-clock", text: "2 weeks duration" },
          { icon: "bi bi-trophy", text: "Certificate Included" },
          { icon: "bi bi-phone", text: "Mobile & desktop access" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "350 enrolled" },
        { label: "Language", value: "English" },
        { label: "Last Updated", value: "Nov 2025" },
      ],
      tags: ["Allergens", "Food Safety", "Catering"],
    },
    {
      id: 2,
      category: "Training Resource",
      title: "Apprenticeships",
      description:
        "Resource pack supporting apprenticeship delivery: portfolios, mapping to standards, employer guidance and assessment activities.",
      image: "https://source.unsplash.com/featured/?apprentice,training",
      badge: "Training Resource",
      price: 59,
      originalPrice: 99,
      level: "Intermediate",
      duration: "4 Weeks",
      instructorName: "Sophie Wallace",
      instructorImg: "https://randomuser.me/api/portraits/women/11.jpg",
      instructorRole: "Vocational Training Expert",
      rating: 4.7,
      students: 420,
      whatYouLearn: [
        "How to map learning to standards",
        "Build a learner portfolio",
        "Employer engagement best practice",
        "Assessment evidence collection",
      ],
      curriculum: [
        {
          module: "Module 1: Apprenticeship Frameworks",
          lessonsCount: "4 lessons • 2 hours",
          lessons: [
            {
              title: "Understanding Apprenticeship Standards",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Employer Engagement",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Portfolio & Assessment",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Compiling Evidence",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Professional Discussions",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 59,
        originalPrice: 99,
        features: [
          { icon: "bi bi-clock", text: "4 weeks duration" },
          { icon: "bi bi-file-earmark-text", text: "Workbooks & Templates" },
        ],
      },
      info: [
        { label: "Level", value: "Intermediate" },
        { label: "Students", value: "420 enrolled" },
        { label: "Language", value: "English" },
        { label: "Last Updated", value: "Oct 2025" },
      ],
      tags: ["Apprenticeship", "Assessment", "Workplace"],
    },
    {
      id: 3,
      category: "Training Resource",
      title: "Auditing and Inspection",
      description:
        "Training modules for internal auditors and inspectors: audit planning, checklists, reporting and corrective action follow-up.",
      image: "https://source.unsplash.com/featured/?audit,inspection",
      badge: "Training Resource",
      price: 69,
      originalPrice: 119,
      level: "Intermediate",
      duration: "3 Weeks",
      instructorName: "Daniel Ortiz",
      instructorImg: "https://randomuser.me/api/portraits/men/12.jpg",
      instructorRole: "Quality & Compliance Trainer",
      rating: 4.6,
      students: 280,
      whatYouLearn: [
        "Audit cycle and types",
        "Writing effective checklists",
        "Conducting inspections on-site",
        "Reporting and corrective actions",
      ],
      curriculum: [
        {
          module: "Module 1: Audit Basics",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Audit Types & Objectives",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Planning an Audit",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Reporting & Follow-up",
          lessonsCount: "3 lessons • 1 hour",
          lessons: [
            {
              title: "Writing an Audit Report",
              icon: "bi bi-play-circle",
              duration: "18 min",
            },
            {
              title: "Corrective Action Tracking",
              icon: "bi bi-play-circle",
              duration: "22 min",
            },
          ],
        },
      ],
      pricing: {
        price: 69,
        originalPrice: 119,
        features: [
          { icon: "bi bi-clipboard", text: "Audit templates" },
          { icon: "bi bi-clock", text: "3 weeks access" },
        ],
      },
      info: [
        { label: "Level", value: "Intermediate" },
        { label: "Students", value: "280 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Audit", "Inspection", "Compliance"],
    },
    {
      id: 4,
      category: "Training Resource",
      title: "British Values",
      description:
        "A short course for learners to understand democracy, rule of law, individual liberty and mutual respect in workplaces and communities.",
      image: "https://source.unsplash.com/featured/?british,values",
      badge: "Training Resource",
      price: 29,
      originalPrice: 49,
      level: "Beginner",
      duration: "1 Week",
      instructorName: "Helen Brooks",
      instructorImg: "https://randomuser.me/api/portraits/women/13.jpg",
      instructorRole: "Community Education Lead",
      rating: 4.5,
      students: 190,
      whatYouLearn: [
        "Core British values definitions",
        "Applying values at work",
        "Promoting mutual respect",
        "Safeguarding considerations",
      ],
      curriculum: [
        {
          module: "Module 1: Democracy & Law",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "Democracy in society",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Rule of Law basics",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Respect & Liberty",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "Individual liberty",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Mutual respect in practice",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 29,
        originalPrice: 49,
        features: [
          { icon: "bi bi-clock", text: "1 week duration" },
          { icon: "bi bi-file-earmark-text", text: "Trainer resources" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "190 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["British Values", "Community", "Safeguarding"],
    },
    {
      id: 5,
      category: "Training Resource",
      title: "Business Administration",
      description:
        "Practical resource pack for business administration skills: records, communication, diary management and office software essentials.",
      image: "https://source.unsplash.com/featured/?business,administration",
      badge: "Training Resource",
      price: 69,
      originalPrice: 119,
      level: "Beginner",
      duration: "4 Weeks",
      instructorName: "Priya Nair",
      instructorImg: "https://randomuser.me/api/portraits/women/14.jpg",
      instructorRole: "Office Systems Trainer",
      rating: 4.7,
      students: 520,
      whatYouLearn: [
        "Record keeping and filing",
        "Professional communication",
        "Diary and meeting management",
        "Basic spreadsheet & word processing",
      ],
      curriculum: [
        {
          module: "Module 1: Office Fundamentals",
          lessonsCount: "4 lessons • 2.5 hours",
          lessons: [
            {
              title: "Records & Filing",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Professional Email",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: Digital Tools",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Word Processing Essentials",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Intro to Spreadsheets",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
      ],
      pricing: {
        price: 69,
        originalPrice: 119,
        features: [
          { icon: "bi bi-laptop", text: "Practical exercises" },
          { icon: "bi bi-clock", text: "4 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "520 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Business", "Administration", "Office Skills"],
    },
    {
      id: 6,
      category: "Training Resource",
      title: "Business Improvement",
      description:
        "Resources focused on lean principles, process mapping, root-cause analysis and continuous improvement in business operations.",
      image: "https://source.unsplash.com/featured/?business,improvement",
      badge: "Training Resource",
      price: 79,
      originalPrice: 129,
      level: "Intermediate",
      duration: "3 Weeks",
      instructorName: "James Porter",
      instructorImg: "https://randomuser.me/api/portraits/men/15.jpg",
      instructorRole: "Lean Practitioner",
      rating: 4.6,
      students: 210,
      whatYouLearn: [
        "Principles of Lean and Six Sigma",
        "Value-stream mapping",
        "Root cause analysis tools",
        "Implementing small improvements",
      ],
      curriculum: [
        {
          module: "Module 1: Lean Fundamentals",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Waste & Value",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "5S and Workplace Organisation",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Improvement Tools",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Root Cause Techniques",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Kaizen Events Basics",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 79,
        originalPrice: 129,
        features: [
          { icon: "bi bi-bar-chart", text: "Case studies" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Intermediate" },
        { label: "Students", value: "210 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Lean", "Process Improvement", "Quality"],
    },
    {
      id: 7,
      category: "Training Resource",
      title: "Cleaning",
      description:
        "Practical cleaning training covering chemical usage, COSHH awareness for cleaning agents, surface cleaning and infection prevention.",
      image: "https://source.unsplash.com/featured/?cleaning,janitor",
      badge: "Training Resource",
      price: 39,
      originalPrice: 69,
      level: "Beginner",
      duration: "1 Week",
      instructorName: "Maria Lopez",
      instructorImg: "https://randomuser.me/api/portraits/women/16.jpg",
      instructorRole: "Hygiene & Cleaning Trainer",
      rating: 4.5,
      students: 300,
      whatYouLearn: [
        "Safe use of cleaning chemicals",
        "COSHH basics",
        "Effective surface cleaning techniques",
        "Waste disposal best practices",
      ],
      curriculum: [
        {
          module: "Module 1: Cleaning Safety",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Chemical Handling & PPE",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "COSHH Overview",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Practical Cleaning",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "Surface & Floor Care",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Waste Management",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 39,
        originalPrice: 69,
        features: [
          { icon: "bi bi-droplet", text: "Practical checklists" },
          { icon: "bi bi-clock", text: "1 week duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "300 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Cleaning", "Hygiene", "COSHH"],
    },
    {
      id: 8,
      category: "Training Resource",
      title: "Conflict Management",
      description:
        "Skills and resources for managing and de-escalating conflict in the workplace, including mediation basics and legal considerations.",
      image: "https://source.unsplash.com/featured/?conflict,mediation",
      badge: "Training Resource",
      price: 59,
      originalPrice: 99,
      level: "Intermediate",
      duration: "2 Weeks",
      instructorName: "Owen Patel",
      instructorImg: "https://randomuser.me/api/portraits/men/17.jpg",
      instructorRole: "Workplace Mediator",
      rating: 4.6,
      students: 240,
      whatYouLearn: [
        "Conflict types and triggers",
        "De-escalation techniques",
        "Mediation basics",
        "Legal & HR considerations",
      ],
      curriculum: [
        {
          module: "Module 1: Understanding Conflict",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Causes of Conflict",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Behaviour & Response",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Resolution Techniques",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Active Listening",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Mediation Process",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 59,
        originalPrice: 99,
        features: [
          { icon: "bi bi-people", text: "Role-play exercises" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Intermediate" },
        { label: "Students", value: "240 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Conflict", "Mediation", "HR"],
    },
    {
      id: 9,
      category: "Training Resource",
      title: "Customer Service",
      description:
        "Training to enhance front-line customer service skills: complaint handling, communication, customer journeys and upselling tactfully.",
      image: "https://source.unsplash.com/featured/?customer,service",
      badge: "Training Resource",
      price: 45,
      originalPrice: 79,
      level: "Beginner",
      duration: "3 Weeks",
      instructorName: "Naomi Green",
      instructorImg: "https://randomuser.me/api/portraits/women/18.jpg",
      instructorRole: "Customer Experience Trainer",
      rating: 4.7,
      students: 780,
      whatYouLearn: [
        "Customer communication essentials",
        "Handling complaints professionally",
        "Customer journey mapping",
        "Basic upselling techniques",
      ],
      curriculum: [
        {
          module: "Module 1: Communication & Service",
          lessonsCount: "4 lessons • 2 hours",
          lessons: [
            {
              title: "Verbal & Non-verbal Skills",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Telephone Etiquette",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Complaints & Retention",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Managing Complaints",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Turning Complaints into Retention",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 45,
        originalPrice: 79,
        features: [
          { icon: "bi bi-chat-square-text", text: "Scenario exercises" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "780 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Customer Service", "Communication", "Retail"],
    },
    {
      id: 10,
      category: "Training Resource",
      title: "Dementia Awareness",
      description:
        "Awareness resource covering the types of dementia, communication strategies, person-centred care and supporting families and carers.",
      image: "https://source.unsplash.com/featured/?dementia,care",
      badge: "Training Resource",
      price: 39,
      originalPrice: 69,
      level: "Beginner",
      duration: "2 Weeks",
      instructorName: "Eileen Morris",
      instructorImg: "https://randomuser.me/api/portraits/women/19.jpg",
      instructorRole: "Care & Dementia Specialist",
      rating: 4.8,
      students: 410,
      whatYouLearn: [
        "Recognise common dementia symptoms",
        "Person-centred communication techniques",
        "Support strategies for daily activities",
        "Supporting families and carers",
      ],
      curriculum: [
        {
          module: "Module 1: Understanding Dementia",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Types of Dementia",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Behavioural Symptoms",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Care Practices",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Communication Approaches",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Supporting Daily Living",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 39,
        originalPrice: 69,
        features: [
          { icon: "bi bi-heart", text: "Case studies" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "410 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Dementia", "Care", "Health & Social Care"],
    },
    {
      id: 11,
      category: "Training Resource",
      title: "Digital Skills and ICT",
      description:
        "Core digital skills training including online safety, email, cloud collaboration, spreadsheets and basic troubleshooting for office roles.",
      image: "https://source.unsplash.com/featured/?digital,ict",
      badge: "Training Resource",
      price: 59,
      originalPrice: 99,
      level: "Beginner",
      duration: "4 Weeks",
      instructorName: "Liam Chen",
      instructorImg: "https://randomuser.me/api/portraits/men/20.jpg",
      instructorRole: "ICT Trainer",
      rating: 4.7,
      students: 640,
      whatYouLearn: [
        "Email & calendar management",
        "Cloud collaboration basics",
        "Intro to spreadsheets",
        "Online safety & password hygiene",
      ],
      curriculum: [
        {
          module: "Module 1: Digital Basics",
          lessonsCount: "4 lessons • 2.5 hours",
          lessons: [
            {
              title: "Online Safety Essentials",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Effective Email",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Productivity Tools",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Spreadsheets for Beginners",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Cloud File Sharing",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 59,
        originalPrice: 99,
        features: [
          { icon: "bi bi-laptop", text: "Hands-on labs" },
          { icon: "bi bi-clock", text: "4 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "640 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Digital Skills", "ICT", "Office"],
    },
    {
      id: 12,
      category: "Training Resource",
      title: "Education and Training",
      description:
        "Resource pack for trainers and teachers: lesson planning, assessment strategies, learning technologies and inclusive teaching practices.",
      image: "https://source.unsplash.com/featured/?education,training",
      badge: "Training Resource",
      price: 89,
      originalPrice: 139,
      level: "Intermediate",
      duration: "5 Weeks",
      instructorName: "Dr. Fiona Clarke",
      instructorImg: "https://randomuser.me/api/portraits/women/21.jpg",
      instructorRole: "Education Consultant",
      rating: 4.9,
      students: 330,
      whatYouLearn: [
        "Lesson planning best practice",
        "Inclusive teaching strategies",
        "Formative and summative assessment",
        "Using technology in learning",
      ],
      curriculum: [
        {
          module: "Module 1: Planning & Delivery",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Writing Learning Outcomes",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Differentiation Techniques",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: Assessment & Tech",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Assessment Methods",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Learning Platforms Overview",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 89,
        originalPrice: 139,
        features: [
          { icon: "bi bi-mortarboard", text: "Trainer guides" },
          { icon: "bi bi-clock", text: "5 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Intermediate" },
        { label: "Students", value: "330 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Training", "Education", "Assessment"],
    },
    {
      id: 13,
      category: "Training Resource",
      title: "Employability",
      description:
        "Practical employability resource covering CVs, interview techniques, workplace behaviour and building professional skills.",
      image: "https://source.unsplash.com/featured/?employability,job",
      badge: "Training Resource",
      price: 35,
      originalPrice: 59,
      level: "Beginner",
      duration: "2 Weeks",
      instructorName: "Kira Johnson",
      instructorImg: "https://randomuser.me/api/portraits/women/22.jpg",
      instructorRole: "Careers Coach",
      rating: 4.6,
      students: 460,
      whatYouLearn: [
        "Writing effective CVs & cover letters",
        "Interview preparation",
        "Workplace professionalism",
        "Job search strategies",
      ],
      curriculum: [
        {
          module: "Module 1: Job Preparation",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "CV & Cover Letter",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Job Searching Tools",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Interview Skills",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "STAR Technique",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Professional Presence",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 35,
        originalPrice: 59,
        features: [
          { icon: "bi bi-briefcase", text: "Practice interviews" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "460 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Employability", "Careers", "CV"],
    },
    {
      id: 14,
      category: "Training Resource",
      title: "Fire Safety",
      description:
        "Essential fire safety training covering risk assessments, fire prevention, safe evacuation and use of fire extinguishers.",
      image: "https://source.unsplash.com/featured/?fire,safety",
      badge: "Training Resource",
      price: 39,
      originalPrice: 69,
      level: "Beginner",
      duration: "1 Week",
      instructorName: "Graham Ellis",
      instructorImg: "https://randomuser.me/api/portraits/men/23.jpg",
      instructorRole: "Fire Safety Officer",
      rating: 4.7,
      students: 520,
      whatYouLearn: [
        "Fire risk assessment basics",
        "Evacuation procedures",
        "Extinguisher types & use",
        "Preventative housekeeping",
      ],
      curriculum: [
        {
          module: "Module 1: Fire Principles",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Fire Triad & Risks",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Legislation Overview",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Evacuation & Equipment",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "Evacuation Planning",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Using Extinguishers Safely",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 39,
        originalPrice: 69,
        features: [
          { icon: "bi bi-fire", text: "Practical checklists" },
          { icon: "bi bi-clock", text: "1 week duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "520 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Fire Safety", "Evacuation", "Risk"],
    },
    {
      id: 15,
      category: "Training Resource",
      title: "First Aid",
      description:
        "Awareness and practical first aid resource covering casualty assessment, CPR basics, choking, bleeding control and emergency procedures.",
      image: "https://source.unsplash.com/featured/?firstaid,medical",
      badge: "Training Resource",
      price: 59,
      originalPrice: 99,
      level: "Beginner",
      duration: "2 Weeks",
      instructorName: "Olivia Reed",
      instructorImg: "https://randomuser.me/api/portraits/women/24.jpg",
      instructorRole: "First Aid Instructor",
      rating: 4.9,
      students: 610,
      whatYouLearn: [
        "Primary survey & casualty assessment",
        "Basic life support (CPR)",
        "Managing bleeding & shock",
        "Choking management",
      ],
      curriculum: [
        {
          module: "Module 1: Emergency Assessment",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Primary Survey (DRABC)",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Recognising Shock",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Life Saving Skills",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "CPR & Rescue Breaths",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Bleeding Control",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 59,
        originalPrice: 99,
        features: [
          { icon: "bi bi-heart-pulse", text: "Practical scenario videos" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "610 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["First Aid", "CPR", "Emergency"],
    },
    {
      id: 16,
      category: "Training Resource",
      title: "Food Safety",
      description:
        "Comprehensive training resources for food handlers covering hygiene, temperature control, contamination controls and legal compliance.",
      image: "https://source.unsplash.com/featured/?food,safety",
      badge: "Training Resource",
      price: 45,
      originalPrice: 79,
      level: "Beginner",
      duration: "2 Weeks",
      instructorName: "Marcus Hill",
      instructorImg: "https://randomuser.me/api/portraits/men/25.jpg",
      instructorRole: "Food Safety Trainer",
      rating: 4.8,
      students: 980,
      whatYouLearn: [
        "Personal hygiene & handwashing",
        "Temperature control & storage",
        "Cleaning & pest control basics",
        "Legal responsibilities for food handlers",
      ],
      curriculum: [
        {
          module: "Module 1: Hygiene & Handling",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Personal Hygiene",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Safe Storage & Temperatures",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Controls & Law",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Cleaning Schedules",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Food Law Overview",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 45,
        originalPrice: 79,
        features: [
          { icon: "bi bi-thermometer", text: "Temperature logs" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "980 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Food Safety", "Hygiene", "Catering"],
    },
    {
      id: 17,
      category: "Training Resource",
      title: "Functional Skills",
      description:
        "Functional Maths and English training resources tailored for learners needing Level 1 and Level 2 support, with practical workplace applications.",
      image: "https://source.unsplash.com/featured/?functional,skills",
      badge: "Training Resource",
      price: 39,
      originalPrice: 69,
      level: "Beginner",
      duration: "6 Weeks",
      instructorName: "Rachel Adams",
      instructorImg: "https://randomuser.me/api/portraits/women/26.jpg",
      instructorRole: "Functional Skills Tutor",
      rating: 4.7,
      students: 720,
      whatYouLearn: [
        "Workplace maths applications",
        "Reading & writing for work",
        "Functional problem solving",
        "Exam technique and practice",
      ],
      curriculum: [
        {
          module: "Module 1: Maths for Work",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Numeracy in Context",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Measurements & Money",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: English for Work",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Workplace Writing",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Reading Comprehension",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
      ],
      pricing: {
        price: 39,
        originalPrice: 69,
        features: [
          { icon: "bi bi-journal-text", text: "Practice papers" },
          { icon: "bi bi-clock", text: "6 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "720 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Functional Skills", "Maths", "English"],
    },
    {
      id: 18,
      category: "Training Resource",
      title: "HACCP",
      description:
        "HACCP training resources for food businesses including hazard analysis, critical control points, monitoring and verification procedures.",
      image: "https://source.unsplash.com/featured/?haccp,food",
      badge: "Training Resource",
      price: 79,
      originalPrice: 129,
      level: "Level 3",
      duration: "4 Weeks",
      instructorName: "Dr. Susan Patel",
      instructorImg: "https://randomuser.me/api/portraits/women/27.jpg",
      instructorRole: "HACCP Consultant",
      rating: 4.9,
      students: 410,
      whatYouLearn: [
        "Conduct hazard analysis",
        "Identify CCPs and critical limits",
        "Design monitoring systems",
        "Verification and record keeping",
      ],
      curriculum: [
        {
          module: "Module 1: HACCP Principles",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Hazard Analysis",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Critical Control Points",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: Implementation & Verification",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Monitoring Systems",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Auditing HACCP",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 79,
        originalPrice: 129,
        features: [
          { icon: "bi bi-file-earmark-check", text: "HACCP templates" },
          { icon: "bi bi-clock", text: "4 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Level 3" },
        { label: "Students", value: "410 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["HACCP", "Food Safety", "Quality"],
    },
    {
      id: 19,
      category: "Training Resource",
      title: "Health and Safety",
      description:
        "Core health & safety resources covering risk assessments, workplace hazards, PPE, and health & safety responsibilities for employees and managers.",
      image: "https://source.unsplash.com/featured/?health,safety",
      badge: "Training Resource",
      price: 59,
      originalPrice: 99,
      level: "Beginner",
      duration: "3 Weeks",
      instructorName: "Paul Richards",
      instructorImg: "https://randomuser.me/api/portraits/men/28.jpg",
      instructorRole: "H&S Consultant",
      rating: 4.7,
      students: 740,
      whatYouLearn: [
        "Identify common workplace hazards",
        "Carry out basic risk assessments",
        "Understand PPE requirements",
        "Health & safety roles and responsibilities",
      ],
      curriculum: [
        {
          module: "Module 1: Hazards & Risk",
          lessonsCount: "4 lessons • 2.5 hours",
          lessons: [
            {
              title: "Common Workplace Hazards",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Risk Assessment Steps",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: Controls & PPE",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Control Measures",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "PPE Selection",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 59,
        originalPrice: 99,
        features: [
          { icon: "bi bi-shield-check", text: "Risk assessment templates" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "740 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Health & Safety", "Risk", "PPE"],
    },
    {
      id: 20,
      category: "Training Resource",
      title: "Health and Social Care",
      description:
        "Resources for care workers covering person-centred care, safeguarding, medication awareness and basic clinical observations.",
      image: "https://source.unsplash.com/featured/?health,socialcare",
      badge: "Training Resource",
      price: 89,
      originalPrice: 149,
      level: "Level 2",
      duration: "6 Weeks",
      instructorName: "Karen Mitchell",
      instructorImg: "https://randomuser.me/api/portraits/women/29.jpg",
      instructorRole: "Social Care Trainer",
      rating: 4.9,
      students: 540,
      whatYouLearn: [
        "Person-centred practice",
        "Safeguarding principles",
        "Medication administration awareness",
        "Basic clinical observations",
      ],
      curriculum: [
        {
          module: "Module 1: Person-centred Care",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Understanding Person-centred Care",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Communication with Clients",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: Safeguarding & Practical Skills",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Safeguarding Adults",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Observations & Reporting",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
      ],
      pricing: {
        price: 89,
        originalPrice: 149,
        features: [
          { icon: "bi bi-hospital", text: "Care plans & templates" },
          { icon: "bi bi-clock", text: "6 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Level 2" },
        { label: "Students", value: "540 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Health & Social Care", "Safeguarding", "Care"],
    },
    {
      id: 21,
      category: "Training Resource",
      title: "Hospitality",
      description:
        "Hospitality-focused training resources for front-of-house, service standards, guest handling and food & beverage basics.",
      image: "https://source.unsplash.com/featured/?hospitality,hotel",
      badge: "Training Resource",
      price: 55,
      originalPrice: 89,
      level: "Beginner",
      duration: "3 Weeks",
      instructorName: "Ethan Walker",
      instructorImg: "https://randomuser.me/api/portraits/men/30.jpg",
      instructorRole: "Hospitality Trainer",
      rating: 4.6,
      students: 460,
      whatYouLearn: [
        "Guest service excellence",
        "Table service basics",
        "Handling reservations & enquiries",
        "Food hygiene awareness for hospitality staff",
      ],
      curriculum: [
        {
          module: "Module 1: Service Standards",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Greeting & First Impressions",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Handling Guest Complaints",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Food & Beverage Basics",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Basic Table Service",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Menu Knowledge",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 55,
        originalPrice: 89,
        features: [
          { icon: "bi bi-journal", text: "Service checklists" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "460 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Hospitality", "Service", "F&B"],
    },
    {
      id: 22,
      category: "Training Resource",
      title: "Infection Control",
      description:
        "Infection prevention and control training covering hand hygiene, PPE, cleaning regimes and outbreak response procedures.",
      image: "https://source.unsplash.com/featured/?infection,control",
      badge: "Training Resource",
      price: 59,
      originalPrice: 99,
      level: "Level 2",
      duration: "2 Weeks",
      instructorName: "Dr. Aisha Khan",
      instructorImg: "https://randomuser.me/api/portraits/women/31.jpg",
      instructorRole: "Infection Prevention Specialist",
      rating: 4.9,
      students: 390,
      whatYouLearn: [
        "Principles of infection prevention",
        "Hand hygiene best practice",
        "Correct PPE use",
        "Cleaning and outbreak response",
      ],
      curriculum: [
        {
          module: "Module 1: Infection Basics",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Microbes & Transmission",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Hand Hygiene Techniques",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Controls & PPE",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "PPE Selection & Disposal",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Cleaning Protocols",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 59,
        originalPrice: 99,
        features: [
          { icon: "bi bi-shield-lock", text: "Outbreak checklists" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Level 2" },
        { label: "Students", value: "390 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Infection Control", "Hygiene", "PPE"],
    },
    {
      id: 23,
      category: "Training Resource",
      title: "International",
      description:
        "International training resources designed for global learners, including cultural considerations, regulatory variations and export/import basics.",
      image: "https://source.unsplash.com/featured/?international,global",
      badge: "Training Resource",
      price: 69,
      originalPrice: 119,
      level: "Intermediate",
      duration: "4 Weeks",
      instructorName: "Marco Bellini",
      instructorImg: "https://randomuser.me/api/portraits/men/32.jpg",
      instructorRole: "International Training Consultant",
      rating: 4.6,
      students: 160,
      whatYouLearn: [
        "Cross-cultural workplace skills",
        "Global regulatory differences",
        "Basic import/export principles",
        "Adapting training to local contexts",
      ],
      curriculum: [
        {
          module: "Module 1: Cultural Competence",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Working Across Cultures",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Language & Communication",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Regulation & Logistics",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Regulatory Comparison",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Export/Import Basics",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 69,
        originalPrice: 119,
        features: [
          { icon: "bi bi-globe", text: "International case studies" },
          { icon: "bi bi-clock", text: "4 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Intermediate" },
        { label: "Students", value: "160 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["International", "Cultural", "Export/Import"],
    },
    {
      id: 24,
      category: "Training Resource",
      title: "Leadership and Management",
      description:
        "Resources for emerging leaders and managers: leadership styles, performance management, coaching and team development.",
      image: "https://source.unsplash.com/featured/?leadership,management",
      badge: "Training Resource",
      price: 99,
      originalPrice: 149,
      level: "Level 3",
      duration: "6 Weeks",
      instructorName: "Natalie Price",
      instructorImg: "https://randomuser.me/api/portraits/women/33.jpg",
      instructorRole: "Leadership Coach",
      rating: 4.9,
      students: 410,
      whatYouLearn: [
        "Leadership styles and self-awareness",
        "Performance management techniques",
        "Coaching conversations",
        "Building high-performing teams",
      ],
      curriculum: [
        {
          module: "Module 1: Leading Yourself",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Leadership Self-Awareness",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Emotional Intelligence",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
        {
          module: "Module 2: Leading Others",
          lessonsCount: "4 lessons • 3 hours",
          lessons: [
            {
              title: "Performance Conversations",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Coaching Basics",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
          ],
        },
      ],
      pricing: {
        price: 99,
        originalPrice: 149,
        features: [
          { icon: "bi bi-people", text: "Leadership toolkit" },
          { icon: "bi bi-clock", text: "6 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Level 3" },
        { label: "Students", value: "410 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Leadership", "Management", "Coaching"],
    },
    {
      id: 25,
      category: "Training Resource",
      title: "Licensing",
      description:
        "Personal licence holder resource including licensing law overview, responsible alcohol retailing and application processes.",
      image: "https://source.unsplash.com/featured/?licensing,alcohol",
      badge: "Training Resource",
      price: 49,
      originalPrice: 79,
      level: "Beginner",
      duration: "1 Week",
      instructorName: "Thomas Greene",
      instructorImg: "https://randomuser.me/api/portraits/men/34.jpg",
      instructorRole: "Licensing Advisor",
      rating: 4.6,
      students: 260,
      whatYouLearn: [
        "Licensing law overview",
        "Personal licence responsibilities",
        "Responsible selling of alcohol",
        "Applying for a personal licence",
      ],
      curriculum: [
        {
          module: "Module 1: Licensing Law",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Key Licensing Principles",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Licence Types & Roles",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Practical Responsibilities",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "ID Checking & Refusal",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Applying for a Licence",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 49,
        originalPrice: 79,
        features: [
          {
            icon: "bi bi-file-person",
            text: "Licence application templates",
          },
          { icon: "bi bi-clock", text: "1 week duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "260 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Licensing", "Alcohol", "Compliance"],
    },
    {
      id: 26,
      category: "Training Resource",
      title: "Logistics",
      description:
        "Logistics and warehousing resources covering inventory control, picking & packing, transport basics and warehouse safety.",
      image: "https://source.unsplash.com/featured/?logistics,warehouse",
      badge: "Training Resource",
      price: 65,
      originalPrice: 109,
      level: "Beginner",
      duration: "3 Weeks",
      instructorName: "Carlos Mendes",
      instructorImg: "https://randomuser.me/api/portraits/men/35.jpg",
      instructorRole: "Logistics Trainer",
      rating: 4.6,
      students: 330,
      whatYouLearn: [
        "Inventory management basics",
        "Picking & packing techniques",
        "Transport documentation",
        "Warehouse health & safety",
      ],
      curriculum: [
        {
          module: "Module 1: Warehouse Operations",
          lessonsCount: "4 lessons • 2.5 hours",
          lessons: [
            {
              title: "Inventory Control Methods",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Picking Strategies",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Transport & Safety",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Transport Paperwork",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Safe Loading Practices",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 65,
        originalPrice: 109,
        features: [
          { icon: "bi bi-box-seam", text: "Warehouse templates" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "330 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Logistics", "Warehousing", "Transport"],
    },
    {
      id: 27,
      category: "Training Resource",
      title: "Mental Health and Wellbeing",
      description:
        "Training resource to increase awareness of mental health issues, support strategies, signposting and creating mentally healthy workplaces.",
      image: "https://source.unsplash.com/featured/?mentalhealth,wellbeing",
      badge: "Training Resource",
      price: 49,
      originalPrice: 89,
      level: "Beginner",
      duration: "3 Weeks",
      instructorName: "Dr. Emily Rhodes",
      instructorImg: "https://randomuser.me/api/portraits/women/36.jpg",
      instructorRole: "Mental Health Trainer",
      rating: 4.9,
      students: 580,
      whatYouLearn: [
        "Recognise common mental health conditions",
        "Supportive conversation skills",
        "Signposting and referral pathways",
        "Creating workplace wellbeing plans",
      ],
      curriculum: [
        {
          module: "Module 1: Mental Health Awareness",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Common Conditions",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Stigma & Language",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Support & Prevention",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Supportive Conversations",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Workplace Wellbeing Plans",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 49,
        originalPrice: 89,
        features: [
          { icon: "bi bi-heart", text: "Wellbeing resources" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "580 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Mental Health", "Wellbeing", "Support"],
    },
    {
      id: 28,
      category: "Training Resource",
      title: "Nutrition and Health",
      description:
        "Nutrition and health resource covering balanced diets, dietary requirements, labelling and promoting healthy choices in community/workplace settings.",
      image: "https://source.unsplash.com/featured/?nutrition,health",
      badge: "Training Resource",
      price: 45,
      originalPrice: 79,
      level: "Beginner",
      duration: "2 Weeks",
      instructorName: "Dr. Hannah Cole",
      instructorImg: "https://randomuser.me/api/portraits/women/37.jpg",
      instructorRole: "Nutritionist",
      rating: 4.7,
      students: 290,
      whatYouLearn: [
        "Principles of a balanced diet",
        "Special dietary needs",
        "Reading food labels",
        "Promoting healthy choices",
      ],
      curriculum: [
        {
          module: "Module 1: Nutrition Basics",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Macronutrients & Micronutrients",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Dietary Guidelines",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Special Diets & Labelling",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Allergies & Intolerances",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "How to Read Labels",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 45,
        originalPrice: 79,
        features: [
          { icon: "bi bi-apple", text: "Meal planning guides" },
          { icon: "bi bi-clock", text: "2 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "290 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Nutrition", "Health", "Diet"],
    },
    {
      id: 29,
      category: "Training Resource",
      title: "Retail",
      description:
        "Retail staff training resources covering merchandising, customer service in retail, stock control and loss prevention basics.",
      image: "https://source.unsplash.com/featured/?retail,shop",
      badge: "Training Resource",
      price: 49,
      originalPrice: 79,
      level: "Beginner",
      duration: "3 Weeks",
      instructorName: "Jordan Price",
      instructorImg: "https://randomuser.me/api/portraits/men/38.jpg",
      instructorRole: "Retail Trainer",
      rating: 4.6,
      students: 470,
      whatYouLearn: [
        "Merchandising basics",
        "Stock control procedures",
        "Loss prevention awareness",
        "Retail customer service",
      ],
      curriculum: [
        {
          module: "Module 1: Merchandising & Stock",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Product Display Principles",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Stock Replenishment",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Customer & Loss Prevention",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Retail Customer Service",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Basic Loss Prevention",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 49,
        originalPrice: 79,
        features: [
          { icon: "bi bi-shop", text: "Retail templates" },
          { icon: "bi bi-clock", text: "3 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "470 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Retail", "Merchandising", "Customer Service"],
    },
    {
      id: 30,
      category: "Training Resource",
      title: "Security and Stewarding",
      description:
        "Resources for security and stewarding roles covering crowd management, communication, incident reporting and personal safety.",
      image: "https://source.unsplash.com/featured/?security,stewarding",
      badge: "Training Resource",
      price: 69,
      originalPrice: 119,
      level: "Level 2",
      duration: "4 Weeks",
      instructorName: "Samir Khan",
      instructorImg: "https://randomuser.me/api/portraits/men/39.jpg",
      instructorRole: "Security Trainer",
      rating: 4.6,
      students: 310,
      whatYouLearn: [
        "Crowd management basics",
        "Incident reporting & record keeping",
        "Customer-facing security skills",
        "Personal safety and de-escalation",
      ],
      curriculum: [
        {
          module: "Module 1: Stewarding Principles",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Crowd Behaviour",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Patrol & Reporting",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Safety & Communication",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Radio & Team Communication",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "De-escalation Techniques",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 69,
        originalPrice: 119,
        features: [
          { icon: "bi bi-shield-lock", text: "Incident templates" },
          { icon: "bi bi-clock", text: "4 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Level 2" },
        { label: "Students", value: "310 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Security", "Stewarding", "Crowd Management"],
    },
    {
      id: 31,
      category: "Training Resource",
      title: "Sexual Harassment",
      description:
        "Awareness and prevention resource covering recognising sexual harassment, reporting procedures, and creating safe workplaces.",
      image: "https://source.unsplash.com/featured/?sexualharassment,workplace",
      badge: "Training Resource",
      price: 35,
      originalPrice: 59,
      level: "Beginner",
      duration: "1 Week",
      instructorName: "Ava Simmons",
      instructorImg: "https://randomuser.me/api/portraits/women/40.jpg",
      instructorRole: "Safeguarding Trainer",
      rating: 4.7,
      students: 290,
      whatYouLearn: [
        "Define sexual harassment",
        "Recognise inappropriate behaviour",
        "Reporting & support mechanisms",
        "Employer responsibilities",
      ],
      curriculum: [
        {
          module: "Module 1: Awareness",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "What is Sexual Harassment?",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
            {
              title: "Impact & Prevention",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
        {
          module: "Module 2: Reporting & Support",
          lessonsCount: "2 lessons • 1 hour",
          lessons: [
            {
              title: "Reporting Channels",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Support for Victims",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
          ],
        },
      ],
      pricing: {
        price: 35,
        originalPrice: 59,
        features: [
          { icon: "bi bi-file-earmark-text", text: "Policy templates" },
          { icon: "bi bi-clock", text: "1 week duration" },
        ],
      },
      info: [
        { label: "Level", value: "Beginner" },
        { label: "Students", value: "290 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Sexual Harassment", "Safeguarding", "Workplace"],
    },
    {
      id: 32,
      category: "Training Resource",
      title: "Team Building",
      description:
        "Team building resources focusing on collaboration exercises, communication skills, problem-solving and trust development.",
      image: "https://source.unsplash.com/featured/?teambuilding,team",
      badge: "Training Resource",
      price: 55,
      originalPrice: 89,
      level: "Level 2",
      duration: "4 Weeks",
      instructorName: "Ava Simmons",
      instructorImg: "https://randomuser.me/api/portraits/women/40.jpg",
      instructorRole: "Team Building Trainer",
      rating: 4.9,
      students: 310,
      whatYouLearn: [
        "Team building exercises",
        "Effective communication",
        "Problem-solving strategies",
        "Trust development",
      ],
      curriculum: [
        {
          module: "Module 1: Team Building",
          lessonsCount: "3 lessons • 2 hours",
          lessons: [
            {
              title: "Team Building Exercises",
              icon: "bi bi-play-circle",
              duration: "30 min",
            },
            {
              title: "Effective Communication",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
        {
          module: "Module 2: Problem Solving",
          lessonsCount: "3 lessons • 1.5 hours",
          lessons: [
            {
              title: "Problem Solving Strategies",
              icon: "bi bi-play-circle",
              duration: "20 min",
            },
            {
              title: "Trust Development",
              icon: "bi bi-play-circle",
              duration: "25 min",
            },
          ],
        },
      ],
      pricing: {
        price: 55,
        originalPrice: 89,
        features: [
          { icon: "bi bi-people", text: "Team activity guides" },
          { icon: "bi bi-clock", text: "4 weeks duration" },
        ],
      },
      info: [
        { label: "Level", value: "Level 2" },
        { label: "Students", value: "310 enrolled" },
        { label: "Language", value: "English" },
      ],
      tags: ["Team Building", "Communication", "Problem Solving"],
    },
  ],
};
