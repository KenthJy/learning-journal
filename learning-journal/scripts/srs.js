// scripts/posts.js
export const POSTS = [
  // === Personal Projects ===
  { 
    id: 1,
    title: "Portfolio Website",
    excerpt: "Showcase your projects and skills.",
    thumb: "assets/thumb1.jpg",
    date: "2025-09-10",
    read: "4 min",
    tags: ["HTML", "CSS", "JS"],
    source: "Personal",
    link: "#"
  },

  // === Scrimba Projects ===
  { id: 2, title: "Send To Pager", excerpt: "Small UI app demo project.", thumb: "assets/thumb2.jpg", date: "2025-08-21", read: "3 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 3, title: "Saleboard", excerpt: "Sales dashboard UI practice.", thumb: "assets/thumb3.jpg", date: "2025-08-19", read: "5 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 4, title: "Invoice Generator", excerpt: "Create and download invoices.", thumb: "assets/thumb4.jpg", date: "2025-08-15", read: "4 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 5, title: "Choreslist", excerpt: "Simple todo/chores list app.", thumb: "assets/thumb5.jpg", date: "2025-08-12", read: "3 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 6, title: "Oldagram", excerpt: "Instagram-style picture feed practice.", thumb: "assets/thumb6.jpg", date: "2025-08-09", read: "4 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 7, title: "Tindog", excerpt: "Landing page clone inspired by Tinder for dogs.", thumb: "assets/thumb7.jpg", date: "2025-08-05", read: "3 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 8, title: "Learning Journal", excerpt: "This learning journal project (site homepage).", thumb: "assets/thumb8.jpg", date: "2025-08-02", read: "5 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 9, title: "Hometown HomePage", excerpt: "Local city / hometown landing page.", thumb: "assets/thumb9.jpg", date: "2025-07-29", read: "4 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 10, title: "Movie Watchlist", excerpt: "Movie search & save watchlist (React + Tailwind).", thumb: "assets/thumb10.jpg", date: "2025-07-25", read: "6 min", tags: ["HTML","Tailwind","JS","React"], source: "Scrimba", link: "#" },
  { id: 11, title: "Meme Generator", excerpt: "Create memes with canvas and download.", thumb: "assets/thumb11.jpg", date: "2025-07-22", read: "3 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 12, title: "Password Generator", excerpt: "Random password generator UI.", thumb: "assets/thumb12.jpg", date: "2025-07-18", read: "2 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 13, title: "Tenzies Game", excerpt: "Small React game (state management practice).", thumb: "assets/thumb13.jpg", date: "2025-07-14", read: "6 min", tags: ["HTML","Tailwind","JS","React"], source: "Scrimba", link: "#" },
  { id: 14, title: "Airbnb Experiences (Clone)", excerpt: "Landing & listings layout practice.", thumb: "assets/thumb14.jpg", date: "2025-07-11", read: "5 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 15, title: "Basketball Scoreboard", excerpt: "Simple scoreboard with JS logic.", thumb: "assets/thumb15.jpg", date: "2025-07-08", read: "2 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 16, title: "BestBank", excerpt: "Bank landing + interactive components in React.", thumb: "assets/thumb16.jpg", date: "2025-07-04", read: "7 min", tags: ["HTML","CSS","JS","React"], source: "Scrimba", link: "#" },
  { id: 17, title: "Inspirational Quotes", excerpt: "Random quote generator (API/local data).", thumb: "assets/thumb17.jpg", date: "2025-07-01", read: "3 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 18, title: "Mobile Restaurant Menu", excerpt: "Mobile-first menu UI in React.", thumb: "assets/thumb18.jpg", date: "2025-06-28", read: "4 min", tags: ["HTML","CSS","JS","React"], source: "Scrimba", link: "#" },
  { id: 19, title: "Color Scheme Generator", excerpt: "Generate color palettes and copy hex values.", thumb: "assets/thumb19.jpg", date: "2025-06-25", read: "5 min", tags: ["HTML","CSS","JS"], source: "Scrimba", link: "#" },
  { id: 20, title: "Quizzical", excerpt: "Quiz app that fetches questions and scores the user.", thumb: "assets/thumb20.jpg", date: "2025-06-21", read: "6 min", tags: ["HTML","Tailwind","JS","React"], source: "Scrimba", link: "#" },

  // === FreeCodeCamp Projects ===
  { id: 21, title: "FCC: Random Quote Machine", excerpt: "Random quote generator with API.", thumb: "assets/fcc1.jpg", date: "2025-05-10", read: "3 min", tags: ["HTML","CSS","JS"], source: "FreeCodeCamp", link: "#" },
  { id: 22, title: "FCC: JavaScript Calculator", excerpt: "Functional calculator UI with JS logic.", thumb: "assets/fcc2.jpg", date: "2025-05-05", read: "4 min", tags: ["HTML","CSS","JS"], source: "FreeCodeCamp", link: "#" },
  { id: 23, title: "FCC: Markdown Previewer", excerpt: "Live markdown rendering using React.", thumb: "assets/fcc3.jpg", date: "2025-05-01", read: "5 min", tags: ["HTML","CSS","JS","React"], source: "FreeCodeCamp", link: "#" },
  { id: 24, title: "FCC: Drum Machine", excerpt: "Audio interactivity built with React.", thumb: "assets/fcc4.jpg", date: "2025-04-28", read: "6 min", tags: ["HTML","CSS","JS","React"], source: "FreeCodeCamp", link: "#" },
  { id: 25, title: "FCC: Pomodoro Clock", excerpt: "Timer app demonstrating setInterval/clearInterval.", thumb: "assets/fcc5.jpg", date: "2025-04-24", read: "5 min", tags: ["HTML","CSS","JS"], source: "FreeCodeCamp", link: "#" },

  // === Placeholders for Future Projects (Python, CS50, etc.) ===
  // { id: 26, title: "Python: Stock Screener", excerpt: "Example Python project.", thumb: "assets/python1.jpg", date: "2025-03-20", read: "7 min", tags: ["Python","Pandas"], source: "Personal", link: "#" },
];
