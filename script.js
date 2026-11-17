/* ===== Settings ===== */
const WHATSAPP = "971558499649";

/* Real reviews: paste genuine customer reviews here (from Instagram / Google / Facebook).
   Example: { name: "Customer name", service: "Nails", rating: 5, text: "Review text" } */
const REVIEWS = [];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const wa = text => window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");

/* ===== Shared header + footer ===== */
const PAGES = [
  ["index.html", "Home"],
  ["courses.html", "Courses", [["Nails", "Nails"], ["Hair", "Hair"], ["Eyelash & Brow", "Eyelash & Brow"], ["Skin", "Skin"]]],
  ["services.html", "Salon Services", [["Nails", "Nails"], ["Hair", "Hair"], ["Face & Skin", "Face & Skin"], ["Henna", "Henna"]]],
  ["home-services.html", "Home Services"],
];
const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
$("#site-header").outerHTML = `
<div class="promo">Book your slot today &amp; shine with confidence &nbsp;·&nbsp; <a href="tel:+971558499649">055 849 9649</a></div>
<header class="nav" id="nav">
  <div class="wrap nav-top">
    <div class="nav-left">
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
    <a href="index.html" class="logo-link" aria-label="Arabella Beauty Saloon and Training Center, home">
      <img src="assets/logo.png" alt="Arabella logo" width="64" height="64">
    </a>
    <div class="nav-right"></div>
  </div>
  <nav id="menu" aria-label="Main">
    <div class="wrap menu-in">
      ${PAGES.map(([h, t, kids]) => {
        const a = `<a href="${h}"${h === here ? ' class="active" aria-current="page"' : ""}>${t}</a>`;
        return kids ? `<div class="has-sub">${a}<ul class="sub">${kids.map(([c, n]) => `<li><a href="${h}?cat=${encodeURIComponent(c)}#catalog">${n.replace("&", "&amp;")}</a></li>`).join("")}</ul></div>` : a;
      }).join("")}
    </div>
  </nav>
</header>`;
$("#site-footer").outerHTML = `
<footer>
  <div class="wrap foot">
    <div class="foot-brand">
      <div class="brand light"><img src="assets/logo.png" alt=""><span>Arabella<small>Beauty Saloon &amp; Training Center</small></span></div>
      <p>Jurf 3 Building, Jurf 2, Ajman<br>055 849 9649</p>
    </div>
    <div class="foot-links">
      ${PAGES.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
    </div>
    <div class="socials">
      <a href="https://www.instagram.com/arabella.beautysaloon" target="_blank" rel="noopener" aria-label="Instagram: Arabella Beauty Saloon" title="Instagram: Saloon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg></a>
      <a href="https://www.instagram.com/arabella.trainingcenter" target="_blank" rel="noopener" aria-label="Instagram: Arabella Training Center" title="Instagram: Training"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg></a>
      <a href="https://www.facebook.com/arabellabeautysaloon/" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 8.5V6.8c0-.8.2-1.3 1.400-1.300H17V2.200C16.700 2.100 15.800 2 14.700 2 12.300 2 10.700 3.500 10.700 6.100v2.400H8V12h2.700v10H14V12h2.600l.4-3.500H14z"/></svg></a>
      <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 21l1.400-4.600A8.500 8.500 0 1 1 8 19.700L3 21z"/><path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2L9 8.500z" fill="currentColor" stroke="none"/></svg></a>
    </div>
  </div>
  <p class="copy">© ${new Date().getFullYear()} Arabella Beauty Saloon and Training Center, Ajman, UAE.</p>
</footer>
<a class="float-wa" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.7 1.5 6.9 0 12.6-5.600 12.600-12.500S23 3 16 3zm0 22.800c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.400 9.800 10.100 5.200 16 5.200s10.600 4.600 10.600 10.300S21.800 25.800 16 25.800zm5.800-7.700c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.200c-.2.200-.4.200-.7.100-1.900-.9-3.100-1.700-4.300-3.800-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.400 4.700 2 .8 2.800.9 3.800.7.600-.1 1.900-.8 2.200-1.500.3-.7.300-1.400.2-1.500-.1-.1-.3-.2-.6-.4z"/></svg>
</a>`;

/* ===== nav ===== */
const nav = $("#nav"), menu = $("#menu"), burger = $("#burger");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});

/* ===== WhatsApp buttons ===== */
$$(".wa[data-service]").forEach(b => b.addEventListener("click", () =>
  wa(`Hello Arabella! I'd like to book: ${b.dataset.service}.`)));
$$(".wa[data-msg]").forEach(b => b.addEventListener("click", () => wa(b.dataset.msg)));

/* ===== Forms -> WhatsApp ===== */
$("#bookForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  wa(`Hello Arabella! I'd like to book ${f.get("service")}.\nName: ${f.get("name")}` +
     (f.get("date") ? `\nDate: ${f.get("date")}` : "") + (f.get("time") ? `\nTime: ${f.get("time")}` : "") +
     (f.get("note") ? `\nNote: ${f.get("note")}` : ""));
});
$("#trainForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  wa(`Hello Arabella! I'm interested in: ${f.get("course")}.\nName: ${f.get("name")}\nPlease share details, schedule and fees.`);
});
$("#homeForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  wa(`Hello Arabella! I'd like a home service visit.\nName: ${f.get("name")}\nService: ${f.get("service")}\nArea / address: ${f.get("area")}` +
     (f.get("date") ? `\nDate: ${f.get("date")}` : "") + (f.get("time") ? `\nTime: ${f.get("time")}` : ""));
});
$$('input[type="date"]').forEach(d => d.min = new Date().toISOString().split("T")[0]);

/* ===== Reviews ===== */
const revGrid = $("#revGrid");
if (revGrid) {
  const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const KEY = "arabella-reviews";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const renderReviews = () => {
    const all = [...REVIEWS, ...load()];
    revGrid.innerHTML = all.length
      ? all.map(r => `<article class="rev"><div class="st">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
          <p>“${esc(r.text)}”</p><div class="who">${esc(r.name)} · ${esc(r.service)}</div></article>`).join("")
      : `<div class="rev empty">No reviews yet. Be the first to share your Arabella experience below.</div>`;
  };
  let rating = 5;
  const stars = $$("#stars button");
  const paint = v => stars.forEach(s => s.classList.toggle("on", +s.dataset.v <= v));
  stars.forEach(s => s.addEventListener("click", () => { rating = +s.dataset.v; paint(rating); }));
  paint(rating);
  $("#revForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const list = load();
    list.unshift({ name: f.get("name").trim(), service: f.get("service"), rating, text: f.get("text").trim() });
    try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, 20))); } catch {}
    e.target.reset(); rating = 5; paint(5); renderReviews();
    $("#revNote").textContent = "Thank you! Your review has been added.";
  });
  renderReviews();
}

/* ===== Flyer lightbox ===== */
const lb = document.createElement("div");
lb.className = "lightbox"; lb.innerHTML = `<button aria-label="Close">×</button><img alt="">`;
document.body.appendChild(lb);
document.addEventListener("click", e => {
  const a = e.target.closest("a[data-zoom]");
  if (!a) return;
  e.preventDefault(); $("img", lb).src = a.href; $("img", lb).alt = $("img", a)?.alt || ""; lb.classList.add("open");
});
lb.addEventListener("click", () => lb.classList.remove("open"));
addEventListener("keydown", e => e.key === "Escape" && lb.classList.remove("open"));

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .12 });
$$(".card,.step,.duo-card,.about>*,.band-in>*,.rev,.train-cta,.leave,.book-in>*,.contact>*,.flyers a,.hstep,.feat,.pg-grid>*").forEach(el => { el.classList.add("reveal"); io.observe(el); });

/* close mobile menu on outside tap / Escape */
document.addEventListener("click", e => { if (!e.target.closest("#menu,#burger")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
addEventListener("keydown", e => { if (e.key === "Escape") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
