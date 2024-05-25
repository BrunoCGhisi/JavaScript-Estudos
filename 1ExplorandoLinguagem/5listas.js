console.log(" Vamos fazer a lista de cidades de SC ")



//criando uma lista
const cidades = new Array (
    `criciuma`,
    `florianopolis`,
    `blumenau`
);

//adicionando itens a uma lista, coloque o nomeDaLista.push
cidades.push(`brusque`);

//excluindo itens de uma lista, coloque nomeDaLista.splice(posição inicial para começar a contar, quantos valores vai retirar)
//neste caso eu comecei contando do index 0, e excluí 1 valor apenas, a partir do zero
cidades.splice(0,1);

//Se eu quiser printar apenas um valor, posso pesqusiar pelo index
console.log(cidades[0], cidades[2]); //criciuma

console.log(cidades);