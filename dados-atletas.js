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

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.calculaCategoria());    
console.log(atleta.calculaIMC());
console.log(atleta.calculaMediaValida());
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());