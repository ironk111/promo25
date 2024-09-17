function info() {
    const hemisferio = prompt("En qué hemisferio estás?(sur/norte)")
    const dia = prompt("En qué día te encontrás?(dos digitos)")
    const mes = prompt("En qué més estás?(dos digitos)")
}

function calcularDia(dia) {
    if(dia < 21) {
        return "menor"
    } else {
        return "mayor"
    }
}