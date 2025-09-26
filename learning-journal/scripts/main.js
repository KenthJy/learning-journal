const startDate = new Date("September 15, 25 06:24:00");
const totalDays = 100; 

const counterEl = document.getElementById('days-counter-live')
const daysLeftEl = document.getElementById('days-left');

function updateCounter() {
    const currentDate = new Date()
    const diffDays = currentDate - startDate
    const result =  Math.floor(diffDays /(1000*60*60*24) + 1) 
    const remaining = totalDays - result

    counterEl.textContent = result === totalDays ? `100th day the final!` : result
    daysLeftEl.textContent = remaining > 0 ? remaining : 0
}


updateCounter()
setInterval(updateCounter, 1000)


const projects = [
     { title: "Portfolio Website", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
     Scrimba = [
        { title: "Send To Pager", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Saleboard", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Invoice Generator", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Choreslist", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Oldagram", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Learning Journal", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Hometown HomePage", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Movie Watchlist", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Meme Generator", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Password Generator", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tenzies Game", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "AirBnb Experiences", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Basketball Scoreboard", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "BestBank", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Inspirational Quotes", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Mobile Restaurant Menu", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Color Scheme Generator", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Quizzical", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
     ],
     FreecodeCamp = [
        { title: "Send To Pager", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Saleboard", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Invoice Generator", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Choreslist", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Oldagram", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Learning Journal", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
        { title: "Tindog", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
     ]
]

const filterBtn = document.querySelectorAll('.filter-buttons button')
const container = document.getElementById('project-container')
















// const startDate = new Date('2025-09-25'); // your start date
// const totalDays = 100;

// const counterEl = document.getElementById('days-counter-live');
// const daysLeftEl = document.getElementById('days-left');

// function updateCounter() {
//   const today = new Date();
//   const diffTime = today - startDate;
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
//   const remaining = totalDays - diffDays;

//   counterEl.textContent = diffDays > totalDays ? totalDays : diffDays;
//   daysLeftEl.textContent = remaining > 0 ? remaining : 0;
// }

// updateCounter();
// setInterval(updateCounter, 1000);

// // ===== Projects =====
// const projects = [
//   { title: "Portfolio Website", tech: ["HTML", "CSS", "JS"], description: "Showcase your projects.", link: "#" },
//   { title: "React To-Do App", tech: ["React", "JS", "CSS"], description: "To-do app with localStorage.", link: "#" },
//   { title: "Python Web Scraper", tech: ["Python"], description: "Scrapes websites to CSV.", link: "#" },
//   // Add more projects here
// ];

// const container = document.getElementById("project-container");
// const filterButtons = document.querySelectorAll(".filter-buttons button");

// function displayProjects(projectsToShow) {
//   container.innerHTML = "";
//   projectsToShow.forEach(project => {
//     const card = document.createElement("div");
//     card.classList.add("project-card");
//     card.innerHTML = `
//       <h3>${project.title}</h3>
//       <p>${project.description}</p>
//       <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
//       <a href="${project.link}" target="_blank">View Project →</a>
//     `;
//     container.appendChild(card);
//   });
// }

// // Initial display
// displayProjects(projects);

// // Filtering
// filterButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     filterButtons.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");
//     const tech = btn.dataset.tech;

//     if (tech === "All") displayProjects(projects);
//     else displayProjects(projects.filter(p => p.tech.includes(tech)));
//   });
// });