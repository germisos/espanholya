// === menu.js versión estable (clic y cierre automático) ===
document.addEventListener("DOMContentLoaded", function () {
  /* Inserta el menú principal */
  const headerHtml = `
  <header class="site-header" style="background:#007bff;color:white;padding:12px;position:fixed;width:100%;top:0;z-index:1000;">
    <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">
      <nav>
        <ul class="main-menu" style="list-style:none;display:flex;gap:12px;padding:0;margin:0;">
          <li><a href="index.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Inicio</a></li>
          
          <li class="dropdown" style="position:relative;">
            <a href="#" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Curso ▾</a>
            <ul class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:1000;min-width:170px;display:none;">

              <!-- NIVEL A1 -->
              <li class="sub-dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel A1 ►</a>
                <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:1001;min-width:200px;display:none;">
                  <li><a href="unidad1.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 1 (Lección)</a></li>
                  <li><a href="ejercicios_unidad1.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U1</a></li>
                  <li><a href="unidad2.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 2 (Lección)</a></li>
                  <li><a href="ejercicios_unidad2.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U2</a></li>
                </ul>
              </li>

              <!-- NIVEL A2 -->
              <li class="sub-dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel A2 ►</a>
                <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:1001;min-width:200px;display:none;">
                  <li><a href="unidad3.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 3 (Lección)</a></li>
                  <li><a href="ejercicios_unidad3.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U3</a></li>
                  <li><a href="unidad4.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 4 (Lección)</a></li>
                  <li><a href="ejercicios_unidad4.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U4</a></li>
                </ul>
              </li>

              <!-- NIVEL B1 -->
              <li class="sub-dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nivel B1 ►</a>
                <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 4px 8px rgba(0,0,0,0.1);z-index:1001;min-width:200px;display:none;">
                  <li><a href="unidad5.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 5 (Lección)</a></li>
                  <li><a href="ejercicios_unidad5.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U5</a></li>
                  <li><a href="unidad6.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 6 (Lección)</a></li>
                  <li><a href="ejercicios_unidad6.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U6</a></li>
                  <li><a href="unidad7.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 7 (Lección)</a></li>
                  <li><a href="ejercicios_unidad7.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U7</a></li>
                  <li><a href="unidad8.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Unidad 8 (Lección)</a></li>
                  <li><a href="ejercicios_unidad8.html" style="color:#333;text-decoration:none;padding:5px 15px;display:block;">Ejercicios U8</a></li>
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


 // Inserta el header en el body
const tmp = document.createElement("div");
tmp.innerHTML = headerHtml;
document.body.insertBefore(tmp.firstElementChild, document.body.firstChild);

// ==========================
//  LÓGICA DE INTERACCIÓN
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/Ocultar menú principal (Curso)
  const mainDropdown = document.querySelector(".dropdown");
  const mainMenu = mainDropdown?.querySelector(".dropdown-content");

  if (mainDropdown && mainMenu) {
    mainDropdown.addEventListener("mouseenter", () => {
      mainMenu.style.display = "block";
    });
    mainDropdown.addEventListener("mouseleave", () => {
      mainMenu.style.display = "none";
    });
  }

  // Mostrar/Ocultar submenús de nivel (A1, A2, B1)
  document.querySelectorAll(".sub-dropdown").forEach(sub => {
    const subMenu = sub.querySelector(".sub-dropdown-content");
    sub.addEventListener("mouseenter", () => {
      subMenu.style.display = "block";
    });
    sub.addEventListener("mouseleave", () => {
      subMenu.style.display = "none";
    });
  });

  // Cierra automáticamente los menús cuando haces clic en una unidad o ejercicio
  document.querySelectorAll('.dropdown-content a, .sub-dropdown-content a').forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-content, .sub-dropdown-content").forEach(el => {
        el.style.display = "none";
      });
    });
  });
});

