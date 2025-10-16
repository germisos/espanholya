// menu.js — inyecta header + estilos y controla el dropdown con clic
(function () {
  // 1) CSS inyectado
  const css = `
/* ---------- HEADER / MENU ---------- */
.site-header {
  background-color: #007bff;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}
.site-header .nav-wrap {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 6px 16px;
}
.site-header nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 8px; align-items: center; }
.site-header nav li { position: relative; }
.site-header nav a {
  display: block;
  color: white;
  padding: 10px 14px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
}
.site-header nav a:hover { background-color: rgba(0,0,0,0.08); border-radius: 6px; }

/* Dropdown */
.dropdown-content {
  display: none;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background: #fff;
  color: #222;
  min-width: 230px;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  padding: 8px 0;
  z-index: 1200;
  max-height: 60vh; /* importante: limita altura para muchas unidades */
  overflow-y: auto;  /* añade scroll si hay muchos items */
  -webkit-overflow-scrolling: touch;
}

/* Items Dropdown */
.dropdown-content a {
  display: block;
  padding: 10px 16px;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}
.dropdown-content a:hover { background: #f2f2f2; }

/* Mobile: menú vertical si la pantalla es pequeña */
@media (max-width: 820px) {
  .site-header .nav-wrap { padding: 8px 12px; }
  .site-header nav ul { flex-direction: row; gap: 6px; }
  /* el dropdown será relative (no absolute) cuando esté en modo mobile-open */
  .dropdown.mobile-open .dropdown-content {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
  }
}

/* 'open' helper class */
.dropdown.open > a { background-color: rgba(255,255,255,0.12); border-radius: 6px; }
`;

  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // 2) HTML del header (usa rutas relativas; edítalas si tu proyecto tiene otra estructura)
  const headerHtml = `
<header class="site-header" role="banner">
  <div class="nav-wrap">
    <nav role="navigation" aria-label="Principal">
      <ul>
        <li><a href="index.html">Inicio</a></li>

        <li class="dropdown" id="menu-curso">
          <a href="#" id="curso-toggle" aria-haspopup="true" aria-expanded="false">Curso ▾</a>
          <div class="dropdown-content" id="curso-list" role="menu" aria-label="Lista de unidades">
            <!-- Aquí están las unidades; puedes editar o generar más adelante -->
            <a href="unidad1.html" role="menuitem">Unidad 1 (Lección)</a>
            <a href="ejercicios_unidad1.html" role="menuitem">Ejercicios U1</a>
            <a href="unidad2.html" role="menuitem">Unidad 2 (Lección)</a>
            <a href="ejercicios_unidad2.html" role="menuitem">Ejercicios U2</a>
            <a href="unidad3.html" role="menuitem">Unidad 3</a>
            <a href="unidad4.html" role="menuitem">Unidad 4</a>
            <a href="unidad5.html" role="menuitem">Unidad 5</a>
            <a href="unidad6.html" role="menuitem">Unidad 6</a>
            <a href="unidad7.html" role="menuitem">Unidad 7</a>
            <a href="unidad8.html" role="menuitem">Unidad 8</a>
          </div>
        </li>

        <li><a href="pago.html">Pago</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

  // Insertar el header al inicio del body (antes del primer elemento)
  const body = document.body;
  const tmp = document.createElement("div");
  tmp.innerHTML = headerHtml;
  // insertar al principio del body
  if (body.firstChild) body.insertBefore(tmp.firstChild, body.firstChild);
  else body.appendChild(tmp.firstChild);

  // 3) lógica para abrir/cerrar el dropdown con clic (y cerrar al clicar fuera)
  const menuCurso = document.getElementById("menu-curso");
  const cursoToggle = document.getElementById("curso-toggle");
  const cursoList = document.getElementById("curso-list");

  function openMenu() {
    menuCurso.classList.add("open");
    cursoToggle.setAttribute("aria-expanded", "true");
    cursoList.style.display = "flex";
  }
  function closeMenu() {
    menuCurso.classList.remove("open");
    cursoToggle.setAttribute("aria-expanded", "false");
    cursoList.style.display = "none";
  }

  // inicial: oculto
  closeMenu();

  // toggle con clic
  cursoToggle.addEventListener("click", function (e) {
    e.preventDefault();
    const isOpen = menuCurso.classList.contains("open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  // cerrar al hacer clic fuera
  document.addEventListener("click", function (e) {
    if (!menuCurso.contains(e.target)) {
      closeMenu();
    }
  });

  // cerrar con Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // En pantallas pequeñas, si alguien abre el dropdown, añadimos clase mobile-open para estilos
  function handleResize() {
    const w = window.innerWidth;
    if (w <= 820) {
      // en mobile dejamos el dropdown como relative cuando se abra
      // no hacemos nada aquí; la clase .mobile-open la ponemos cuando se abre
    }
  }

  // Cuando se abre en mobile, añadir clase para estilos
  cursoToggle.addEventListener("click", function () {
    if (window.innerWidth <= 820) {
      menuCurso.classList.toggle("mobile-open");
    } else {
      menuCurso.classList.remove("mobile-open");
    }
  });

  window.addEventListener("resize", handleResize);
})();
