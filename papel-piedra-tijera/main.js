const jugador1 = document.querySelector(".jugador1")
const jugador2 = document.querySelector(".jugador2")
const tijeras = document.querySelector(".tijeras")
const piedra = document.querySelector(".piedra")
const papel = document.querySelector(".papel")


let seleccionado = false
let seleccionnum = undefined

function seleccion(el) {
    if (el.classList.toggle("seleccionado")) {
        el.style.transform = "rotateZ(360deg)"
    } else {
        el.style.transform = "rotateZ(0deg)"
        el.style.transition = "all 1s"
    }
}

tijeras.addEventListener("click", (e) => {
    seleccion(tijeras)
    jugador1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 192v111.1C512 383.4 447.4 448 368 448H288c-26.52 0-48-21.48-48-47.99c0-9.152 2.697-17.61 7.139-24.89C224.9 370.1 208 351.5 208 328c0-16.72 8.561-31.4 21.52-39.1H40c-22.09 0-40-17.9-40-39.99s17.91-39.1 40-39.1h229.5L60 142.2C42.93 136.8 31.99 121.1 31.99 104c0-3.973 .5967-8.014 1.851-12.01c5.35-17.07 21.08-28.04 38.06-28.04c4 0 8.071 .6085 12.09 1.889l279.2 87.22C364.8 153.6 366.4 153.8 368 153.8c6.812 0 13.12-4.375 15.27-11.23c.4978-1.588 .7346-3.195 .7346-4.777c0-6.807-4.388-13.12-11.23-15.25l-72.54-22.67l14.29-17.85C323.6 70.67 337.4 64.04 352 64.04h48c10.39 0 20.48 3.359 28.8 9.592l38.41 28.79c25.2 18.91 40.53 47.97 43.55 79.04C511.5 184.9 512 188.4 512 192z"/></svg>`

    seleccionnum = 1
    console.log(seleccionnum)
})
piedra.addEventListener("click", (e) => {
    seleccion(piedra)
    jugador1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 180.4V32c0-17.67-14.31-32-32-32S160 14.33 160 32v144h40C208.5 176 216.5 177.7 224 180.4zM128 176V64c0-17.67-14.31-32-32-32S64 46.33 64 64v112.8C66.66 176.5 69.26 176 72 176H128zM288 192c17.69 0 32-14.33 32-32V64c0-17.67-14.31-32-32-32s-32 14.33-32 32v96C256 177.7 270.3 192 288 192zM384 96c-17.69 0-32 14.33-32 32v64c0 17.67 14.31 32 32 32s32-14.34 32-32.02V128C416 110.3 401.7 96 384 96zM350.9 246.2c-12.43-7.648-21.94-19.31-26.88-33.25C313.7 219.9 301.3 223.9 288 223.9c-7.641 0-14.87-1.502-21.66-3.957C269.1 228.6 272 238.1 272 248c0 39.77-32.25 72-72 72H128c-8.836 0-16-7.164-16-16C112 295.2 119.2 288 128 288h72c22.09 0 40-17.91 40-40S222.1 208 200 208h-128C49.91 208 32 225.9 32 248v63.41c0 33.13 16 64.56 42.81 84.13L128 434.2V512h224v-85.09c38.3-24.09 64-66.42 64-114.9V247.1C406.6 252.6 395.7 256 384 256C371.7 256 360.5 252.2 350.9 246.2z"/></svg>`

    seleccionnum = 2
    console.log(seleccionnum)
})
papel.addEventListener("click", (e) => {
    seleccion(papel)
    jugador1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z"/></svg>`

    seleccionnum = 3
    console.log(seleccionnum)
})

const jugarBtn = document.getElementById("jugar")
const elArr = [1, 2, 3]
let numRan

function pensar() {
    numRan = Math.round(Math.random() * elArr.length)

    if (numRan == 1) {
        jugador2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 192v111.1C512 383.4 447.4 448 368 448H288c-26.52 0-48-21.48-48-47.99c0-9.152 2.697-17.61 7.139-24.89C224.9 370.1 208 351.5 208 328c0-16.72 8.561-31.4 21.52-39.1H40c-22.09 0-40-17.9-40-39.99s17.91-39.1 40-39.1h229.5L60 142.2C42.93 136.8 31.99 121.1 31.99 104c0-3.973 .5967-8.014 1.851-12.01c5.35-17.07 21.08-28.04 38.06-28.04c4 0 8.071 .6085 12.09 1.889l279.2 87.22C364.8 153.6 366.4 153.8 368 153.8c6.812 0 13.12-4.375 15.27-11.23c.4978-1.588 .7346-3.195 .7346-4.777c0-6.807-4.388-13.12-11.23-15.25l-72.54-22.67l14.29-17.85C323.6 70.67 337.4 64.04 352 64.04h48c10.39 0 20.48 3.359 28.8 9.592l38.41 28.79c25.2 18.91 40.53 47.97 43.55 79.04C511.5 184.9 512 188.4 512 192z"/></svg>`
    } else if (numRan == 2) {
        jugador2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 180.4V32c0-17.67-14.31-32-32-32S160 14.33 160 32v144h40C208.5 176 216.5 177.7 224 180.4zM128 176V64c0-17.67-14.31-32-32-32S64 46.33 64 64v112.8C66.66 176.5 69.26 176 72 176H128zM288 192c17.69 0 32-14.33 32-32V64c0-17.67-14.31-32-32-32s-32 14.33-32 32v96C256 177.7 270.3 192 288 192zM384 96c-17.69 0-32 14.33-32 32v64c0 17.67 14.31 32 32 32s32-14.34 32-32.02V128C416 110.3 401.7 96 384 96zM350.9 246.2c-12.43-7.648-21.94-19.31-26.88-33.25C313.7 219.9 301.3 223.9 288 223.9c-7.641 0-14.87-1.502-21.66-3.957C269.1 228.6 272 238.1 272 248c0 39.77-32.25 72-72 72H128c-8.836 0-16-7.164-16-16C112 295.2 119.2 288 128 288h72c22.09 0 40-17.91 40-40S222.1 208 200 208h-128C49.91 208 32 225.9 32 248v63.41c0 33.13 16 64.56 42.81 84.13L128 434.2V512h224v-85.09c38.3-24.09 64-66.42 64-114.9V247.1C406.6 252.6 395.7 256 384 256C371.7 256 360.5 252.2 350.9 246.2z"/></svg>`
    } else if (numRan == 3) {
        jugador2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z"/></svg>`
    } else if (numRan == 0) {
        numRan + 1
    }
}
const alerta = document.querySelector(".alerta")
let ganaste = "Le ganaste a la maquina"
let perdiste = "Te gano la maquina"
const puntos1 = document.querySelector(".puntosj1")
const puntos2 = document.querySelector(".puntosj2")

let puntos1Contador = 0
let puntos2Contador = 0

let puntos1El = document.createElement("span")
puntos1.appendChild(puntos1El)

let puntos2El = document.createElement("span")
puntos2.appendChild(puntos2El)





function desicion() {
    if (numRan == seleccionnum) {
        alerta.innerHTML = "empate"
        jugador2.style.border = "2px solid #ccc"
        jugador1.style.border = "2px solid #ccc"

    } else if (seleccionnum == 1 & numRan == 2) {
        alerta.innerHTML = perdiste
        jugador2.style.border = "2px solid #0f0"
        jugador1.style.border = "2px solid #f00"

        puntos2El.innerHTML += 1 + "-"
        puntos2Contador + 1
    } else if (seleccionnum == 2 & numRan == 1) {
        alerta.innerHTML = ganaste
        jugador2.style.border = "2px solid #f00"
        jugador1.style.border = "2px solid #0f0"
        puntos1El.innerHTML += 1 + "-"
        puntos1Contador += 1

    } else if (seleccionnum == 2 & numRan == 3) {
        jugador2.style.border = "2px solid #0f0"
        jugador1.style.border = "2px solid #f00"
        alerta.innerHTML = perdiste
        puntos2El.innerHTML += 1 + "-"
        puntos2Contador += 1

    } else if (seleccionnum == 3 & numRan == 2) {
        jugador2.style.border = "2px solid #f00"
        jugador1.style.border = "2px solid #0f0"
        alerta.innerHTML = ganaste
        puntos1El.innerHTML += 1 + "-"
        puntos1Contador += 1

    } else if (seleccionnum == 3 & numRan == 1) {
        jugador2.style.border = "2px solid #0f0"
        jugador1.style.border = "2px solid #f00"
        alerta.innerHTML = perdiste
        puntos2El.innerHTML += 1 + "-"
        puntos2Contador += 1

    } else if (seleccionnum == 1 & numRan == 3) {
        jugador2.style.border = "2px solid #f00"
        jugador1.style.border = "2px solid #0f0"
        alerta.innerHTML = ganaste
        puntos1El.innerHTML += 1 + "-"
        puntos1Contador += 1

    }
}

jugarBtn.addEventListener("click", (e) => {
    let numRan = Math.round(Math.random() * elArr.length)
    pensar()
    desicion()
})

const terminar = document.getElementById("terminar")

terminar.addEventListener("click", (e) => {
    if (puntos1Contador < puntos2Contador) {
        alert(perdiste)
    } else if (puntos1Contador > puntos2Contador) {
        alert(ganaste)
    } else if (puntos1Contador == puntos2Contador) {
        alert("Empate")
    }
    puntos1El.innerHTML = ""
    puntos2El.innerHTML = ""

    puntos1Contador = 0
    puntos2Contador = 0
    jugador2.style.border = "2px solid blue"
    jugador1.style.border = "2px solid blue"

})