export const siteConfig = {
  name: "Birru Vamshi's Portfolio",
  description: "Backend Software Engineer | Distributed Systems | Java | GCP",
  author: "Birru Vamshi",
  mainNav: [
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blogs",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  experience: [
    {
      company: "Flipkart",
      role: "Software Development Engineer - 1",
      period: "September 2024 – Present",
      location: "Bengaluru, India",
      tagline: "Core Supply Planning & Distributed Systems",
      summary:
        "Building distributed job orchestration, event-driven streaming, and performance-critical backend services supporting Flipkart's supply planning infrastructure.",
      metrics: [
        { label: "Daily Spark Executions", value: "1,000+" },
        { label: "SLA Runtime Reduction", value: "60–70%" },
        { label: "Monitoring Toil Eliminated", value: "100%" },
        { label: "Reconciler Cadence", value: "10s" },
      ],
      highlights: [
        "Built Distributed Job Orchestrator: Owned the end-to-end architecture and design for a distributed job orchestration service built from scratch; accepts requests from upstream systems, schedules Java Spark workloads on GCP Dataproc, and supports 1,000+ job executions/day with reliable asynchronous large-scale processing.",
        "Implemented Fault-Tolerant Reconciler: Developed a periodic reconciler (10-second cadence) to continuously scan and re-dispatch stalled or missed jobs, improving pickup reliability under high-concurrency workloads with near real-time execution guarantees.",
        "Engineered Real-Time Operational Alerting: Designed and deployed an event-driven notification system using Kafka to alert stakeholders on validation failures in real time — eliminating manual UI polling every 2 minutes, cutting Time-to-Resolution (TTR) significantly, and reducing manual monitoring effort by 100% across 3 stakeholder teams.",
        "Eliminated VM Crash Incidents: Engineered automated multi-platform log rotation across Azkaban, Mesos, and application VMs using logrotate and flock locking, eliminating disk exhaustion crashes and saving hours of manual developer intervention per incident.",
        "Speed-SLA Runtime Optimization: Reduced pipeline execution time by 60–70% (from 16 hours down to 4 hours) by optimizing data windows and migrating to Spark for parallelism.",
        "Productionized & Scaled Infrastructure: Containerized backend services using Docker and deployed on Kubernetes; integrated ZooKeeper for distributed service discovery and configured Nagios for real-time observability.",
      ],
      skills: [
        "Java",
        "Apache Spark",
        "GCP Dataproc",
        "Kafka",
        "Kubernetes",
        "Docker",
        "ZooKeeper",
        "Distributed Systems",
        "Dropwizard",
        "Spring Boot",
        "Nagios",
      ],
    },
  ],
  projects: [
    {
      title: "ResumeTailor",
      brief:
        "AI Resume Tailoring Platform built on Render that tailors master LaTeX resumes to job descriptions with a self-healing pdflatex compilation loop, multi-LLM support (OpenAI, Gemini, Claude, Groq, Ollama), and TeX code-injection security.",
      href: "https://tailor-resume-nizl.onrender.com/",
      github: "https://github.com/Vamshi-Birru",
      live: "https://tailor-resume-nizl.onrender.com/",
      tags: ["Java 17", "Spring Boot 3", "PostgreSQL", "Docker", "Flyway", "LLM", "LaTeX"],
      featured: true,
      badge: "Live Project",
    },
    {
      title: "Distributed Job Orchestrator",
      brief:
        "Distributed orchestration service built from scratch at Flipkart to schedule Java Spark workloads on GCP Dataproc, supporting 1,000+ executions/day with a 10s self-healing reconciler.",
      href: "/experience",
      github: "https://github.com/Vamshi-Birru",
      tags: ["Java Spark", "GCP Dataproc", "Distributed Systems", "ZooKeeper"],
      featured: true,
      badge: "Flipkart Scale",
    },
    {
      title: "Event-Driven Alerting Engine",
      brief:
        "Real-time event-driven notification system using Kafka to eliminate manual UI polling and alert stakeholders on validation failures instantly across 3 engineering teams.",
      href: "/experience",
      github: "https://github.com/Vamshi-Birru",
      tags: ["Kafka", "Microservices", "Docker", "Event-Driven"],
      featured: true,
      badge: "Flipkart Production",
    },
    {
      title: "Food-Delivery Service",
      brief:
        "A food delivery application backend service built with Spring Boot utilizing Apache Kafka PUB/SUB architecture for resilient order event streaming.",
      href: "https://github.com/Vamshi-Birru/food-delivery-service",
      github: "https://github.com/Vamshi-Birru/food-delivery-service",
      tags: ["Spring-Boot", "Apache-Kafka", "Maven", "PostgreSQL"],
    },
    {
      title: "Search Ngin",
      brief:
        "A Semantic Search Engine prototype for e-commerce applications using Postgres full-text search and Vector Cosine Similarity.",
      href: "https://github.com/Vamshi-Birru/search-ngin",
      github: "https://github.com/Vamshi-Birru/search-ngin",
      tags: ["Nextjs", "PostgreSQL", "TypeScript", "Vector Search"],
    },
    {
      title: "Crosschat",
      brief:
        "A realtime chat application leveraging Redis and Pusher-js for ultra-low latency bi-directional messaging.",
      href: "https://github.com/Vamshi-Birru/crosschat",
      github: "https://github.com/Vamshi-Birru/crosschat",
      tags: ["Nextjs", "Redis", "Pusher-js", "TypeScript"],
    },
  ],
  links: {
    github: "https://github.com/Vamshi-Birru",
    linkedin: "https://www.linkedin.com/in/birruvamshi/",
    email: "mailto:vamshibirru8@gmail.com",
    leetcode: "https://leetcode.com/vamshi-8/",
    resume: "/resume.pdf",
  },
  education: {
    degree: "Bachelor of Technology",
    institution: "National Institute of Technology, Raipur",
    period: "2020 – 2024",
    branch: "Information Technology",
    gpa: "8.76 / 10",
  },
  achievements: [
    "LeetCode Knight – Max rating 2008, Top 3% globally",
    "Secured Global rank 179 in LeetCode Biweekly (29,000 participants)",
    "Secured Global rank 1069 in LeetCode Weekly contest (25,000 participants)",
  ],
};
