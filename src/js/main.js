document.getElementById('formulario').addEventListener('submit', function(e) {

    const nuevoevento = {
      nombre: document.getElementById('nombreEvento').value,
      lugar: document.getElementById('lugar').value,
      fechaInicio: document.getElementById('fechaInicio').value,
      fechaFin: document.getElementById('fechaFin').value,
      horario: document.getElementById('horario').value
    };

    let eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    eventosGuardados.push(nuevoEvento);
    localStorage.setItem('eventos', JSON.stringify(eventosGuardados));

    e.target.reset();
  });