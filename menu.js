// menu.js - versión moderna sin document.write()
(function () {
  if (window.__MENU_JS_LOADED) return;
  window.__MENU_JS_LOADED = true;

  document.addEventListener("DOMContentLoaded", function () {
    try {
      console.log("menu.js: inicializando...");

      const headerHtml = `
      <header id="mainHeader" class="site-header" style="background:#007bff;color:white;padding:12px;position:fixed;width:100%;top:0;z-index:1000;">
        <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">
          <nav>
            <ul class="main-menu" style="list-style:none;display:flex;gap:12px;padding:0;margin:0;">
              <li><a href="index.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Inicio</a></li>

              <li class="dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Curso ▾</a>
                <ul class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1000;min-width:180px;display:none;">

                  <!-- NIVEL A1 -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel A1 ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:220px;display:none;">
                      <li><a href="unidad1.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 1 (Lección)</a></li>
                      <li><a href="ejercicios_unidad1.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U1</a></li>
                      <li><a href="unidad2.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 2 (Lección)</a></li>
                      <li><a href="ejercicios_unidad2.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U2</a></li>
                      <li><a href="unidad3.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 3 (Lección)</a></li>
                      <li><a href="ejercicios_unidad3.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U3</a></li>
                    </ul>
                  </li>

                  <!-- NIVEL A2 -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel A2 ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:220px;display:none;">
                      <li><a href="unidad4.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 4 (Lección)</a></li>
                      <li><a href="ejercicios_unidad4.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U4</a></li>
                      <li><a href="unidad5.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 5 (Lección)</a></li>
                      <li><a href="ejercicios_unidad5.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U5</a></li>
                      <li><a href="unidad6.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 6 (Lección)</a></li>
                      <li><a href="ejercicios_unidad6.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U6</a></li>
                    </ul>
                  </li>

                  <!-- NIVEL B1 -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel B1 ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:220px;display:none;">
                      <li><a href="unidad7.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 7 (Lección)</a></li>
                      <li><a href="ejercicios_unidad7.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U7</a></li>
                      <li><a href="unidad8.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidad 8 (Lección)</a></li>
                      <li><a href="ejercicios_unidad8.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Ejercicios U8</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <!-- NUEVO BLOQUE EXTRAS -->
              <li class="dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Extras ▾</a>
                <ul class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1000;min-width:200px;display:none;">
                  <li><a href="dialogos_audios.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Diálogos y Audios</a></li>
                  <li><a href="vocabulario.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Vocabulario</a></li>
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Libro ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);min-width:200px;display:none;">
                      <li><a href="libro.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Libro</a></li>
                      <li><a href="audios_libro.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Audios</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li><a href="pago.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Pago</a></li>
              <li><a href="contacto.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      `;

      const tmp = document.createElement("div");
      tmp.innerHTML = headerHtml.trim();
      const header = tmp.firstElementChild;
      document.body.prepend(header);

      // Interacciones
      const dropdowns = document.querySelectorAll(".dropdown, .sub-dropdown");
      dropdowns.forEach(d => {
        const content = d.querySelector(".dropdown-content, .sub-dropdown-content");
        const link = d.querySelector("a.menu-link");
        if (!content || !link) return;
        d.addEventListener("mouseenter", () => content.style.display = "block");
        d.addEventListener("mouseleave", () => content.style.display = "none");
        link.addEventListener("click", e => {
          e.preventDefault();
          content.style.display = (content.style.display === "block") ? "none" : "block";
        });
      });

      // Cierre al hacer clic fuera
      document.addEventListener("click", (e) => {
        const headerEl = document.getElementById("mainHeader");
        if (!headerEl.contains(e.target)) {
          document.querySelectorAll(".dropdown-content, .sub-dropdown-content").forEach(m => m.style.display = "none");
        }
      });

      console.log("menu.js: listo y funcional");
    } catch (err) {
      console.error("menu.js error:", err);
    }
  });
})();
