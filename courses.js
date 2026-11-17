/* Course data. Flyer = image in assets/flyers/ */
const COURSES = [
  { t: "Manicure & Pedicure", lvl: "Beginners", cat: "Nails", img: 11, inc: ["Nail anatomy", "General tools", "Safety measures", "Manicure & pedicure procedure", "Hand & foot massage", "Sterilizing tools", "Aftercare", "Nail shapes & files"] },
  { t: "Manicure & Pedicure", lvl: "Advanced", cat: "Nails", img: 12, inc: ["Common nail health issues", "Perfect nail length & shape", "Types of nails, bitten nails", "Pedicure procedure", "Ingrown toe nails", "Sterilizing tools"] },
  { t: "Nail Polish & Gel Polish", lvl: "Basic", cat: "Nails", img: 13, inc: ["Nail preparation", "Product knowledge", "Polish application", "Polish basic art", "Polish removal", "Aftercare"] },
  { t: "Acrylics", lvl: "Beginners", cat: "Nails", img: 19, inc: ["Types of nails", "Acrylic nail system", "Nail shapes & files", "Filing and shaping", "Nail drill and bits", "Lifting and popping", "Re-fill, re-balance, removal"] },
  { t: "Acrylic", lvl: "Advanced", cat: "Nails", img: 20, inc: ["Dry manicure", "Bitten nails application", "3D designs", "Encapsulation", "Ombre, French, marble art", "Combined extensions", "Re-filing"] },
  { t: "Hard Gel Extensions", lvl: "Beginners", cat: "Nails", img: 18, inc: ["Gel nail system", "Nail preparation & application", "Basic nail art, ombre", "Color mixing", "Filing and shaping", "Re-fill & removal"] },
  { t: "PolyGel Extensions", lvl: "Beginners", cat: "Nails", img: 17, inc: ["PolyGel nail system", "Basic nail art, 3D nail art", "Color mixing", "Filing and shaping", "Re-fill & re-balance", "Removal"] },
  { t: "Soft Gel (Gel X)", lvl: "Beginners", cat: "Nails", img: 16, inc: ["Nail preparation", "GelX tips preparation", "GelX application & shaping", "GelX refill", "GelX removal", "Aftercare"] },
  { t: "Classic (Fake Nails) Extensions", lvl: "Beginners", cat: "Nails", img: 14, inc: ["Nail preparation", "Tips preparation", "Tips application & shaping", "Tips removal", "Aftercare"] },
  { t: "Dip & Buff", lvl: "Basic", cat: "Nails", img: 23, inc: ["Nail preparation", "Dip application", "Dip art", "Aftercare"] },
  { t: "Nail Drill", lvl: "Basic", cat: "Nails", img: 15, inc: ["Nail drill & bits", "Dry manicure", "Combined manicure", "Nail art", "Sterilizing and storing"] },
  { t: "Nail Art", lvl: "Basic", cat: "Nails", img: 21, inc: ["Nail shapes & brushes", "Nail polish & gel polish art", "Ombre art", "French art", "Free hand art", "Marble designs"] },
  { t: "Nail Art", lvl: "Advanced", cat: "Nails", img: 22, inc: ["Color theory", "3D art", "One stroke art", "Stamping", "Encapsulated art", "Foil & chrome art"] },
  { t: "Hair Color", lvl: "Basic", cat: "Hair", img: 9, inc: ["Hair color techniques", "Hair bleaching techniques"] },
  { t: "Hair Color", lvl: "Advanced", cat: "Hair", img: 9, inc: ["Advanced colour techniques", "Hair bleaching techniques"] },
  { t: "Hair Cutting & Styling", lvl: "Complete", cat: "Hair", img: 9, inc: ["Hair cutting techniques", "Hair styling", "Blow-dry, straightening & curling"] },
  { t: "Eyelash Extensions", lvl: "Advanced", cat: "Eyelash & Brow", img: 9, inc: ["Classic eyelash extensions", "Volume & hybrid lash extensions"] },
  { t: "Eyelash Extensions", lvl: "Complete", cat: "Eyelash & Brow", img: 9, inc: ["Classic eyelash extensions", "Volume & hybrid lash extensions"] },
  { t: "Eyelash Lifting & Eyebrow Lamination", lvl: "Advanced", cat: "Eyelash & Brow", img: 9, inc: ["Eyelash lifting", "Eyebrow lamination"] },
  { t: "Skincare & Facials", lvl: "Beginners", cat: "Skin", img: 7, inc: ["Professional skincare training", "Facial techniques", "Beginner, advanced and complete programs"] },
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
      <a class="thumb" href="assets/flyers/${c.img}.webp" data-zoom aria-label="Enlarge ${c.t} flyer">
        <img src="assets/flyers/${c.img}.webp" alt="${c.t} ${c.lvl} flyer" loading="lazy">
      </a>
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
