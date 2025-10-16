document.addEventListener("DOMContentLoaded", function () {
  const headerHtml = `
    <header class="site-header" style="background:#007bff;color:white;padding:12px;">
      <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">
        <nav>
          <ul style="list-style:none;display:flex;gap:12px;padding:0;margin:0;">
            <li><a href="index.html" style="color:white;text-decoration:none;font-weight:bold;">Inicio</a></li>
            <li><a href="unidad1.html" style="color:white;text-decoration:none;font-weight:bold;">Unidad 1</a></li>
            <li><a href="ejercicios_unidad1.html" style="color:white;text-decoration:none;font-weight:bold;">Ejercicios U1</a></li>
            <li><a href="unidad2.html" style="color:white;text-decoration:none;font-weight:bold;">Unidad 2</a></li>
            <li><a href="ejercicios_unidad2.html" style="color:white;text-decoration:none;font-weight:bold;">Ejercicios U2</a></li>
            <li><a href="pago.html" style="color:white;text-decoration:none;font-weight:bold;">Pago</a></li>
            <li><a href="contacto.html" style="color:white;text-decoration:none;font-weight:bold;">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const tmp = document.createElement("div");
  tmp.innerHTML = headerHtml;
  document.body.prepend(tmp.firstChild);
});
