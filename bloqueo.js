document.addEventListener("DOMContentLoaded", function () {
  const paginasGratis = [
    "unidad1.html",
    "ejercicios_unidad1.html",
    "index.html",
    "pago.html",
    "contacto.html"
  ];

  const acceso = localStorage.getItem("pago_ok"); // true si pagó
  const estaPagina = window.location.pathname.split("/").pop();

  // Si no pagó y la página no es gratis, redirige
  if (!acceso && !paginasGratis.includes(estaPagina)) {
    alert("🔒 Esta unidad forma parte del curso completo. Accede después del pago.");
    window.location.href = "pago.html";
  }
});
