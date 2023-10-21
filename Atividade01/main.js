/*alert("Faça um programa que leia e valide as seguintes informações: Nome: maior que 3 caracteres; Idade: entre 0 e 150; Salário: maior que zero; Sexo: 'f' ou 'm'; Estado Civil: 's', 'c', 'v', 'd'; Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length")
/*
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/

function idnome(){
    var name = document.getElementById('name');
    var nome = name.value
    while (true){
        if(nome.length > 3){
            var nome = nome;
            break;
        }else{
            var nome = prompt('Insira um nome valido');
        }
    }
    var resultado = document.getElementById('result_name');
    resultado.innerHTML = (`Seu nome é ${nome}`);
}

function ididade(){
    var years = document.getElementById('years');
    var idade = years.value;
    while(true){
        if(idade >=1 && idade <= 150){
            var idade = idade;
            break;
        }else{
            var idade = parseInt(prompt('Digite apenas numeros de 1 a 150'));
        }   
    }
    var resultado = document.getElementById('result_years');
    resultado.innerHTML = (`Você tem ${idade} anos`);
}

function idindin(){
    var money = document.getElementById('money');
    var salario = money.value;
    while(true){
        if(salario > 0){
            var salario = salario;
            break;
        }else{
            var salario = parseFloat(prompt('Digite um salário valido'));
        }
    }
    var resultado = document.getElementById('result_money');
    resultado.innerHTML = (`Seu sálario é R$${salario}`);
}

function idgender(){
    var gender = document.getElementById('gender');
    var genero = gender.value;
    if(genero == 'valor1'){
        var g = ('Você é do sexo Masculino');
    }else if( genero == 'valor2'){
        var g = ('Você é do sexo Feminino')
    }else{
        var g = ('Você não se identifica como maculino nem como feminino');
    }
    var resultado = document.getElementById('result_gender');
    resultado.innerHTML = (g);
}

function idlove(){
    var love = document.getElementById('love');
    var Ecivil= love.value;
    if(Ecivil == 'valor1'){
        var ec = ('Você é Solteiro');
    }else if( Ecivil == 'valor2'){
        var ec = ('Você está Casado');
    }else if( Ecivil == 'valor3'){
        var ec = ('Você está Viuvo');
    }else{ 
        var ec = ('Você está Divorciado')
    }
    var resultado = document.getElementById('result_love');
    resultado.innerHTML = (ec);
}







