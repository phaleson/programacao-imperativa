let numPar = [10, 20, 40, 60, 80];
let numImpar = numPar.map(num => num + 1);
console.log(numImpar);

let nomes = ["vitoria", "mailson", "pedro", "madalena", "maia"];
let pedro = nomes.filter(nome => nome === "pedro");
console.log(pedro);

let array = [1, 5, 9, 3, 7];
let string = array.reduce((java, script) => {
    return `${java} - ${script}`
})

console.log(string);
let animais = ["zera", "Gato", "macaco", "boi"];
animais.forEach(animal => console.log(`O animal é ${animal}`));