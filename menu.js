document.addEventListener("DOMContentLoaded", function () {
  const menu = document.createElement("div");
  menu.innerHTML = `
  <nav>
    <ul class="menu">
      <li><a href="index.html">Inicio</a></li>

      <li class="dropdown">
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

      <li class="dropdown">
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

      <li class="dropdown">
        <a href="#">Extras ▾</a>
        <ul class="submenu">
          <li><a href="juegos.html">Juegos</a></li>
          <li><a href="audios.html">Audios</a></li>
          <li><a href="videos.html">Videos</a></li>
        </ul>
      </li>

      <li class="dropdown">
        <a href="#">Material para bajar ▾</a>
        <ul class="submenu">
          <li><a href="material1.pdf" target="_blank">Guía de repaso</a></li>
          <li><a href="material2.pdf" target="_blank">Ejercicios imprimibles</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  `;

  document.body.prepend(menu);

  // Corrige el solapamiento del menú
  const nav = document.querySelector("nav");
  if (nav) {
    const alto = nav.offsetHeight;
    document.body.style.paddingTop = alto + "px";
  }
});
