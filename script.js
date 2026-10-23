const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const skills = [
  ["Python", "Core language for AI, automation, and backend logic.", "PY"],
  ["LLMs & Generative AI", "Chatbots, assistants, and LLM-powered applications.", "AI"],
  ["RAG Systems", "Document loaders, chunking, embeddings, vector search, and grounded answers.", "RAG"],
  ["AI Agents", "Single and multi-agent workflows with LangGraph and CrewAI.", "AG"],
  ["LangChain", "Chains, retrievers, tools, and LLM application pipelines.", "LC"],
  ["Machine Learning", "Classification, evaluation, model pipelines, and deployment.", "ML"],
  ["Deep Learning", "Neural networks with PyTorch and TensorFlow.", "DL"],
  ["Computer Vision", "Object detection with YOLO and OpenCV, image and face analysis.", "CV"],
  ["NLP", "Sentiment analysis, text classification, and document question answering.", "NLP"],
  ["Hugging Face", "Transformers, pre-trained models, and fine-tuning workflows.", "HF"],
  ["Vector Databases", "FAISS and Pinecone for semantic search and retrieval.", "VD"],
  ["FastAPI", "Production APIs and backends for AI applications.", "API"],
  ["Streamlit", "Fast interactive AI applications and dashboards.", "ST"],
  ["Docker & CI/CD", "Docker, Jenkins pipelines, LangSmith tracing, and cloud deployment.", "CI"],
  ["Git & GitHub", "Project organization, version control, and portfolio publishing.", "GH"]
];

const projects = [
  {
    title: "Servio — Enterprise AI Platform",
    category: ["AI", "GenAI", "NLP"],
    description:
      "An enterprise AI platform combining multi-agent systems, evidence-grounded RAG, intelligent analysis, and safe workflow automation to support reliable decision-making and verifiable actions.",
    tech: ["Python", "Multi-Agent Systems", "RAG", "LLMs", "Workflow Automation"],
    demo: "",
    github: "https://github.com/moamedmer68-commits/Servio",
    style: "dark",
    chip: "GenAI · Agents"
  },
  {
    title: "AI-Powered Multi-Document RAG Platform",
    category: ["AI", "GenAI", "NLP"],
    description:
      "A production RAG platform to chat with multiple documents: FastAPI backend, LangChain pipelines, FAISS vector search, Gemini and Groq models, LangSmith tracing, and Docker/Jenkins CI/CD deployed on AWS ECS Fargate.",
    tech: ["FastAPI", "LangChain", "FAISS", "Gemini", "Groq", "LangSmith", "Docker", "Jenkins"],
    demo: "",
    github: "https://github.com/moamedmer68-commits/AI-Powered-Multi-Document-RAG-Platform-LLMOps",
    style: "alt",
    chip: "RAG · LLMOps"
  },
  {
    title: "RAG Assistant — Document Chatbot",
    category: ["AI", "GenAI", "NLP"],
    description:
      "An intelligent Retrieval-Augmented Generation assistant built with Streamlit, LangChain, OpenAI, and FAISS. Users can upload documents and chat with them using semantic search and LLM-generated answers.",
    tech: ["Streamlit", "LangChain", "OpenAI", "FAISS", "PDF", "CSV", "DOCX", "XLSX"],
    demo: "",
    github: "https://github.com/moamedmer68-commits/Document-Chatbot-using-RAG-LangChain-FAISS-and-OpenAI",
    style: "",
    chip: "RAG Chatbot"
  },
  {
    title: "TAIF — Multimodal Autism Screening",
    category: ["AI", "Healthcare", "Computer Vision"],
    description:
      "A bilingual Arabic/English AI-guided child development and autism screening support system using questionnaire inputs, visual assessment, speech/text analysis, PDF reporting, and developmental support tools.",
    tech: ["Python", "Streamlit", "TensorFlow", "Scikit-learn", "AssemblyAI", "PDF Reports"],
    demo: "",
    github: "https://github.com/moamedmer68-commits/TAIF-Autism-Screening-System",
    style: "alt",
    chip: "Healthcare AI"
  },
  {
    title: "ChatBot Application",
    category: ["AI", "GenAI", "NLP"],
    description:
      "Interactive chat application built with Streamlit and Google's Gemini, enabling smooth AI-powered conversations through a simple user interface.",
    tech: ["Streamlit", "Gemini", "Python"],
    demo: "https://chatbotapplication-jyekdqiu9j3so4rmqioqhr.streamlit.app/",
    github: "https://github.com/moamedmer68-commits/ChatBot_Application",
    style: "",
    chip: "Gemini"
  },
  {
    title: "Object Detector Application",
    category: ["AI", "Computer Vision"],
    description:
      "Web application for object detection using Transformers. Users upload images and view detected objects with bounding boxes and confidence scores.",
    tech: ["Streamlit", "Transformers", "Torch", "Pillow", "NumPy", "Timm"],
    demo: "https://2yhkoqswnkgmufxhxjwfdg.streamlit.app/",
    github: "https://github.com/moamedmer68-commits/Object-Detector-Application-/tree/main",
    style: "alt",
    chip: "Vision"
  },
  {
    title: "Sentiment Analysis Application",
    category: ["AI", "NLP"],
    description:
      "A Streamlit application for sentiment analysis using a pre-trained Transformers model. It classifies text as positive or negative with confidence scoring.",
    tech: ["Streamlit", "Transformers", "NLP"],
    demo: "https://sentimentanalysisapplication-utmytymbkgmpcau5tckuss.streamlit.app/",
    github: "https://github.com/moamedmer68-commits/Sentiment_Analysis_Application",
    style: "",
    chip: "NLP"
  }
];

const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills
  .map(([name, desc, icon]) => `
    <article class="skill-card">
      <span>${icon}</span>
      <h3>${name}</h3>
      <p>${desc}</p>
    </article>
  `)
  .join("");

const projectsGrid = document.getElementById("projectsGrid");

function renderProjects(filter = "all") {
  const filtered = filter === "all"
    ? projects
    : projects.filter((project) => project.category.includes(filter));

  projectsGrid.innerHTML = filtered
    .map((project) => `
      <article class="project-card reveal">
        <div class="project-visual ${project.style}">
          <div class="visual-title">${project.title}</div>
          <div class="visual-chip">${project.chip}</div>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tech.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
          <div class="project-links">
            ${project.demo ? `<a class="btn primary" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
            ${project.github ? `<a class="btn ghost" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
            ${!project.demo && !project.github ? `<span class="btn subtle">Coming Soon</span>` : ""}
          </div>
        </div>
      </article>
    `)
    .join("");

  observeReveal();
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => observer.observe(element));
}

renderProjects();
observeReveal();
