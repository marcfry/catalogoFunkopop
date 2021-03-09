import { Funko } from "./funkoClass.js";
let listaFunkopop = [];
const modalProducto = new bootstrap.Modal(
  document.getElementById("modalFunkopop")
);
//variable bandera que me ayuda a decidir cuanto tengo que modificar
//y cuando creo un nuevo funkopop
//moficarFunkopop=true estoy modificando un producto, cuando sea false estoy agregando
//un nuevo funkopop
let modificarFunkopop = false;

let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function () {
  limpiarFormulario();
  modalProducto.show();
});

//llamar a la función que lee datos
leerDatos();

//let nuevoFunkopop = new Funko(1, "asdfsdfs", "adadf23", "dc", "adfafas", "adfa")
//console.log(nuevoFunkopop)

function agregarFunkopop(){
    console.log("dentro de agregar funko");

  if (validarGeneral() === true) {
    validarGeneral();
    //aquí agrego el nuevo producto - continua en 1
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
    Swal.fire(
      "Nuevo Funkopop",
      "El Funkopop se agregó correctamente",
      "success"
    );
    //llamar a la funcion
    leerDatos();
    //cerrar ventana modal
    modalProducto.hide();
  } else {
    Swal.fire({
      title: "Por favor complete el formulario",
      confirmButtonText: "Aceptar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    //alert("Datos mal cargados");
  }

  //hacer funcion validar general e importarla acá
  //if (validargeneral()){
  //   

  
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
  modificarFunkopop = false;
}

function validarGeneral() {
  if (
    validarFormulario(document.getElementById("codigo")) &&
    validarFormulario(document.getElementById("nombre")) &&
    validarFormulario(document.getElementById("numSerie")) &&
    validarFormulario(document.getElementById("categoria")) &&
    validarDescripcion(document.getElementById("descripcion")) === true    
  ) {
    console.log("datos cargados correctamente");
    return true;
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
function dibujarDatosEnTabla(_listaFunkopop) {
  //esta función se encargará de agregar los datos de LS en cada fila de la tabla
  let tabla = document.getElementById("tablaFunkopop");
  tabla.innerHTML = "";
  let filas;

  //for(let i=0; i<_listaFunkopop.length; i++){} esto funciona pero hacemos algo mas corto
  //for in recorre todo el arreglo - método más corto
  for (let i in _listaFunkopop) {
    filas = ` <tr>
    <td>${_listaFunkopop[i].codigo}</td>
    <td>${_listaFunkopop[i].nombre}</td>
    <td>${_listaFunkopop[i].numSerie}</td>
    <td>${_listaFunkopop[i].categoria}</td>
    <td>${_listaFunkopop[i].descripcion}</td>
    <td>${_listaFunkopop[i].imagen}</td>
    <td>
      <button class="btn btn-warning" onclick="prepararFunkopop(this)" id="${_listaFunkopop[i].codigo}">Editar</button>
      <button class="btn btn-danger" onclick="eliminarFunkopop(this)" id="${_listaFunkopop[i].codigo}">Borrar</button>
    </td>
  </tr>`;
    //agregar fila al padre
    tabla.innerHTML += filas;
    //tabla.innerHTML = tabla.innerHTML + filas;
  }
}

window.eliminarFunkopop = function (boton) {
  console.log(boton.id);
  Swal.fire({
    title: "Está seguro de eliminar el Funkopop?",
    text: "No puedes volver atrás luego de elminar un funkopop",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    //if(true)
    if (result.isConfirmed) {
      //agregar la lógica para elminar el funkopop
      //  let funkopopFiltrado = listaFunkopop.filter(function(producto){
      //    return producto.codigo != boton.id
      //  });
      let funkopopFiltrado = listaFunkopop.filter(
        (producto) => producto.codigo != boton.id
      );
      console.log(funkopopFiltrado);
      //igualando para que lista borre el funko
      listaFunkopop = funkopopFiltrado;
      //guardar datos en locastorage
      localStorage.setItem("listaFunkoKey", JSON.stringify(funkopopFiltrado));
      //cargar los nuevos datos en la tabla
      leerDatos();
      Swal.fire(
        "Funkopop Eliminado",
        "El Funkopop seleccionado fue borrado",
        "success"
      );
    }
  });
};

window.prepararFunkopop = function (boton) {
  console.log(boton);
  //buscar el funkopop seleccionado
  let funkopopEncontrado = listaFunkopop.find((producto) => {
    return producto.codigo === boton.id;
  });
  console.log(funkopopEncontrado);
  //completar con los datos todos los inputs de mi formulario
  document.getElementById("codigo").value = funkopopEncontrado.codigo;
  document.getElementById("nombre").value = funkopopEncontrado.nombre;
  document.getElementById("numSerie").value = funkopopEncontrado.numSerie;
  document.getElementById("categoria").value = funkopopEncontrado.categoria;
  document.getElementById("descripcion").value = funkopopEncontrado.descripcion;
  document.getElementById("imagen").value = funkopopEncontrado.imagen;
  //cambiar el estado de mi variable modificarFunkopop
  modificarFunkopop = true;
  modalProducto.show();
};

window.guardarFunko = function(event){
  event.preventDefault();
  //if(true) es lo mismo que if (true===true)
    if(modificarFunkopop){
      //modificar un funko existente
    modificarFunkoExistente();
  }else{
    agregarFunkopop();
  }

}

function modificarFunkoExistente(){
  //validar nuevamente los datos ingresados
//tomar los valores modificados del formulario
let codigo = document.getElementById('codigo').value;
let nombre = document.getElementById('nombre').value;
let numSerie = document.getElementById('numSerie').value;
let categoria = document.getElementById('categoria').value;
let descripcion = document.getElementById('descripcion').value;
let imagen = document.getElementById('imagen').value;

//buscar el objeto y modifico sus datos
for(let i in listaFunkopop){
  if(listaFunkopop[i].codigo === codigo){
    listaFunkopop[i].nombre = nombre;
    listaFunkopop[i].numSerie = numSerie;
    listaFunkopop[i].categoria = categoria;
    listaFunkopop[i].descripcion = descripcion;
    listaFunkopop[i].imagen = imagen;
  }
}
//actualizo localstorage
localStorage.setItem('listaFunkoKey', JSON.stringify(listaFunkopop));
//mostrar alerta al usuario
Swal.fire("Funkopop modificado", "El funkopop seleccionado fue modificado exitosamente", "success")
//dibujo los datos actualizados en la tabla
leerDatos();
//cerrar ventana Modal
modalProducto.hide();
}

//variables bandera para determinar si el boton va a guardar o modificar
