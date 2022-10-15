// este es el codigo que hicimos en html pero que ahora pasamos a js desde script hast script

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// {/* para crear una funcion */}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🥌"
    } else if(jugada == 2) {
        resultado = "Papel 📄"
    } else if(jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "Eelige una opcion invalida"
    }
    return resultado
}
    // {/* // 1 es papel, 2 es piedra, 3 es tijera */}
    let jugador = 0
    let pc = 0
    let triunfos = 0
    let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio (1,3)
    // intruccion parecido a la funcion
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    // alert elegiste y pc eligio

    alert("PC elige: " + eleccion(pc))
    alert("tu eliges: " + eleccion(jugador))

    // combate
    // una condicion es if al igual que while
    if(pc == jugador) {
        alert("!Empate¡")
    } else if(jugador == 1 && pc == 3) {
        alert("!Ganaste¡")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
    }   perdidas = perdidas +1
}

alert("Ganaste" + triunfos + " veces. Perdiste " + perdidas + " veces.")
