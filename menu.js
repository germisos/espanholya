// === menu.js versión estable (clic y cierre automático) ===
document.addEventListener("DOMContentLoaded", function () {
  /* Inserta el menú principal */
  const headerHtml = `
  <header class="site-header" style="background:#007bff;color:white;padding:12px;position:fixed;width:100%;top:0;z-index:1000;">
    <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">
      <nav>
        <ul class="main-menu" style="list-style:none;display:flex;gap:12px;padding:0;margin:0;align-items:center;">
          <li><a href="index.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Inicio</a></li>
          <li class="dropdown" style="position:relative;">
            <a href="#" class="menu-link curso-toggle" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Curso ▾</a>
            <ul class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:1000;min-width:220px;display:none;">
              <li><a href="unidad1.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 1 (Lección)</a></li>
              <li><a href="ejercicios_unidad1.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U1</a></li>
              <li><a href="unidad2.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Unidad 2 (Lección)</a></li>
              <li><a href="ejercicios_unidad2.html" class="submenu-link" style="color:#333;padding:8px 16px;display:block;text-decoration:none;">Ejercicios U2</a></li>
            </ul>
          </li>
          <li><a href="pago.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Pago</a></li>
          <li><a href="contacto.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;padding:8px 10px;display:block;">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
  `;

  const container = document.querySelector(".header") || document.body;
  container.insertAdjacentHTML("afterbegin", headerHtml);

  // --- Funcionalidad del menú ---
  const toggle = document.querySelector(".curso-toggle");
  const dropdown = document.querySelector(".dropdown-content");

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  // Cierra el menú al hacer clic en cualquier enlace dentro de él
  dropdown.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      dropdown.style.display = "none";
    });
  });

  // Cierra el menú si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdown.style.display = "none";
    }
  });

  // Cerrar menú con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dropdown.style.display = "none";
  });

  // Eliminar el color blanco del foco
  const style = document.createElement("style");
  style.textContent = `
    a:focus, a:active {
      outline: none !important;
      background: transparent !important;
      color: inherit !important;
      box-shadow: none !important;
    }
    .menu-link:focus, .menu-link:active {
      background: #007bff !important;
      color: white !important;
    }
  `;
  document.head.appendChild(style);
});
