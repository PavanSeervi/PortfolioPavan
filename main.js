// Enhanced Project Data
const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek and modern personal website to showcase my skills, projects, and experience.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    link: "#",
    tags: ["HTML", "CSS", "Bootstrap", "JS"]
  },
  {
    title: "Weather App",
    description: "A weather dashboard fetching live data with clean Bootstrap UI and async JS.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
    tags: ["JavaScript", "Bootstrap", "API"]
  },
  {
    title: "Task Manager",
    description: "A responsive to-do list app with intuitive UX and persistent storage.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#",
    tags: ["HTML", "CSS", "JS"]
  }
];

// Featured projects on index.html
if (document.getElementById('featured-projects')) {
  const featured = projects.slice(0, 2);
  const container = document.getElementById('featured-projects');
  featured.forEach(proj => {
    container.innerHTML += `
      <div class="col-12 col-md-6 mb-4">
        <div class="card h-100 animate-fadein">
          <img src="${proj.image}" class="card-img-top" alt="${proj.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${proj.title}</h5>
            <p class="card-text">${proj.description}</p>
            <div class="project-tags mb-2 d-flex flex-wrap">
              ${proj.tags.map(tag => `<span class="badge bg-primary mb-1">${tag}</span>`).join('')}
            </div>
            <a href="${proj.link}" class="btn btn-outline-primary btn-sm mt-auto align-self-start" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    `;
  });
}

// All projects on projects.html
if (document.getElementById('all-projects')) {
  const container = document.getElementById('all-projects');
  projects.forEach(proj => {
    container.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100 animate-fadein">
          <img src="${proj.image}" class="card-img-top" alt="${proj.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${proj.title}</h5>
            <p class="card-text">${proj.description}</p>
            <div class="project-tags mb-2 d-flex flex-wrap">
              ${proj.tags.map(tag => `<span class="badge bg-secondary mb-1">${tag}</span>`).join('')}
            </div>
            <a href="${proj.link}" class="btn btn-outline-primary btn-sm mt-auto align-self-start" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Contact form (demo only)
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-alert').innerHTML =
      '<div class="alert alert-success">Thank you for contacting me! I will reply soon.</div>';
    this.reset();
  });
}