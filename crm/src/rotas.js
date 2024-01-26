// ⇩⇩  Importação dos componentes necessários para a implementação de rotas no React ⇩⇩ 
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ⇩⇩ Importação dos componentes das diferentes páginas da aplicação ⇩⇩ 
import Dashboard from "./pages/dashboard/dashboard";
import Noticias from "./pages/pages_noticias/noticias_pages";
import Previsao from "./pages/pages_previsao/previsao_pages";
import Negocio from "./pages/pages_negocios/negocios_pages";
import Atividade from "./pages/pages_atividades/atividades_pages";
import Tarefas from "./pages/pages_tarefas/tarefa_pages";

// ⇩⇩ Definição do componente Rotas que gerenciará as rotas da aplicação ⇩⇩ 
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ⇩⇩ Definição das rotas e associação aos componentes das páginas correspondentes ⇩⇩  */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/previsao" element={<Previsao />} />
                <Route path="/negocio" element={<Negocio />} />
                <Route path="/atividade" element={<Atividade />} />
                <Route path="/tarefas" element={<Tarefas />} />
            </Routes>
        </BrowserRouter>
    );
}

// ⇩⇩ Exporta o componente Rotas para ser utilizado na aplicação principal ⇩⇩ 
export default Rotas;
