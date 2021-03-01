import { Funko } from "./funkoClass.js";
let listaFunkopop = [];
const modalProducto = new bootstrap.Modal(
  document.getElementById("modalFunkopop")
);
let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function () {
  modalProducto.show();
});

//llamar a la función que lee datos
leerDatos();

//let nuevoFunkopop = new Funko(1, "asdfsdfs", "adadf23", "dc", "adfafas", "adfa")
//console.log(nuevoFunkopop)

window.agregarFunkopop = function (event) {
  event.preventDefault();
  console.log("dentro de agregar funko");

  validarGeneral();

  //hacer funcion validar general e importarla acá
  //if (validargeneral()){
  //    aquí agrego el nuevo producto - continua en 1
  //   } else {
  //        error porque no hay datos cargados
  //    }

  //parte 1
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let numSerie = document.getElementById("numSerie").value;
  let categoria = document.getElementById("categoria").value;
  let descripcion = document.getElementById("descripcion").value;
  let imagen = document.getElementById("imagen").value;

  //creo el nuevo funkopop
  let nuevoFunkopop = new Funko(
    codigo,
    nombre,
    numSerie,
    categoria,
    descripcion,
    imagen
  );
  //agrego el nuevo funkopop a  la lista
  listaFunkopop.push(nuevoFunkopop);
  //guardar list de funkopop en localstorage
  localStorage.setItem("listaFunkoKey", JSON.stringify(listaFunkopop));
  //limpiar el formulario
  limpiarFormulario();
  //mostrar mensaje al usuario de que el producto fue creado
  Swal.fire("Nuevo Funkopop", "El Funkopop se agregó correctamente", "success");
  //llamar a la funcion
  leerDatos();
  //cerrar ventana modal
  modalProducto.hide();
};

function limpiarFormulario() {
  document.getElementById("formFunkopop").reset();
  document.getElementById("codigo");
  codigo.className = "form-control";
  document.getElementById("nombre");
  nombre.className = "form-control";
  document.getElementById("numSerie");
  numSerie.className = "form-control";
  document.getElementById("categoria");
  categoria.className = "form-control";
  document.getElementById("descripcion");
  descripcion.className = "form-control";
  document.getElementById("imagen");
  imagen.className = "form-control";
}

function validarGeneral() {
  if (
    validarFormulario(document.getElementById("codigo")) &&
    validarFormulario(document.getElementById("nombre")) &&
    validarFormulario(document.getElementById("numSerie")) &&
    validarFormulario(document.getElementById("categoria")) &&
    validarDescripcion(document.getElementById("descripcion")) &&
    validarFormulario(document.getElementById("imagen")) == true
  ) {
    console.log("datos cargados correctamente");
  } else {
    console.log("datos mal cargados");
  }
}

function leerDatos() {
  //esta función se encargará de leer los datos del localstorage
  if (localStorage.length > 0) {
    //traer los datos de localStorage
    let _listaFunkopop = JSON.parse(localStorage.getItem("listaFunkoKey"));
    console.log(_listaFunkopop);

    //preguntar si mi arreglo listaFunkopop tiene datos
    if (listaFunkopop.length === 0) {
      listaFunkopop = _listaFunkopop;
    }
    dibujarDatosEnTabla(_listaFunkopop);
  }
}
function dibujarDatosEnTabla(_listaFunkopop){
    //esta función se encargará de agregar los datos de LS en cada fila de la tabla
    let tabla = document.getElementById("tablaFunkopop");
    tabla.innerHTML = "";
    let filas;
    
    //for(let i=0; i<_listaFunkopop.length; i++){} esto funciona pero hacemos algo mas corto
    //for in recorre todo el arreglo - método más corto
    for(let i in _listaFunkopop){
    filas = ` <tr>
    <td>${_listaFunkopop[i].codigo}</td>
    <td>${_listaFunkopop[i].nombre}</td>
    <td>${_listaFunkopop[i].numSerie}</td>
    <td>${_listaFunkopop[i].categoria}</td>
    <td>${_listaFunkopop[i].descripcion}</td>
    <td>${_listaFunkopop[i].imagen}</td>
    <td>
      <button class="btn btn-warning">Editar</button>
      <button class="btn btn-danger" onclick="eliminarFunkopop(this)">Borrar</button>
    </td>
  </tr>`;
  //agregar fila al padre
  tabla.innerHTML += filas;
  //tabla.innerHTML = tabla.innerHTML + filas;    
    }
}

window.eliminarFunkopop = function(boton){
    console.log ("dentro de la función funkopop")
}