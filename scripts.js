class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempoETroco() {
        if (this.valor < 1.00) {
            return "❌ Valor insuficiente!";
        }

        let tempo = 0;
        let troco = 0;

        if (this.valor >= 3.00) {
            tempo = 120;
            troco = this.valor - 3.00;
        } else if (this.valor >= 1.75) {
            tempo = 60;
            troco = this.valor - 1.75;
        } else if (this.valor >= 1.00) {
            tempo = 30;
            troco = this.valor - 1.00;
        }

        return `⏱ Tempo: ${tempo} minutos | 💰 Troco: R$ ${troco.toFixed(2)}`;
    }
}

// Função chamada pelo botão
function calcular() {
    const valorInput = document.getElementById("valor").value;
    const resultado = document.getElementById("resultado");

    const valor = parseFloat(valorInput);

    if (isNaN(valor)) {
        resultado.textContent = "⚠️ Digite um valor válido!";
        return;
    }

    const parquimetro = new Parquimetro(valor);
    resultado.textContent = parquimetro.calcularTempoETroco();
}