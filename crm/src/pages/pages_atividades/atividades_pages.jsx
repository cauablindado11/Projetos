// ⇩⇩ Importação dos componentes necessários para o Dashboard ⇩⇩
import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Atividade from "../../components/atividades/ativiadade";


// ⇩⇩ carregamento de atividades ⇩⇩
function Page_Atividade() {
    return <>

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    {/* ⇩⇩ Menu de atividades ⇩⇩ */}
                    <Menu page="atividade" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        {/* ⇩⇩ Busca da navbar ⇩⇩ */}
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div className="row">
                        {/* ⇩⇩ exportacao de atividades ⇩⇩ */}
                        <Atividade/>

                    </div>
                </div>
            </div>
        </div>
    </>
}

// ⇩⇩ exportacao de atividades ⇩⇩
export default Page_Atividade;