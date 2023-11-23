function calculaimc() {
    let totalUsuarios = 5;
    let usuarios = [];
    let maiorIMC = Number.MIN_VALUE;
    let usuarioMaiorIMC = null;
    let somaIMC = 0;

    for (let i = 0; i < totalUsuarios; i++) {
        let nome = prompt("Informe o nome do usuário " + (i + 1) + ": ");
        let peso = parseFloat(prompt("Informe o peso de " + nome + ": "));
        let altura = parseFloat(prompt("Informe a altura de " + nome + ": "));

        let imc = peso / (altura ** 2);

        let classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do peso normal!";
        } else if (imc < 24.9) {
            classificacao = "Peso normal!";
        } else if (imc < 29.9) {
            classificacao = "Excesso de peso";
        } else if (imc < 34.9) {
            classificacao = "Obesidade Classe I";
        } else if (imc < 39.9) {
            classificacao = "Obesidade Classe II";
        } else {
            classificacao = "Obesidade Classe III";
        }

        usuarios.push({ nome, peso, altura, imc, classificacao });
        somaIMC += imc;

        if (i === 0) {
            console.log(nome + " tem um peso de " + peso + " kg.");
        }

        if (imc > maiorIMC) {
            maiorIMC = imc;
            usuarioMaiorIMC = { nome, peso, altura, imc, classificacao };
        }

        // Exibindo classificação do IMC para o usuário atual
        console.log(nome + " tem classificação de IMC: " + classificacao);
    }

    let mediaIMC = somaIMC / totalUsuarios;

    // Resumo das informações:
    console.log("Quantidade de usuários coletados: " + totalUsuarios);
    console.log("Maior IMC entre os usuários:");
    console.log(usuarioMaiorIMC);
    console.log("Média dos IMCs dos usuários: " + mediaIMC.toFixed(2));
}

// Função que calcula o IMC:
calculaimc();

