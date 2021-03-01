function validarFormulario(input) {
  //console.log("funcion validarFormulario");
  if (input.value.trim() === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}

function validarDescripcion(texto) {
  if (texto.value.trim() != "" && texto.value.length >= 15) {
    texto.className = "form-control is-valid";
    return true;
  } else {
    texto.className = "form-control is-invalid";
    return false;
  }
}


/*function validarGeneral(){
if (validarFormulario(document.getElementById('codigo')) ==
validarFormulario(document.getElementById('nombre')) ==
validarFormulario(document.getElementById('numSerie')) ==
validarFormulario(document.getElementById('categoria')) ==
validarDescripcion(document.getElementById('descripcion')) == 
validarFormulario(document.getElementById('imagen')) == true);
console.log('validacion correcta')
}*/

//export {validarGeneral };

//function validarGeneral(event)

//export { validarFormulario } 


