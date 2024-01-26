// ⇩⇩ Parte de negócios que é exibida na página. ⇩⇩
function Negocio() {
    return (
        <>
            <div className="bg-white p-4 rounded-4 border">
                <div className="d-flex justify-content-between mb-3">
                    <div className="d-inline-flex">
                        {/* ⇩⇩ Título de negocios ⇩⇩ */}
                        <h2>Negócios...</h2>

                            {/* ⇩⇩ Topico do dropdown de noticias ⇩⇩ */}
                        <div className="form-control ms-4">
                            <select name="etapa" id="etapa">
                                <option value="0">Etapa</option>
                                <option value="Prospecção">Prospecção</option>
                                <option value="Proposta">Proposta</option>
                            </select>
                        </div>
                    </div>

                        {/* ⇩⇩ botao de novo negocio ⇩⇩ */}
                    <button className="btn btn-primary ms-4 ms-2"><i class="bi bi-plus-lg me-2"></i>Novo Negócio</button>
                </div>
            </div>
        </>
    );
}

// ⇩⇩ exportacao de negocio ⇩⇩
export default Negocio;
