const prompt = require('prompt-sync');

class Conversor {
    constructor(apiUrl) {
        this.apiUrl = apiUrl; //https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair -> my key:45d876608b56543e3d371574
      }

    // Método para realizar a conversão
    async convert(from, to, amount) {
        try {
        const response = await fetch(`${this.apiUrl}/${from}/${to}/${amount}`);
        if (!response.ok) {
            throw new Error("Erro ao acessar a API.");
        }

        const data = await response.json();
        if (data.success === false) {
            throw new Error("Conversão falhou. Verifique os códigos das moedas.");
        }

        return {
            rate: data.info.rate,
            result: data.result.toFixed(2),
        };
        } catch (error) {
        throw new Error(`Erro na conversão: ${error.message}`);
        }
    }  
}