// bloqueo.js – bloquea todas las páginas excepto la Unidad 1 y ejercicios U1

// Páginas permitidas (sin bloqueo)
const paginasLibres = [
  "index.html",
  "unidad1.html",
  "ejercicios_unidad1.html",
  "pago.html",
  "registro.html",
  "login.html"
];

// Obtiene el nombre del archivo actual
const paginaActual = window.location.pathname.split("/").pop();

// Si la página NO está permitida → redirigir a pago.html
if (!paginasLibres.includes(paginaActual)) {
  window.location.href = "pago.html";
}
