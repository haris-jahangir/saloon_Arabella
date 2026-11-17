/* Course data. img = photo in assets/ */
const COURSES = [
  { t: "Manicure & Pedicure", lvl: "Beginners & Advanced", cat: "Nails", img: "mani.jpg", inc: ["Nail anatomy", "General tools", "Safety measures", "Manicure & pedicure procedure", "Hand & foot massage", "Sterilizing tools", "Aftercare", "Nail shapes & files"] },
  { t: "Nail Polish & Gel Polish", lvl: "Basic", cat: "Nails", img: "n-red.jpg", inc: ["Nail preparation", "Product knowledge", "Polish application", "Polish basic art", "Polish removal", "Aftercare"] },
  { t: "Acrylics", lvl: "Beginners & Advanced", cat: "Nails", img: "n-pink.jpg", inc: ["Types of nails", "Acrylic nail system", "Nail shapes & files", "Filing and shaping", "Nail drill and bits", "Lifting and popping", "Re-fill, re-balance, removal"] },
  { t: "Hard Gel Extensions", lvl: "Beginners", cat: "Nails", img: "n-black.jpg", inc: ["Gel nail system", "Nail preparation & application", "Basic nail art, ombre", "Color mixing", "Filing and shaping", "Re-fill & removal"] },
  { t: "PolyGel Extensions", lvl: "Beginners", cat: "Nails", img: "n-marble.jpg", inc: ["PolyGel nail system", "Basic nail art, 3D nail art", "Color mixing", "Filing and shaping", "Re-fill & re-balance", "Removal"] },
  { t: "Soft Gel (Gel X)", lvl: "Beginners", cat: "Nails", img: "n-tech.jpg", inc: ["Nail preparation", "GelX tips preparation", "GelX application & shaping", "GelX refill", "GelX removal", "Aftercare"] },
  { t: "Classic (Fake Nails) Extensions", lvl: "Beginners", cat: "Nails", img: "n-gems.jpg", inc: ["Nail preparation", "Tips preparation", "Tips application & shaping", "Tips removal", "Aftercare"] },
  { t: "Dip & Buff", lvl: "Basic", cat: "Nails", img: "n-light.jpg", inc: ["Nail preparation", "Dip application", "Dip art", "Aftercare"] },
  { t: "Nail Drill", lvl: "Basic", cat: "Nails", img: "nails.jpg", inc: ["Nail drill & bits", "Dry manicure", "Combined manicure", "Nail art", "Sterilizing and storing"] },
  { t: "Nail Art", lvl: "Basic & Advanced", cat: "Nails", img: "n-chrome.jpg", inc: ["Nail shapes & brushes", "Nail polish & gel polish art", "Ombre art", "French art", "Free hand art", "Marble designs"] },
  { t: "Hair Color", lvl: "Basic & Advanced", cat: "Hair", img: "h-color.jpg", inc: ["Hair color techniques", "Hair bleaching techniques"] },
  { t: "Hair Cutting & Styling", lvl: "Complete", cat: "Hair", img: "h-cut.jpg", inc: ["Hair cutting techniques", "Hair styling", "Blow-dry, straightening & curling"] },
  { t: "Eyelash Extensions", lvl: "Advanced & Complete", cat: "Eyelash & Brow", img: "lash.jpg", inc: ["Classic eyelash extensions", "Volume & hybrid lash extensions"] },
  { t: "Eyelash Lifting & Eyebrow Lamination", lvl: "Advanced", cat: "Eyelash & Brow", img: "brow.jpg", inc: ["Eyelash lifting", "Eyebrow lamination"] },
  { t: "Skincare & Facials", lvl: "Beginners", cat: "Skin", img: "facial.jpg", inc: ["Professional skincare training", "Facial techniques", "Beginner, advanced and complete programs"] },
];

const grid = document.getElementById("courseGrid");
const q = document.getElementById("cq");
const filters = document.querySelectorAll("#cfilters button");
const empty = document.getElementById("cEmpty");
const count = document.getElementById("cCount");
let cat = "All";

function render() {
  const term = q.value.trim().toLowerCase();
  const list = COURSES.filter(c =>
    (cat === "All" || c.cat === cat) &&
    (!term || [c.t, c.lvl, c.cat, ...c.inc].join(" ").toLowerCase().includes(term)));
  grid.innerHTML = list.map(c => `
    <article class="course reveal in">
      <div class="thumb"><img src="assets/${c.img}" alt="${c.t}" loading="lazy"></div>
      <div class="cbody">
        <h3>${c.t}</h3>
        <p class="ccat">${c.lvl}</p>
        <a class="wa" data-msg="Hello Arabella! I'm interested in the ${c.t} (${c.lvl}) course. Please share schedule and fees.">Enquire →</a>
      </div>
    </article>`).join("");
  empty.hidden = list.length > 0;
  count.textContent = `${list.length} course${list.length === 1 ? "" : "s"}`;
  grid.querySelectorAll(".wa[data-msg]").forEach(b => b.addEventListener("click", () => wa(b.dataset.msg)));
}
document.querySelectorAll("#views button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("#views button").forEach(x => x.classList.toggle("on", x === b));
  grid.classList.toggle("list", b.dataset.view === "list");
  try { localStorage.setItem("arabella-view", b.dataset.view); } catch {}
}));
try { const v = localStorage.getItem("arabella-view"); if (v === "list") document.querySelector('#views [data-view="list"]').click(); } catch {}
q.addEventListener("input", render);
filters.forEach(b => b.addEventListener("click", () => {
  cat = b.dataset.cat;
  filters.forEach(x => x.classList.toggle("on", x === b));
  render();
}));
document.querySelectorAll("[data-filter]").forEach(a => a.addEventListener("click", () => {
  const b = [...filters].find(x => x.dataset.cat === a.dataset.filter);
  if (b) b.click();
}));
render();

const preset = new URLSearchParams(location.search).get("cat");
if (preset) { const b = [...filters].find(x => x.dataset.cat === preset); if (b) b.click(); }
