/* ===== Settings ===== */
const WHATSAPP = "971558499649";

/* Google rating summary + real reviews copied from the Google Maps listing.
   To update: change the numbers, or add/remove { name, rating, text } entries. */
const GOOGLE = { rating: 4.8, count: 138 };
const REVIEWS = [
  { name: "Alaa Adil", rating: 5, text: "10s all across the board. It is obvious that Mrs.Asia (the owner) is truly passionate, knowledgeable and genuine about how she runs the salon. Absolutely the best haircut of my life, I would definitely recommend to anyone wanting a true professional and satisfying treatment." },
  { name: "Anagha PB", rating: 5, text: "From the warm welcome at the reception to the final touch-up, my experience at Arabella was wonderful. The staff were kind, professional, and attentive to every detail. The salon was spotless and had a calming ambiance." },
  { name: "Nevein", rating: 5, text: "Lovely haircut experience! Great result, super kind and polite staff, and a very relaxing salon atmosphere. Definitely my go-to salon from now on." },
  { name: "Shihana Shihab", rating: 5, text: "I'm beyond happy with my nail service! The work was neat, detailed, and beautifully done. I truly loved my experience here." },
  { name: "Sadiya Nazir", rating: 5, text: "Excellent customer service! Santoshi did my hair so well and was very patient throughout the whole process. She made sure everything was done properly, and I absolutely love the results." },
  { name: "Nafi Noor", rating: 5, text: "I recently completed a Hair Styling Course at Arabella Beauty Training Centre and had an excellent experience. The training was professional, practical, and very informative." },
  { name: "Shami Shamie", rating: 5, text: "Place is so relaxing and the ambience is very calm. Staff are very accommodating and prices are very good for the services offered. The staff are very sincere and ensures you are always happy. Highly recommend this saloon." },
  { name: "Lydia", rating: 5, text: "I joined Arabella Beauty Saloon as a fresher and had spent a good 2 months learning the basic course. I feel so proud that even upon completion, the trainer gave me support to find a job…" },
  { name: "Santoshi Bhatta", rating: 5, text: "The saloon has been very accommodating and the staff are well trained. Warm welcome, clean and relaxing environment with very good service and the prices are affordable." },
  { name: "Shaik Ayesha", rating: 5, text: "Mashallah, very hygienic and good staff. I feel very good when I visit this salon. Everyone must visit for salon service." },
  { name: "Sara Ibr", rating: 5, text: "Aashika is very beautiful and successful. I had my eyelashes done and I liked it very much. I go to the salon just for her. I really like her work. I came here for the second time." },
  { name: "Sanja Lulic", rating: 5, text: "My favorite place to do mani/pedi and henna. Girls are excellent. Always happy to be back. I highly recommend it!" },
  { name: "Shaaban Biggz", rating: 5, text: "Took my nieces and they loved their henna just in time for Eid. Great customer service and helpful with last minute requests. Keep up the great work." },
  { name: "Celani Mangena", rating: 5, text: "First time going to the saloon and I can say am glad I found this saloon. Did pedicure, manicure and eyebrows. Loved the service, wonderful customer service, place is clean and there are good friendly vibes in the saloon." },
  { name: "Sabreena Bawazir", rating: 5, text: "I experienced a warm welcome on my first visit. I was quite taken by the friendliness of the staff and the cleanliness of the parlour. The service was carried out skillfully and patiently." },
  { name: "M Siddique", rating: 5, text: "I am really glad I found this salon. I have really sensitive skin and Ms.Shiza, a member of the staff there, took special care and provided me really good service. And their pricing is really affordable." },
  { name: "Jennifer Isnard", rating: 5, text: "Amazing service from Asiya and her team. She is so kind and the colors for the highlight were perfect, she understood exactly what I wanted." },
  { name: "Salma Salim", rating: 5, text: "The crew was very friendly and welcoming. The salon was clean and had a very inviting ambience. The girls were very quick and professional in the way they did my nails." },
  { name: "Bushra Tariq", rating: 5, text: "Shiza is very good, her hand is very soft and she is kind too. Deals with her customers very nicely. Well done." },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const wa = text => window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");

/* ===== Shared header + footer ===== */
const PAGES = [
  ["index.html", "Home"],
  ["courses.html", "Courses"],
  ["services.html", "Salon Services"],
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
      <img src="assets/logo.png" alt="Arabella Beauty Saloon and Training Center" height="54">
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
      <div class="brand light"><img src="assets/logo.png" alt="Arabella Beauty Saloon and Training Center"></div>
      <p>Jurf 3 Building, Jurf 2, Ajman<br>055 849 9649</p>
    </div>
    <div class="foot-links">
      ${PAGES.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
    </div>
    <div class="socials">
      <a href="https://www.instagram.com/arabella.beautysaloon" target="_blank" rel="noopener" aria-label="Instagram: Arabella Beauty Saloon" title="Instagram: Saloon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg></a>
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
  /* Reviews come from reviews.json, which a scheduled GitHub Action refreshes from Google
     (see .github/workflows/reviews.yml). Writing a review sends people to the Google Maps listing. */
  const REVIEW_LINK = "https://www.google.com/maps/place/Arabella+Beauty+Saloon+and+Training+Center/@25.4026369,55.5017395,17z/data=!4m8!3m7!1s0x3e5f5839e63315cb:0x189ec3cba00020c3!8m2!3d25.4026369!4d55.5017395!9m1!1b1!16s%2Fg%2F11hczky_fg";
  $$(".g-write").forEach(a => a.href = REVIEW_LINK);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const stars = n => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
  const draw = d => {
    const cards = (d.reviews || []).map(r => `<article class="rev"><div class="st">${stars(r.rating)}</div><p>“${esc(r.text)}”</p><div class="who">${esc(r.name)} · Google</div></article>`).join("");
    revGrid.innerHTML = `<div class="slider"><button class="sl prev" aria-label="Previous reviews">‹</button><div class="track">${cards}</div><button class="sl next" aria-label="Next reviews">›</button></div>`;
    const track = $(".track", revGrid);
    const step = () => (track.querySelector(".rev")?.offsetWidth || 300) + 18;
    $(".prev", revGrid).addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    $(".next", revGrid).addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  };
  draw({ ...GOOGLE, reviews: REVIEWS });
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
