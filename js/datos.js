// ============================================================
// PAES M1 — Datos de la aplicacion (preguntas, calendario)
// Claves verificadas numericamente el 2026-09-24.
// ============================================================

// Clave del modo tutor (proteccion simple, no es seguridad real).
// Para cambiarla, editar este valor. Se la comunica el tutor a la estudiante.
const TUTOR_KEY = "paes-m1-2027";

// Fecha de inicio del programa (lunes 28/09/2026). Mes 8 = septiembre.
const FECHA_INICIO = new Date(2026, 8, 28);

// Indices: A=0, B=1, C=2, D=3, E=4
const MCS = [
  { id: "mc1", fase: 1, area: "Geometría", titulo: "MC1 · Geometría básica", semana: "W6",
    preguntas: [
      ["Dos ángulos son complementarios y uno mide el doble del otro. ¿Cuánto mide el mayor?", ["30°", "45°", "60°", "90°", "120°"], 2],
      ["Un ángulo mide 35°. ¿Cuánto mide su suplementario?", ["35°", "55°", "145°", "155°", "325°"], 2],
      ["Los ángulos de un triángulo están en razón 1:2:3. ¿Cuánto mide cada uno?", ["30°, 60°, 90°", "20°, 40°, 60°", "40°, 60°, 80°", "45°, 45°, 90°", "36°, 72°, 72°"], 0],
      ["Un triángulo isósceles tiene un ángulo basal de 40°. ¿Cuánto mide el ángulo del vértice?", ["40°", "80°", "100°", "120°", "140°"], 2],
      ["Un triángulo de lados 3, 4 y 5 es semejante a otro cuyo lado mayor mide 15. ¿Cuánto miden los otros lados del segundo?", ["6 y 8", "9 y 12", "10 y 12", "6 y 10", "9 y 10"], 1],
      ["Dos rectángulos son semejantes con razón 2. El menor mide 4 × 3. ¿Cuál es el área del mayor?", ["24", "36", "48", "60", "72"], 2],
      ["Una escalera de 13 m apoyada en una pared alcanza 12 m de altura. ¿A qué distancia de la pared está la base?", ["1 m", "5 m", "7 m", "12 m", "17,7 m"], 1],
      ["Los catetos de un triángulo rectángulo miden 6 y 8. ¿Cuánto mide la hipotenusa?", ["10", "12", "14", "48", "100"], 0],
      ["Un rectángulo tiene área 48 cm² y largo 8 cm. ¿Cuál es su perímetro?", ["22 cm", "24 cm", "28 cm", "32 cm", "40 cm"], 2],
      ["Calcular el área de un círculo de radio 3.", ["6π", "9π", "12π", "18π", "27π"], 1]
    ] },
  { id: "mc2", fase: 1, area: "Funciones", titulo: "MC2 · Funciones básicas", semana: "W10",
    preguntas: [
      ["Si f(x) = 3x − 2, ¿cuánto vale f(5)?", ["13", "15", "17", "11", "9"], 0],
      ["Si f(x) = x² + 1, ¿cuánto vale f(−2)?", ["3", "5", "4", "1", "−3"], 1],
      ["La recta pasa por (0, −1) y (2, 5). ¿Cuál es su ecuación?", ["y = 2x − 1", "y = 3x − 1", "y = 3x + 1", "y = 2x + 1", "y = −3x − 1"], 1],
      ["f es una función afín con f(3) = 15 y pendiente 5. ¿Cuánto vale f(8)?", ["35", "40", "45", "50", "55"], 1],
      ["¿Cuáles son las raíces de f(x) = x² − 4x + 3?", ["1 y 3", "−1 y 3", "1 y −3", "−1 y −3", "2 y 2"], 0],
      ["¿Cuál es el vértice de f(x) = x² − 4x + 3?", ["(2, −1)", "(2, 1)", "(−2, −1)", "(4, 3)", "(0, 3)"], 0],
      ["Un proyectil tiene altura h(t) = −5t² + 40t (metros, t segundos). ¿Cuál es la altura máxima?", ["40 m", "60 m", "80 m", "100 m", "160 m"], 2],
      ["Un taxi cobra $300 de bajada y $250 por km. ¿Cuánto cuesta un viaje de 8 km?", ["$2.000", "$2.300", "$2.500", "$3.000", "$3.300"], 1],
      ["El costo de fabricar x artículos es C(x) = 2.000 + 500x. ¿Cuánto cuesta fabricar 12?", ["$6.000", "$7.000", "$8.000", "$9.000", "$10.000"], 2],
      ["Si f(x) = 2x + 5, ¿para qué x se cumple f(x) = 21?", ["6", "7", "8", "9", "10"], 2]
    ] },
  { id: "mc3", fase: 1, area: "Números", titulo: "MC3 · Números", semana: "W12",
    preguntas: [
      ["Calcular (2/3 + 1/4) · 12.", ["9", "10", "11", "12", "14"], 2],
      ["¿Qué porcentaje de 250 es 40?", ["10%", "12%", "14%", "16%", "20%"], 3],
      ["Simplificar √50.", ["5√2", "2√5", "25√2", "10√5", "5√10"], 0],
      ["Calcular 3⁻² · 3⁴.", ["3", "9", "27", "81", "1/9"], 1],
      ["Un precio sube 20% y luego baja 20%. ¿Qué ocurre?", ["Sube 4%", "No cambia", "Baja 4%", "Baja 2%", "Sube 2%"], 2],
      ["Calcular (√16)⁻² · 8.", ["1", "1/2", "2", "4", "8"], 1],
      ["Ordenar de menor a mayor: 2/3, 0,7, 5/7, 3/4.", ["2/3 < 0,7 < 5/7 < 3/4", "0,7 < 2/3 < 5/7 < 3/4", "2/3 < 5/7 < 0,7 < 3/4", "3/4 < 5/7 < 0,7 < 2/3", "0,7 < 5/7 < 2/3 < 3/4"], 0],
      ["¿Cuál de los siguientes números es irracional?", ["0,5", "1/3", "√8", "0,75", "2"], 2],
      ["Un valor de $40.000 sube 15% y luego baja 10%. ¿Cuál es el valor final?", ["$40.000", "$41.000", "$41.400", "$42.000", "$45.000"], 2],
      ["Calcular 2³ · 2⁵ / 2⁶.", ["2", "4", "8", "16", "32"], 1]
    ] },
  { id: "mc4", fase: 2, area: "Geometría", titulo: "MC4 · Geometría avanzada", semana: "W22",
    preguntas: [
      ["En una circunferencia de radio 13, una cuerda dista 5 del centro. ¿Cuánto mide la cuerda?", ["12", "18", "24", "26", "30"], 2],
      ["Un sector de 90° en un círculo de radio 6. ¿Cuál es su área?", ["6π", "9π", "12π", "18π", "36π"], 1],
      ["En un triángulo rectángulo, el cateto opuesto a α mide 6 y la hipotenusa 10. ¿Cuánto vale tan(α)?", ["0,5", "0,6", "0,75", "0,8", "1,25"], 2],
      ["Desde un punto a 30 m de un árbol, el ángulo de elevación a la copa es 60°. ¿Cuál es la altura del árbol?", ["30 m", "30√2 m", "30√3 m", "15√3 m", "60 m"], 2],
      ["Un cilindro tiene radio 4 y altura 10. ¿Cuál es su volumen (π ≈ 3)?", ["240", "360", "480", "600", "720"], 2],
      ["Un cono tiene radio 3 y altura 9. ¿Cuál es su volumen (π ≈ 3)?", ["54", "81", "108", "243", "27"], 1],
      ["Un cuadrado de lado 8 tiene inscrito un círculo. ¿Cuál es el área de la región fuera del círculo?", ["64 − 8π", "64 − 16π", "64 − 4π", "16π", "64π"], 1],
      ["Un rectángulo de 12 × 5 se reduce con factor de escala 5/8. ¿Cuál es el área del dibujo?", ["20", "22", "23,44", "25", "30"], 2],
      ["En un triángulo rectángulo, el cateto opuesto a α mide 6 y la hipotenusa 10. ¿Cuánto mide el cateto adyacente?", ["6", "8", "10", "12", "16"], 1],
      ["Un triángulo rectángulo isósceles tiene catetos de 5 cm. ¿Cuánto mide la hipotenusa?", ["5 cm", "5√2 cm", "10 cm", "25 cm", "5√3 cm"], 1]
    ] },
  { id: "mc5", fase: 2, area: "Funciones", titulo: "MC5 · Funciones avanzadas", semana: "W26",
    preguntas: [
      ["Una población de 500 se triplica cada año. ¿Cuántos individuos hay tras 3 años?", ["4.500", "13.500", "40.500", "15.000", "6.500"], 1],
      ["Una bacteria se duplica cada hora; al inicio hay 100. ¿Cuántas hay tras 4 horas?", ["400", "800", "1.600", "3.200", "8.000"], 2],
      ["Un valor de $200 crece 50% cada año. ¿Cuánto vale tras 3 años?", ["$300", "$450", "$600", "$675", "$750"], 3],
      ["El costo de producir n unidades es C(n) = 2n² + 50n + 200. ¿Cuánto cuesta producir 10?", ["700", "800", "900", "1.000", "1.100"], 2],
      ["Un cultivo crece según N(t) = 100·2^(t/2), t en horas. ¿Cuántas bacterias hay tras 6 h?", ["400", "600", "800", "1.200", "1.600"], 2],
      ["Un rectángulo de perímetro 40 tiene un lado x. ¿Cuál es el área máxima posible?", ["60", "80", "100", "120", "160"], 2],
      ["Si f(x) = 2^(x−1), ¿cuánto vale f(5)?", ["8", "16", "32", "64", "2"], 1],
      ["El ingreso de una empresa es I(q) = 5.000q − 20q². ¿Qué cantidad q maximiza el ingreso?", ["100", "125", "150", "200", "250"], 1],
      ["Si f(x) = 2x + 5, ¿cuánto vale f(8) − f(3)?", ["10", "20", "15", "25", "5"], 0],
      ["Una empresa cobra $4.000 fijos y $600 por hora. ¿Cuánto cuesta un servicio de 5 horas?", ["$6.000", "$7.000", "$7.600", "$8.000", "$9.000"], 1]
    ] },
  { id: "mc6", fase: 2, area: "Proporcionalidad", titulo: "MC6 · Proporcionalidad y Álgebra", semana: "W28",
    preguntas: [
      ["8 obreros hacen 2/5 de una obra en 6 días. ¿Cuántos días tardan 5 obreros en terminar el resto?", ["10", "12", "14,4", "15", "16"], 2],
      ["Dos números suman 12 y la diferencia de sus cuadrados es 72. ¿Cuáles son?", ["7 y 5", "8 y 4", "9 y 3", "10 y 2", "6 y 6"], 2],
      ["5 máquinas producen 1.200 piezas en 4 horas. ¿Cuántas horas tardan 4 máquinas en producir 1.500 piezas?", ["5 h", "5 h 30 min", "6 h 15 min", "6 h 30 min", "7 h"], 2],
      ["Se mezclan 3 kg de una aleación con 10% de cobre y 2 kg con 25%. ¿Qué porcentaje de cobre tiene la mezcla?", ["12%", "14%", "15%", "16%", "18%"], 3],
      ["Un terreno de 40 m × 25 m se representa a escala 1:100. ¿Cuál es el área en el plano?", ["400 cm²", "1.000 cm²", "2.500 cm²", "10.000 cm²", "40.000 cm²"], 1],
      ["En un grupo, hombres y mujeres están en razón 3:2. Si entran 2 mujeres, la nueva razón es 5:4. ¿Cuántas mujeres hay?", ["10", "12", "15", "18", "20"], 2],
      ["El lado de un cuadrado aumenta 3 cm y su área aumenta 69 cm². ¿Cuál era el lado original?", ["8 cm", "9 cm", "10 cm", "11 cm", "12 cm"], 2],
      ["La suma de dos números es 17 y su producto es 60. ¿Cuáles son?", ["8 y 9", "10 y 7", "12 y 5", "15 y 2", "6 y 11"], 2],
      ["Resolver |x − 2| ≤ 5.", ["[−3, 7]", "[−5, 5]", "[−7, 3]", "[2, 5]", "[−2, 2]"], 0],
      ["El promedio de dos números es 20 y su diferencia es 14. ¿Cuál es el mayor?", ["24", "26", "27", "28", "30"], 2]
    ] },
  { id: "mc7", fase: 2, area: "Estadística", titulo: "MC7 · Estadística", semana: "W29",
    preguntas: [
      ["¿Cuál es la media de 12, 14, 16, 20, 28?", ["16", "17", "18", "19", "20"], 2],
      ["¿Cuál es la mediana de 12, 14, 16, 20, 28?", ["14", "16", "18", "20", "15"], 1],
      ["Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 8?", ["4/36", "5/36", "6/36", "7/36", "8/36"], 1],
      ["Una urna tiene 4 bolas rojas y 3 azules. Se sacan dos sin reposición. ¿Probabilidad de que ambas sean rojas?", ["1/7", "2/7", "3/7", "4/7", "12/49"], 1],
      ["15 estudiantes promedian 5,2 y 5 promedian 4,0. ¿Cuál es el promedio del grupo?", ["4,6", "4,7", "4,8", "4,9", "5,0"], 3],
      ["El promedio de 5 números es 20. Se agrega un sexto y el promedio sube a 22. ¿Cuál es el sexto?", ["28", "30", "32", "34", "36"], 2],
      ["Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea menor que 5?", ["1/6", "5/36", "2/9", "1/9", "1/12"], 0],
      ["En una caja hay 3 fichas verdes y 2 rojas. Se saca una al azar. ¿Probabilidad de roja?", ["1/5", "2/5", "3/5", "1/2", "2/3"], 1],
      ["Se lanza una moneda 3 veces. ¿Probabilidad de exactamente 2 caras?", ["1/4", "1/8", "3/8", "3/4", "2/8"], 2],
      ["Al agregar un dato muy alto a un conjunto de datos, ¿qué ocurre?", ["La media sube más que la mediana", "La mediana sube más que la media", "Suben igual", "No cambian", "La media baja"], 0]
    ] },
  { id: "mc8", fase: 3, area: "Números", titulo: "MC8 · Números (refuerzo)", semana: "F3-F4",
    preguntas: [
      ["¿Qué porcentaje de 80 es 12?", ["12%", "15%", "18%", "20%", "24%"], 1],
      ["Calcular √2 · √8.", ["4", "2√2", "8", "16", "2"], 0],
      ["Calcular (1/2)⁻².", ["1/4", "4", "2", "−4", "1/2"], 1],
      ["Un precio de $X baja 25%. ¿Cuánto queda?", ["0,25X", "0,75X", "1,25X", "0,5X", "0,65X"], 1],
      ["Calcular 5⁻¹ · 5³.", ["5", "25", "125", "1/5", "5²"], 1],
      ["¿Cuál es mayor: 3/5 o 0,62?", ["3/5", "0,62", "Son iguales", "No se puede saber", "3/5 < 0,62"], 1],
      ["Un artículo cuesta $50.000 con 20% de descuento. ¿Cuál es el precio final?", ["$40.000", "$38.000", "$42.000", "$45.000", "$35.000"], 0],
      ["Calcular √(9/16).", ["3/4", "3/8", "9/4", "1/4", "3/16"], 0],
      ["Calcular 2⁰ + 2¹ + 2².", ["6", "7", "8", "5", "9"], 1],
      ["¿Cuál de los siguientes es un número racional?", ["√3", "π", "0,333...", "√5", "√7"], 2]
    ] },
  { id: "mc9", fase: 3, area: "Proporcionalidad", titulo: "MC9 · Proporcionalidad (refuerzo)", semana: "F3-F4",
    preguntas: [
      ["6 obreros tardan 10 días en una obra. ¿Cuántos días tardan 4 obreros?", ["12", "15", "16", "20", "24"], 1],
      ["Un auto recorre 300 km con 25 litros. ¿Cuántos km recorre con 35 litros?", ["400", "420", "450", "480", "350"], 1],
      ["En un mapa a escala 1:100.000, 5 cm representan:", ["5 km", "50 km", "0,5 km", "5.000 km", "50 m"], 0],
      ["A y B se reparten $40 en razón 3:5. ¿Cuánto recibe B?", ["$15", "$20", "$25", "$30", "$24"], 2],
      ["Si y es inversamente proporcional a x, y = 12 cuando x = 4. ¿Cuánto vale y cuando x = 8?", ["6", "8", "12", "24", "3"], 0],
      ["Un estanque se llena con 3 llaves en 8 horas. ¿Cuántas horas tardan 6 llaves?", ["2 h", "4 h", "6 h", "12 h", "16 h"], 1],
      ["¿Qué porcentaje es 45 de 150?", ["25%", "30%", "35%", "40%", "45%"], 1],
      ["En un curso de 30 estudiantes, 18 son mujeres. ¿Cuál es la razón mujeres : hombres?", ["3:2", "2:3", "3:5", "5:3", "1:1"], 0],
      ["Un terreno de 60 m² se dibuja a escala 1:5. ¿Cuál es el área en el dibujo?", ["12 m²", "300 cm²", "2,4 m²", "6 m²", "120 m²"], 2],
      ["Si a/b = 3/4 y b = 20, ¿cuánto vale a?", ["12", "15", "16", "18", "10"], 1]
    ] },
  { id: "mc10", fase: 3, area: "Álgebra", titulo: "MC10 · Álgebra (refuerzo)", semana: "F3-F4",
    preguntas: [
      ["Desarrollar (x + 2)².", ["x² + 2x + 4", "x² + 4x + 4", "x² + 4", "x² + 4x + 2", "x² + 2"], 1],
      ["Desarrollar (a + 3)(a − 3).", ["a² − 9", "a² + 9", "a² − 6a + 9", "a² + 6a + 9", "a² − 3"], 0],
      ["Resolver 3x − 7 = 14.", ["5", "6", "7", "8", "21"], 2],
      ["Resolver x² − 9 = 0.", ["3 y −3", "3 y 9", "−3 y 9", "9 y −9", "3 y 0"], 0],
      ["Resolver el sistema: x + y = 7; x − y = 3.", ["(5, 2)", "(2, 5)", "(4, 3)", "(3, 4)", "(6, 1)"], 0],
      ["El doble de un número más 5 es 21. ¿Cuál es el número?", ["6", "7", "8", "9", "10"], 2],
      ["Resolver x² − 5x + 6 = 0.", ["2 y 3", "−2 y −3", "1 y 6", "−1 y −6", "2 y −3"], 0],
      ["Desarrollar (x − 1)².", ["x² − 2x + 1", "x² − 1", "x² + 2x + 1", "x² − x + 1", "x² − 2x − 1"], 0],
      ["Resolver |x + 3| = 5.", ["2 y −8", "2 y 8", "−2 y −8", "−2 y 8", "5 y −3"], 0],
      ["Si 2(x + 1) = 3x − 2, ¿cuánto vale x?", ["2", "3", "4", "5", "6"], 2]
    ] },
  { id: "mc11", fase: 3, area: "Funciones", titulo: "MC11 · Funciones (refuerzo)", semana: "F3-F4",
    preguntas: [
      ["Si f(x) = 2x − 1, ¿cuánto vale f(4)?", ["6", "7", "8", "9", "5"], 1],
      ["¿Cuál es la pendiente de la recta que pasa por (1, 3) y (4, 9)?", ["1", "2", "3", "4", "6"], 1],
      ["¿Cuál es la ordenada al origen de y = 4x − 7?", ["4", "−7", "7", "−4", "0"], 1],
      ["¿Cuál es el vértice de f(x) = −x² + 6x?", ["(3, 9)", "(3, −9)", "(−3, 9)", "(6, 0)", "(0, 0)"], 0],
      ["Si N(t) = 300·2^t (t en horas), ¿cuánto vale N(2)?", ["600", "900", "1.200", "1.800", "2.400"], 2],
      ["Una función lineal pasa por (0, 2) y (1, 5). ¿Cuánto vale f(3)?", ["9", "11", "13", "15", "8"], 1],
      ["¿Cuál de las siguientes es una función cuadrática?", ["y = 3x + 1", "y = x² − 2x", "y = 2^x", "y = 1/x", "y = |x|"], 1],
      ["¿Cuáles son las raíces de f(x) = x² − 2x?", ["0 y 2", "0 y −2", "2 y −2", "1 y 2", "−1 y 2"], 0],
      ["Un valor de $500 crece 10% anual. ¿Cuánto vale tras 2 años?", ["$600", "$605", "$610", "$620", "$550"], 1],
      ["Si C(x) = 300 + 50x, ¿cuánto vale C(10)?", ["500", "700", "800", "900", "1.000"], 2]
    ] },
  { id: "mc12", fase: 3, area: "Geometría", titulo: "MC12 · Geometría (refuerzo)", semana: "F3-F4",
    preguntas: [
      ["¿Cuánto suman los ángulos interiores de un triángulo?", ["90°", "180°", "270°", "360°", "120°"], 1],
      ["Un ángulo de 47° y otro de 43° son:", ["complementarios", "suplementarios", "iguales", "adyacentes", "alternos"], 0],
      ["Los catetos de un triángulo rectángulo miden 5 y 12. ¿Cuánto mide la hipotenusa?", ["13", "14", "15", "17", "60"], 0],
      ["¿Cuál es el área de un triángulo de base 10 y altura 6?", ["30", "60", "15", "16", "120"], 0],
      ["¿Cuál es el perímetro de un círculo de radio 5?", ["5π", "10π", "25π", "20π", "15π"], 1],
      ["¿Cuánto mide el ángulo central de un sector de 1/4 de círculo?", ["45°", "60°", "90°", "120°", "180°"], 2],
      ["Un triángulo equilátero de lado 6. ¿Cuánto mide su altura?", ["3√3", "6√3", "3", "6", "3√2"], 0],
      ["¿Cuál es el volumen de un cubo de arista 3?", ["9", "18", "27", "36", "12"], 2],
      ["Dos figuras son semejantes con razón de semejanza 3. El área de la mayor es:", ["3 veces", "6 veces", "9 veces", "12 veces", "27 veces"], 2],
      ["¿Cuánto vale sen(30°)?", ["1/2", "√2/2", "√3/2", "1", "0"], 0]
    ] },
  { id: "mc13", fase: 3, area: "Estadística", titulo: "MC13 · Estadística (refuerzo)", semana: "F3-F4",
    preguntas: [
      ["¿Cuál es la media de 2, 4, 6, 8?", ["4", "5", "6", "7", "20"], 1],
      ["¿Cuál es la mediana de 3, 7, 9, 15, 20?", ["7", "9", "10", "11", "15"], 1],
      ["¿Cuál es la moda de 1, 2, 2, 3, 4, 4, 4?", ["1", "2", "3", "4", "2 y 4"], 3],
      ["Se lanza un dado. ¿Cuál es la probabilidad de obtener un número par?", ["1/2", "1/3", "2/3", "1/6", "1/4"], 0],
      ["Se saca una carta de una baraja de 52. ¿Probabilidad de sacar un as?", ["1/52", "4/52", "13/52", "1/13", "4/13"], 1],
      ["10 alumnos promedian 6,0 y otros 10 promedian 4,0. ¿Cuál es el promedio del grupo?", ["4,5", "5,0", "5,5", "6,0", "4,0"], 1],
      ["Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7?", ["5/36", "6/36", "7/36", "8/36", "1/6"], 1],
      ["Una caja tiene 5 bolas rojas y 5 azules. Se sacan dos sin reposición. ¿Probabilidad de que ambas sean azules?", ["(5/10)·(5/10)", "(5/10)·(4/9)", "(5/10)·(5/9)", "1/4", "2/9"], 1],
      ["¿Cuál es la media de 8, 12, 16?", ["12", "13", "14", "15", "16"], 0],
      ["Cuando hay valores extremos en los datos, ¿qué medida describe mejor el \"centro\"?", ["la media", "la mediana", "la moda", "el rango", "ninguna"], 1]
    ] }
];

// ============================================================
// Calendario: contenido por semana (W1-W62)
// ============================================================
// fase: F1..F5 | contenido | medicion (opcional)
const SEMANAS = [
  { fase: "F1", c: "Geometría: ángulos y rectas", m: "" },
  { fase: "F1", c: "Geometría: triángulos", m: "" },
  { fase: "F1", c: "Geometría: congruencia y semejanza", m: "" },
  { fase: "F1", c: "Geometría: Pitágoras", m: "" },
  { fase: "F1", c: "Geometría: áreas y perímetros", m: "" },
  { fase: "F1", c: "Geometría: problemas integrados", m: "MC1 Geometría" },
  { fase: "F1", c: "Funciones: concepto", m: "" },
  { fase: "F1", c: "Funciones: lineal y afín", m: "" },
  { fase: "F1", c: "Funciones: cuadrática", m: "" },
  { fase: "F1", c: "Funciones: modelación", m: "MC2 Funciones" },
  { fase: "F1", c: "Números en contexto", m: "" },
  { fase: "F1", c: "Repaso integrado", m: "MC3 Números (opcional)" },
  { fase: "F1", c: "Ensayo oficial DEMRE (dic 2026)", m: "Hito: 800" },
  { fase: "F1", c: "Análisis y cierre F1", m: "Registro" },
  { fase: "F2", c: "Geometría: circunferencia", m: "" },
  { fase: "F2", c: "Geometría: trigonometría", m: "" },
  { fase: "P", c: "Pausa de vacaciones", m: "" },
  { fase: "P", c: "Pausa de vacaciones", m: "" },
  { fase: "P", c: "Pausa de vacaciones", m: "" },
  { fase: "P", c: "Pausa de vacaciones", m: "" },
  { fase: "F2", c: "Geometría: cuerpos geométricos", m: "" },
  { fase: "F2", c: "Geometría en contexto", m: "MC4 Geometría avanzada" },
  { fase: "F2", c: "Funciones: exponencial", m: "" },
  { fase: "F2", c: "Funciones: modelación", m: "Ensayo DEMRE 1er ciclo *" },
  { fase: "F2", c: "Funciones: modelación 800+", m: "" },
  { fase: "F2", c: "Repaso de Funciones", m: "MC5 Funciones avanzadas" },
  { fase: "F2", c: "Números en profundidad", m: "" },
  { fase: "F2", c: "Proporcionalidad y Álgebra alta", m: "MC6 Prop. + Álgebra" },
  { fase: "F2", c: "Estadística alta", m: "MC7 Estadística" },
  { fase: "F2", c: "Ensayo + cierre F2", m: "Ensayo DEMRE 1er ciclo *" },
  { fase: "F3", c: "Ensayo 1 + clasificación de errores", m: "Ensayo" },
  { fase: "F3", c: "Refuerzo dirigido A", m: "" },
  { fase: "F3", c: "Ensayo 2", m: "Ensayo" },
  { fase: "F3", c: "Refuerzo dirigido B", m: "" },
  { fase: "F3", c: "Ensayo 3", m: "Ensayo" },
  { fase: "F3", c: "Refuerzo dirigido C", m: "" },
  { fase: "F3", c: "Ensayo 4", m: "Ensayo" },
  { fase: "F3", c: "Preparación PAES de invierno", m: "" },
  { fase: "F3", c: "PAES de invierno *", m: "Hito (puntaje válido)" },
  { fase: "F3", c: "Análisis de resultados", m: "Registro" },
  { fase: "F3", c: "Refuerzo según invierno", m: "" },
  { fase: "F3", c: "Ensayo 5 + cierre F3", m: "Ensayo" },
  { fase: "F4", c: "Inscripción * + ensayo 1", m: "Ensayo / inscripción" },
  { fase: "F4", c: "Refuerzo A", m: "" },
  { fase: "F4", c: "Refuerzo A (cont.)", m: "" },
  { fase: "F4", c: "Ensayo 2", m: "Ensayo DEMRE 2do ciclo *" },
  { fase: "F4", c: "Análisis + refuerzo B", m: "" },
  { fase: "F4", c: "Refuerzo B", m: "" },
  { fase: "F4", c: "Ensayo 3", m: "Ensayo DEMRE 2do ciclo *" },
  { fase: "F4", c: "Análisis + refuerzo C", m: "" },
  { fase: "F4", c: "Refuerzo C", m: "" },
  { fase: "F4", c: "Ensayo 4", m: "Ensayo" },
  { fase: "F4", c: "Refuerzo D", m: "" },
  { fase: "F4", c: "Refuerzo D", m: "" },
  { fase: "F4", c: "Ensayo 5", m: "Ensayo" },
  { fase: "F4", c: "Análisis + refuerzo E", m: "" },
  { fase: "F4", c: "Refuerzo E", m: "" },
  { fase: "F4", c: "Ensayo 6", m: "Ensayo" },
  { fase: "F4", c: "Consolidación final, cierre F4", m: "" },
  { fase: "F5", c: "Repaso ligero + estrategia", m: "" },
  { fase: "F5", c: "Simulación completa", m: "Ensayo" },
  { fase: "F5", c: "PAES regular *", m: "Hito: 1000" }
];

const NOMBRE_FASE = { "F1": "Fase 1 · Base (sep-dic 2026)", "F2": "Fase 2 · Profundizar (ene-abr 2027)", "F3": "Fase 3 · Ensayos (abr-jul 2027)", "F4": "Fase 4 · Ciclo final (jul-nov 2027)", "F5": "Fase 5 · Ajuste (nov 2027)", "P": "Pausa de vacaciones" };

// Fecha de cada semana (lunes a domingo) y numero de semana actual
function fechasSemana(n) {
  const ini = new Date(FECHA_INICIO);
  ini.setDate(ini.getDate() + (n - 1) * 7);
  const fin = new Date(ini);
  fin.setDate(fin.getDate() + 6);
  const f = (d) => d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  return f(ini) + " - " + f(fin);
}

function semanaActual() {
  const hoy = new Date();
  if (hoy < FECHA_INICIO) return 0;
  const dias = Math.floor((hoy - FECHA_INICIO) / 86400000);
  return Math.min(Math.floor(dias / 7) + 1, 62);
}

// Nombre de letra de opcion
const LETRA = ["A", "B", "C", "D", "E"];