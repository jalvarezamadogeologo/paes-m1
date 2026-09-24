# Guía de estudio — Matemática 1 (PAES)

Material de apoyo del plan de entrenamiento M1 (`plan/entrenamiento-m1.md`). Elaborada 2026-09-24.

Contenido: base teórica de los conceptos fundamentales de las 6 áreas de la PAES M1 + ejercicios
clave resueltos por tema. Cada área indica su prioridad según el diagnóstico 2026-09-24.

## Cómo usar esta guía

1. Estudiar la base teórica de cada tema.
2. Resolver los ejercicios clave sin mirar la solución; después comparar con el desarrollo dado.
3. Marcar los temas que cuestan para retomarlos en la siguiente sesión (el plan usa repaso de 20 min).
4. La prioridad de estudio sigue el plan: **Geometría y Funciones primero** (debilidades), luego
   Números, y Proporcionalidad/Álgebra/Estadística se mantienen con práctica ligera.

## Mapa de estudio

| Área | Prioridad | Fase del plan | Temas |
| --- | --- | --- | --- |
| 1. Números | Consolidar | F1 (semanas 11-12), F2 (9-12) | Conjuntos numéricos, potencias y raíces, porcentajes |
| 2. Proporcionalidad | Fortaleza | F1-F2 (práctica mixta) | Razones y proporciones, directa e inversa, escalas, repartos y mezclas |
| 3. Álgebra | Fortaleza | F1-F2 (práctica mixta) | Expresiones, productos notables, ecuaciones, sistemas, valor absoluto |
| 4. Funciones | **Debilidad** | F1 (7-10), F2 (5-8) | Concepto, lineal y afín, cuadrática, exponencial, modelación |
| 5. Geometría | **Debilidad crítica** | F1 (1-6), F2 (1-4) | Ángulos y triángulos, Pitágoras, semejanza, áreas, circunferencia, trigonometría, volúmenes |
| 6. Estadística | Fortaleza | F1-F2 (práctica mixta) | Medidas de tendencia central, probabilidad, probabilidad compuesta, promedio ponderado |

---

## 1. Números y operaciones

Prioridad: **consolidar** (50% en el diagnóstico). Es la base de cálculo de todas las demás áreas.

### 1.1 Conjuntos numéricos

- **Naturales (N):** 1, 2, 3, ... (en algunos textos incluyen el 0).
- **Enteros (Z):** ..., −2, −1, 0, 1, 2, ...
- **Racionales (Q):** números que se escriben como fracción a/b con a, b enteros y b ≠ 0. Incluyen
  los decimales finitos (0,75 = 3/4) y los decimales periódicos (0,333... = 1/3).
- **Irracionales (I):** números que no son fracción; su desarrollo decimal es infinito y no
  periódico. Ejemplos: √2, √3, √5, π.
- **Reales (R):** unión de racionales e irracionales.

Idea clave: **la raíz cuadrada de un número que no es un cuadrado perfecto es irracional**
(√8 = 2√2 es irracional). Un decimal finito o periódico siempre es racional.

### 1.2 Potencias y raíces

Propiedades de las potencias (con a ≠ 0 cuando hace falta):

- a^m · a^n = a^(m+n)
- a^m / a^n = a^(m−n)
- (a^m)^n = a^(m·n)
- (a·b)^n = a^n · b^n
- a^0 = 1
- a^(−n) = 1/a^n
- a^(1/n) = ⁿ√a (raíz enésima)

Ejemplos:
- (√16)^(−2) = (4)^(−2) = 1/4² = 1/16
- √8 = √(4·2) = √4 · √2 = 2√2

### 1.3 Porcentajes

- Porcentaje = fracción de denominador 100: 25% = 25/100 = 0,25.
- Aumentar un valor en p% equivale a multiplicarlo por (1 + p/100).
- Disminuir un valor en p% equivale a multiplicarlo por (1 − p/100).
- Porcentajes encadenados NO se suman: aumentar 20% y luego disminuir 20% NO vuelve al valor
  original, porque el segundo porcentaje se aplica sobre el valor ya modificado.

Ejemplo: si un precio sube 20% y luego baja 20%: 1,20 · 0,80 = 0,96 → queda en 96% del original
(disminuyó 4%).

### Ejercicios clave — Números

**E1 (diagnóstico P1).** Un producto cuesta $X. Si su precio aumenta 20% y luego disminuye 20%,
¿qué ocurre con el precio final?

Solución: precio final = X · 1,20 · 0,80 = X · 0,96. Queda en 96% del original: **disminuye 4%**.

**E2 (diagnóstico P2).** Calcular (√16)^(−2) · 8.

Solución: (√16)^(−2) = 4^(−2) = 1/16. Luego 1/16 · 8 = 8/16 = **1/2**.

**E3 (diagnóstico P3).** Ordenar de menor a mayor: 2/3, 0,7, 5/7, 3/4.

Solución: 2/3 ≈ 0,6667; 0,7 = 0,7000; 5/7 ≈ 0,7143; 3/4 = 0,7500.
Orden: **2/3 < 0,7 < 5/7 < 3/4**.

**E4 (diagnóstico P4).** ¿Cuál de los siguientes números es irracional? √8, 0,5, 1/3, 0,75.

Solución: √8 = 2√2 no es fracción → **irracional**. Los demás son racionales (0,5 = 1/2;
1/3 es racional; 0,75 = 3/4).

**E5 (extra).** Un valor de $40.000 sube 15% y luego baja 10%. ¿Cuál es el valor final?

Solución: 40.000 · 1,15 · 0,90 = 40.000 · 1,035 = **$41.400**.

**E6 (extra).** Calcular 2³ · 2⁵ / 2⁶.

Solución: 2^(3+5−6) = 2² = **4**.

---

## 2. Proporcionalidad

Prioridad: **fortaleza** (75%). Mantener con práctica ligera; elevar a dificultad alta en F2.

### 2.1 Razones y proporciones

- Razón entre a y b: a/b (o a:b).
- Proporción: igualdad de dos razones, a/b = c/d. Propiedad fundamental: **a·d = b·c**.
- Reparto proporcional: si A y B se reparten en razón k : m, entonces A = k·t y B = m·t con t común.

### 2.2 Proporcionalidad directa e inversa

- **Directa:** y = k·x (si x se duplica, y se duplica). La razón y/x es constante.
- **Inversa:** y = k/x (si x se duplica, y se reduce a la mitad). El producto x·y es constante.
- Regla de tres simple y compuesta: ordenar los datos, identificar si cada relación es directa o
  inversa, y despejar la incógnita.

### 2.3 Escalas y unidades

- Escala de un mapa/plano: 1 : E significa que 1 unidad del dibujo representa E unidades reales.
- Las **áreas** escalan con el cuadrado de la razón de semejanza: si la escala lineal es 5/8, el
  área se multiplica por (5/8)².
- Superficies: 1 m² = 10.000 cm²; 1 km² = 1.000.000 m².

### 2.4 Mezclas y promedios ponderados

- Promedio de una mezcla: suma de (cantidad · valor) dividida por la cantidad total.
- Ejemplo: 3 kg al 10% y 2 kg al 25% → (0,10·3 + 0,25·2)/5 = 0,16 → 16%.

### Ejercicios clave — Proporcionalidad

**E7 (diagnóstico P5).** 5 máquinas producen 1.200 piezas en 4 horas. ¿Cuántas horas tardan
4 máquinas en producir 1.500 piezas (mismo ritmo)?

Solución: es regla de tres compuesta. Máquinas y horas son inversamente proporcionales; piezas y
horas son directamente proporcionales:
t = 4 h · (5/4) · (1.500/1.200) = 4 · 1,25 · 1,25 = 6,25 h = **6 h 15 min**.

**E8 (diagnóstico P6).** Se mezclan 3 kg de una aleación con 10% de cobre y 2 kg con 25% de cobre.
¿Qué porcentaje de cobre tiene la mezcla?

Solución: cobre total = 0,10·3 + 0,25·2 = 0,3 + 0,5 = 0,8 kg sobre 5 kg → 0,8/5 = 0,16 = **16%**.

**E9 (diagnóstico P7).** Un terreno rectangular de 40 m × 25 m se representa en un plano a escala
1:100. ¿Cuál es el área en el plano?

Solución: las medidas en el plano son 40/100 = 0,4 m y 25/100 = 0,25 m → área = 0,4 · 0,25 =
0,1 m² = 1.000 cm². El área real es 1.000 m² y la escala de área es (1/100)² = 1/10.000:
1.000 m² / 10.000 = 0,1 m² = **1.000 cm²**. (Respuesta en cm².)

**E10 (diagnóstico P8).** En un grupo, hombres y mujeres están en razón 3:2. Si entran 2 mujeres,
la nueva razón es 5:4. ¿Cuántas mujeres hay?

Solución: hombres = 3k, mujeres = 2k. Nueva razón: (3k)/(2k+2) = 5/4 →
4·3k = 5·(2k+2) → 12k = 10k + 10 → 2k = 10 → k = 5. Mujeres = 2k = **15**.

**E11 (extra).** 3 obreros construyen una muralla en 12 días. ¿Cuántos días tardan 6 obreros?

Solución: inversamente proporcional: t = 12 · (3/6) = **6 días**.

**E12 (extra).** Un mapa usa escala 1:50.000. Dos pueblos distan 8 cm en el mapa. ¿Distancia real?

Solución: 8 cm · 50.000 = 400.000 cm = **4 km**.

---

## 3. Álgebra

Prioridad: **fortaleza** (75%). Mantener; elevar con dificultad alta en F2.

### 3.1 Expresiones algebraicas y productos notables

Productos notables (los más usados en la PAES):

- (a + b)² = a² + 2ab + b²
- (a − b)² = a² − 2ab + b²
- (a + b)(a − b) = a² − b²
- (x + a)(x + b) = x² + (a+b)x + ab

### 3.2 Ecuaciones

- Ecuación de primer grado: despejar la incógnita aplicando operaciones inversas.
- Ecuación de segundo grado ax² + bx + c = 0: factorización o fórmula general
  x = [−b ± √(b² − 4ac)] / 2a.
- Problemas de planteo: identificar la incógnita, traducir el enunciado a una ecuación y verificar
  que la solución cumpla las condiciones (por ejemplo, un lado de un cuadrado: (x+3)² = x² + 69).

### 3.3 Sistemas de ecuaciones

- Dos ecuaciones con dos incógnitas. Métodos: sustitución, igualación, reducción.
- Ejemplo típico: suma y producto de dos números (a+b = 17, a·b = 60 → 12 y 5).
- Los números que cumplen x+y = S y x·y = P son las soluciones de t² − S·t + P = 0.

### 3.4 Valor absoluto e inecuaciones

- |a| = a si a ≥ 0; |a| = −a si a < 0.
- |x| ≤ b equivale a −b ≤ x ≤ b.
- |x − a| ≤ b equivale a a − b ≤ x ≤ a + b (intervalo [a−b, a+b]).
- |x − a| ≥ b equivale a x ≤ a−b o x ≥ a+b.

### Ejercicios clave — Álgebra

**E13 (diagnóstico P9).** El lado de un cuadrado aumenta 3 cm y su área aumenta 69 cm². ¿Cuál era
el lado original?

Solución: lado original x. (x+3)² = x² + 69 → x² + 6x + 9 = x² + 69 → 6x = 60 → **x = 10 cm**.

**E14 (diagnóstico P10).** La suma de dos números es 17 y su producto es 60. ¿Cuáles son?

Solución: t² − 17t + 60 = 0 → (t − 12)(t − 5) = 0 → **12 y 5**.

**E15 (diagnóstico P11).** El promedio de dos números es 20 y su diferencia es 14. ¿Cuál es el mayor?

Solución: (a+b)/2 = 20 → a+b = 40; a−b = 14. Sumando: 2a = 54 → a = 27; b = 13. El mayor es **27**.

**E16 (diagnóstico P12).** Resolver |x − 2| ≤ 5.

Solución: −5 ≤ x−2 ≤ 5 → sumando 2: −3 ≤ x ≤ 7 → intervalo **[−3, 7]**.

**E17 (extra).** Resolver x² − 5x + 6 = 0.

Solución: (x − 2)(x − 3) = 0 → **x = 2 o x = 3**.

**E18 (extra).** Resolver el sistema: x + y = 10; x − y = 4.

Solución: sumando: 2x = 14 → x = 7; y = 3. **Solución: (7, 3)**.

---

## 4. Funciones

Prioridad: **debilidad clara** (25%). Refuerzo prioritario desde la base (F1 semanas 7-10).

### 4.1 Concepto de función

- Una función asigna a cada valor de entrada (variable independiente x) exactamente un valor de
  salida (variable dependiente y = f(x)).
- Dominio: valores que puede tomar x. Recorrido: valores que puede tomar f(x).
- Se representa con tabla, gráfico, fórmula o descripción verbal.

### 4.2 Función lineal y afín

- **Lineal:** f(x) = k·x (pasa por el origen). Proporcionalidad directa.
- **Afín:** f(x) = mx + n. m = pendiente, n = intersección con el eje Y (ordenada al origen).
- Pendiente entre dos puntos (x1, y1) y (x2, y2): m = (y2 − y1)/(x2 − x1).
- Si m > 0 crece; si m < 0 decrece.
- Cálculo de valores: si f es afín con pendiente m, f(x2) = f(x1) + m·(x2 − x1).

### 4.3 Función cuadrática

- f(x) = ax² + bx + c, con a ≠ 0.
- Gráfica: parábola. Si a > 0 abre hacia arriba (mínimo); si a < 0 abre hacia abajo (máximo).
- Vértice: x_v = −b/(2a); el valor es f(x_v). Es el eje de simetría.
- Raíces: puntos donde la parábola corta el eje X (f(x) = 0).
- Modelación de movimiento: h(t) = −5t² + v₀·t + h₀ (altura de un proyectil en metros con t en
  segundos; el coeficiente −5 viene de g/2 ≈ 4,9).

### 4.4 Función exponencial

- f(x) = a · b^x, con b > 0 y b ≠ 1.
- Si b > 1 crece (crecimiento exponencial); si 0 < b < 1 decrece.
- Se usa para duplicaciones: si una cantidad se duplica cada período, tras n períodos vale
  cantidad · 2^n.

### 4.5 Modelación

- Traducir un enunciado a una fórmula: identificar qué varía, la constante inicial y la tasa de
  cambio. Ejemplo: costo fijo + costo por unidad → C(x) = 4.000 + 600x.

### Ejercicios clave — Funciones

**E19 (diagnóstico P13).** Una empresa cobra $4.000 de cargo fijo y $600 por hora de servicio.
Modelar el costo C(x) para x horas.

Solución: **C(x) = 4.000 + 600x**.

**E20 (diagnóstico P14).** Un proyectil tiene altura h(t) = −5t² + 40t + 0 (metros, t segundos).
¿Cuál es la altura máxima?

Solución: vértice en t = −b/(2a) = −40/(2·(−5)) = 4 s. h(4) = −5·16 + 40·4 = −80 + 160 = **80 m**.

**E21 (diagnóstico P15).** Una bacteria se duplica cada hora. Si al inicio hay 100 bacterias, ¿cuántas
hay tras 4 horas?

Solución: 100 · 2⁴ = 100 · 16 = **1.600**.

**E22 (diagnóstico P16).** f es una función afín con f(3) = 15 y pendiente 5. Calcular f(8).

Solución: f(8) = f(3) + 5·(8−3) = 15 + 25 = **40**.

**E23 (extra).** Encontrar la pendiente de la recta que pasa por (1, 3) y (4, 9).

Solución: m = (9−3)/(4−1) = 6/3 = **2**.

**E24 (extra).** Un valor de $200 crece 50% cada año. ¿Cuánto vale tras 3 años?

Solución: 200 · (1,5)³ = 200 · 3,375 = **$675**.

---

## 5. Geometría

Prioridad: **debilidad crítica** (0%). Refuerzo prioritario desde la base (F1 semanas 1-6).

### 5.1 Ángulos y triángulos

- La suma de los ángulos interiores de un triángulo es 180°.
- Ángulos entre paralelas cortadas por una transversal: alternos internos y correspondientes son
  iguales; conjugados suman 180°.
- Tipos: equilátero (3 lados iguales, 3 ángulos de 60°), isósceles (2 lados iguales, ángulos
  basales iguales), escaleno.
- Triángulo rectángulo: tiene un ángulo de 90° (catetos e hipotenusa).
- Congruencia: misma forma y tamaño. Semejanza: misma forma (ángulos iguales), lados proporcionales.

### 5.2 Teorema de Pitágoras

En un triángulo rectángulo: **hipotenusa² = cateto1² + cateto2²**.

Ejemplo: catetos 6 y 8 → hipotenusa = √(36+64) = 10.

### 5.3 Semejanza y escalas

- Si dos figuras son semejantes con razón de semejanza k, los lados se multiplican por k y las
  **áreas por k²**.
- Aplicación a planos y maquetas: medir en el dibujo y multiplicar por el factor de escala.

### 5.4 Áreas y perímetros

- Cuadrado: A = lado². Rectángulo: A = base·altura. Triángulo: A = base·altura/2.
- Círculo: A = π·r²; circunferencia (perímetro): P = 2πr.
- Polígonos: descomponer en triángulos o usar fórmulas.

### 5.5 Circunferencia

- Cuerda: segmento que une dos puntos de la circunferencia. El diámetro es la mayor cuerda.
- La distancia del centro a una cuerda y la mitad de la cuerda forman un triángulo rectángulo con
  el radio (Pitágoras).
- Sector circular: área = (θ/360°)·π·r² (θ en grados), o (θ/2)·r² con θ en radianes.
- Perímetro del sector = 2r + arco.

### 5.6 Trigonometría básica (triángulo rectángulo)

- sen(α) = cateto opuesto / hipotenusa
- cos(α) = cateto adyacente / hipotenusa
- tan(α) = cateto opuesto / cateto adyacente
- Valores notables: sen 30° = 1/2; tan 45° = 1; tan 60° = √3; sen 60° = √3/2.
- Aplicación: altura h = distancia · tan(ángulo de elevación).

### 5.7 Cuerpos geométricos (volúmenes)

- Prisma / cilindro: V = área de la base · altura.
- Pirámide / cono: V = (área de la base · altura)/3.
- Esfera: V = (4/3)π·r³.

### Ejercicios clave — Geometría

**E25 (diagnóstico P17).** Desde un punto a 30 m de un árbol, el ángulo de elevación a la copa es
60°. ¿Cuál es la altura del árbol?

Solución: tan(60°) = h/30 → h = 30·tan(60°) = 30·√3 = **30√3 m**.

**E26 (diagnóstico P18).** Un rectángulo de 12 cm × 8 cm se reduce con factor de escala 5/8.
¿Cuánto mide la base en el dibujo?

Solución: base = 12 · 5/8 = **7,5 cm**.

**E27 (diagnóstico P19).** Una figura de área 60 m² contiene un cuarto de círculo de radio 4 m.
Calcular el área de la región restante (la sombreada).

Solución: área del cuarto de círculo = π·4²/4 = 4π. Área restante = 60 − 4π = **60 − 4π m²**.

**E28 (diagnóstico P20).** En una circunferencia de radio 10 cm, una cuerda dista 6 cm del centro.
¿Cuánto mide la cuerda?

Solución: mitad de la cuerda = √(10² − 6²) = √64 = 8 cm → cuerda completa = **16 cm**.

**E29 (extra).** Calcular la hipotenusa de un triángulo rectángulo con catetos 5 y 12.

Solución: √(25 + 144) = √169 = **13**.

**E30 (extra).** Un cono tiene base de radio 3 cm y altura 9 cm. Calcular su volumen (π ≈ 3).

Solución: V = (π·3²·9)/3 = (π·9·9)/3 = 27π ≈ **81 cm³** (con π ≈ 3).

---

## 6. Estadística y probabilidad

Prioridad: **fortaleza** (75%). Mantener; elevar a dificultad alta en F2.

### 6.1 Medidas de tendencia central

- **Media (promedio):** suma de datos / cantidad de datos.
- **Mediana:** valor central al ordenar los datos (si hay un número par de datos, promedio de los
  dos centrales).
- **Moda:** dato que más se repite.
- La media es sensible a valores extremos: al agregar datos altos, la media sube más que la
  mediana; por eso conviene analizar ambas.

### 6.2 Probabilidad clásica

- P(evento) = casos favorables / casos totales (todos igualmente probables).
- Espacio muestral de dos dados: 36 resultados.
- Suma de eventos disjuntos: P(A o B) = P(A) + P(B).

### 6.3 Probabilidad compuesta

- **Con reposición** (independientes): P(A y B) = P(A) · P(B).
- **Sin reposición** (dependientes): la segunda probabilidad cambia porque el total y la composición
  se modifican. Ejemplo: sacar 2 bolas sin reposición de una urna con 4 rojas y 3 azules:
  P(2 rojas) = (4/7)·(3/6) = 2/7.

### 6.4 Promedio ponderado

- Cuando los grupos tienen distinto tamaño, el promedio total es
  (n₁·x̄₁ + n₂·x̄₂) / (n₁ + n₂).
- Ejemplo: 15 alumnos con promedio 5,2 y 5 con 4,0 → (15·5,2 + 5·4,0)/20 = 4,9.

### Ejercicios clave — Estadística

**E31 (diagnóstico P21).** Datos: 12, 14, 16, 20, 28. Comparar media y mediana.

Solución: media = (12+14+16+20+28)/5 = 90/5 = 18. Mediana (dato central ordenado) = 16.
La media es mayor: el 28 "jala" la media hacia arriba. **Media 18, mediana 16; la media sube más.**

**E32 (diagnóstico P22).** Se lanzan dos dados. ¿Probabilidad de que la suma sea 8?

Solución: pares que suman 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 de 36 → **5/36**.

**E33 (diagnóstico P23).** Una urna tiene 4 bolas rojas y 3 azules. Se sacan dos bolas sin
reposición. ¿Probabilidad de que ambas sean rojas?

Solución: (4/7)·(3/6) = 12/42 = **2/7**.

**E34 (diagnóstico P24).** 15 estudiantes promedian 5,2 y 5 promedian 4,0. ¿Promedio del grupo?

Solución: (15·5,2 + 5·4,0)/20 = (78 + 20)/20 = 98/20 = **4,9**.

**E35 (extra).** En una caja hay 3 fichas verdes y 2 rojas. Se saca una al azar. ¿Probabilidad de
que sea roja?

Solución: 2/5 = **0,4 (40%)**.

**E36 (extra).** Lanzar una moneda 3 veces. ¿Probabilidad de exactamente 2 caras?

Solución: resultados con 2 caras: CCL, CLC, LCC → 3 de 8 → **3/8**.

---

## Notas finales

- Los ejercicios marcados "(diagnóstico P#)" corresponden a las preguntas de la prueba diagnóstica
  M1 2026-09-24; su solución coincide con la clave oficial (`diagnosticos/m1-2026-09/correccion_m1.md`).
- Verificación numérica de todos los ejercicios: realizada por script el 2026-09-24.
- Esta guía se complementa con el plan de entrenamiento (`plan/entrenamiento-m1.md`): el orden de
  estudio semanal y los calendarios de medición están allí.