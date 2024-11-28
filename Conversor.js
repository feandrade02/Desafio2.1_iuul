class Conversor {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
      }

    // Método para realizar a conversão
    async convert(from, to, amount) {
        try {
        const response = await fetch(`${this.apiUrl}/${from}/${to}/${amount}`);
        if (!response.ok) {
            throw new Error("Erro ao acessar a API.");
        }

        const data = await response.json();
        if (data.result === "error") {
            throw new Error("Conversão falhou. Verifique os códigos das moedas.");
        }

        return data
        } catch (error) {
        throw new Error(`Erro na conversão: ${error.message}`);
        }
    }  
}

module.exports = Conversor;