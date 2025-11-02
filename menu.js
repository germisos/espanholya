document.addEventListener("DOMContentLoaded", function () {
  // Inserta el menú en la parte superior del body
  const menuHTML = `
    <nav id="mainMenu" class="menu">
      <ul class="menu-list">
        <li class="menu-item"><a href="index.html">Inicio</a></li>
        <li class="menu-item dropdown">
          <a href="#">A1 ▾</a>
          <ul class="submenu">
            <li><a href="unidad1.html">Unidad 1</a></li>
            <li><a href="unidad2.html">Unidad 2</a></li>
            <li><a href="unidad3.html">Unidad 3</a></li>
            <li><a href="unidad4.html">Unidad 4</a></li>
            <li><a href="unidad5.html">Unidad 5</a></li>
            <li><a href="unidad6.html">Unidad 6</a></li>
            <li><a href="unidad7.html">Unidad 7</a></li>
          </ul>
        </li>
        <li class="menu-item dropdown">
          <a href="#">Ejercicios ▾</a>
          <ul class="submenu">
            <li><a href="unidad1_ejercicios.html">Unidad 1</a></li>
            <li><a href="unidad2_ejercicios.html">Unidad 2</a></li>
            <li><a href="unidad3_ejercicios.html">Unidad 3</a></li>
            <li><a href="unidad4_ejercicios.html">Unidad 4</a></li>
            <li><a href="unidad5_ejercicios.html">Unidad 5</a></li>
            <li><a href="unidad6_ejercicios.html">Unidad 6</a></li>
            <li><a href="unidad7_ejercicios.html">Unidad 7</a></li>
          </ul>
        </li>
        <li class="menu-item dropdown">
          <a href="#">Extras ▾</a>
          <ul class="submenu">
            <li><a href="juegos.html">Juegos</a></li>
            <li><a href="audios.html">Audios</a></li>
            <li><a href="videos.html">Videos</a></li>
          </ul>
        </li>
        <li class="menu-item dropdown">
          <a href="#">Material para bajar ▾</a>
          <ul class="submenu">
            <li><a href="material1.pdf" target="_blank">Guía de repaso A1</a></li>
            <li><a href="material2.pdf" target="_blank">Ejercicios imprimibles</a></li>
            <!-- Agregá aquí más materiales descargables -->
          </ul>
        </li>
      </ul>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", menuHTML);

  // ----- CSS general del menú -----
  const style = document.createElement("style");
  style.textContent = `
    .menu {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: #007bff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      font-family: Arial, sans-serif;
    }

    .menu-list {
      display: flex;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .menu-item {
      position: relative;
    }

    .menu-item > a {
      display: block;
      padding: 14px 18px;
      color: white;
      text-decoration: none;
      font-weight: bold;
    }

    .menu-item > a:hover {
      background-color: #0056b3;
    }

    .submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      min-width: 180px;
      z-index: 999;
    }

    .submenu li a {
      color: #333;
      padding: 10px 15px;
      display: block;
      text-decoration: none;
      font-weight: normal;
    }

    .submenu li a:hover {
      background-color: #f2f2f2;
      color: #007bff;
    }

    .menu-item:hover > .submenu {
      display: block;
    }

    /* Espaciado en móvil */
    @media (max-width: 768px) {
      .menu-list {
        flex-direction: column;
      }
      .submenu {
        position: relative;
      }
    }
  `;
  document.head.appendChild(style);

  // ----- Ajuste automático del espacio del menú -----
  const menu = document.getElementById("mainMenu");
  if (menu) {
    const altura = menu.offsetHeight;
    document.body.style.paddingTop = altura + "px";
  }
});
