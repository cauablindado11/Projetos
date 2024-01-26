// ⇩⇩ import do react e do axios ⇩⇩
import React, { useState, useEffect } from "react";
import axios from "axios";

function Noticias() {
    // ⇩⇩ Estado para armazenar a lista de notícias ⇩⇩
    const [noticias, setNoticias] = useState([]);

    // ⇩⇩ Chave da API e URL da API de notícias ⇩⇩
    const apiKey = "3b0559a415074856b6bd2ef91206dea4";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3b0559a415074856b6bd2ef91206dea4`;

    // ⇩⇩ Efeito que roda após a renderização inicial para buscar notícias ⇩⇩
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                // ⇩⇩ Atualiza o estado com a lista de notícias ⇩⇩
                setNoticias(response.data.articles);
            })
            .catch((error) => {
                // ⇩⇩ Exibe um erro no console caso ocorra algum problema na busca ⇩⇩
                console.error("Erro ao buscar notícias:", error);
            });
    }, []);

    // ⇩⇩ Renderiza a lista de notícias como elementos de lista ⇩⇩
    return (
        noticias.map((noticia, index) => (
            <li key={index}>
                {/* ⇩⇩ Cria um link para a notícia, abrindo em uma nova janela ou aba ⇩⇩ */}
                <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                    {noticia.title}
                </a>
            </li>
        ))
    );
}

// ⇩⇩ expotacao de noticias ⇩⇩
export default Noticias;
