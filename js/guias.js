// ============================================================
// PAES M1 — Comportamiento de las guias web
// Genera el indice (TOC) desde los h2 y el boton "volver arriba".
// ============================================================

function construirTOC() {
  const cont = document.getElementById("toc");
  const wrap = document.querySelector(".guia-wrap");
  if (!cont || !wrap) return;
  const h2s = Array.from(wrap.querySelectorAll("h2"));
  if (h2s.length === 0) return;
  let items = [];
  h2s.forEach((h, i) => {
    if (!h.id) h.id = "sec-" + i;
    items.push('<li><a href="#' + h.id + '">' + escTOC(h.textContent) + '</a></li>');
  });
  cont.innerHTML = '<div class="titulo">En esta guía</div><ol>' + items.join("") + "</ol>";
}

function escTOC(t) {
  return String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Boton volver arriba
function botonSubir() {
  const btn = document.getElementById("subir");
  if (!btn) return;
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
}

document.addEventListener("DOMContentLoaded", () => { construirTOC(); botonSubir(); });