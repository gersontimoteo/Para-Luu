// ====== CONFIG ======
const titulo = "Para vos mi niña hermosa ❤️";

// 9 partes (tu carta)
const partes = [
`Hola mi amor

No sabía cómo hacerte un detallito lindo a la distancia,
así que decidí armarte esta mini carta`,

`Hace unos meses éramos 2 desconocidos, no estaba buscando a nadie 
pero llegaste vos, y mi mundo entero cambio para bien, comenzamos hablar 
y créeme que nunca había disfrutado tanto hablar con alguien 
como con vos, siempre me preguntaste que me enamoro de vos,
todo, absolutamente todo me gusto en vos.`,

`Hoy sos la persona que mas feliz me hace en este mundo, de verdad te amo con el alma entera,
y cada día me gustas mas, me encanta hablar con vos, me encanta pasar tiempo con vos, 
me encanta que seas vos misma, me encanta todo en vos, sos todo que siempre soñé, 
y quisiera pasar el resto de mi vida junto a vos`,

`Amo todo de vos, amo tus gestos, amo tu risa, amo tu forma de hablar,
amo tu forma de ser, amo la forma en que me amas, amo tus mejillas, 
amo tu cabello, amo tu nariz, amo tus ojos, amo tus labios, amo tu sonrisa, amo tu voz,
amo tu rostro, amo tus mensajes, amo tus enojos, amo tu amor, amo la idea de un mañana con vos, y te amaría de cualquier forma  y en cualquier mundo, si la vida me diera a elegir, te volvería a elegir una y mil veces mas.`,

`Te elijo con los ojos abiertos, sabiendo que amar no siempre es fácil, te elijo es tus luces, 
te elijo en tus sombras, en tus días de calma y en tus días de caos, te elijo no porque te necesite, si no porque la vida contigo se siente mas bonita, y es hermoso imaginarme el mañana e imaginarte en cada uno de mis días.`,

`Te amo con el corazon abierto, y eso me asusta porque significa que puedes 
tocar cada fibra de mi, a veces sonrió porque siento que estoy viviendo un sueño,
el sueño mas hermoso que  pude tener, no quiero huir solo quiero aprender a sentirme seguro 
mientras te amo y si alguna vez me notas frágil no es falta de amor es el miedo 
de perder algo que por fin siento mío.`,

`Ojala nunca dudes de cuanto te amo, porque desde que te conocí me hiciste ser el hombre 
mas feliz del mundo, no cambiaria nada de vos nunca, pero cambiaria todo de mi para ser 
el hombre de tu vida, me encantas y es algo que nunca va cambiar, en esta y todas las vidas siempre vas a ser el amor de mi vida `,

`Llegaste a mi vida sin avisar, y te volviste la mujer con la que quiero pasar el resto 
de mi vida, amo sentir todo esto por vos, siento paz cuando estas vos, 
te amo en todas tus formas, amo quien sos y quien haces que sea yo.`,

`Gracias por siempre estar, gracias por creer en mi, gracias por hacerme tan feliz,
gracias por alegrar mis días y mi noches, gracias por amarme, pero sobre todo, gracias por elegirme a mi. 

Con muchísimo amor y cariño.

Gerson`
];

// Promesa final (centrada + animación)
const promesaTexto = `Y antes de terminar la carta quiero prometerte algo…
No te prometo un amor perfecto, porque no soy perfecto, pero si prometo que daré mi alma para hacer que esto funcione.
Te prometo elegirte incluso cuando esté enojado, incluso cuando mi orgullo quiera ganar una discusión.
Prometo escucharte, aprender de vos, respetar tus tiempos y sostener tu mano siempre, aunque en mundo se ponga pesado. 
Prometo estar para vos toda la vida, y cuando la vida se ponga oscura prometo ser tu luz.
Prometo protegerte y recordarte todos los días lo hermosa que estás cada día.
Te prometo quedarme y te prometo amarte para siempre, en esta y todas las vidas, siempre te elegiría a vos, siempre vas a ser vos la mujer que yo amo.`;

// ====== ELEMENTOS ======
let i = -1; // -1 = portada
let escribiendo = false;

const titleEl = document.getElementById("title");
const dateLine = document.getElementById("dateLine");
const letterEl = document.getElementById("letter");
const counterEl = document.getElementById("counter");
const btn = document.getElementById("btn");

// Fecha
const hoy = new Date();
const fecha = `Hecha con amor • ${hoy.toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" })}`;

// ====== EFECTO MÁQUINA DE ESCRIBIR ======
function escribirTexto(texto) {
  escribiendo = true;
  letterEl.textContent = "";
  letterEl.scrollTop = 0;

  let idx = 0;
  const intervalo = setInterval(() => {
    letterEl.textContent += texto[idx] ?? "";
    idx++;

    if (idx > texto.length) {
      clearInterval(intervalo);
      escribiendo = false;
    }
  }, 18);
}

// ====== PANTALLAS ======
function mostrarPortada() {
  titleEl.style.display = "none";
  dateLine.style.display = "none";

  letterEl.innerHTML = `<div class="cover">${titulo}</div>`;
  letterEl.scrollTop = 0;

  counterEl.textContent = "";
  btn.textContent = "Empezar ✨";
  i = -1;
}

function mostrarParte() {
  titleEl.style.display = "block";
  titleEl.textContent = titulo;

  dateLine.style.display = "block";
  dateLine.textContent = fecha;

  escribirTexto(partes[i]);

  counterEl.textContent = `Parte ${i + 1} de ${partes.length}`;
  btn.textContent = (i === partes.length - 1) ? "Ver promesa 💞" : "Siguiente ✨";
}

function mostrarPromesa() {
  titleEl.style.display = "block";
  titleEl.textContent = titulo;

  dateLine.style.display = "block";
  dateLine.textContent = fecha;

  letterEl.innerHTML = `
    <div class="finalWrap">
      <div class="finalBox">
        <div class="finalTitle">Promesa 💗</div>
        ${promesaTexto.replaceAll("\n", "<br>")}
      </div>
    </div>
  `;
  letterEl.scrollTop = 0;

  counterEl.textContent = "Fin 🤍";
  btn.textContent = "Releer la carta 🔁";
  i = 999;
}

// ====== CLICK ======
btn.addEventListener("click", () => {
  if (escribiendo) return;

  if (i === -1) { // portada -> parte 1
    i = 0;
    mostrarParte();
    return;
  }

  if (i === 999) { // fin -> portada
    mostrarPortada();
    return;
  }

  if (i < partes.length - 1) {
    i++;
    mostrarParte();
  } else {
    mostrarPromesa();
  }
});

// Arranca en portada
mostrarPortada();


// ====== MÚSICA ======
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "⏸ Pausar";
    } else {
      music.pause();
      musicBtn.textContent = "🎵 Nuestra canción";
    }
  } catch (e) {
    alert("No se pudo reproducir la música. Revisá que el archivo se llame EXACTO: cancion.mp3 y esté en la misma carpeta.");
  }
});


// ====== CORAZONES ======
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const hearts = [];

function crearCorazon() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 16 + 8,
    speed: Math.random() * 1.2 + 0.6,
    drift: (Math.random() - 0.5) * 0.6,
    alpha: Math.random() * 0.35 + 0.35
  });
}

function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 18, size / 18);
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.bezierCurveTo(0, -2, -10, -2, -10, 6);
  ctx.bezierCurveTo(-10, 14, 0, 18, 0, 22);
  ctx.bezierCurveTo(0, 18, 10, 14, 10, 6);
  ctx.bezierCurveTo(10, -2, 0, -2, 0, 6);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 0, 100, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let j = hearts.length - 1; j >= 0; j--) {
    const h = hearts[j];
    h.y -= h.speed;
    h.x += h.drift;
    drawHeart(h.x, h.y, h.size, h.alpha);
    if (h.y < -40) hearts.splice(j, 1);
  }

  requestAnimationFrame(animar);
}

setInterval(crearCorazon, 250);
animar();
