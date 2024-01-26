// ⇩⇩ Importação dos componentes necessários para a página de Previsão do Tempo ⇩⇩
import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Tarefas from "../../components/tarefas/tarefas";

// ⇩⇩ Definição do componente da página de Previsão do Tempo ⇩⇩
function Page_Tarefas() {
    return (
        <>
            {/* ⇩⇩ Container principal da página ⇩⇩ */}
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {/* ⇩⇩ Coluna do menu lateral ⇩⇩ */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <Menu page="tarefas" />
                    </div>

                    {/* ⇩⇩ Coluna principal do conteúdo ⇩⇩ */}
                    <div className="col py-3 me-3">
                        {/* ⇩⇩ Barra de busca por negócios ⇩⇩ */}
                        <div className="mb-5">
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* ⇩⇩ Exibição da Previsão do Tempo ⇩⇩ */}
                        <div className="row">
                            {/* ⇩⇩ Componente de Previsão do Tempo ⇩⇩ */}
                            <Tarefas />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// ⇩⇩ Exporta o componente da página de Previsão do Tempo para ser utilizado em outras partes da aplicação ⇩⇩
export default Page_Tarefas;
