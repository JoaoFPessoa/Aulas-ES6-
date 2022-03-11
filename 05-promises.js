// Utilizado em casos demorados, como consultas ao banco de dados

// Utilizamos o .then para receber o resultado
const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso')
        reject('Erro')
    }, 2000)
});
// Primeira forma de receber os resultados após o delay, utilizando o .then:
apiCall
.then((resposta)=> {
    console.log(resposta)
})
.catch((erro) => {
    console.log(erro)
})
// Segunda forma, criar uma função assincrona, atribuindo a Promise à uma const, e utilizar o await
async function run(){
try 
{const resposta = await apiCall;
console.log(resposta)} 
catch(erro){
console.log(erro)
}
}
run();

//Diferença entre as duas é que a segunda trava até que o retorno aconteça