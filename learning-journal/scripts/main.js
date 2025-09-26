// lightweight client-side rendering with filtering + search + load-more
import {POSTS} from '../scripts/srs.js'

const PAGE_SIZE = 6;
let visibleCount = PAGE_SIZE;
let activeSource = "All";

const postsGrid = document.getElementById('posts-grid');
const loadMoreBtn = document.getElementById('load-more');
const searchInput = document.getElementById('search');
const recentList = document.getElementById('recent-list');
const tagCloud = document.getElementById('tag-cloud');

function getFilteredPosts(){
  const q = searchInput.value.trim().toLowerCase();
  return POSTS.filter(p=> {
    const passSource = activeSource === "All" ? true : p.source === activeSource;
    const passQuery = q === "" ? true : (p.title.toLowerCase().includes(q) || (p.tags||[]).join(' ').toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    return passSource && passQuery;
  });
}

function renderPosts(){
  const list = getFilteredPosts();
  const slice = list.slice(0, visibleCount);
  postsGrid.innerHTML = slice.map(renderPostCard).join('') || `<p class="kicker small">No posts found.</p>`;
  // recent
  recentList.innerHTML = POSTS.slice(0,5).map(p=>`<li><a href="${p.link}">${p.title}</a></li>`).join('');
  // tags
  const tags = [...new Set(POSTS.flatMap(p=>p.tags||[]))];
  tagCloud.innerHTML = tags.map(t=>`<span class="tag" data-tag="${t}">${t}</span>`).join('');
  // show/hide load more
  loadMoreBtn.style.display = list.length > visibleCount ? 'inline-block' : 'none';
}

function renderPostCard(p){
  return `
    <article class="post-card" data-id="${p.id}">
      <img class="post-thumb" src="${p.thumb}" alt="${p.title}">
      <div class="post-content">
        <div class="kicker small">${p.source}</div>
        <h3 class="post-title"><a href="${p.link}">${p.title}</a></h3>
        <p class="post-excerpt">${p.excerpt}</p>
        <div class="post-meta">${p.date} • ${p.read} • ${p.tags.join(', ')}</div>
      </div>
    </article>
  `;
}

// UI wiring
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeSource = btn.dataset.source;
    visibleCount = PAGE_SIZE;
    renderPosts();
  });
});

// load more
loadMoreBtn.addEventListener('click', ()=>{
  visibleCount += PAGE_SIZE;
  renderPosts();
});

// search
searchInput.addEventListener('input', ()=>{
  visibleCount = PAGE_SIZE;
  renderPosts();
});

// tag click (delegation)
tagCloud.addEventListener('click', e=>{
  if(e.target.matches('.tag')){
    const tag = e.target.dataset.tag;
    searchInput.value = tag;
    visibleCount = PAGE_SIZE;
    renderPosts();
  }
});

renderPosts();
