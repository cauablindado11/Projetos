// ⇩⇩ import do react e do axios ⇩⇩
import React, { useState, useEffect } from "react";
import axios from "axios";

const Previsao = () => {
    // ⇩⇩ Estado para armazenar as informações da previsão do tempo ⇩⇩
    const [previsao, setPrevisao] = useState(null);

    // ⇩⇩ Chave da API do OpenWeatherMap ⇩⇩
    const apiKey = "c1546a14357ae0b10c01b1d480a16012";

    // ⇩⇩ Efeito que roda após a renderização inicial para buscar a previsão do tempo ⇩⇩
    useEffect(() => {
        // ⇩⇩ Cidade e país para obter a previsão do tempo ⇩⇩
        const cidade = "votuporanga";
        const pais = "brasil";

        // ⇩⇩ Construção da URL da API ⇩⇩
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

        // ⇩⇩ Requisição à API ⇩⇩
        axios
            .get(apiUrl)
            .then((response) => {
                // ⇩⇩ Atualiza o estado com os dados da previsão do tempo ⇩⇩
                setPrevisao(response.data);
            })
            .catch((error) => {
                // ⇩⇩ Exibe um erro no console caso ocorra algum problema na busca ⇩⇩
                console.error("Erro ao buscar previsão do tempo:", error);
            });
    }, []); // ⇩⇩ A dependência vazia faz com que o efeito seja executado apenas uma vez ⇩⇩

    // ⇩⇩ Verifica se ainda não há dados da previsão disponíveis ⇩⇩
    if (!previsao) {
        return <div>Carregando...</div>;
    }

    // ⇩⇩ Converte a temperatura para Celsius e arredonda ⇩⇩
    const paraCelcius = previsao.main.temp - 273.15;
    const temperaturaArredondada = Math.round(paraCelcius);

    // ⇩⇩ Traduz a descrição da condição do tempo ⇩⇩
    const palavrasIngles = ['broken clouds', 'overcast clouds', 'scattered clouds', 'light rain', 'clear sky'];
    const palavrasTraduzidas = ['Nuvens Quebradas', 'Nuvens Nubladas', 'Nuvens Dispersas', 'Chuva Leve', 'Céu Limpo'];
    let resultadoTraducao;

    for (let i = 0; i < palavrasIngles.length; i++) {
        if (palavrasIngles[i] === previsao.weather[0].description) {
            resultadoTraducao = palavrasTraduzidas[i];
        }
    }

    // ⇩⇩ Renderiza as informações da previsão do tempo ⇩⇩
    return (
        <div>
            <h2>Previsão do Tempo</h2>
            <p>Cidade: {previsao.name}</p>
            <p>Temperatura: {temperaturaArredondada} °C</p>
            <p>Condição: {resultadoTraducao}</p>
        </div>
    );
};

// ⇩⇩ export de previsao para outra pagina ⇩⇩
export default Previsao;
