let numeros = [1, 2, 3, 4, -1, -2, -3];
function countPositivesSumNegatives(numeros) {
    if (!numeros || numeros.length === 0) {
        return [];
    }
        
    let contagemPositivos = 0;
    let somaNegativos = 0;

    
    for (let numero of numeros) {
        if (numero > 0) {
            contagemPositivos++;
        } else if (numero < 0) {
            somaNegativos += numero;
        }
    }

   
    return [contagemPositivos, somaNegativos];
}


const resultado = countPositivesSumNegatives(numeros);
console.log(resultado); 
