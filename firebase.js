<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBI6sD0mx6KAhForbnm9ai_tDCO39LlNnI",
    authDomain: "espanholya-f50c2.firebaseapp.com",
    projectId: "espanholya-f50c2",
    storageBucket: "espanholya-f50c2.firebasestorage.app",
    messagingSenderId: "787039465837",
    appId: "1:787039465837:web:90c5ea37b270b076a9aa64"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Hacemos auth disponible globalmente
  window._auth = auth;
</script>
