# PAES — Preparación de estudio (admisión 2028)

Proyecto personal de Javier: preparación para la Prueba de Acceso a la Educación Superior
(PAES) de un familiar cercano.

## Contexto

- **Beneficiario:** familiar cercano de Javier (la estudiante, sin nombre; cursa 3° medio en 2026,
  egresa de 4° medio a fines de 2027).
- **Rendición:** PAES regular, noviembre-diciembre 2027 (admisión 2028).
- **Horizonte de preparación:** ~14 meses desde sep 2026.
- **Pruebas a rendir:**
  - Competencia Lectora (obligatoria).
  - Competencia Matemática 1 (obligatoria).
  - Ciencias (electiva: Biología, Física, Química).
  - Matemática 2 (M2): **no se rinde** — no es requisito para Medicina en la U. de Chile.
- **Carrera objetivo:** Medicina — Universidad de Chile (única universidad de interés).
- **Material:** Preu/curso pagado + material propio existente (no relevante para el seguimiento;
  inventario opcional en `material/indice.md`).

## Decisión clave verificada

- **M2 no es necesaria:** verificado 2026-09-21 — Medicina UCH (admisión 2026) exige solo
  Lectura, M1 y Ciencias (ponderaciones: NEM 10%, Ranking 20%, Lectura 15%, M1 20%, Ciencias 35%).
  Detalle en `metas/carreras.md`.

## Metas de puntaje (M1)

- **2026 (referencia, medida en ensayos oficiales DEMRE):** 800 puntos. La estudiante no rinde
  la PAES 2026.
- **2027 (rendición oficial, admisión 2028):** 1000 puntos.

Nota técnica sobre la escala: la PAES se puntúa de 100 a 1000, con media ~500 y desviación
estándar ~100. 1000 es el tope absoluto de la escala (solo lo alcanzan puntajes extremos de la
distribución); 800 ya está en el percentil superior. El corte ponderado de Medicina UCH 2026 fue
931,15.

## Puntos pendientes

- [x] Aplicar la prueba diagnóstica M1 (`diagnosticos/m1-2026-09/prueba_m1_diagnostica.docx`)
      y corregir con `correccion_m1.md` (clave + matriz por área + interpretación). Resultado
      2026-09-24: 12/24 bruto (50%). Perfil: Geometría 0% y Funciones 25% como debilidades
      claras; Números 50% parcial; Proporcionalidad, Álgebra y Estadística 75% (fortalezas).
      Registrado en `seguimiento/ensayos.md` y `diagnosticos/m1-2026-09/resultado_2026-09-24.md`.
- [x] Elaborar el plan de entrenamiento M1 con los resultados del diagnóstico
      (`plan/entrenamiento-m1.md`): 2 h semanales, fases hasta nov 2027, hito ensayo DEMRE dic
      2026 (meta 800) y PAES 2027 (meta 1000), calendario de medición cada 2-6 semanas.
- [ ] Fechas oficiales DEMRE 2027 cuando se publiquen.
- [ ] Ponderaciones y requisitos UCH para la admisión 2028 cuando se publiquen (revalidar M2).

## Estructura

- `metas/carreras.md` — universidades de interés, requisitos, ponderaciones.
- `plan/calendario.md` — hitos del proceso de admisión 2027-2028 y planificación.
- `plan/calendario-detallado.md` — calendario semana a semana (62 semanas, fases, contenidos,
  mediciones e hitos; pausa de vacaciones 18-ene al 14-feb-2027).
- `plan/entrenamiento-m1.md` — plan de entrenamiento M1 (2 h semanales, fases, medición).
- `plan/guia-estudio-m1.md` — guía de estudio por área: base teórica + ejercicios clave resueltos
  (36 ejercicios, alineada con el diagnóstico y el plan).
- `plan/guias/f1.md` … `f5.md` — guías por fase: F1 y F2 con teoría y ejercicios por semana
  (contenido nuevo, 44 ejercicios verificados); F3-F5 como protocolos de ensayo, refuerzo y
  estrategia de examen.
- `plan/guias/f1.pdf` … `f5.pdf` — versiones PDF de las guías por fase (generadas desde los
  `.html` con Chrome headless; f1: 5 págs, f2: 4 págs, f3-f5: 1-2 págs).
- `plan/guia-estudio-m1.pdf` — versión PDF de la guía (8 págs; generada desde el `.html` con Chrome).
- `plan/guia-estudio-m1.html` — fuente visual del PDF de la guía (regenerable).
- `plan/entrenamiento-m1.pdf` — versión PDF del plan (generada desde el `.html` con Chrome headless).
- `plan/entrenamiento-m1.html` — fuente visual del PDF (regenerable; editar y convertir con Chrome).
- `seguimiento/ensayos.md` — registro de ensayos y evolución de puntajes.
- `seguimiento/sistema.md` — sistema de guía semanal: roles, protocolo, reglas de ajuste y
  formato de reporte de hito.
- `seguimiento/sesiones.md` — bitácora semanal (sesiones hechas, temas, dificultades, MC/ensayos).
- `seguimiento/perfil-areas.md` — evolución del % de logro por área tras cada medición.
- `material/mc/mc-f1.md`, `mc-f2.md`, `mc-f3f4.md` — banco de mini-controles (13 MC × 10
  preguntas con clave, claves verificadas numéricamente) para las mediciones del plan.
- `material/indice.md` — inventario del material de estudio (Preu, guías, libros, ensayos).
- `diagnosticos/m1-2026-09/` — prueba diagnóstica M1 (docx generado por `generar_prueba.py`)
  + clave de corrección (`correccion_m1.md`) + resultado corregido (`resultado_2026-09-24.md`).

## Decisiones

- 2026-09-21: inicio del proyecto; rendición PAES nov-dic 2027 (admisión 2028); pruebas Lectura,
  Matemática 1 y Ciencias; carrera objetivo Medicina.
- 2026-09-21: único destino de interés = Universidad de Chile (Medicina). No se rendirá M2
  (verificado: UCH no la exige ni pondera para Medicina). Estudiante sin nombre. Preu no relevante
  para el seguimiento del proyecto.
- 2026-09-21: la estudiante cursa 3° medio (2026); egresa de 4° medio a fines de 2027, coincidiendo
  con la rendición de la PAES regular (nov-dic 2027).
- 2026-09-21: metas de puntaje M1: 800 (2026, referencia) y 1000 (2027, rendición oficial).
- 2026-09-24: diagnóstico M1 aplicado y corregido: 12/24 bruto (50%). Prioridades de
  entrenamiento: Geometría (0%) y Funciones (25%) como refuerzo prioritario; Números (50%) a
  consolidar; Proporcionalidad, Álgebra y Estadística (75%) a mantener.
- 2026-09-24: plan de entrenamiento M1 definido: 2 h semanales; metas 800 (ensayos oficiales
  DEMRE 2026) y 1000 (PAES nov-dic 2027). Documentado en `plan/entrenamiento-m1.md`.
- 2026-09-24: la estudiante NO rinde la PAES 2026; su única rendición oficial es la PAES regular
  de nov-dic 2027 (admisión 2028). La meta de 800 para 2026 se mide en ensayos oficiales DEMRE.
- 2026-09-24: sitio público en GitHub Pages con el material educativo (repo `paes-m1`,
  https://jalvarezamadogeologo.github.io/paes-m1/). Solo contenido educativo genérico; el
  seguimiento (`seguimiento/`) y el diagnóstico (`diagnosticos/`) quedan SOLO en local por
  privacidad (excluidos via `.gitignore`).