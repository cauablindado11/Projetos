// ⇩⇩ Importação dos componentes necessários para o Dashboard ⇩⇩
import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Indicador from "../../components/indicador/indicador.jsx";
import Grafico from "../../components/grafico/grafico.jsx";

// ⇩⇩ Definição do componente Dashboard ⇩⇩
function Dashboard() {
    return (
        <>
            {/* ⇩⇩ Container principal da página ⇩⇩ */}
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {/* ⇩⇩ Coluna do menu lateral ⇩⇩ */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <Menu page="dashboard" />
                    </div>

                    {/* ⇩⇩ Coluna principal do conteúdo ⇩⇩ */}
                    <div className="col py-3 me-3">
                        {/* ⇩⇩ Barra de busca por negócios ⇩⇩ */}
                        <div className="mb-5">
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* ⇩⇩ Título e botão de atualização ⇩⇩ */}
                        <div className="d-flex justify-content-between">
                            <h1>Dashboard...</h1>
                            <button className="btn btn-primary ms-4">Atualizar</button>
                        </div>

                        {/* ⇩⇩ Blocos de indicadores e gráfico ⇩⇩ */}
                        <div className="row">
                            {/* ⇩⇩ Indicador: Negócios do Mês ⇩⇩ */}
                            <div className="col-md-3 mt-4">
                                <Indicador
                                    titulo="Negócios do Mês"
                                    valor="R$19.000,00"
                                    rodape="12 atividades"
                                />
                            </div>

                            {/* ⇩⇩ Indicador: Atividades para Hoje ⇩⇩ */}
                            <div className="col-md-3 mt-4">
                                <Indicador
                                    titulo="Atividades para Hoje"
                                    valor="6 atividades"
                                    rodape="R$3.150,00"
                                />
                            </div>

                            {/* ⇩⇩ Gráfico: Vendas Anual ⇩⇩ */}
                            <div className="col-md-12 mt-5">
                                <Grafico titulo="Vendas Anual" chartType="Line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// ⇩⇩ Exporta o componente Dashboard para ser utilizado em outras partes da aplicação ⇩⇩
export default Dashboard;
