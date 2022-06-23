

//  GRUPO 4
//  MICHEL VIEIRA
//  JOAÃO NISHIMURA
//  FELIPE SILVA 
//  IGOR AVELAR
//  PABLO HALESON
//  MATHEUS RIBEIRO

const alicia = [];
const bob = [25, 68, 84];

function encontrarGanhador(a, b) {
    let pontosA = 0;
    let pontosB = 0;

   for (let i =0; i < a.length ;i++){
    console.log (a[i])
    console.log (b[i])

        if (a[i] > b[i]){
           pontosA++;

        } else if (a[i] < b [i]) {          
           pontosB++;
           
        }

    }

   if ( pontosA == pontosB) {
       return "Empate"
   }else if ( pontosA < pontosB ) {
       return "Bob"
   }else {
       return "Alicia"
   }
}

console.log (encontrarGanhador(alicia,bob));
