// Función para cambiar el color de fondo al hacer clic en un botón
function cambiarColorFondo() {
    const coloresFondo = ["#ff9900", "#33cc33", "#ff6699", "#3399ff", "#ff3333"];
    const colorActual = document.body.style.backgroundColor;
    const nuevoColor = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];

    // Evita que el nuevo color sea igual al color actual
    if (nuevoColor !== colorActual) {
        document.body.style.backgroundColor = nuevoColor;
    } else {
        cambiarColorFondo(); // Llama a la función nuevamente si los colores coinciden
    }
}

// Función para mostrar u ocultar información sobre los autores
function toggleInformacionAutores() {
    const informacionAutores = document.getElementById("informacionAutores");
    informacionAutores.style.display = informacionAutores.style.display === "none" ? "block" : "none";
}

// Agregar eventos de clic a botones
const botonCambiarColor = document.getElementById("botonCambiarColor");
botonCambiarColor.addEventListener("click", cambiarColorFondo);

const botonMostrarAutores = document.getElementById("botonMostrarAutores");
botonMostrarAutores.addEventListener("click", toggleInformacionAutores);
