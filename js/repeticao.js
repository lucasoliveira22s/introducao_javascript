// Exibir no console 150 múltiplos de 3

for(let multiplu = 0; multiplu < 150; multiplu++){
    //console.log(multiplu*3);
}

//Executar enquanto a variável de controle for divisão exata de 23

let indice =1;

while(indice % 23 !== 0){
    //console.log(indice);
    indice++;
}

// Executar uma primeira vez e verificar se o  número é par, se for par parar o loop

let numero = 0;

do{
    //console.log(numero);
    numero++;
}while(numero % 2 !==0);

// Percorrer uma lisra de produtos e exibi-los

const produtos = ['Café', 'Açucar', 'Sabão', 'shampoo', 'Feijão'];

for(const produto of produtos){
    console.log(produto)
}
