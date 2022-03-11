
//As "..." fazem com que todo o restante do objeto seja "pego",
//e tem sempre de ser usada no final

const user = {
    name: "João",
    lastName: "Pessoa",
    age: 25,
    skills: ["React", "Node", "TypeScript"]
}

const {name, ...rest} = user;

console.log(rest)
// {
//     lastName: 'Pessoa',
//     age: 25,
//     skills: [ 'React', 'Node', 'TypeScript' ]
//   }