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

