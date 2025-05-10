function mostrarCarga(event) {
      event.preventDefault(); // evita el salto inmediato
  
      const loader = document.getElementById('svgLoader');
      loader.classList.add('active');
  
      const targetId = event.target.getAttribute('href');
  
      // Espera antes de navegar a la sección
      setTimeout(() => {
        loader.classList.remove('active');
        window.location.href = targetId;
      }, 1500); // 1.5 segundos de "carga"
    }

/* Funcion para verificar si el navegador es compatible con la geolocalizacion y mostrar
su ubicacion*/

function GeoLocalization(){
    var output = document.getElementById('mapa');
    if (navigator.geolocation){
        output.innerHTML="<p>Tu dispositivo o navegador soporta la geolocalizacion!.";
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.innerHTML="<p>Tu dispositivo o navegador no soporta la geolocalizacion!</p>";
    }
}

// funcion para obtener la ubicacion del usuario
function showPosition(position){
    document.getElementById("info").innerHTML = `
        <ul>
            <li>Latitud: 31.4924296</li>
            <li>Longitud: -106.4147991</li>
        </ul>
    `;

}

//funcion para mostrar errores
function showError(error){
    const d = document.getElementById("info");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            d.innerHTML+="<p>El usuario ha denegado el permiso a la localizacion.</p>";
            break;
        case error.POSITION_UNAVAILABLE:
            d.innerHTML+="<p>La informacion de la localizacion no esta disponible.</p>";
            break;
        case error.TIMEOUT:
            d.innerHTML+="<p>El tiempo de espera para buscar la localizacion ha espirado.</p>";
            break;
        case error.UNKNOWN_ERROR:
            d.innerHTML+="<p>Ha ocurrido un error desconocido.</p>";
            break;
    }
}

// seccion de canvas
// flor 
const c1 = document.getElementById("canvas1").getContext("2d");
c1.fillStyle = "green";
c1.fillRect(95, 100, 10, 70);
for (let i = 0; i < 8; i++) {
  c1.beginPath();
  c1.fillStyle = "pink";
  const angle = i * Math.PI / 4;
  c1.ellipse(100 + Math.cos(angle) * 25, 100 + Math.sin(angle) * 25, 15, 25, angle, 0, 2 * Math.PI);
  c1.fill();
}
c1.beginPath();
c1.arc(100, 100, 10, 0, 2 * Math.PI);
c1.fillStyle = "yellow";
c1.fill();

// Corazon
const c2 = document.getElementById("canvas2").getContext("2d");
c2.fillStyle = "red";
c2.beginPath();
c2.moveTo(100, 130);
c2.bezierCurveTo(100, 120, 80, 90, 60, 100);
c2.bezierCurveTo(30, 120, 100, 170, 100, 170);
c2.bezierCurveTo(100, 170, 170, 120, 140, 100);
c2.bezierCurveTo(120, 90, 100, 120, 100, 130);
c2.fill();

// Dedicatoria
const c3 = document.getElementById("canvas3").getContext("2d");
c3.font = "16px Comic Sans MS";
c3.fillStyle = "purple";
c3.fillText("Te quiero mama", 40, 90);
c3.fillText("¡Feliz día!", 65, 120);

// Sol sonriente
const c4 = document.getElementById("canvas4").getContext("2d");
c4.beginPath();
c4.arc(100, 100, 40, 0, 2 * Math.PI);
c4.fillStyle = "yellow";
c4.fill();
c4.stroke();
c4.beginPath();
c4.arc(85, 90, 5, 0, 2 * Math.PI);
c4.arc(115, 90, 5, 0, 2 * Math.PI);
c4.fillStyle = "black";
c4.fill();
c4.beginPath();
c4.arc(100, 110, 15, 0, Math.PI);
c4.stroke();