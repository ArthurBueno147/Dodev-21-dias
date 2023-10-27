let opcoes = prompt("Digite 1 para abastecer com gasolina, 2 com etanol ou 3 para calibrar pneus:")
let litros = 0

switch (opcoes) {

    case "1":
        let gasolina = Number(prompt("Digite o valor desejado:"))
        litros = gasolina / 5
        console.log("Foi abastecido: " + litros + "L de gasolina.")
        break;

    case "2":
        let etanol = Number(prompt("Digite o valor desejado:"))
        litros = etanol / 3
        console.log("Foi abastecido: " + litros + "L de etanol.")
        break;

    case "3":
        console.log("Pneus calibrados com sucesso.")
        break;

}