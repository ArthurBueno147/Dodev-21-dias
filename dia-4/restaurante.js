let fome = prompt("Você está com fome? (S/N)")
let dinheiro = prompt("Você tem dinheiro? (S/N)")
let restaurante = prompt("O restaurante está aberto? (S/N)")

if (fome === "N" || dinheiro === "N") {
    console.log("Hoje a janta será em casa")
} else if (restaurante === "N") {
    console.log("peca um delivery")
} else {
    console.log("Hoje o jantar será no seu restaurante preferido")
}