function Sobreviver(balas, dragoes) {
    const balasNecessarias = dragoes * 2;
    
    
    if (balas >= balasNecessarias) {
        return true;  
    } else {
        return false; 
    }
}

const balas = 7; 
const dragoes = 4; 

const resultado = Sobreviver(balas, dragoes);
console.log(resultado); 