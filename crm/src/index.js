// ⇩⇩ Importação das bibliotecas React e ReactDOM ⇩⇩
import React from 'react';
import ReactDOM from 'react-dom/client';

// ⇩⇩ Importação do arquivo de estilo global ⇩⇩
import "./style/global.css";

// ⇩⇩ Importação do componente Dashboard da pasta de rotas ⇩⇩
import Dashboard from './rotas';

// ⇩⇩ Criação de uma raiz React no elemento com o ID 'root' no documento HTML ⇩⇩
const root = ReactDOM.createRoot(document.getElementById('root'));

// ⇩⇩ Renderização do componente Dashboard na raiz criada ⇩⇩
root.render(
    <>
        <Dashboard />
    </>
);
