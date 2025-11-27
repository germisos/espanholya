// menu.js - versión robusta con bloque "Material del Curso" mejorado 
(function () {
  if (window.__MENU_JS_LOADED) return;
  window.__MENU_JS_LOADED = true;

  document.addEventListener("DOMContentLoaded", function () {
    try {
      console.log("menu.js: inicializando...");

      const headerHtml = `
      <header id="mainHeader" class="site-header" style="background:#007bff;color:white;padding:12px;position:fixed;width:100%;top:0;z-index:1000;">
        <div class="nav-wrap" style="max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:20px;">

          <nav style="flex-grow:1;">
            <ul class="main-menu" style="list-style:none;display:flex;gap:12px;padding:0;margin:0;">
              <li><a href="index.html" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Início</a></li>

              <!-- CURSO -->
              <li class="dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:white;text-decoration:none;font-weight:bold;">Curso ▾</a>
                <ul class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1000;min-width:180px;display:none;">

                  <!-- NIVEL A1 -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Nível A1 ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:220px;display:none;">
                      <li><a href="unidad1.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidade 1 (Lição)</a></li>
                      <li><a href="ejercicios_unidad1.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Exercícios U1</a></li>
                      <li><a href="unidad2.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidade 2 (Lição)</a></li>
                      <li><a href="ejercicios_unidad2.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Exercícios U2</a></li>
                      <li><a href="unidad3.html" style="color:#333;text-decoration:none;padding:8px 15px;display:block;">Unidade 3 (Lição)</a></li>
                      <li><a href="ejercicios_unidad3.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U3</a></li>
                      <li><a href="unidad4.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 4 (Lição)</a></li>
                      <li><a href="ejercicios_unidad4.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U4</a></li>
                    </ul>
                  </li>

                  <!-- NIVEL A2 -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Nível A2 ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:220px;display:none;">
                      <li><a href="unidad5.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 5 (Lição)</a></li>
                      <li><a href="ejercicios_unidad5.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U5</a></li>
                      <li><a href="unidad6.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 6 (Lição)</a></li>
                      <li><a href="ejercicios_unidad6.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U6</a></li>
                      <li><a href="unidad7.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 7 (Lição)</a></li>
                      <li><a href="ejercicios_unidad7.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U7</a></li>
                    </ul>
                  </li>

                  <!-- NIVEL B1 -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Nível B1 ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:220px;display:none;">
                      <li><a href="unidad8.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 8 (Lição)</a></li>
                      <li><a href="ejercicios_unidad8.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U8</a></li>
                      <li><a href="unidad9.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 9 (Lição)</a></li>
                      <li><a href="ejercicios_unidad9.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U9</a></li>
                      <li><a href="unidad10.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Unidade 10 (Lição)</a></li>
                      <li><a href="ejercicios_unidad10.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Exercícios U10</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <!-- OTROS ENLACES -->
              <li><a href="pago.html" class="menu-link" style="color:white;textDecoration:none;font-weight:bold;">Pagamento</a></li>
              <li><a href="contacto.html" class="menu-link" style="color:white;textDecoration:none;font-weight:bold;">Contato</a></li>

              <!-- NUEVO BLOQUE: EXTRAS -->
              <li class="dropdown" style="position:relative;">
                <a href="#" class="menu-link" style="color:white;textDecoration:none;font-weight:bold;">Extras ▾</a>
                <ul class="dropdown-content" style="position:absolute;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1000;min-width:200px;display:none;">
                  
                  <li><a href="dialogos_audios.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Diálogos e Áudios</a></li>
                  <li><a href="vocabulario.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Vocabulário</a></li>

                  <!-- Submenú de Material -->
                  <li class="sub-dropdown" style="position:relative;">
                    <a href="#" class="menu-link" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">Material do Curso ►</a>
                    <ul class="sub-dropdown-content" style="position:absolute;top:0;left:100%;background:white;list-style:none;padding:8px 0;margin:0;box-shadow:0 6px 18px rgba(0,0,0,0.12);z-index:1001;min-width:200px;display:none;">
                      <li><a href="libro.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">📘 Livro Principal</a></li>
                      <li><a href="audios.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">🎧 Áudios do Curso</a></li>
                      <li><a href="recursos.html" style="color:#333;textDecoration:none;padding:8px 15px;display:block;">🗂️ Recursos para Download</a></li>
                    </ul>
                  </li>

                </ul>
              </li>

            </ul>
          </nav>

          <!-- 🔵 BLOCO AUTH À DIREITA -->
          <div id="authButtons" style="margin-left:auto;display:flex;gap:10px;">
            <button id="btnLogin" style="padding:6px 12px;border:none;border-radius:4px;background:white;color:#007bff;font-weight:bold;cursor:pointer;">Entrar</button>
            <button id="btnRegister" style="padding:6px 12px;border:none;border-radius:4px;background:#28a745;color:white;font-weight:bold;cursor:pointer;">Criar conta</button>
          </div>

        </div>
      </header>
      `;

      // comportamiento del menú
      const existing = document.getElementById("mainHeader");
      if (existing) existing.remove();

      const tmp = document.createElement("div");
      tmp.innerHTML = headerHtml;
      const headerNode = tmp.firstElementChild;
      if (!headerNode) return;
      document.body.insertBefore(headerNode, document.body.firstElementChild);

      const dropdowns = document.querySelectorAll(".dropdown, .sub-dropdown");
      dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector(".dropdown-content, .sub-dropdown-content");
        const title = dropdown.querySelector(".menu-link");
        if (!content || !title) return;

        dropdown.addEventListener("mouseenter", () => content.style.display = "block");
        dropdown.addEventListener("mouseleave", () => content.style.display = "none");
        title.addEventListener("click", ev => {
          ev.preventDefault();
          content.style.display = (content.style.display === "block") ? "none" : "block";
        });
      });

      document.addEventListener("click", (e) => {
        const header = document.getElementById("mainHeader");
        if (!header.contains(e.target)) {
          document.querySelectorAll(".dropdown-content, .sub-dropdown-content").forEach(menu => {
            menu.style.display = "none";
          });
        }
      });

      const style = document.createElement("style");
      style.textContent = `
        #mainHeader, #mainHeader * {
          font-family: Arial, sans-serif !important;
          font-size: 15px !important;
          line-height: 1.4 !important;
          box-sizing: border-box;
        }
        #mainHeader .menu-link { color: white !important; text-decoration: none !important; font-weight: bold !important; }
        #mainHeader .dropdown-content a, #mainHeader .sub-dropdown-content a {
          color: #333 !important;
          background: white !important;
          padding: 8px 15px !important;
          display: block !important;
        }
        #mainHeader .dropdown-content a:hover, #mainHeader .sub-dropdown-content a:hover {
          background: #007bff !important;
          color: white !important;
        }
      `;
      document.head.appendChild(style);

      // 🔵 EVENTOS AUTH - redirección a páginas reales
document.getElementById("btnLogin")?.addEventListener("click", () => {
  window.location.href = "login.html";
});

document.getElementById("btnRegister")?.addEventListener("click", () => {
  window.location.href = "registro.html";
});

      console.log("menu.js actualizado con login/registro");
    } catch (err) {
      console.error("menu.js error:", err);
    }
  });
})();
