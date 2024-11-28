const Conversor = require("./Conversor.js");
const Validador = require("./Validador.js");
const prompt = require("prompt-sync")();

class App {
    constructor() {
        this.conversor = new Conversor("https://v6.exchangerate-api.com/v6/45d876608b56543e3d371574/pair");
        this.prompt = prompt;
        this.validador = new Validador();
    }

    async run() {

        do {
            const from = this.prompt("Moeda origem: ").toUpperCase();
            if (this.validador.valida_origem(from)) break;
            if (this.validador.valida_entrada(from)) continue;

            const to = this.prompt("Moeda destino: ").toUpperCase();
            if (this.validador.valida_entrada(to)) continue;

            const amount = parseFloat(this.prompt("Valor: ").replace(",", "."));
            if (this.validador.valida_amount(amount)) continue;

            const result = await this.conversor.convert(from, to, amount);

            console.log(`\n${result.base_code} ${amount.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} => ${result.target_code} ${parseFloat(result.conversion_result).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
            console.log(`Taxa: ${result.conversion_rate.toLocaleString("pt-BR", { minimumFractionDigits: 6, maximumFractionDigits: 6 })}\n`);


        } while (true)
        
        console.log("\nPrograma encerrado.\n");

    }
}

const app = new App();
app.run();