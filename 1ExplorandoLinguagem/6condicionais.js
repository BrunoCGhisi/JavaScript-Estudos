const filtro = 18;
const idadeComprador = 17;
const acompanhado = false;
let acompanhamentoNome
let temPassagem

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

console.log(`Você quer comrpar alguma passagem? Precisa ter mais do que ${filtro} anos de idade! `);

if (idadeComprador >= filtro || acompanhado){
    console.log(`Você comprou uma passagem`)
    cidadesDisponiveis.splice(0,1)
    temPassagem = true;
    } else {
        console.log(`você não pode comrpar pois Precisa ter mais do que ${filtro} anos de idade! E esta ${acompanhamentoNome}`)
        temPassagem = false;
    }

console.log(cidadesDisponiveis)

