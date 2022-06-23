

function loopPares(num){

    for( let i = 0;  i  <= 100; i++){
      console.log(i)
      if((num + i) % 2 == 0){
        console.log( 'O número', i,'é par')
      }
    } 
}

console.log(loopPares(100));

//---------//

function loopImpares(numero, palavra){
    for( let i = 0;  i  <= 100; i++){
      console.log(i)
      if((numero + i) % 2 != 0){
        console.log(palavra)
      }
    } 
  }

  console.log(loopImpares(1,'banana'))



//---------//

function somar(numero){
    let soma = 0;
    for(let i = 0; i<=numero; i++){
      soma += i;
    }
    return soma
  }
console.log(somar(100));

//---------//

function Array(num){
    let lista = [];
    for(let i = 1; i<=num; i++){
      lista.push(i);
    }
    return lista
  }

  console.log(Array(10));

//---------//

function split(palavra){
    lista = [];
    for(let i = 0; i < palavra.length; i++){
      lista.push(palavra[i]);
    }
    return lista
  }
  
console.log(split('ooi'))