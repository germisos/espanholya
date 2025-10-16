document.addEventListener("DOMContentLoaded", function () {
  // 1) Inyectar CSS
  const style = document.createElement("style");
  style.textContent = `
    .site-header {
      background-color: #007bff;
      color: white;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    }
    .site-header .nav-wrap {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 6px 16px;
    }
    .site-header nav ul {
      list-style: none;
      display: flex;
      gap: 8px;
      padding: 0;
      margin: 0;
    }
    .site-header nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      padding: 10px 14px;
      display: block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      background: white;
      color: #222;
      min-width: 230px;
      border-radius: 8px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.12);
      padding: 8px 0;
      z-index: 1200;
      max-height: 60vh;
      overflow-y: auto;
    }
    .dropdown-content a {
      display: block;
      padding: 10px 16px;
      color: #007bff;
      text-decoration: none;
      font-weight: 600;
    }
    .dropdown.open > a {
      background-color: rgba(255,255,255,0.12);
      border-radius: 6px;
    }
  `;
  document.head.appendChild(style);

  // 2) Inyectar HTML del menú
  const headerHtml = `
    <header class="site-header">
      <div class="nav-wrap">
        <nav>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li class="dropdown" id="menu-curso">
              <a href="#" id="curso-toggle">Curso ▾</a>
              <div class="dropdown-content" id="curso-list">
                <a href="unidad1.html">Unidad 1</a>
                <a href="ejercicios_unidad1.html">Ejercicios U1</a>
                <a href="unidad2.html">Unidad 2</a>
                <a href="ejercicios_unidad2.html">Ejercicios U2</a>
                <a href="unidad3.html">Unidad 3</a>
                <a href="unidad4.html">Unidad 4</a>
                <a href="unidad5.html">Unidad 5</a>
                <a href="unidad6.html">Unidad 6</a>
                <a href="unidad7.html">Unidad 7</a>
                <a href="unidad8.html">Unidad 8</a>
              </div>
            </li>
            <li><a href="pago.html">Pago</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  const tmp = document.createElement("div");
  tmp.innerHTML = headerHtml;
  document.body.prepend(tmp.firstChild);

  // 3) Lógica del dropdown
  const menuCurso = document.getElementById("menu-curso");
  const cursoToggle = document.getElementById("curso-toggle");
  const cursoList = document.getElementById("curso-list");

  function openMenu() {
    if (menuCurso && cursoToggle && cursoList) {
      menuCurso.classList.add("open");
      cursoToggle.setAttribute("aria-expanded", "true");
      cursoList.style.display = "flex";
    }
  }

  function closeMenu() {
    if (menuCurso && cursoToggle && cursoList) {
      menuCurso.classList.remove("open");
      cursoToggle.setAttribute("aria-expanded", "false");
      cursoList.style.display = "none";
    }
  }

  closeMenu();

  if (cursoToggle) {
    cursoToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const isOpen = menuCurso.classList.contains("open");
      if (isOpen) closeMenu();
      else openMenu();

      if (window.innerWidth <= 820) {
        menuCurso.classList.toggle("mobile-open");
      } else {
        menuCurso.classList.remove("mobile-open");
      }
    });
  }

  document.addEventListener("click", function (e) {
    if (menuCurso && !menuCurso.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});
