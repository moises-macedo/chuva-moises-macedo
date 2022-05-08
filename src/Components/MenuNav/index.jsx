import Logo from "../../Assests/Img/logo.png"

const MenuNav = () => {
    return(
        <div>
            <div>
                 <h1>Slaca 2019</h1>
            </div>
            <div>
                <img src={Logo} alt="Slaca"/>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <button>
                                <p>Apresentação</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p>Comitês</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p>Autores</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p>Eixos temáticos</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p>Trabalhos</p>
                            </button>
                        </li>
                        <li>
                            <button>
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