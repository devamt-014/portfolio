export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "AI/ML Engineer", icon: "🤖" },
  { title: "Web Developer", icon: "💻" },
  { title: "Data Scientist", icon: "📊" },
  { title: "Research Enthusiast", icon: "🔬" },
];

export const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Python", level: 95 },
      { name: "TensorFlow / Keras", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "OpenCV", level: 80 },
      { name: "NLP / Transformers", level: 82 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "HTML / CSS / JS", level: 92 },
      { name: "FastAPI", level: 75 },
      { name: "MongoDB", level: 50 },
      { name: "PostgreSQL", level: 40 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 72 },
      { name: "Google Cloud", level: 68 },
      { name: "Jupyter Notebooks", level: 95 },
      { name: "Linux", level: 78 },
      { name: "Figma", level: 65 },
    ],
  },
];

export const experiences = [
  {
    title: "AI Research Intern",
    company_name: "Tech Innovate Labs",
    date: "May 2024 – Aug 2024",
    details: [
      "Developed a real-time object detection pipeline using YOLOv8 achieving 91% mAP.",
      "Built and deployed a sentiment analysis API serving 10k+ requests/day.",
      "Collaborated with senior researchers on generative AI projects.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "StartUp Nexus",
    date: "Dec 2023 – Feb 2024",
    details: [
      "Built REST APIs using Node.js and FastAPI for 3 client products.",
      "Integrated ML models into production web applications.",
      "Reduced page load time by 40% through optimization.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Hugging Face & TensorFlow",
    date: "2023 – Present",
    details: [
      "Contributed to model documentation and tutorial notebooks.",
      "Raised 5+ PRs merged into major AI open-source repositories.",
      "Mentored junior contributors during Hacktoberfest.",
    ],
  },
];

export const projects = [
  {
    name: "Chapter Threads – An online novel reading platform",
    description:
      "Chapter Threads is the e-library that allows user's to read, purchase or even upload their own books in the site. It has features like user authentication, book management, payment gateway integration, and a rewarding system for the authors.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "XAMPP Server"],
    gradient: "from-purple-600 to-cyan-500",
    github: "#",
    demo: "#",
  },
  {
    name: "Email Spam Detection",
    description:
      "It is a machine learning model that detects spam emails and classifies them as spam or not spam. It is trained on a dataset of spam and not spam emails and can achieve an accuracy of 98%.",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    gradient: "from-pink-600 to-orange-400",
    github: "#",
    demo: "#",
  },
  {
    name: "Smart Reminder – Using Javafx ",
    description:
      "A desktop application built using JavaFX that helps users to manage their daily tasks and reminders. It has features like task management, reminder management, and calendar integration.",
    tags: ["Java", "JavaFX", "MySQL", "telegram bot"],
    gradient: "from-green-500 to-teal-400",
    github: "#",
    demo: "#",
  },
  {
    name: "Irony and Sarcasm Detection – An Sentiment Analysis Model",
    description:
      "It is a machine learning model that detects irony and sarcasm in text and classifies them as ironic or not ironic. It is trained on a dataset of ironic and not ironic text and can achieve an accuracy of 90.2%.",
    tags: ["Python", "LSTM", "DistilBERT", "Pandas", "Matplotlib", "Baseline-LR Model"],
    gradient: "from-yellow-500 to-red-500",
    github: "#",
    demo: "#",
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Engineering (AI Specialization)",
    institution: "Marwadi University",
    duration: "2023 – 2027",
    gpa: "8.00 / 10.0",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Marwadi University",
    duration: "2020 – 2023",
    gpa: "8.85 / 10.0",
  },
];

export const achievements = [
  "🏆 Implemented NLP pipelines including text preprocessing, TF-IDF, and transformer-based models.",
  "🥈 Got first rank in the chess tournament held by the institute.",
  "🎓 Maintaining a GitHub portfolio with projects in Machine Learning, NLP, Web Development, and Java applications.",
  "📜 Developed an Irony & Sarcasm Detection system using NLP, BiLSTM, and DistilBERT models.",
  "⭐ 1500+ GitHub contributions in 2024",
];

export const certifications = [
  {
    title: "Les Expressions Lambda et Java",
    issuer: "Coursera",
    date: "April 2023",
    icon: "🧠",
    color: "from-violet-600 to-purple-400",
    pdfFile: "Certificate 3.pdf",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "November 2024",
    icon: "🧠",
    color: "from-orange-500 to-yellow-400",
    pdfFile: "OracleCertificate.pdf",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "EA Electronics Arts Forage",
    date: "November 2024",
    icon: "📊",
    color: "from-cyan-500 to-blue-400",
    pdfFile: "Forage.pdf",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "August 2025",
    icon: "☁️",
    color: "from-blue-600 to-cyan-400",
    pdfFile: "AWS.pdf",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Sept 2023",
    icon: "💬",
    color: "from-pink-600 to-rose-400",
    pdfFile: "PythonEssentials.pdf",
  },
];

