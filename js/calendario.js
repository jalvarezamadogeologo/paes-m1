// ============================================================
// PAES M1 — Calendario: render de las 62 semanas por fase
// ============================================================

function renderCalendario() {
  const cont = document.getElementById("calendario");
  const actual = semanaActual();
  let html = "";
  let faseAnterior = null;
  let filas = [];

  const cerrarTabla = (fase) => {
    if (filas.length === 0) return;
    html += '<h3>' + esc(NOMBRE_FASE[fase] || fase) + '</h3>';
    html += '<table><thead><tr><th style="width:8%">Sem</th><th style="width:22%">Fechas</th><th>Contenido</th><th style="width:24%">Medición</th></tr></thead><tbody>';
    html += filas.join("");
    html += '</tbody></table>';
    filas = [];
  };

  SEMANAS.forEach((s, i) => {
    const n = i + 1;
    if (s.fase !== faseAnterior) {
      if (faseAnterior !== null) cerrarTabla(faseAnterior);
      faseAnterior = s.fase;
    }
    const cls = s.fase === "P" ? ' class="pausa"' : (n === actual ? ' class="semana-actual"' : "");
    const etiqueta = s.fase === "P" ? "W" + n : "W" + n;
    filas.push(
      '<tr' + cls + '>' +
      '<td>' + etiqueta + (n === actual ? ' <span title="Semana actual">◄</span>' : "") + '</td>' +
      '<td>' + fechasSemana(n) + '</td>' +
      '<td>' + esc(s.c) + '</td>' +
      '<td>' + esc(s.m || "—") + '</td>' +
      '</tr>'
    );
  });
  cerrarTabla(faseAnterior);

  cont.innerHTML = html;

  // Mostrar la semana actual al inicio
  if (actual > 0) {
    const aviso = document.getElementById("aviso-actual");
    const s = SEMANAS[actual - 1];
    aviso.innerHTML = actual >= 1 && actual <= 62
      ? '<strong>Estás en W' + actual + ' (' + fechasSemana(actual) + '):</strong> ' + esc(s.c) +
        (s.m ? ' · <em>' + esc(s.m) + '</em>' : '') + '.'
      : "";
  }
}

document.addEventListener("DOMContentLoaded", renderCalendario);