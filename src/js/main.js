document.getElementById('formulario').addEventListener('submit', function(e) {

    const evento = {
      nombre: document.getElementById('nombreEvento').value,
      lugar: document.getElementById('lugar').value,
      fechaInicio: document.getElementById('fechaInicio').value,
      fechaFin: document.getElementById('fechaFin').value,
      horario: document.getElementById('horario').value
    };


    localStorage.setItem('eventoGuardado', JSON.stringify(evento));
  });