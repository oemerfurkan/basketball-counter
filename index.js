let evCounter = 0
let deCounter = 0

let evVar = document.getElementById("ev-counter")
let deVar = document.getElementById("de-counter")

function ev1() {
    evCounter = evCounter + 1
    evVar.textContent = evCounter
    console.log(evCounter)
}
function ev2() {
    evCounter = evCounter + 2
    evVar.textContent = evCounter
    console.log(evCounter)
}
function ev3() {
    evCounter = evCounter + 3
    evVar.textContent = evCounter
    console.log(evCounter)
}
function de1() {
    deCounter = deCounter + 1
    deVar.textContent = deCounter
    console.log(deCounter)
}
function de2() {
    deCounter = deCounter + 2
    deVar.textContent = deCounter
    console.log(deCounter)
}
function de3() {
    deCounter = deCounter + 3
    deVar.textContent = deCounter
    console.log(deCounter)
}

function reset() {
    evVar.textContent = 0
    deVar.textContent = 0
}