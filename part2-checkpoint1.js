
//1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?
function inteiros(valor1, valor2, valor3){
    if (valor1 == 5 && valor2 == 7 && valor3 == 8 ){
        if (valor1 > valor2 && valor3 < valor1)
        return "valor 1 é o maior!!!"
        else if (valor2 > valor1 && valor3 <valor2){
            return "valor 2 é maior!!!"
        }else if(valor3 > valor2 && valor1 < valor3){
            return "valor 3 é o maior"
        }else{
            return "valores iguais"
        }
    }
}
console.log(inteiros( 5, 7, 8));

//2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
//idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)
function doarSangue(idade){
    if(idade >= 18 && idade <= 68){
        return "Voçê pode doar sangue"
    } else {
        return "Voçê não pode doar sangue"
    }
}
console.log(doarSangue(70));

//3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo



function numeroReal(numero){
    let = numero;
    if( numero > 0){
        return "valor positivo"
    }else if(numero < 0){

    }else{
        return "numero real"
    }
}
console.log(numeroReal(10));

/*4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;
    */

        function media(nota1, nota2) {
    
            if ((nota1 + nota2) / 2 >= 7 && (nota1 + nota2) / 2 < 10) {
                return "Aprovado!"
            } else if ((nota1 + nota2) / 2 == 10) {
                return "Aprovado com Distinção!"
            } else {
                return "Reprovado!"
            }
        }
        console.log(media( 10, 10));
        
    