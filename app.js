// To avoid using an sql data base for this mock UI, using localStorage to store the user's login/registery data - strapi.io/blog/how-to-use-localstorage-in-javascript#:~:text=The%20localStorage%20property%20provides%20persistent,data%20types%20require%20JSON%20serialization.
function getUsers(){ return JSON.parse(localStorage.getItem("users")||"[]");}
function saveUsers(u){ localStorage.setItem("users", JSON.stringify(u));}
function setSession(user){ localStorage.setItem("session", JSON.stringify(user));}
function getSession(){ return JSON.parse(localStorage.getItem("session")||"null");}
function clearSession(){ localStorage.removeItem("session");}

// Display for the Navigation bar for when the user is logged in or not
function navGuard(){
  const s = getSession();
  const el = document.querySelector("[data-auth]");
  if(!el) return;
  el.innerHTML = s
    ? `<span>Hi, ${s.email}</span> <a href="#" id="logoutLink">Logout</a>`
    : `<a href="login.html">Login</a> <a href="register.html">Register</a>`;
  const logout = document.getElementById("logoutLink");
  if(logout) logout.onclick = (e)=>{e.preventDefault();clearSession();location.reload();}
}

function money(n){ return "€" + n.toLocaleString("en-IE"); }

function listingCardHTML(l){
  const price = l.priceMonthly ? `${money(l.priceMonthly)} / month` :
                l.priceWeekly ? `${money(l.priceWeekly)} / week` : "";
  return `
    <div class="card">
      <strong>${l.title}</strong>
      <small>${l.area}</small>
      <div class="meta">
        <span>🛏 ${l.beds}</span>
        <span> ${l.type}</span>
      </div>
      <div class="price">${price}</div>
      <div style="display:flex;gap:6px;">
        <button onclick="openListing(${l.id})">Preview</button>
      </div>
    </div>
  `;
}

function openListing(id){
  location.href = `listing.html?id=${id}`;
}

function renderSidebar(list){
  const res = document.getElementById("results");
  if(!res) return;
  res.innerHTML = list.map(listingCardHTML).join("") || `
    <div class="card"><strong>No results</strong><small>Try widening filters.</small></div>
  `;
}

// Setting up the filters for A) setting the locations in dublin that the types of housing are at and B) the budget that the student has available for them
function applyFilters(){
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const area = document.getElementById("areaSelect")?.value || "all";
  const maxBudgetVal = document.getElementById("budgetSelect")?.value || "any";
  const maxBudget = maxBudgetVal === "any" ? Infinity : Number(maxBudgetVal);
  const type = document.querySelector(".cat.active")?.dataset.type || "all";

  let filtered = window.LISTINGS.filter(l=>{
    const matchesQ = (l.title + " " + l.area).toLowerCase().includes(q);
    const matchesArea = area === "all" || l.area === area;
    const price = l.priceMonthly ?? (l.priceWeekly ? l.priceWeekly * 4.33 : Infinity);
    const matchesBudget = price <= maxBudget;
    const matchesType = type==="all" || l.type===type;
    return matchesQ && matchesArea && matchesBudget && matchesType;
  });

  renderSidebar(filtered);
  renderListingsPage(filtered);
}


function bindHomeUI(){
  const si = document.getElementById("searchInput");
  const ab = document.getElementById("areaSelect");
  const bb = document.getElementById("budgetSelect");
  const sb = document.getElementById("searchBtn");

  if(si) si.addEventListener("input", applyFilters);
  if(ab) ab.addEventListener("change", applyFilters);
  if(bb) bb.addEventListener("change", applyFilters);
  if(sb) sb.addEventListener("click", applyFilters);

  document.querySelectorAll(".cat").forEach(c=>{
    c.onclick=()=>{
      document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));
      c.classList.add("active");
      applyFilters();
    };
  });

  // When the webpage is just opened
  renderSidebar(window.LISTINGS);
}

// Functions to handle the login/register forms and validating them
function bindLogin(){
  const f=document.getElementById("loginForm");
  if(!f) return;
  f.onsubmit=(e)=>{
    e.preventDefault();
    const email=f.email.value.trim();
    const pass=f.password.value.trim();
    const u=getUsers().find(x=>x.email===email && x.password===pass);
    if(!u) return alert("Invalid login.");
    setSession({email});
    location.href="index.html";
  };
}

function bindRegister(){
  const f=document.getElementById("registerForm");
  if(!f) return;
  f.onsubmit=(e)=>{
    e.preventDefault();
    const email=f.email.value.trim();
    const pass=f.password.value.trim();
    const users=getUsers();
    if(users.some(x=>x.email===email)) return alert("User exists.");
    users.push({email,password:pass});
    saveUsers(users);
    setSession({email});
    location.href="index.html";
  };
}

document.addEventListener("DOMContentLoaded", ()=>{
  navGuard();
  bindHomeUI();
  bindLogin();
  bindRegister();
});

