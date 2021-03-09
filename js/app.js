//variable que almacena los datos del localstorage
let listaFunkopop = [];
leerFunkopop();

function leerFunkopop(){
if (localStorage.length > 0){
    listaFunkopop = JSON.parse(localStorage.getItem('listaFunkoKey'))
//borrar los datos de la fila de cards
let filaCards = document.getElementById("filaCards");
filaCards.innerHTML= "";
//dibuajar cada columna con los datos de los objetos de los funkopop
for (let i in listaFunkopop){
    let columna = `<div class="col-sm-12 col-md-4 col-lg-3">
    <div class="card mt-3">
        <img src="img/productos/${listaFunkopop[i].imagen}" class="card-img-top" alt="imagen funkopop batman">
        <div class="card-body">
            <h5 class="card-title">${listaFunkopop[i].nombre}</h5>
            <p class="card-text">${listaFunkopop[i].descripcion}.</p>
            <a href="#" class="btn btn-primary disabled">Go somewhere</a>
        </div>
    </div></div>`;

//agregar las columnas al elemento padre
filaCards.innerHTML += columna
}
}
}