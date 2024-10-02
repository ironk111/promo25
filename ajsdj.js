
//ejercicio no entregable 26/09

let lista = ["queso", "pepperoni"];

   function preguntarIng (){
    const opcion = prompt("Selecciona una opcion: ver lista, invertir, agregar");
    if (opcion === "ver lista") {
        alert(lista);
    } else if (opcion === "invertir") {
        lista.reverse();
        alert(lista);
    }   else if (opcion === "agregar"){
        let agregar = prompt("Agrega un ingrediente a la pizza:");
        if (lista.indexOf(agregar) in lista) {
            alert("Ya está en la lista!");
        } else {
            lista.push(agregar);
            alert(lista);
        }
    }   else {
        alert("Error");
    }
   }
preguntarIng();
