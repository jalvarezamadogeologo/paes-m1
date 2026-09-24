// ============================================================
// PAES M1 — Practica interactiva con autocorreccion
// ============================================================

let mcActual = null;
let seleccionadas = []; // opcion elegida por pregunta (indice), -1 si no
let evaluadas = [];     // si la pregunta ya fue evaluada
let aciertos = 0;

function renderFiltros() {
  const selMc = document.getElementById("sel-mc");
  if (!selMc) return;
  const fase = document.getElementById("filtro-fase").value;
  const area = document.getElementById("filtro-area").value;
  const lista = MCS.filter((m) => (fase === "0" || m.fase == fase) && (area === "todas" || m.area === area));
  selMc.innerHTML = '<option value="">Elige un mini-control…</option>' +
    lista.map((m) => '<option value="' + m.id + '">' + esc(m.titulo) + ' (' + esc(m.semana) + ')</option>').join("");
  selMc.disabled = lista.length === 0;
  selMc.onchange = () => { if (selMc.value) iniciarMC(MCS.find((m) => m.id === selMc.value)); };
}

function iniciarMC(mc) {
  mcActual = mc;
  seleccionadas = new Array(mc.preguntas.length).fill(-1);
  evaluadas = new Array(mc.preguntas.length).fill(false);
  aciertos = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("clave-tutor").innerHTML = "";
  const cont = document.getElementById("preguntas");
  let html = '<h2>' + esc(mc.titulo) + ' <span style="font-size:10pt;color:#6B7280">(' + esc(mc.area) + ' · semana ' + esc(mc.semana) + ')</span></h2>';
  mc.preguntas.forEach((p, i) => {
    html += '<div class="pregunta" id="preg-' + i + '">' +
      '<div class="enun"><strong>' + (i + 1) + '.</strong> ' + esc(p[0]) + '</div>' +
      '<ul class="opciones">' +
      p[1].map((op, j) =>
        '<li><label data-i="' + i + '" data-j="' + j + '" onclick="elegir(this,' + i + ',' + j + ')">' +
        '<input type="radio" name="p' + i + '" value="' + j + '">' +
        '<span><strong>' + LETRA[j] + ')</strong> ' + esc(op) + '</span></label></li>'
      ).join("") +
      '</ul>' +
      '<div class="retro" id="retro-' + i + '"></div>' +
      '</div>';
  });
  cont.innerHTML = html;
  document.getElementById("contador").textContent = "0 / " + mc.preguntas.length;
}

function elegir(el, i, j) {
  if (evaluadas[i]) return; // pregunta ya respondida
  const correcta = mcActual.preguntas[i][2] === j;
  evaluadas[i] = true;
  seleccionadas[i] = j;
  if (correcta) aciertos++;

  // Marcar visualmente la opcion elegida
  const labels = el.parentElement.querySelectorAll("label");
  labels.forEach((l) => l.classList.add("deshabilitada"));
  el.classList.add(correcta ? "correcta" : "incorrecta");

  // Retroalimentacion
  const retro = document.getElementById("retro-" + i);
  if (correcta) {
    retro.textContent = "Correcto.";
    retro.className = "retro ok";
  } else {
    const letra = LETRA[mcActual.preguntas[i][2]];
    retro.textContent = ESTADO.modo === "tutor"
      ? "Incorrecto. La respuesta correcta era la " + letra + "."
      : "Incorrecto. Revísalo en la guía correspondiente.";
    retro.className = "retro mal";
  }

  document.getElementById("contador").textContent = aciertos + " / " + mc.preguntas.length;

  // Si respondio todas, mostrar resultado
  if (evaluadas.every((v) => v)) mostrarResultado();
}

function mostrarResultado() {
  const total = mcActual.preguntas.length;
  const pct = Math.round((aciertos / total) * 100);
  const cont = document.getElementById("resultado");
  const nivel = pct >= 75 ? "Fortaleza" : pct >= 50 ? "Parcial" : "Debilidad";
  cont.innerHTML = '<div class="resultado">' + aciertos + ' / ' + total + ' correctas (' + pct + '%) · ' + nivel + '</div>';
  // Clave completa solo en modo tutor
  if (ESTADO.modo === "tutor") {
    const cv = document.getElementById("clave-tutor");
    let c = '<div class="clave-tutor"><strong>Clave ' + esc(mcActual.titulo) + ':</strong> ';
    c += mcActual.preguntas.map((p, i) => (i + 1) + "-" + LETRA[p[2]]).join(", ");
    c += "</div>";
    cv.innerHTML = c;
  }
}

function onModoCambio() {
  // Si cambia el modo a mitad de un MC en curso, re-render para aplicar reglas de retroalimentacion
  if (mcActual) iniciarMC(mcActual);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("filtro-fase").onchange = renderFiltros;
  document.getElementById("filtro-area").onchange = renderFiltros;
  renderFiltros();
});