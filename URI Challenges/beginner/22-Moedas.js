
notas100 = 0
notas50 = 0
notas20 = 0
notas10 = 0
notas5 = 0
notas2 = 0
moedas1real = 0
moedas50centavos = 0
moedas25centavos = 0
moedas10centavos = 0
moedas5centavos = 0
moedas1centavos = 0

function contadorDeNotas(valor){
    
    valor = 675

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
    
    console.log("Notas de 100: " + notas100)
    console.log("Notas de 50: " + notas50)
    console.log("Notas de 20: " + notas20)
    console.log("Notas de 10: " + notas10)
    console.log("Notas de 5: " + notas5)
    console.log("Notas de 2: " + notas2)
    
}

contadorDeNotas()
