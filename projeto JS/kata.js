function enough(cap, on, wait) {
    const EnoughSpace = cap - on;
    const peoples = on + wait;
    
    
    
    if (EnoughSpace >= wait) {
          return 0;  
      } else {
          return wait - EnoughSpace;     
      }
  }

const cap = 20;
const on = 15;
const wait = 8;
  
const resultado = enough(cap, on, wait);
console.log(resultado); 