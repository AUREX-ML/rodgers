const projects = [
  {
    name: "MYEMS",
    description: "A facility energy management system using the MYEMS open-source platform, Raspberry Pi, and GitHub-based documentation for practical energy monitoring and optimization.",
    tools: ["MYEMS", "Open Source", "Raspberry Pi", "GitHub"],
    link: "https://github.com/AUREX-ML/MY-ENERGY-MANAGEMENT-SYSTEM"
  },
  {
    name: "DERMS Intelligence Platform",
    description: "Placeholder project for a Distributed Energy Resource Management System that monitors, coordinates, and optimizes solar PV, battery storage, and customer-owned energy assets.",
    tools: ["DERMS", "Power Systems", "Data Analytics", "AI"],
    link: "#contact"
  },
  {
    name: "IIoT Grid Monitoring Prototype",
    description: "Placeholder project for an industrial IoT monitoring solution that captures field data, sends it to a dashboard, and supports smarter operational decision-making.",
    tools: ["IIoT", "Sensors", "Python", "Dashboards"],
    link: "#contact"
  }
];

const grid = document.querySelector("#project-grid");

function renderProjects() {
  if (!grid) return;
  grid.innerHTML = projects.map(project => `
    <article class="project-card reveal">
      <div>
        <p class="eyebrow">Project</p>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tag-list">
          ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
        </div>
      </div>
      <div class="project-actions">
        <a class="btn btn-secondary" href="${project.link}" target="${project.link.startsWith('http') ? '_blank' : '_self'}" rel="noopener">View Project</a>
      </div>
    </article>
  `).join("");
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

renderProjects();
setupNavigation();
setupReveal();
document.querySelector("#year").textContent = new Date().getFullYear();
