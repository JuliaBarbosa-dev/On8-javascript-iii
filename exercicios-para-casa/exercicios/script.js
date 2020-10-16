// 1. Liste os números de 0 a 10 no console;
for(let i=0; i<=10;i++){
    console.log(i);
}

// 2. Some somente os valores ímpares de uma lista de números;
let lista = [ 1, 2 , 5, 6, 7, 9, 11, 13];

function impar(num) {
    return num % 2 !== 0;
}

let num = lista.filter(impar);
console.log(num);

function somar(contador, item) {
    return contador + item
}

console.log("Soma: " + num.reduce(somar));
// 3. Liste a tabuada do 6 (do 1 ao 10);
let numero = 6

for(let i=1;i<=10;i++){
  console.log(`${[i]} x ${numero} = ${[i] * numero}`)
}
// 4. Crie uma lista de notas de provas;
const listNotas = [5.0, 3.0, 7.5, 10.0];

// 5. Some as todas as notas da lista de provas;
function somar(contador, num) {
    return contador + num
  }
  
  console.log("Soma das notas: " + listNotas.reduce(somar))

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
const listaCompras = [{

    name: 'Chocolate Bis',
    comprado: true,
    valor: 5.99
},
{

    name: 'Feijão',
    comprado: false,
    valor: 9.00
},
{

    name: 'Macarrão',
    comprado: true,
    valor: 4.00
},
{

    name: 'Bolacha',
    comprado: true,
    valor: 4.99
},
{

    name: 'Extrato de Tomate',
    comprado: false,
    valor: 2.70
}
]
// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
const comprado = listaCompras.filter(item => item.comprado == true)
console.log(comprado)

// 8. Some o total dos valores de itens da lista do mercado.
function valores(produto) {
    return produto.valor;
}

console.log(listaCompras.map(valores))

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

function returnName(nome) {
    return nome[0] == 'A';
}

console.log(nomes.filter(returnName))
///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Julia',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
