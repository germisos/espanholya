// menu.js (versión actualizada — clic para abrir, móvil, auto-detección de página)
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    /* ------------------ Header HTML ------------------ */
    const headerHtml = `
<header class="site-header" style="background:#007bff;color:white;padding:12px;position:fixed;width:100%;top:0;z-index:1000;">
  <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">
    <nav>
      <ul class="main-menu" style="list-style:none;display:flex;gap:12px;padding:0;margin:0;align-items:center;">
        <li><a href="index.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Inicio</a></li>

        <li class="dropdown" style="position:relative;">
          <a href="#" class="menu-link curso-toggle" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Curso ▾</a>

          <div class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:1000;min-width:220px;display:none;">
            <!-- Nivel A1 -->
            <div class="sub-dropdown" style="position:relative;border-bottom:1px solid #f0f0f0;">
              <a href="#" class="sub-toggle" style="color:#333;text-decoration:none;padding:10px 16px;display:block;font-weight:700;">Nivel A1 ▸</a>
              <div class="sub-dropdown-content" style="position:relative;left:0;background:white;padding:6px 0;display:none;">
                <a href="unidad1.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 1 (Lección)</a>
                <a href="ejercicios_unidad1.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U1</a>
                <a href="unidad2.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 2 (Lección)</a>
                <a href="ejercicios_unidad2.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U2</a>
                <a href="unidad3.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 3 (Lección)</a>
                <a href="ejercicios_unidad3.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U3</a>
              </div>
            </div>

            <!-- Nivel A2 -->
            <div class="sub-dropdown" style="position:relative;border-bottom:1px solid #f0f0f0;">
              <a href="#" class="sub-toggle" style="color:#333;text-decoration:none;padding:10px 16px;display:block;font-weight:700;">Nivel A2 ▸</a>
              <div class="sub-dropdown-content" style="position:relative;left:0;background:white;padding:6px 0;display:none;">
                <a href="unidad4.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 4 (Lección)</a>
                <a href="ejercicios_unidad4.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U4</a>
                <a href="unidad5.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 5 (Lección)</a>
                <a href="ejercicios_unidad5.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U5</a>
                <a href="unidad6.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 6 (Lección)</a>
                <a href="ejercicios_unidad6.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U6</a>
              </div>
            </div>

            <!-- Nivel B1 -->
            <div class="sub-dropdown" style="position:relative;">
              <a href="#" class="sub-toggle" style="color:#333;text-decoration:none;padding:10px 16px;display:block;font-weight:700;">Nivel B1 ▸</a>
              <div class="sub-dropdown-content" style="position:relative;left:0;background:white;padding:6px 0;display:none;">
                <a href="unidad7.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 7 (Lección)</a>
                <a href="ejercicios_unidad7.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U7</a>
                <a href="unidad8.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 8 (Lección)</a>
                <a href="ejercicios_unidad8.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U8</a>
              </div>
            </div>
          </div> <!-- .dropdown-content -->
        </li>

        <li><a href="pago.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Pago</a></li>
        <li><a href="contacto.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Contacto</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

    // Insertar dentro de <div class="header"> si existe, sino al principio del body
    const headerContainer = document.querySelector(".header");
    if (headerContainer) {
      headerContainer.innerHTML = headerHtml;
    } else {
      const tmp = document.createElement("div");
      tmp.innerHTML = headerHtml;
      document.body.insertBefore(tmp.firstChild, document.body.firstChild);
    }

    /* ------------------ Funcionalidad: clics para abrir/ocultar ------------------ */

    // Helper: obtener elementos relevantes (espera un tick para asegurar la inserción)
    setTimeout(() => {
      const cursoToggle = document.querySelector(".curso-toggle");
      const dropdownContent = document.querySelector(".dropdown-content");
      const subToggles = document.querySelectorAll(".sub-toggle");
      const subContents = document.querySelectorAll(".sub-dropdown-content");

      // Cerrar todos los submenús
      function closeAll() {
        if (dropdownContent) dropdownContent.style.display = "none";
        subContents.forEach(sc => (sc.style.display = "none"));
        document.querySelectorAll(".sub-dropdown, .dropdown").forEach(el => el.classList.remove("open"));
      }

      // Toggle principal "Curso"
      if (cursoToggle && dropdownContent) {
        cursoToggle.addEventListener("click", function (e) {
          e.preventDefault();
          const isOpen = dropdownContent.style.display === "block";
          if (isOpen) {
            closeAll();
          } else {
            closeAll();
            dropdownContent.style.display = "block";
            // in small screens, make it full width visually via class
            document.querySelector(".dropdown").classList.add("open");
          }
        });
      }

      // Toggle submenus (Nivel A1, A2, B1)
      subToggles.forEach(toggle => {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = toggle.closest(".sub-dropdown");
          const content = parent.querySelector(".sub-dropdown-content");
          const isOpen = content.style.display === "block";

          // close other sibling sub-contents
          subContents.forEach(sc => {
            if (sc !== content) sc.style.display = "none";
          });

          content.style.display = isOpen ? "none" : "block";
          // add/remove open class for styling if desired
          document.querySelectorAll(".sub-dropdown").forEach(sd => sd.classList.remove("open"));
          if (!isOpen) parent.classList.add("open");
        });
      });

      // Cerrar al hacer clic fuera
      document.addEventListener("click", function (e) {
        const menuRoot = document.querySelector(".site-header");
        if (!menuRoot) return;
        if (!menuRoot.contains(e.target)) {
          closeAll();
        }
      });

      // Cerrar con Escape
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeAll();
      });

      /* -------------- Resaltar enlace activo y abrir menú en la página correspondiente -------------- */
      (function markActive() {
        const path = window.location.pathname.split("/").pop(); // nombre del archivo actual
        if (!path) return;
        // Buscar enlaces de submenu que coincidan
        const submenuLinks = Array.from(document.querySelectorAll(".submenu-link, .menu-link"));
        submenuLinks.forEach(a => {
          const href = a.getAttribute("href");
          if (!href) return;
          if (href === path) {
            a.style.background = "#e8f0ff";
            a.style.borderRadius = "6px";
            // Si es un submenu-link, abrir su sub-dropdown y el dropdown principal
            if (a.classList.contains("submenu-link")) {
              const subContent = a.closest(".sub-dropdown-content");
              const subParent = a.closest(".sub-dropdown");
              const mainDropdown = document.querySelector(".dropdown-content");
              if (mainDropdown) mainDropdown.style.display = "block";
              if (subContent) subContent.style.display = "block";
              if (subParent) subParent.classList.add("open");
            }
          }
        });
      })();

      // evitar que los enlaces vacíos '#' aparezcan en historial (opcional)
      // ya prevenimos con e.preventDefault() en toggles

    }, 30); // pequeño delay para asegurar inserción DOM
  });
})();
