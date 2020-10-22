numeroDeMarmores = 4
numeroDeConsultas = 1
pecas = 0
pecas1 = []

for(var i = 0; i < 4; i++){
    pecas += Math.floor(Math.random()*(9 - 1) + 1);
    pecas1.push(pecas)
};

console.log(pecas1)


// function createBinaryString (nMask) {
//     // nMask must be between -2147483648 and 2147483647
//     for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
//          nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
//     return sMask;
//   }

// console.log(createBinaryString(valorA))
// console.log(createBinaryString(valorB))

