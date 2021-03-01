function validarGeneral(){
    if (validarFormulario(document.getElementById('codigo')) ==
    validarFormulario(document.getElementById('nombre')) ==
    validarFormulario(document.getElementById('numSerie')) ==
    validarFormulario(document.getElementById('categoria')) ==
    validarDescripcion(document.getElementById('descripcion')) == 
    validarFormulario(document.getElementById('imagen')) == true);
    console.log('validacion correcta')
    }


export { validarGeneral};