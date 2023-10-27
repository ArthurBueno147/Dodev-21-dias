let numero1 = parseInt(prompt("Digite o primeiro número:"))
let numero2 = parseInt(prompt("Digite o segundo número:"))
let escolha = prompt("Digite: 1 para adição, 2 para subtração, 3 para multiplicação e 4 para divisão:")
let resultado = 0
switch (escolha) {
    case "1":
        resultado = numero1 + numero2
        console.log("O resultado da adição foi: " + resultado)
        break;

    case "2":
        resultado = (numero1 - numero2)
        console.log("O resultado da subtração foi: " + resultado)
        break;

    case "3":
        resultado = (numero1 * numero2)
        console.log("O resultado da multiplicação foi: " + resultado)
        break;

    case "4":
        resultado = (numero1 / numero2)
        console.log("O resultado da divisão foi: " + resultado)
        break;
}

