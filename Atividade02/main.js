/*
2) Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */
var who;

while (true) {
    who = prompt("Você é Professor ou Aluno");
    who = who.toLowerCase();

    if (who === "professor" || who === "professora") {
        var z = 'Olá Bem vindo Professor(a): ';
        break;
    } else if (who === "aluno") {
        var z = "Bem vindo Aluno: ";
        break;
    }
}
var nome = prompt('Digite seu nome');
var senha = prompt('Digite sua senha');

senha = senha.toLowerCase();
nome = nome.toLowerCase();

while(senha == nome){
     senha = prompt('Seu Nome e senha não podem ser iguais')
}

resultado = document.getElementById('nomeId');
    resultado.innerHTML = (z + nome);



/*
3) Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/

var nota = parseFloat(prompt('Qual foi sua nota no exame?'));



while ( nota > 10 || nota < 0) {
     nota = parseFloat(prompt("Digite uma nota valida entre 0 e 10"));
}

var resultado = document.getElementById('notID');
resultado.innerHTML = (nota)




/*
4) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo: */

var num1 = parseInt(prompt("Digite qual numero deseja ver a tabuada"));
var a = ("");
     for( let x = 1; x <= 10; x++){
          a += (num1+ "x" + x + "="+ (x*num1) + "<br>");}
      
var resultado = document.getElementById('tabID');
resultado.innerHTML = (a);
