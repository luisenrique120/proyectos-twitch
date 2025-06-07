// Lista de streamers
const streamers = [
  {
    nombre: "Heali",
    descripcion: "hablar de mi vida",
    imagen: "https://images.pexels.com/photos/907240/pexels-photo-907240.jpeg"
  },
  {
    nombre: "yola",
    descripcion: "jugenos uno",
    imagen: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
  },
  {
    nombre: "pol",
    descripcion: "jugenos fifa20",
    imagen: "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg"
  }
];

// Variable global para saber qué streamer está activo
let streamerActual = null;

// Función para mostrar la vista descubrir como en la imagen
function mostrarDescubrir() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = '';

  // Grid de dos columnas para los dos primeros
  const grid = document.createElement('div');
  grid.className = 'stream-grid';
  for (let i = 0; i < 2 && i < streamers.length; i++) {
    const s = streamers[i];
    const div = document.createElement('div');
    div.className = "stream-grid-item";
    div.innerHTML = `
      <div class="stream-img-container">
        <img src="${s.imagen}" alt="${s.nombre}">
        <span class="live-badge">EN VIVO</span>
      </div>
    `;
    grid.appendChild(div);
  }
  lista.appendChild(grid);

  // Botones de categorías
  const categorias = document.createElement('div');
  categorias.className = 'categorias';
  categorias.innerHTML = `
    <button class="cat-btn">juegos</button>
    <button class="cat-btn">irl</button>
    <button class="cat-btn">esports</button>
  `;
  lista.appendChild(categorias);

  // El siguiente stream en una sola columna
  if (streamers.length > 2) {
    const s = streamers[2];
    const div = document.createElement('div');
    div.className = "stream";
    div.innerHTML = `
      <div class=\"stream-img-container\">
        <img src=\"${s.imagen}\" alt=\"${s.nombre}\">
        <span class=\"live-badge\">EN VIVO</span>
      </div>
      <div class=\"stream-info\">
        <h3 class=\"stream-nombre\">${s.nombre}</h3>
        <p class=\"stream-descripcion\">${s.descripcion}</p>
      </div>
    `;
    lista.appendChild(div);
  }
}

// Función para mostrar la vista normal de streams
function mostrarStreamers() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = "";
  streamers.forEach(s => {
    const div = document.createElement('div');
    div.className = "stream";
    div.innerHTML = `
      <div class=\"stream-img-container\">
        <img src=\"${s.imagen}\" alt=\"${s.nombre}\">
        <span class=\"live-badge\">EN VIVO</span>
      </div>
      <div class=\"stream-info\">
        <h3 class=\"stream-nombre\">${s.nombre}</h3>
        <p class=\"stream-descripcion\">${s.descripcion}</p>
      </div>
    `;
    lista.appendChild(div);
  });
}

// Función para mostrar la vista de búsqueda
function mostrarBuscar() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="barra-busqueda">
      <input type="text" id="input-buscar" placeholder="buscar">
      <span class="icono-buscar">
        <svg width="24" height="24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </span>
    </div>
  `;
}

// Función para mostrar la pantalla para transmitir en vivo
function mostrarTransmitir() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="transmitir-container">
      <div class="transmitir-card">
        <div class="transmitir-play">
          <svg viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="25" fill="none"/>
            <polygon points="20,15 38,25 20,35" />
          </svg>
        </div>
        <input class="transmitir-titulo" type="text" placeholder="¿Qué estás haciendo?" />
      </div>
      <button class="transmitir-boton">transmitir</button>
    </div>
  `;
}

function mostrarBienvenida() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="bienvenida-container">
      <div class="bienvenida-avatar"></div>
      <div class="bienvenida-titulo">¡Bienvenido, invitado!</div>
      <div class="bienvenida-texto">
        Únete para disfrutar de todas las funciones. Regístrate o inicia sesión para comenzar a transmitir y seguir a tus streamers favoritos.
      </div>
      <button class="bienvenida-btn" id="btn-signup">Registrarse</button>
      <div class="bienvenida-link" id="btn-login">Iniciar sesión</div>
    </div>
  `;

  document.getElementById('btn-signup').onclick = function() {
    alert('Aquí iría el formulario de registro.');
  };
  document.getElementById('btn-login').onclick = function() {
    alert('Aquí iría el formulario de inicio de sesión.');
  };
}

function mostrarRegistro() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="signup-header">Crear cuenta</div>
    <div class="signup-container">
      <div class="signup-avatar"></div>
      <form class="signup-form">
        <input type="text" placeholder="Nombre completo" required>
        <input type="text" placeholder="Usuario" required>
        <input type="email" placeholder="Correo electrónico" required>
        <input type="password" placeholder="Contraseña" required>
        <input type="password" placeholder="Confirmar contraseña" required>
        <button type="submit" class="signup-btn">Registrarse</button>
      </form>
      <div class="signup-link" id="link-login">¿Ya tienes cuenta? Inicia sesión</div>
    </div>
  `;

  // Evento para el botón de login
  document.getElementById('link-login').onclick = function() {
    mostrarLogin();
  };

  // Evento para el submit del formulario
  document.querySelector('.signup-form').onsubmit = function(e) {
    e.preventDefault();
    alert('¡Registro enviado!');
  };
}

function mostrarLogin() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="login-header">Iniciar sesión</div>
    <div class="login-container">
      <div class="login-avatar"></div>
      <form class="login-form">
        <input type="text" placeholder="Usuario" required>
        <input type="password" placeholder="Contraseña" required>
        <button type="submit" class="login-btn">Iniciar sesión</button>
      </form>
      <div class="login-link" id="link-signup">¿No tienes cuenta? Regístrate</div>
    </div>
  `;

  // Evento para el botón de registro
  document.getElementById('link-signup').onclick = function() {
    mostrarRegistro();
  };

  // Evento para el submit del formulario
  document.querySelector('.login-form').onsubmit = function(e) {
    e.preventDefault();
    alert('¡Inicio de sesión exitoso!');
  };
}

function mostrarTransmision(streamer) {
  streamerActual = streamer;
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="transmision-header">
      <video id="video-stream" src="https://www.w3schools.com/html/mov_bbb.mp4" poster="${streamer.imagen}" controls style="width:100%;max-height:220px;border-radius:0 0 0 0;object-fit:cover;background:#222;"></video>
      <div class="transmision-barra">
        <span class="transmision-nombre">${streamer.nombre}</span>
      </div>
    </div>
    <div class="transmision-donar-bar">
      <button class="donar-btn" id="btn-donar">Donar</button>
      <button class="suscribir-btn" id="btn-suscribir">Suscribirse</button>
    </div>
    <div class="transmision-chat">
      <div class="chat-mensajes" id="chat-mensajes">
        <div><span style="color:#7fffd4;">GivePLZ:</span> 👋🏽</div>
        <div><span style="color:#1e90ff;">FrankerZ:</span> Maybe i should get back to playing it.</div>
        <div><span style="color:#1e90ff;">FrankerZ:</span> Haven't played since it came out and it looks like there have been a ton of updates.</div>
        <div><span style="color:#b388ff;">CoolCat:</span> It's so good now. Lots better since the second big patch.</div>
        <div><span style="color:#ffd700;">PogChamp:</span> You still have time to finish the seasonal stuff before the new one next month.</div>
        <div><span style="color:#ffb347;">StinkyCheese:</span> How long does that take?</div>
        <div><span style="color:#b388ff;">CoolCat:</span> About a week if you really grind it out</div>
        <div><span style="color:#7fffd4;">GivePLZ:</span> 🖥️💻 ULTRA SETTINGS</div>
        <div><span style="color:#b388ff;">CoolCat:</span> What equipment is she using right now?</div>
        <div><span style=\"color:#ffd700;\">Kappa:</span> just a totally normal affordable everyday pc 😁</div>
        <div><span style=\"color:#ffd700;\">PogChamp:</span> wow will this be like the 10th win of the day??</div>
      </div>
      <div class="chat-input-bar">
        <input type="text" id="chat-input" placeholder="enviar">
        <button id="chat-enviar" class="chat-enviar-btn">
          <svg width="32" height="32" viewBox="0 0 32 32"><polygon points="2,30 30,16 2,2 2,13 22,16 2,19" fill="#2196f3"/></svg>
        </button>
      </div>
    </div>
  `;

  // Enviar mensaje al chat
  document.getElementById('chat-enviar').onclick = function() {
    const input = document.getElementById('chat-input');
    if(input.value.trim() !== '') {
      const chat = document.getElementById('chat-mensajes');
      chat.innerHTML += `<div class="chat-mensaje"><span class="chat-nombre">Tú:</span> ${input.value}</div>`;
      input.value = '';
      chat.scrollTop = chat.scrollHeight;
    }
  };

  // Botón de donaciones
  const btnDonar = document.getElementById('btn-donar');
  if(btnDonar) btnDonar.onclick = mostrarDonacion;

  // Botón de suscripciones
  const btnSuscribir = document.getElementById('btn-suscribir');
  if(btnSuscribir) btnSuscribir.onclick = mostrarSuscripcion;
}

function mostrarDonacion() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="donacion-header">Donar</div>
    <div class="donacion-container">
      <div class="donacion-monto">
        <label for="monto">Cantidad a donar:</label>
        <input type="number" id="monto" min="1" placeholder="Ej: 50">
      </div>
      <div class="donacion-metodos">
        <div class="metodo-pago" data-metodo="tarjeta">
          <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png" alt="Tarjeta" />
          Tarjeta
        </div>
        <div class="metodo-pago" data-metodo="paypal">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="PayPal" />
          PayPal
        </div>
      </div>
      <form id="form-metodo-pago"></form>
      <button class="donar-btn" id="btn-confirmar-donacion">Confirmar donación</button>
      <div class="donacion-link" id="volver-transmision">Volver a la transmisión</div>
    </div>
  `;

  // Evento para volver a la transmisión
  document.getElementById('volver-transmision').onclick = function() {
    if (streamerActual) mostrarTransmision(streamerActual);
  };

  // Selección visual y campos de método de pago
  document.querySelectorAll('.metodo-pago').forEach(el => {
    el.onclick = function() {
      document.querySelectorAll('.metodo-pago').forEach(m => m.classList.remove('metodo-activo'));
      el.classList.add('metodo-activo');
      const metodo = el.getAttribute('data-metodo');
      const form = document.getElementById('form-metodo-pago');
      if (metodo === 'tarjeta') {
        form.innerHTML = `
          <div class="campo-pago">
            <label>Número de tarjeta:</label>
            <input type="text" maxlength="19" placeholder="1234 5678 9012 3456" required>
          </div>
          <div class="campo-pago">
            <label>Nombre en la tarjeta:</label>
            <input type="text" placeholder="Como aparece en la tarjeta" required>
          </div>
          <div class="campo-pago-flex">
            <div>
              <label>Fecha:</label>
              <input type="text" maxlength="5" placeholder="MM/AA" required>
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" maxlength="4" placeholder="123" required>
            </div>
          </div>
        `;
      } else if (metodo === 'paypal') {
        form.innerHTML = `
          <div class="campo-pago">
            <label>Correo de PayPal:</label>
            <input type="email" placeholder="correo@ejemplo.com" required>
          </div>
        `;
      }
    };
  });

  // Evento para confirmar donación
  document.getElementById('btn-confirmar-donacion').onclick = function(e) {
    const monto = document.getElementById('monto').value;
    const metodo = document.querySelector('.metodo-pago.metodo-activo');
    if (!monto || monto <= 0) {
      alert('Por favor, ingresa una cantidad válida.');
      return;
    }
    if (!metodo) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }
    // Validación de campos del método de pago
    const form = document.getElementById('form-metodo-pago');
    const inputs = form.querySelectorAll('input[required]');
    for (let input of inputs) {
      if (!input.value.trim()) {
        alert('Por favor, completa todos los campos del método de pago.');
        return;
      }
    }
    alert('¡Gracias por tu donación de $' + monto + ' por ' + metodo.textContent.trim() + '!');
    if (streamerActual) mostrarTransmision(streamerActual);
  };
}

function mostrarSuscripcion() {
  const lista = document.querySelector('.stream-list');
  lista.innerHTML = `
    <div class="donacion-header">Suscribirse</div>
    <div class="donacion-container">
      <div class="donacion-monto">
        <label for="plan-suscripcion">Plan de suscripción:</label>
        <select id="plan-suscripcion">
          <option value="Tier 1">$50 - Tier 1</option>
          <option value="Tier 2">$100 - Tier 2</option>
          <option value="Tier 3">$250 - Tier 3</option>
        </select>
      </div>
      <div class="donacion-metodos">
        <div class="metodo-pago" data-metodo="tarjeta">
          <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png" alt="Tarjeta" />
          Tarjeta
        </div>
        <div class="metodo-pago" data-metodo="paypal">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="PayPal" />
          PayPal
        </div>
      </div>
      <form id="form-metodo-pago"></form>
      <button class="donar-btn" id="btn-confirmar-suscripcion">Confirmar suscripción</button>
      <div class="donacion-link" id="volver-transmision">Volver a la transmisión</div>
    </div>
  `;

  // Evento para volver a la transmisión
  document.getElementById('volver-transmision').onclick = function() {
    if (streamerActual) mostrarTransmision(streamerActual);
  };

  // Selección visual y campos de método de pago
  document.querySelectorAll('.metodo-pago').forEach(el => {
    el.onclick = function() {
      document.querySelectorAll('.metodo-pago').forEach(m => m.classList.remove('metodo-activo'));
      el.classList.add('metodo-activo');
      const metodo = el.getAttribute('data-metodo');
      const form = document.getElementById('form-metodo-pago');
      if (metodo === 'tarjeta') {
        form.innerHTML = `
          <div class="campo-pago">
            <label>Número de tarjeta:</label>
            <input type="text" maxlength="19" placeholder="1234 5678 9012 3456" required>
          </div>
          <div class="campo-pago">
            <label>Nombre en la tarjeta:</label>
            <input type="text" placeholder="Como aparece en la tarjeta" required>
          </div>
          <div class="campo-pago-flex">
            <div>
              <label>Fecha:</label>
              <input type="text" maxlength="5" placeholder="MM/AA" required>
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" maxlength="4" placeholder="123" required>
            </div>
          </div>
        `;
      } else if (metodo === 'paypal') {
        form.innerHTML = `
          <div class="campo-pago">
            <label>Correo de PayPal:</label>
            <input type="email" placeholder="correo@ejemplo.com" required>
          </div>
        `;
      }
    };
  });

  // Evento para confirmar suscripción
  document.getElementById('btn-confirmar-suscripcion').onclick = function(e) {
    const plan = document.getElementById('plan-suscripcion').value;
    const metodo = document.querySelector('.metodo-pago.metodo-activo');
    const form = document.getElementById('form-metodo-pago');
    if (!metodo) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }
    // Validación de campos del método de pago
    const inputs = form.querySelectorAll('input[required]');
    for (let input of inputs) {
      if (!input.value.trim()) {
        alert('Por favor, completa todos los campos del método de pago.');
        return;
      }
    }
    alert('¡Suscripción realizada con éxito al plan ' + plan + ' por ' + metodo.textContent.trim() + '!');
    if (streamerActual) mostrarTransmision(streamerActual);
  };
}

// Botón descubrir
const btnDescubrir = document.getElementById('btn-descubrir');
if(btnDescubrir) btnDescubrir.onclick = mostrarDescubrir;

// Botón crear
document.querySelector('.crear-btn').onclick = mostrarTransmitir;

// Botón buscar
const btnBuscar = document.getElementById('btn-buscar');
if(btnBuscar) btnBuscar.onclick = mostrarBuscar;

// Botón del perfil
const btnPerfil = document.querySelector('.profile');
if(btnPerfil) btnPerfil.onclick = mostrarBienvenida;

// Mostrar la vista normal al cargar
mostrarStreamers();

// Asocia el botón de registro a esta función
// (Asegura que funcione aunque el contenido se regenere dinámicamente)
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'btn-signup') {
    mostrarRegistro();
  }
});

// Asocia el botón de login a esta función
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'btn-login') {
    mostrarLogin();
  }
});

// Asocia cada streamer a esta función
document.addEventListener('click', function(e) {
  // Si se hace clic en una imagen de streamer
  if (e.target && e.target.closest('.stream-img-container')) {
    // Busca el nombre del streamer en el DOM
    const nombre = e.target.closest('.stream').querySelector('.stream-info h3').textContent;
    // Busca el streamer en el array
    const streamer = streamers.find(s => s.nombre === nombre);
    if (streamer) mostrarTransmision(streamer);
  }
  // Para el grid de descubrir
  if (e.target && e.target.closest('.stream-grid-item')) {
    const nombre = e.target.closest('.stream-grid-item').querySelector('img').alt;
    const streamer = streamers.find(s => s.nombre === nombre);
    if (streamer) mostrarTransmision(streamer);
  }
});

// Alternar modo claro/oscuro
const btnModo = document.getElementById('modo-toggle');
if (btnModo) {
  btnModo.onclick = function() {
    const body = document.body;
    if (body.classList.contains('modo-oscuro')) {
      body.classList.remove('modo-oscuro');
      body.classList.add('modo-claro');
      btnModo.textContent = '🌙';
    } else {
      body.classList.remove('modo-claro');
      body.classList.add('modo-oscuro');
      btnModo.textContent = '☀️';
    }
  };
  // Por defecto, modo oscuro
  document.body.classList.add('modo-oscuro');
  btnModo.textContent = '☀️';
} 