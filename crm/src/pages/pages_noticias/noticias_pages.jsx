// ⇩⇩ Importação dos componentes necessários para a página de Notícias v
import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Noticias from "../../components/noticias/noticia";

// ⇩⇩ Definição do componente da página de Notícias ⇩⇩
function Page_Noticias() {
    return (
        <>
            {/* ⇩⇩ Container principal da página ⇩⇩ */}
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {/* ⇩⇩ Coluna do menu lateral ⇩⇩ */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <Menu page="noticias" />
                    </div>

                    {/* ⇩⇩ Coluna principal do conteúdo ⇩⇩ */}
                    <div className="col py-3 me-3">
                        {/* ⇩⇩ Barra de busca por negócios ⇩⇩ */}
                        <div className="mb-5">
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* ⇩⇩ Exibição das Notícias ⇩⇩ */}
                        <div className="row">
                            {/* ⇩⇩ Componente de Notícias ⇩⇩ */}
                            <Noticias />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// ⇩⇩ Exporta o componente da página de Notícias para ser utilizado em outras partes da aplicação ⇩⇩
export default Page_Noticias;
