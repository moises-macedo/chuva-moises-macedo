import Hand from "../../Assests/Img/hand.png";
import IconQa from "../../Assests/Img/icon-qa.png";
import Users from "../../Assests/Img/users.png";
import { MdFavorite } from "react-icons/md";


const TopicoForm = () => {
    return (
        <div>
            <div>
                <h3>Discussões</h3>
            </div>
            <div>
                <div>
                    <h4>Compartilhe suas ideias ou dúvidas com os autores!</h4>
                </div>
                <div>
                    <img src={Hand} alt="recepção" />
                    <img src={IconQa} alt="Garantia da Qualidade" />
                    <img src={Users} alt="União de usuários" />
                </div>
                <div>
                    <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
                </div>
                <span></span>
                <button>
                    <p>+</p>
                    <p>criar tópico</p>
                </button>
                <div>
                    <div>
                        <h4>Assunto da pergunta aparece aqui</h4>
                        <p>Carlos Henrique Santos</p>
                    </div>
                    <div>
                        <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                    </div>
                    <div>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <button>
                            <p><MdFavorite/></p>
                        </button>
                        <div>
                            <span>1</span>
                            <p>like</p>
                        </div>
                        <div>
                            <span>1</span>
                            <p>resposta</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Assunto da pergunta aparece aqui</h4>
                        <p>Carlos Henrique Santos</p>
                    </div>
                    <div>
                        <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                    </div>
                    <div>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <button>
                            <p><MdFavorite/></p>
                        </button>
                        <div>
                            <span>1</span>
                            <p>like</p>
                        </div>
                        <div>
                            <span>1</span>
                            <p>resposta</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TopicoForm