import { Funko } from "./funkoClass.js";

let nuevoFunkopop = new Funko(1, "asdfsdfs", "adadf23", "dc", "adfafas", "adfa")
console.log(nuevoFunkopop)

window.agregarFunkopop = function(event) {
    event.preventDefault();
    console.log("dentro de agregar funko");
}

