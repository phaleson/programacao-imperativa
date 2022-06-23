    function  podeSubir(altura, vemAcompanhado ){
        
        if (altura >= 1.40 && altura < 2.00 ){
            return "Permissão autorizada"  
        }else if (altura < 1.20 &&  Altura < 1.40 && vemAcompanhado ){
            return "Permissão autorida com acompanhante" 
        }else{
            return "permissão negada";  
        }
    }   
    console.log( podeSubir(1.0, true) );
        
        
        
// atividae extra//


// 1. 
function maiorDois(a, b) {
  if (a < b) {
    return b;
  }

  return a;
}

console.log(maiorDois(40, 30));

// 2. 

function Votar(anoNascimento) {
  const anoAtual = 2022;
  const Idade = anoAtual - anoNascimento;
  if (Idade >= 16) {
    return `Você tem ${Idade} anos de idade, já pode votar!`;
  }

  return `Você tem ${Idade} anos idade, ainda não pode votar!`;
}

console.log(Votar(2008));

// 3. 

function senhaValida(senha) {
  if (senha === 3324) {
    return `Permitido!`;
  }

  return `Negado!`;
}

// 4. 

function totalApple(qtdApple) {
  if (qtdApple < 12) {
    const macas = qtdApple * 0.3;
    return `valor compra: R$ ${Aplle.toFixed(2)}`;
  }

  const macas = qtdApple * 0.25;
  return `valor compra: R$ ${Apple.toFixed(2)}`;
}

console.log(totalApple(20));

// 5. 

function pesoIdeal(altura, sexo) {
  if (sexo === 1) {
    return `Você é do sexo Feminino e seu peso ideal é ${
      62.1 * altura - 44.7
    }Kg`;
  }

  return `Você é do sexo Masculino e seu peso ideal é ${72.7 * altura - 58}kg`;
}

console.log(pesoIdeal(1.5, 1));

