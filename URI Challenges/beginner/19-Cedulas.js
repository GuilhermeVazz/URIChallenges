valor = 576
var notas100 = 0
var notas50 = 0
var notas20 = 0
var notas10 = 0
var notas5 = 0
var notas2 = 0
var notas1 = 0

while(valor > 100){
    valor -= 100
    notas100++
}

while(valor > 50){
    valor -= 50
    notas50++
}

while(valor > 20){
    valor -= 20
    notas20++
}

while(valor > 10){
    valor -= 10
    notas10++
}

while(valor > 5){
    valor -= 5
    notas5++
}

while(valor > 2){
    valor -= 2
    notas2++
  
}

while(valor >= 1){
    valor-= 1
    notas1++
}

console.log("Notas de 100: " + notas100)
console.log("Notas de 50: " + notas50)
console.log("Notas de 20: " + notas20)
console.log("Notas de 10: " + notas10)
console.log("Notas de 5: " + notas5)
console.log("Notas de 2: " + notas2)
console.log("Notas de 1: " + notas1)

