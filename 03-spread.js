const user = {
    name: "João",
    lastName: "Pessoa",
    age: 25,
    skills: ["React", "Node", "TypeScript"],
    active: false
}

//Spread Operator

//Objetos devem conter imutabilidade, caso deseje alterar uma propriedade, terá de criar um
//novo objeto

const updatedUser = {
    ...user,
    active: true,
    skills: [...user.skills, 'Design']
}
console.log(updatedUser)