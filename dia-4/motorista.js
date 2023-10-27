let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let possuiCarro = prompt("Você possui carro? (S/N)")
let possuiCarta = prompt("Você tem carteira? (S/N)")

if (idade < 18 || possuiCarta === "N") {
    console.log(nome + ", você não pode dirigir.")
} else if (possuiCarro === "N") {
    console.log(nome + ", você pode dirigir mas não tem um carro.")
} else {
    console.log(nome + ", você será o motorista!")
}