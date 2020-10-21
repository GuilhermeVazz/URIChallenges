qntdDias = 400
anos = 0
meses = 0
dias = 1

while (qntdDias > 365) {
    qntdDias -= 365
    anos++
}
while (qntdDias >= 30) {
    qntdDias -= 30
    meses++
} 
while (qntdDias > 1){
    qntdDias -= 1
    dias++
}

console.log(anos + " ano(s); " + meses + " mes(es); " + dias + " dia(s)")