class Validador {
    valida_origem(origem) {
        if (origem === "") return true;
        return false;
    }

    valida_entrada(entrada) {
        if (entrada.length !== 3) {
            console.log("\nErro: O código da moeda deve ter exatamente 3 caracteres.\n");
            return true;
        }
        return false;
    }

    valida_amount(amount) {
        if (isNaN(amount) || amount <= 0) {
            console.log("\nErro: O valor deve ser um número maior que zero.\n");
            return true;
        }
        return false;
    }
}

module.exports = Validador;