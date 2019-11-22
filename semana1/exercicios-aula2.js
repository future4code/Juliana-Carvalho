//**Exercícios de interpretação de código**//

//1. Leia o código abaixo. Indique todas as mensagens impressas no console.//

        const bool1 = true
        const bool2 = false
        const bool3 = !bool2
        
        let resultado = bool1 && bool2 && bool3
        console.log("a. ", resultado)
        
        resultado = (bool2 || bool1) && !bool3
        console.log("b. ", resultado)
        
        resultado = !resultado && (bool1 || bool1)
        console.log("c. ", resultado)
        
        resultado = (resultado && (!bool1 || bool2)) && !bool3
        console.log("d. ", resultado)
        
        console.log("e. ", typeof resultado)

//Respostas//
// true e false e true// a.false
//(false ou true =true) true e true// b.true
// contrário do resultado e (false ou false=true) false e true = false// c.false
// resultado e (false ou false =true) e false, resultado e true e false , false e true e false//d.false
// e.booleans

//2. Leia o código abaixo. //

        let array
        console.log('I. ', array)
        
        array = null
        console.log('II. ', array)
        
        
        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('III. ', array.length)
        
        let i = 0
        console.log('IV. ', array[i], " e ", array[i+1])
        
        array[i+1] = 19
        const valor = array[i+6]
        console.log('V. ', array[i+1], " e ", valor)
        
        i+=1
        array[i] = array[i-1]
        console.log('VI. ', array[i])
        
        i = array.length - 1
        array[i] = array[i-3]
        const resultadoC = array[i]%array[1]
        console.log('VII. ', resultadoC)

    //a. O que é `array` e como se declara em `JS`?//
    //Resposta:A array é uma lista, é uma variável que guarda mais de uma informação ao mesmo tempo.//
    //Declara-se com array [0,1,2]

    //b. Qual o index inicial de um `array`?/
    //Resposta: [i]//

    //c. Como se determinar o tamanho do `array`?//
   // Resposta: array.lenght

    //d. Indique todas as mensagens impressas no console.//
   // I.undefined//
   // II. null//
   // III. 10//
   //IV.3 e 4//
    //V. 19 e 22??//
    //VI.0?//
    //VII.?????

//**Exercícios de escrita de código**//

//1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

            (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

            (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

   // a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
   
    //b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

   // c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

   // d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
    
   
   //2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:

   `
       1. Qual o seu endereço?
       Resposta: Rua ABC, 123
   
       2. Qual a sua cor favorita?
       Resposta: Azul
 
   //let signo = prompt ("Qual é o seu signo?")//
   // let signo = "" //
   //console.log = "Meu signo é" +signo+.//

   //let cidade = prompt ("Que cidade você nasceu?")//
   //let cidade = ""//
   //console.log = "Eu nasci na cidade de" +cidade+.//

   //let avo = prompt ("Qual o nome de sua avó materna?")//
   let avo = ""//
   //console.log = "O nome da minha avó materna é" +avo+.//

   //let estadocivil= prompt ("Qual seu estado civil?")"//
   //let estadocivil= ""//
   //console.log = "Eu sou" +estadocivil+.//
   
   //let futebol = prompt ("Para qual time de futebol você torce?")//
   // let futebol = "" //
   // console.log = "Eu torço para" +futebol+//

  // 3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa um quinto do salário mínimo. Faça um programa que receba o valor do salário mínimo e a quantidade de quilowatts consumida por uma residência.//
?
   // a. Calcule e mostre o valor de cada quilowatt-hora, considerando o atual valor do salário mínimo;
?
   // b. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
?
   // c. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
?
   `