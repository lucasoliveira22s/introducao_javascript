
const numero1 = 31;
const numero2 = 33;
const numero3 = 87;
const numero4 = 5;
const stringNumero = '33';

console.log('é igual', numero2 == stringNumero);
console.log('é igual', numero2 === stringNumero);
console.log('é diferente', numero2 != stringNumero);
console.log('é diferente', numero2 !== stringNumero);

console.log('numero1 é maior igual que numero4:', numero1 >= numero4);
console.log('numero2 é menor igual que numero3:', numero2 < numero3);

console.log('Adição:', numero1 + numero3);
console.log('Subtração:', numero4 - numero2);
console.log('Multiplicação:', numero2 * numero3);
console.log('Divisão:', numero1 / numero4);
console.log('Módulo:', numero4 % numero3);

if(numero1 > numero3){
    console.log('Número 1 é maior');
}else if(numero4 > numero1){
    console.log('Número 4 é maior');
}else{
    console.log('Número 3 é maior');
}

switch(numero2){
    case 90:
        console.log('noventa e dois');
        break;
    case 33:
        console.log('trinta e três');
        break;
    case 42:console.log('quarebta e dois');
        break;
    default:
        console.log('nenhum número encontrado');
}