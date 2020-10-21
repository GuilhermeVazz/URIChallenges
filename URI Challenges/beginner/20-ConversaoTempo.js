tempoSegundos = 556
horas = 0
minutos = 0
segundos = 1

while(tempoSegundos >= 600){
    tempoSegundos -= 600
    horas++
}

while(tempoSegundos >60){
    tempoSegundos -= 60
    minutos++
}

while(tempoSegundos > 1){
    tempoSegundos -= 1
    segundos++
}

console.log(horas + " : " + minutos +" : " + segundos)