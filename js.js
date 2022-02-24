document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length ==0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    var sexo = document.getElementById('sexo').value;
    if (sexo.length ==0) {
      alert('No has escrito nada en el sexo');
      return;
    }
    var edad = document.getElementById('edad').value;
    if (edad.length ==0) {
      alert('No has escrito nada en el edad');
      return;
    }
    this.submit();
  }