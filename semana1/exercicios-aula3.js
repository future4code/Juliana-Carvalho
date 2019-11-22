//**Exercícios de interpretação de código**

//1. Leia o código abaixo:

        const respostaDoUsuario = prompt("Digite o número que você quer testar?")
        const numero = Number(respostaDoUsuario)
        
        if(numero % 2 === 0) {
          console.log("Passou no teste.")
        } else {
          console.log("Não passou no teste.")
        }

   // Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"? 
//Resposta: O código pergunta um número aleatório ao usuário, se este número for par é impresso no console "Passou no teste", se for impar é impresso "Não passou no teste"

//2. O código abaixo foi feito por um desenvolvedor, contratado para automatizar algumas tarefas de um supermercado. Veja abaixo:

        let fruta = prompt("Escolha uma fr")
        let preco
        switch (fruta) {
          case "Laranja":
            preco = 3.5
            break;
          case "Maçã":
            preco = 2.25
            break;
          case "Uva":
            preco = 0.30
            break;
          case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM d.
          default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    //a. Para que serve o código acima?
    // resposta: Para precificar determinadas frutas num supermercado//

   // b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
   // Será impresso: O preço da fruta Mação é R$ 2.25.

    //c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
    // Laranja = 3.5*2 = 7; Maçã = 2.25; Bananas= 5*3=15; Uva =0.3; então: 7+2.25+15+0.3= 24,55

//d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
//Iria ser verificado o valor da Pera e do defauld e daria erro.

//3. Leia o código abaixo:

        const numero1 = prompt("Digite o primeiro número.")
        const numero2 = prompt("Digite o próximo número?")
        
        if(numero1 > 0 && numero2 > 0) {
          let mensagem
          if(numero1 > numero2) {
            mensagem = "Número 1 é maior que o 2!"
          } else {
            mensagem = "Número 1 é menor ou igual ao 2!"
          }
        }
        
        console.log(mensagem)

    //Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
    //Número 1 é menor ou igual ao 2!//Não haverá erro porque 3 é maior que 0, 4 é maior que zero, entra no else porque 3 é menor que 4.//

   // **Exercícios de escrita de código**

    //1. Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:
    
    //a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
    
    let numberone = prompt("Digite um número.")
    let numbertwo = prompt("Digite um segundo número")
        
        if(numberone >= 0 > numbertwo >= 0) {
          let mensagem
          if(numberone > numbertwo) {
            mensagem = "Primeiro número é maior que o Segundo número!"
          } else (numbertwo> numberone) {
            mensagem = "Segundo número é maior que o Primeiro número"
          }
        }

// b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
let numberone = prompt("Digite um número.")
let numbertwo = prompt("Digite um segundo número")
let numberthree = prompt ("Digite um terceiro número")
        
        if(numberone >= 0 > numbertwo >= 0 > numberthree >=0) {
          let mensagem
          if(numberone > numbertwo > numberthree) {
            mensagem = "Tudo em ordem!"
          } else  {
            mensagem = "Está uma bagunça e não sei o que fazer!"
          }
        }   
//c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.

//Tanto na caso a e no b, se os números forem iguais acredito que apenas vai ser escrito um ao lado do outro, sem dar erro//

//b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado 
let humano = prompt (É ser-humano?)
let mamifero = prompt (É mamífero não-humano?)
let ave = prompt (É uma ave?)
let reptil = prompt (É um réptil?)
let anfibio = prompt (É um anfibio?)
let peixe = prompt (É um peixe?)
let invertebrado = prompt (É um invertebrado?)

let classificacao
switch (classificacao) {
case "Humano"
console.log ("É Humano.")
break;

case "Mamifero"
console.log ("É um mamífero não-humano.")
break;

case "ave"
console.log ("É uma ave")
break;

case "reptil"
console.log ("É um réptil.")
break;

case "anfibio"
console.log ("É um anfíbio.")
break;

case "peixe"
console.log ("É um peixe.")
break;

case "invertebrado"
console.log ("É um invertebrado.")
break;

}

3. [QUEBRAR MAIS ESSE EXERCICIO DA PROXIMA VEZ. FICOU DIFICIL E LONGO DE MAIS]

    Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos

    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)

    **Tabela de preços**

    [](https://www.notion.so/41c21f657caa4b62a828bec3b5c6afd7#db1623df0a3f47dea1bf168f83a8373a)

    **Exemplos de saídas**

    Jogo nacional

        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ 1980
        Valor total:  R$ 19800
        ​

    Jogo internacional

        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ 482.92682926829275
        Valor total:  U$ 4829.2682926829275
        ​
