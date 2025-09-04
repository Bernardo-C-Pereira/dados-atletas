class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        }

        if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        }

        if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        }

        if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        }

        return "Sem categoria";
    }

    calculaIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        notasOrdenadas.pop();
        notasOrdenadas.shift();
        let soma = notasOrdenadas.reduce((acc, nota) => acc + nota, 0);
        return (soma / notasOrdenadas.length).toFixed(2);
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas.join(", ");
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

function obterDadosAtleta(atleta) {
    return `Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()} Kg
Altura: ${atleta.obtemAlturaAtleta()} m
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média Válida: ${atleta.obtemMediaValida()}`;
}

const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

const atleta2 = new Atleta("Pedro Pascal", 40, 85, 1.74, [10, 9.30, 8.40, 10, 7.80]);

console.log(obterDadosAtleta(atleta1));
console.log("----");
console.log(obterDadosAtleta(atleta2));