import { useState } from "react"
import UserVideo from "../../Assests/Img/user-video.png"
import "../../Assests/Styles/Css/videoDescription.css"
const VideoDescription = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="container--videoDescription">
            <div className="videoDescription-video">
                <div className="video-title">
                    <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                </div>
                <div className="video-description">
                    <div className="description-img">
                        <img src={UserVideo} alt="Beatriz Christiane Melo" />
                    </div>
                    <div className="description-info">
                        <h3>Beatriz Christiane Melo</h3>
                        <p>FCA / Universidade Estadual de Campinas</p>
                    </div>
                </div>
            </div>
            {/* detalhe do video para telas maior que 1365px */}
            <div className="videoDescription-info">
                <div className="info-title">
                    <p>Detalhes</p>
                </div>
                <div className="info-details">
                    <div className="details-description">
                        <ul className="description-main">
                            <li>
                                <ul className="description-theme">
                                    <li>
                                        <p>Tipo de Apresentação: <span>Pôster.</span></p>
                                    </li>
                                    <li>
                                        <p>Eixo temático: <span>Alimentação e saúde (AS).</span></p>
                                    </li>
                                    <li>
                                        <p>Palavra-chaves: <span>Alimentos funcionais, alimentação escolar.</span></p>
                                    </li>
                                </ul>
                            </li>
                            <li className="description-author">
                                <ul>
                                    <li>
                                        <p>Autores:</p>
                                    </li>
                                    <li>
                                        <p>Galileo Galilei</p>
                                    </li>
                                    <li>
                                        <p>Berta Lange de Morretes</p>
                                    </li>
                                    <li>
                                        <p>Isaac Newton</p>
                                    </li>
                                    <li>
                                        <p>Cesar Lattes</p>
                                    </li>
                                    <li>
                                        <p>Stephen Hawking</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="description-university">
                                <ul>
                                    <li>
                                        <p>Universidade Estadual de Campinas</p>
                                    </li>
                                    <li>
                                        <p>Universidade de são Paulo</p>
                                    </li>
                                    <li>
                                        <p> Instituto Nacional de Pesquisa Espaciais</p>
                                    </li>
                                    <li>
                                        <p>Universidade Federal do Rio de Janeiro</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="info-scrollbar">
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            {/* detalhe do video para telas menor que 1365px */}
            <div className="videoDescription-info-modal">
                <div className="info-title-modal">
                    {/* troca de valores do button */}
                    {isActive === false ?
                        <button onClick={() => setIsActive(!isActive)}>
                            <p>+</p>
                        </button> :
                        <button onClick={() => setIsActive(!isActive)}>
                            <p>-</p>
                        </button>}
                    <p>Detalhes</p>
                </div>
                {/* Mostrando detalhes do video com base nos valores do button */}
                {isActive === false ? null
                    :
                    <div className="info-details-modal">
                        <div className="details-description-modal">
                            <ul className="description-main-modal">
                                <li>
                                    <ul className="description-theme">
                                        <li>
                                            <p>Tipo de Apresentação: <span>Pôster.</span></p>
                                        </li>
                                        <li>
                                            <p>Eixo temático: <span>Alimentação e saúde (AS).</span></p>
                                        </li>
                                        <li>
                                            <p>Palavra-chaves: <span>Alimentos funcionais, alimentação escolar.</span></p>
                                        </li>
                                    </ul>
                                </li>
                                <li className="description-author">
                                    <ul>
                                        <li>
                                            <p>Autores:</p>
                                        </li>
                                        <li>
                                            <p>Galileo Galilei</p>
                                        </li>
                                        <li>
                                            <p>Berta Lange de Morretes</p>
                                        </li>
                                        <li>
                                            <p>Isaac Newton</p>
                                        </li>
                                        <li>
                                            <p>Cesar Lattes</p>
                                        </li>
                                        <li>
                                            <p>Stephen Hawking</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className="description-university">
                                    <ul>
                                        <li>
                                            <p>Universidade Estadual de Campinas</p>
                                        </li>
                                        <li>
                                            <p>Universidade de são Paulo</p>
                                        </li>
                                        <li>
                                            <p> Instituto Nacional de Pesquisa Espaciais</p>
                                        </li>
                                        <li>
                                            <p>Universidade Federal do Rio de Janeiro</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default VideoDescription
