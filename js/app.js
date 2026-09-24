// ============================================================
// PAES M1 — Logica comun: modos (estudiante/tutor) y navegacion
// ============================================================

// Estado del modo. Se guarda en localStorage.
const ESTADO = {
  get modo() { return localStorage.getItem("paes-m1-modo") || "estudiante"; },
  set modo(v) { localStorage.setItem("paes-m1-modo", v); }
};

// Inicializa el selector de modo en el navbar de todas las paginas
function iniciarModo() {
  const sel = document.getElementById("sel-modo");
  const badge = document.getElementById("badge-modo");
  if (!sel) return;
  sel.value = ESTADO.modo;
  if (badge) actualizarBadge(badge);
  sel.addEventListener("change", () => {
    if (sel.value === "tutor") {
      // Pedir la clave antes de activar el modo tutor
      abrirModalClave(() => { ESTADO.modo = "tutor"; sel.value = "tutor"; if (badge) actualizarBadge(badge); aplicarModo(); });
    } else {
      ESTADO.modo = "estudiante";
      if (badge) actualizarBadge(badge);
      aplicarModo();
    }
  });
}

function actualizarBadge(badge) {
  badge.textContent = ESTADO.modo === "tutor" ? "Modo tutor" : "Modo estudiante";
  badge.style.color = ESTADO.modo === "tutor" ? "#F9A825" : "#D9E2F3";
}

function aplicarModo() {
  // Cada pagina puede definir su propia reaccion al cambio de modo
  if (typeof onModoCambio === "function") onModoCambio();
}

// Modal para pedir la clave del modo tutor
function abrirModalClave(alDesbloquear) {
  const fondo = document.getElementById("modal-clave");
  if (!fondo) return;
  fondo.classList.add("visible");
  const input = fondo.querySelector("input");
  const err = fondo.querySelector(".error");
  input.value = "";
  err.textContent = "";
  input.focus();
  const cerrar = () => fondo.classList.remove("visible");
  const aceptar = () => {
    if (input.value.trim() === TUTOR_KEY) { cerrar(); if (alDesbloquear) alDesbloquear(); }
    else { err.textContent = "Clave incorrecta."; }
  };
  const btnOk = fondo.querySelector(".btn-ok");
  const btnCanc = fondo.querySelector(".btn-canc");
  // Reemplazar manejadores previos
  btnOk.onclick = aceptar;
  btnCanc.onclick = cerrar;
  input.onkeydown = (e) => { if (e.key === "Enter") aceptar(); if (e.key === "Escape") cerrar(); };
  fondo.onclick = (e) => { if (e.target === fondo) cerrar(); };
}

// Helper para escapar texto al insertar en el DOM
function esc(t) {
  return String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

document.addEventListener("DOMContentLoaded", iniciarModo);