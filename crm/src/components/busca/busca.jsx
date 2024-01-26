// ⇩⇩ Importação do estilo da busca através do arquivo "busca.css". ⇩⇩
import "./busca.css";

// ⇩⇩ Definição do componente de carregamento da busca. ⇩⇩
function Busca(props) {
    return (
        <div className="input-group">
            <input type="text" className="form-control busca" placeholder={props.texto} />
            <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
        </div>
    );
}

// ⇩⇩ Exportação do componente de busca como exportação padrão do arquivo. ⇩⇩
export default Busca;
