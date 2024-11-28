const Conversor = require("./Conversor.js");
const prompt = require("prompt-sync")();

//apiUrl = https://v6.exchangerate-api.com/v6/45d876608b56543e3d371574/pair -> my key:45d876608b56543e3d371574

class App {
    constructor() {
        this.conversor = new Conversor("https://v6.exchangerate-api.com/v6/45d876608b56543e3d371574/pair");
        this.prompt = prompt;
    }

    async run() {

        do {
            const from = this.prompt("Moeda origem: ");

            if (from === "") break;

            const to = this.prompt("Moeda destino: ");
            const amount = parseFloat(this.prompt("Valor: "));

            const result = await this.conversor.convert(from, to, amount);

            console.log(`\n${result.base_code} ${amount} => ${result.target_code} ${result.conversion_result}`);
            console.log(`Taxa: ${result.conversion_rate}\n`);
        } while (true)
        
        console.log("\nPrograma encerrado.\n");

    }
}

const app = new App();
app.run();