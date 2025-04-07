import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar carro");
    console.log("2 - Frear carro");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
    
        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function subirMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual == 0) {
        console.log(`Veículo arrancando, na marcha 1.`);
        veiculo.marchaAtual += 1
        acelerar(veiculo)
    } else if (veiculo.marchaAtual < 25 && veiculo.marchaAtual > 15) {
        console.log(`Veículo na marcha 2.`);
        veiculo.marchaAtual += 2
        acelerar(veiculo)
    } else if (veiculo.marchaAtual < 40 && veiculo.marchaAtual > 25) {
        console.log(`Veículo na marcha 3.`);
        veiculo.marchaAtual += 3
        acelerar(veiculo)
    } else if (veiculo.marchaAtual < 60 && veiculo.marchaAtual > 40) {
        console.log(`Veículo na marcha 4.`);
        veiculo.marchaAtual += 4
        acelerar(veiculo)
    } else if (veiculo.marchaAtual < 80 && veiculo.marchaAtual > 60) {
        console.log(`Veículo na marcha 5.`);
        acelerar(veiculo)
        veiculo.marchaAtual += 5
    } else {
        console.log(`O veículo já está na última marcha.`);
        acelerar(veiculo)
    }
}


