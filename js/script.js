
AOS.init();

document.getElementById('formReserva').addEventListener('submit', function(e) {
  e.preventDefault();
  
  Swal.fire({
    title: '¡Reservación Exitosa!',
    text: 'Gracias por elegirnos. Hemos recibido tu reserva.',
    icon: 'success',
    confirmButtonText: 'Cerrar'
  });

  this.reset(); 
  const modalReserva = bootstrap.Modal.getInstance(document.getElementById('modalReserva'));
  modalReserva.hide(); 
});


