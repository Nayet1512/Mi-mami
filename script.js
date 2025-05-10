const pantalla = document.getElementById('pantalla');
const teAmo = document.getElementById('teAmo');

const escenas = [
  // Primer bloque (4 escenas)
  { tipo: "mensaje", contenido: "¡Feliz Día de las Madres!" },
  { tipo: "recuerdo", imagen: "foto.jpeg", textoArriba: "Gracias por cada abrazo mamá <3.", textoAbajo: "Todo recuerdo es hermoso", posicion: "normal" },
  { tipo: "mensaje", contenido: "Tu amor es el regalo más grande." },
  { tipo: "recuerdo", imagen: "foto2.jpeg", textoArriba: "Eres mi heroe mami.", textoAbajo: "Nunca dejo de aprender de ti.", posicion: "invertido" },
  { tipo: "mensaje", contenido: "Cada recuerdo contigo es hermoso" },
  { tipo: "recuerdo", imagen: "foto3.jpeg", textoArriba: "Te amo mamá <3.", textoAbajo: "Soy tu mayor fan", posicion: "normal" },
  { tipo: "mensaje", contenido: "Te necesito en mi vida <3" },
  { tipo: "recuerdo", imagen: "foto4.jpeg", textoArriba: "Tu sonrisa me ilumina <3", textoAbajo: "Gracias por todo lo que nos haz dado.", posicion: "invertido" },
{ tipo: "mensaje", contenido: "Recuerdas cuendo..." },
  // Primer bloque de 3 recuerdos

{ tipo: "bloque", recuerdos: [
  { imagen: "foto5.jpeg", textoArriba: "Ayuda... ayúdenme...", textoAbajo: "SJKAJSKA, hermoso día", posicion: "normal" },
  { imagen: "foto6.jpeg", textoArriba: "Me caí del pasamanos...", textoAbajo: "Y tú te reíste de mí", posicion: "invertido" },
  { imagen: "foto7.jpeg", textoArriba: "Aplasté a Mateo en la carriola", textoAbajo: "Me ataco la leche", posicion: "normal" }
]},

// Segundo bloque de 3 recuerdos
{ tipo: "bloque", recuerdos: [
  { imagen: "foto8.jpeg", textoArriba: "Nos metíamos entre los tubos", textoAbajo: "Del dorado", posicion: "invertido" },
  { imagen: "foto9.jpeg", textoArriba: "Alan dejó la mochila en casa", textoAbajo: "Tuviste que volver corriendo", posicion: "normal" },
  { imagen: "foto10.png", textoArriba: "Madhya iba tarde y corrimos", textoAbajo: "Vomitas al alcanzarnos JKAJSKA", posicion: "invertido" }
]},

// Tercer bloque de 3 recuerdos
{ tipo: "bloque", recuerdos: [
  { imagen: "foto11.jpeg", textoArriba: "A Alan se le rompió la bolsa de papas", textoAbajo: "Justo en media calle...", posicion: "normal" },
  { imagen: "foto12.jpeg", textoArriba: "Siempre contigo, mamá", textoAbajo: "<3", posicion: "invertido" },
  { imagen: "foto13.jpeg", textoArriba: "El día que llegaste con Mateo", textoAbajo: "...", posicion: "normal" }
]},


  // Mensaje final
  { tipo: "mensaje", contenido: "GRACIAS POR TODO MAMÁ, TE AMAMOS <3" }
];

let indice = 0;

function mostrarEscena() {
  pantalla.innerHTML = '';
  teAmo.classList.remove("mostrar");

  // Mostrar "TE AMO MAMÁ" aleatoriamente
  if (Math.random() < 0.5) {
    setTimeout(() => teAmo.classList.add("mostrar"), 2000);
    setTimeout(() => teAmo.classList.remove("mostrar"), 4000);
  }

  const escena = escenas[indice];

  if (escena.tipo === "mensaje") {
    const div = document.createElement('div');
    div.className = 'mensaje-principal';
    div.textContent = escena.contenido;
    pantalla.appendChild(div);
  } else if (escena.tipo === "recuerdo") {
    const contenedor = document.createElement('div');
    contenedor.className = 'contenido';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-marco';

    const img = document.createElement('img');
    img.src = escena.imagen;
    img.className = 'img-chica';
    imgContainer.appendChild(img);

    const textoArriba = document.createElement('div');
    textoArriba.className = 'texto-recuerdo';
    textoArriba.textContent = escena.textoArriba;

    const textoAbajo = document.createElement('div');
    textoAbajo.className = 'texto-recuerdo';
    textoAbajo.textContent = escena.textoAbajo;

    if (escena.posicion === "normal") {
      contenedor.appendChild(imgContainer);
      contenedor.appendChild(textoArriba);
      contenedor.appendChild(textoAbajo);
    } else {
      contenedor.appendChild(textoAbajo);
      contenedor.appendChild(textoArriba);
      contenedor.appendChild(imgContainer);
    }

    pantalla.appendChild(contenedor);
  } else if (escena.tipo === "bloque") {
    const contenedorBloque = document.createElement('div');
    contenedorBloque.className = 'bloque-recuerdos';

    escena.recuerdos.forEach((recuerdo) => {
      const contenedor = document.createElement('div');
      contenedor.className = 'contenido bloque-item';

      const imgContainer = document.createElement('div');
      imgContainer.className = 'img-marco';

      const img = document.createElement('img');
      img.src = recuerdo.imagen;
      img.className = 'img-chica';
      imgContainer.appendChild(img);

      const textos = document.createElement('div');
      textos.className = 'textos-lado';

      const textoArriba = document.createElement('div');
      textoArriba.className = 'texto-recuerdo';
      textoArriba.textContent = recuerdo.textoArriba;

      const textoAbajo = document.createElement('div');
      textoAbajo.className = 'texto-recuerdo';
      textoAbajo.textContent = recuerdo.textoAbajo;

      textos.appendChild(textoArriba);
      textos.appendChild(textoAbajo);

      contenedor.appendChild(imgContainer);
      contenedor.appendChild(textos);

      contenedorBloque.appendChild(contenedor);
    });

    pantalla.appendChild(contenedorBloque);
  }

  let duracion = 5000;
  if (escena.tipo === "bloque") {
    duracion = 15000; // Triple del tiempo para bloques
  }

  indice = (indice + 1) % escenas.length;
  setTimeout(mostrarEscena, duracion);
}

mostrarEscena();
