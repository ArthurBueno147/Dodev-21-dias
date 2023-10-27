let nome = prompt("Dígite seu nome:")
let idade = parseInt(prompt("Dígite sua idade:"))
let altura = Number(prompt("Dígite sua altura:"))
let peso = Number(prompt("Dígite seu peso:"))
let ano = 2023 - idade
let imc = peso / altura

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + ano + ", tem " + altura + " de altura, pesa " + peso + "kg, seu IMC é " + imc + "Kg/m2")

