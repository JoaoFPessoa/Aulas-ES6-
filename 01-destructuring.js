const user = {
    name: "João",
    lastName: "Pessoa",
    age: 25,
    skills: ["React", "Node", "TypeScript"]
}
// Destructuring

//Em objetos, abrimos chaves, e temos de selecionar os valores pelo nome exato dos mesmos. 
//Caso deseje alterar o nome da const, deverá fazer: "sobrenome: lastName"
const {name, lastName, skills} = user;
console.log(name, lastName)

//Já em arrays, abrimos colchetes e selecionamos os valores pela posição 
const [first, second, third] = skills;

console.log(first, second);
