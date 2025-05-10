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