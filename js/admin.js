import { Funko } from "./funkoClass.js";

let listaFunkopop = [];
const modalProducto = new bootstrap.Modal(document.getElementById('modalFunkopop'));
let btnAgregar = document.getElementById('btnAgregar');

btnAgregar.addEventListener('click', function(){
    modalProducto.show();
})


//let nuevoFunkopop = new Funko(1, "asdfsdfs", "adadf23", "dc", "adfafas", "adfa")
//console.log(nuevoFunkopop)

window.agregarFunkopop = function(event) {
    event.preventDefault();
    console.log("dentro de agregar funko");


//hacer funcion validar general e importarla acá
//if (validargeneral()){
//    aquí agrego el nuevo producto - continua en 1
//   } else {
//        error porque no hay datos cargados
//    }

//parte 1
let codigo = document.getElementById('codigo').value;
let nombre = document.getElementById('nombre').value;
let numSerie = document.getElementById('numSerie').value;
let categoria = document.getElementById('categoria').value;
let descripcion = document.getElementById('descripcion').value;
let imagen = document.getElementById('imagen').value;

//creo el nuevo funkopop
let nuevoFunkopop = new Funko(codigo, nombre, numSerie, categoria, descripcion, imagen);
//agrego el nuevo funkopop a  la lista
listaFunkopop.push(nuevoFunkopop);
//guardar list de funkopop en localstorage
localStorage.setItem('listaFunkoKey', JSON.stringify(listaFunkopop))
//limpiar el formulario
limpiarFormulario()
 //mostrar mensaje al usuario de que el producto fue creado
 Swal.fire(
    'Nuevo Funkopop',
    'El Funkopop se agregó correctamente',
    'success'
  )
//cerrar ventana modal
modalProducto.hide();

}

function limpiarFormulario(){
    document.getElementById('formFunkopop').reset();
    document.getElementById('codigo');
    codigo.className = "form-control";
    document.getElementById('nombre');
    nombre.className = "form-control";
}
