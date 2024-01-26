// ⇩⇩ Definição do componente de carregamento do gráfico e dos cards do dashboard. ⇩⇩
function Indicador(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.titulo}
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{props.valor}</h5>
                <p className="card-text">{props.rodape}</p>
            </div>
        </div>
    );
}

// ⇩⇩ Exportação do componente para outras páginas. ⇩⇩
export default Indicador;
