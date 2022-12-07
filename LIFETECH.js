var Nombre, Apellido, Correo, Telefono, Comentario;

Nombre = document.getElementById("Nombre").value;
Apellido = document.getElementById("Apellido").value;
Correo = document.getElementById("Correo").value;
Telefono = document.getElementById("Telefono").value;
Comentario = document.getElementById("Comentario").value;

 
function validarFormulario(evento) {
    evento.preventDefault();
    if(Nombre.length == 0) {
      alert("Datos invalidos");
      return;
    }
    if(Apellido.length == 0) {
        alert("Datos invalidos");
        return;
      }
      if(Correo.length == 0) {
        alert("Datos invalidos");
        return;
      }
      if(Telefono.length == 0) {
        alert("Datos invalidos");
        return;
      }                     
    
    document.formulario_correo.submit();
  }

function limpiarFormulario(){

    document.getElementById("formulario_correo").reset();
  }
