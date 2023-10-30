let nome = prompt("Digite seu nome:")
let idade = Number(prompt("Digite sua idade:"))
let peso = Number(prompt("Digite seu peso:"))
let profissao = prompt("Digite sua profissão:")
let altura = Number(prompt("Digie sua altura:"))
let idadeEmMeses = (idade * 12)
let idadeEmSemanas = (idadeEmMeses * 30)
let idadeEmDias = (idadeEmSemanas * 7)
let anoDeNasc = (2023 - idade)
let anoAtual = 2023

console.log("Usuário inseriu nome: " + nome + ", idade: " + idade + ", peso: " + peso + "kg, profissão: " + profissao + ", altura: " + altura + ".");

if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas.")
} else (console.log("Sem gelada para você."))

calculoIMC = (peso / (altura * altura))
if (calculoIMC < 18.5) {
    console.log("O IMC do usuário está na faixa Magro.")
}
if (calculoIMC > 18.5 && calculoIMC < 24.9) {
    console.log("O IMC do usuário está na faixa Normal.")
}
if (calculoIMC > 24.9 && calculoIMC < 30) {
    console.log("O IMC do usuário está na faixa Sobrepeso.")
}
if (calculoIMC > 30) {
    console.log("O IMC do usuário está na faixa Obeso.")
}

console.log("A idade do usuário em meses é: " + idadeEmMeses + ".")
console.log("A idade do usuário em semanas é: " + idadeEmSemanas + ".")
console.log("A idade do usuário em dias é: " + idadeEmDias + ".")
console.log("O usuário nasceu em: " + anoDeNasc + ".")

let anoVida = anoDeNasc
let idadeAtual = 0
for (let anoVida = anoDeNasc; anoVida <= anoAtual; anoVida++) {
    console.log(anoVida + " - " + idadeAtual + " anos de idade.")
    idadeAtual++
}

do {
    let continuar = prompt("Deseja inserir os dados novamente? (s/n")
} while (continuar == "s")

