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
