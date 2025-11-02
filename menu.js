// menu.js - versión fija con visibilidad garantizada del menú
(function () {
  if (window.__MENU_JS_LOADED) return;
  window.__MENU_JS_LOADED = true;

  // Crear el menú inmediatamente al cargar
  const headerHtml = `
  <header id="mainHeader" class="site-header" 
    style="background:#007bff;color:white;padding:12px;position:fixed;width:100%;
           top:0;left:0;z-index:9999;box-shadow:0 3px 6px rgba(0,0,0,0.2);">
    <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">
      <nav>
        <ul class="main-menu" style="list-style:none;display:flex;gap:12px;padding:0;margin:0;">
          <li><a href="index.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Inicio</a></li>

          <li class="dropdown" style="position:relative;">
            <a href="#" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Curso ▾</a>
            <ul class="dropdown-content" 
              style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;
                     box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:9999;min-width:200px;display:none;">

              <!-- NIVEL A1 -->
              <li class="sub-dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel A1 ►</a>
                <ul class="sub-dropdown-content" 
                    style="position:absolute;top:0;left:100%;background:white;list-style:none;
                           padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);
                           z-index:10000;min-width:220px;display:none;">
                  <li><a href="unidad1.html">Unidad 1 (Lección)</a></li>
                  <li><a href="ejercicios_unidad1.html">Ejercicios U1</a></li>
                  <li><a href="unidad2.html">Unidad 2 (Lección)</a></li>
                  <li><a href="ejercicios_unidad2.html">Ejercicios U2</a></li>
                  <li><a href="unidad3.html">Unidad 3 (Lección)</a></li>
                  <li><a href="ejercicios_unidad3.html">Ejercicios U3</a></li>
                </ul>
              </li>

              <!-- NIVEL A2 -->
              <li class="sub-dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel A2 ►</a>
                <ul class="sub-dropdown-content" 
                    style="position:absolute;top:0;left:100%;background:white;list-style:none;
                           padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);
                           z-index:10000;min-width:220px;display:none;">
                  <li><a href="unidad4.html">Unidad 4 (Lección)</a></li>
                  <li><a href="ejercicios_unidad4.html">Ejercicios U4</a></li>
                  <li><a href="unidad5.html">Unidad 5 (Lección)</a></li>
                  <li><a href="ejercicios_unidad5.html">Ejercicios U5</a></li>
                  <li><a href="unidad6.html">Unidad 6 (Lección)</a></li>
                  <li><a href="ejercicios_unidad6.html">Ejercicios U6</a></li>
                </ul>
              </li>

              <!-- NIVEL B1 -->
              <li class="sub-dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel B1 ►</a>
                <ul class="sub-dropdown-content" 
                    style="position:absolute;top:0;left:100%;background:white;list-style:none;
                           padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);
                           z-index:10000;min-width:220px;display:none;">
                  <li><a href="unidad7.html">Unidad 7 (Lección)</a></li>
                  <li><a href="ejercicios_unidad7.html">Ejercicios U7</a></li>
                  <li><a href="unidad8.html">Unidad 8 (Lección)</a></li>
                  <li><a href="ejercicios_unidad8.html">Ejercicios U8</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- EXTRAS -->
          <li class="dropdown" style="position:relative;">
            <a href="#" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Extras ▾</a>
            <ul class="dropdown-content" 
                style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;
                       box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:9999;min-width:200px;display:none;">
              <li><a href="dialogos_audios.html">Diálogos y Audios</a></li>
              <li><a href="vocabulario.html">Vocabulario</a></li>
              <li><a href="libro.html">Libro</a></li>
              <li><a href="audios.html">Audios del Libro</a></li>
            </ul>
          </li>

          <li><a href="pago.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Pago</a></li>
          <li><a href="contacto.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>`;

  // Insertar el menú antes de todo el contenido
  document.write(headerHtml);

  // Después de cargar el DOM, activar interacciones
  document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown, .sub-dropdown");

    dropdowns.forEach(dropdown => {
      const content = dropdown.querySelector(".dropdown-content, .sub-dropdown-content");
      const title = dropdown.querySelector(".menu-link");
      if (!content || !title) return;

      dropdown.addEventListener("mouseenter", () => { content.style.display = "block"; });
      dropdown.addEventListener("mouseleave", () => { content.style.display = "none"; });

      title.addEventListener("click", ev => {
        ev.preventDefault();
        content.style.display = (content.style.display === "block") ? "none" : "block";
      });
    });

    document.addEventListener("click", e => {
      const header = document.getElementById("mainHeader");
      if (!header.contains(e.target)) {
        document.querySelectorAll(".dropdown-content, .sub-dropdown-content").forEach(menu => {
          menu.style.display = "none";
        });
      }
    });

    // margen al body para que no tape contenido
    document.body.style.paddingTop = "60px";
  });
})();
