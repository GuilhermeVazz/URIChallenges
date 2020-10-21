tempoGasto = 10
velocidadeMedia = 85
kmPorLitro = 12

kmPercorrido = tempoGasto * velocidadeMedia
GastoCombustivel = kmPercorrido / kmPorLitro

//With console.log
console.log(GastoCombustivel.toFixed(3))

//With Alert
alert(GastoCombustivel.toFixed(3))