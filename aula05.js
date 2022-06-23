

function cmPolegada(polegada){
    return polegada*2.54;
};

console.log(cmPolegada(2));

// ------------//

function url(dominio){
    return "www."+dominio+".com";
}
;

console.log(url("youtube"));


// -----------//

function exclamacao(string){
    return string+"!";
};

console.log(exclamacao("oi¡"));

// --------------//

function idadeCachorro(idade){
    return idade*7
};

console.log(idadeCachorro(7));

// ----------//

function valorHora(salario){
    return salario / 160;
}

console.log(valorHora(1000));


// ---------------------//

function imc (peso, altura){
  let centimetro = altura/100
    return peso / centimetro ** 2;
}

console.log(imc(100,170).toFixed(2));




// ---------------------//

function maiuscula(text){
    return text.toUpperCase();
}


console.log(maiuscula("haleson"));

// ----------------//

function tipoDado(dado){
    console.log(typeof dado);
}

tipoDado("9");

// Ex 9

function circunferencia(raio){
    return raio * (Math.PI ** 2 )
}

console.log(circunferencia(6));