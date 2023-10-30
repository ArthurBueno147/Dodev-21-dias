let condicao = true

while (condicao) {
    let nome = prompt("Digite seu nome:")
    let idade = Number(prompt("Digite sua idade:"))
    let salarioAtual = Number(prompt("Digite seu salário atual:"))
    console.log("Seu nome é: " + nome + ", sua idade é: " + idade + ", seu salário atualmente é: " + salarioAtual);
    let escolha = prompt("Você confirma os dados? (S/N)")
    if (escolha == "S")
        condicao = false;

    let aumento = 0.015;
    console.log("Previsão de salário para os próximos 10 anos:")

    for (let ano = 1; ano <= 10; ano++) {
        salarioAtual = salarioAtual + (salarioAtual * aumento);
        aumento *= 2;
        console.log((2023 + ano) + " = R$ " + salarioAtual)
    }
}