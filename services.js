/* Service data. img = photo in assets/ (optional), icon = fallback tile */
const SERVICES = [
  { t: "Acrylics & Nail Art", d: "Acrylics, gel, polygel and creative nail art", cat: "Nails", img: "nails.jpg" },
  { t: "Manicure & Pedicure", d: "Relaxing hand and foot care", cat: "Nails", img: "mani.jpg" },
  { t: "Haircare", d: "Cuts, styling, colour and blow-dry", cat: "Hair", img: "hair.jpg" },
  { t: "All Facials", d: "Diamond, gold and more for glowing skin", cat: "Face & Skin", img: "facial.jpg" },
  { t: "Brow Lamination", d: "Fuller, perfectly shaped brows", cat: "Face & Skin", img: "brow.jpg" },
  { t: "Lash Extensions", d: "Classic, volume and hybrid sets", cat: "Face & Skin", img: "lash.jpg" },
  { t: "Waxing", d: "Gentle, clean hair removal", cat: "Face & Skin", img: "wax.jpg" },
  { t: "Henna / Mehndi", d: "Designs for weddings, Eid and more", cat: "Henna", img: "henna.jpg" },
];

const grid = document.getElementById("courseGrid");
const q = document.getElementById("cq");
const filters = document.querySelectorAll("#cfilters button");
const empty = document.getElementById("cEmpty");
const count = document.getElementById("cCount");
let cat = "All";

function render() {
  const term = q.value.trim().toLowerCase();
  const list = SERVICES.filter(s =>
    (cat === "All" || s.cat === cat) && (!term || [s.t, s.d, s.cat].join(" ").toLowerCase().includes(term)));
  grid.innerHTML = list.map(s => `
    <article class="course reveal in">
      <div class="thumb"><img src="assets/${s.img}" alt="${s.t}" loading="lazy"></div>
      <div class="cbody">
        <h3>${s.t}</h3>
        <p class="ccat">${s.cat}</p>
        <a class="wa" data-msg="Hello Arabella! I'd like to book: ${s.t}.">Book →</a>
      </div>
    </article>`).join("");
  empty.hidden = list.length > 0;
  count.textContent = `${list.length} service${list.length === 1 ? "" : "s"}`;
  grid.querySelectorAll(".wa[data-msg]").forEach(b => b.addEventListener("click", () => wa(b.dataset.msg)));
}
document.querySelectorAll("#views button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("#views button").forEach(x => x.classList.toggle("on", x === b));
  grid.classList.toggle("list", b.dataset.view === "list");
  try { localStorage.setItem("arabella-view", b.dataset.view); } catch {}
}));
try { if (localStorage.getItem("arabella-view") === "list") document.querySelector('#views [data-view="list"]').click(); } catch {}
q.addEventListener("input", render);
filters.forEach(b => b.addEventListener("click", () => {
  cat = b.dataset.cat;
  filters.forEach(x => x.classList.toggle("on", x === b));
  render();
}));
render();

const preset = new URLSearchParams(location.search).get("cat");
if (preset) { const b = [...filters].find(x => x.dataset.cat === preset); if (b) b.click(); }
