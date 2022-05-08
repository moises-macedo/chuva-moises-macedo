import Logo from "../../Assests/Img/logo.png";
import "../../Assests/Styles/Css/menuNav.css"

const MenuNav = () => {
    return(
        <div className="container--main-menuNav">
            <div className="menuNav-title">
                 <h1>Slaca 2019</h1>
            </div>
            <div className="menuNav-logo">
                <img src={Logo} alt="Slaca"/>
            </div>
            <div className="menuNav-sidebar">
                <nav>
                    <ul>
                        <li>
                            <button className="button-presentation">
                                <p>Apresentação</p>
                            </button>
                        </li>
                        <li>
                            <button className="button-committees">
                                <p>Comitês</p>
                            </button>
                        </li>
                        <li>
                            <button className="button-authors">
                                <p>Autores</p>
                            </button>
                        </li>
                        <li>
                            <button className="button-themed">
                                <p>Eixos temáticos</p>
                            </button>
                        </li>
                        <li>
                            <button className="button-works">
                                <p>Trabalhos</p>
                            </button>
                        </li>
                        <li>
                            <button className="button-contact">
                                <p>Contato</p>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuNav