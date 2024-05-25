const filtro = 18;
const idadeComprador = 18;
const acompanhado = false;

let acompanhamentoNome
if (acompanhado == false) {
    acompanhamentoNome = "desacompanhado"
} else {
    acompanhamentoNome = "acompanhado"
}

//criando uma lista
const cidadesDisponiveis = new Array (
    `criciuma`,
    `florianopolis`,
    `blumenau`
);
//o destino que o usuario quer é blumenau
const destino = `blumenau`


//estou atribuindo o numero total de itens na lista, pelo comando .leght
const totalCidadesDisponiveis = cidadesDisponiveis.length

let destinoExiste = false

//Quando utilizamos o for, vamos primeiro declarar a variavel que vai percorrer o loop
//depois a condião de "limite" para ela, nesse caso vai percorrer até o contador ser maior que o numero total de itens na lista de cidades
//por fim, vou declarar que o contador vai ficar aumentando de 1 em 1

for (let contador = 0; contador < totalCidadesDisponiveis; contador++ )
    if(destino == cidadesDisponiveis[contador]) { //Se o que eu escolhi como destino é igual ao index da cidade que estou procurando
        console.log(`${cidadesDisponiveis[contador]} este destino é o que você busca!`) //confirma meu destino
        destinoExiste = true;
    }else{
        console.log(`${cidadesDisponiveis[contador]} este destino é o que você não busca...`) //senão desvalida meu destino
    }

console.log(`Você quer comprar alguma passagem? Precisa ter mais do que ${filtro} anos de idade! `); //18 anos de idade 

//Vai poder comprar SE idadeComprador for maior ou igual que 18 ou se estiver acompanhado, neste caso pode comprar pois é igual que 18
const podeComprar = idadeComprador >= 18 || acompanhado;
let temPassagem

if (podeComprar){
    console.log(`Você comprou uma passagem`)
    cidadesDisponiveis.splice(0,1)
    temPassagem = true;
    } else {
        console.log(`você não pode comrpar pois Precisa ter mais do que ${filtro} anos de idade! E esta ${acompanhamentoNome}`)
        temPassagem = false;
    }

if (podeComprar && destinoExiste) {
    console.log("boa viagem")
} else {
    console.log("Desculpe tivemos um erro!");
}

console.log(cidadesDisponiveis)