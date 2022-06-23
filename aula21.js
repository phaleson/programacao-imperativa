// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// NOME
// SEXO
// ID
// NOTAS
// TURMA

function Aluno(NOME, SEXO, ID, NOTAS, TURMA) {
    this.NOME = NOME;
    this.SEXO = SEXO;
    this.ID = ID;
    this.NOTAS = NOTAS;
    this.TURMA = TURMA;
    this.media = function media(){
        let media = this.notas.reduce( function(acumulador, item ){
               return acumulador + item;
           } );
           media = media / this.notas.length;
           return media.toFixed(2);
       }
};

const fichaAlunos = [];

fichaAlunos.push(Fulado = new Aluno("Fulano", "M", "ID_1023", [10, 8, 9, 7], 10));
fichaAlunos.push(Beltrano = new Aluno("Beltrano", "F", "ID_1085", [5, 7, 10, 10], 10));
fichaAlunos.push(Ciclano = new Aluno("Ciclano", "F", "ID_1015", [9, 7, 10, 6], 10));

console.log(" Nome do Aluno é: " + Fulado.NOME + " De ID: " + Fulado.ID + " Do Sexo: " + Fulado.SEXO + " é da Turma: " + Fulado.TURMA + " Posssui as notas: " + Fulado.NOTAS);
console.log(" Nome do Aluno é: " + Beltrano.NOME + " De ID: " + Beltrano.ID + " Do Sexo: " + Beltrano.SEXO + " é da Turma: " + Beltrano.TURMA + " Posssui as notas: " + Beltrano.NOTAS)
console.log(" Nome do Aluno é: " + Ciclano.NOME + " De ID: " + Ciclano.ID + " Do Sexo: " + Ciclano.SEXO + " é da Turma: " + Ciclano.TURMA + " Posssui as notas: " + Ciclano.NOTAS)

function somar() {
    let soma = 0
    for(let i in fichaAlunos.NOTAS.length) {
      soma += fichaAlunos.NOTAS[i]
    }
    return soma
  }

  console.log(somar())



// MEDIA DE ALUNOS HOMENS E MULHERES
// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// NOME
// SEXO
// ID
// NOTAS
// TURMA

// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

// E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS

// MEDIA TOTAL DE NOTAS

// MEDIA DE ALUNOS HOMENS E MULHERES 
