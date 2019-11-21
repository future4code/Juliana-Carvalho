//**Exercícios de interpretação de código**

//EXERCÍCIO 1

//O que o código abaixo está fazendo? Qual o resultado impresso no console? 

    let sum = 0
    for(let i = 0; i < 11; i++) {
      sum += i
    }
    console.log(sum)
// Resposta: vai imprimir os números de 0 a 10.
//EXERCÍCIO 2

//Leia o código abaixo:

    const lista = [10, 11, 12, 15, 18, 19, 20, 23, 25, 27, 30]
    const novaLista = []
    const numero = 5
    for(const item of lista){
      if(item%numero === 0) {
        novaLista.push(item)
      }
    }
    console.log(novaLista)

//a. O que o comando `.push` faz?
// Adiciona um item no final da array

//b. Qual o valor impresso no console?
//Vai ser incluso na nova lista todos os números que tem resto 0 na divisão com 5
//c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
//Seriam impressos todos os números com resto 0 na divisão por 3 ou 4 na nova lista
