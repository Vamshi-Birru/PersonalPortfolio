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
        "AI Resume Tailoring Platform deployed on Render that tailors master LaTeX resumes to job descriptions with a self-healing pdflatex compilation loop, multi-LLM support (OpenAI, Gemini, Claude, Groq, Ollama), and security hardening against TeX code injection.",
      href: "https://tailor-resume-nizl.onrender.com/",
      github: "https://github.com/Vamshi-Birru",
      live: "https://tailor-resume-nizl.onrender.com/",
      tags: [
        "Java 17",
        "Spring Boot 3",
        "PostgreSQL",
        "Docker",
        "Flyway",
        "LLM",
        "LaTeX",
        "JWT",
      ],
      featured: true,
      badge: "Live Project",
      bullets: [
        "Built and deployed full-stack platform on Render tailoring master LaTeX resumes to job descriptions via a single OpenAI-compatible client supporting 5 LLM providers (OpenAI, Gemini, Claude, Groq, Ollama).",
        "Designed self-healing generation loop: compiles with pdflatex, feeds compiler errors back to the model for automatic repair, and trims or expands content to guarantee a single-page PDF.",
        "Secured pipeline against code injection by blocking TeX primitives (\\write18, --shell-escape, \\openout); added AES-encrypted API keys at rest, stateless JWT auth, and BCrypt hashing with 33 JUnit 5/Mockito tests.",
        "Optimized for a 512 MB RAM container: capped HikariCP at 3 connections, JdbcTemplate with async background queue for visitor tracking with cached geolocation, Flyway migrations, and scheduled 90-day data purge.",
      ],
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
