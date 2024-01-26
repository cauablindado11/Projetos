// ⇩⇩ import react, nav-bar e a logo da pagina ⇩⇩
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from"../../assets/logo.png";

// ⇩⇩ carregamento do menu que existe em todas as paginas ⇩⇩
function Menu(props){

    const linkBlue = "nav-link align-middle px-0"
    const linkBlack = "nav-link align-middle px-0 link-secondary"

        return <>
            <div className="d-flex flex-collumn align-itens-center align-itens-sm-start px-3 pt-2 text-white min-vh-100">

            <a href="/" className="d-flex align-itens-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-nome d-sm-inline">
                        {/*⇩⇩ LOGO DA PAGINA ⇩⇩*/}
                    <img src={logo} className="img-logo" />
                </span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itens-sm-start" id="menu">

                        {/* ⇩⇩ ITEM DASHBOARD DA MENU NAV ⇩⇩ */}
                    <li className="nav-item">
                        <Link to="/dashboard" className={props.page == "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>

                        {/* ⇩⇩ ITEM NEGOCIOS DA MENU NAV ⇩⇩ */}
                    <li className="nav-item">
                        <Link to="/negocio" className={props.page == "negocio" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócios</span>
                        </Link>
                    </li>

                        {/* ⇩⇩ ITEM ATIVIDADES DA MENU NAV ⇩⇩ */}
                    <li className="nav-item">
                        <Link to="/atividade" className={props.page == "atividade" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Atividade</span>
                        </Link>
                    </li>

                        {/* ⇩⇩ ITEM NOTIVIAS DA MENU NAV ⇩⇩ */}
                    <li className="nav-item">
                        <Link to="/noticias" className={props.page == "noticias" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Notícias</span>
                        </Link>
                    </li>

                        {/* ⇩⇩ ITEM PREVISAO DA MENU NAV ⇩⇩ */}
                    <li className="nav-item">
                        <Link to="/previsao" className={props.page == "previsao" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Previsão</span>
                        </Link>
                    </li>

                       {/* ⇩⇩ ITEM TAREFAS DA MENU NAV ⇩⇩ */}
                       <li className="nav-item">
                        <Link to="/tarefas" className={props.page == "tarefas" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Tarefas</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </>
}
            
// ⇩⇩ exportacao do menu para todas as paginas ⇩⇩
export default Menu;

