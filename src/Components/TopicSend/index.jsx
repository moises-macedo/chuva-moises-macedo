import { FaCheckDouble } from "react-icons/fa";
import "../../Assests/Styles/Css/topicSend.css";

const TopicSend = () => {
    return(
        <div className="container--send">
            <div className="send-title">
                <h4>Seu tópico foi enviado com sucesso! :D</h4>
            </div>
            <div className="send-answer">
                <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
            </div>
            <div className="send-link">
                <a href="#">Descubra outros trabalhos!</a>
            </div>
            <div className="send-btn">
                <button>
                    <p>criar novo tópico</p>
                </button>
            </div>
            <div className="send-line">&nbsp;</div>
            <div className="send-topic">
                <div className="send--topic-title">
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <p>Carlos Henrique Santos</p>
                </div>
                <div className="send--topic-result">
                    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                </div>
            </div>
            <div className="send-feedback">
                <p><FaCheckDouble/></p>
                <h4>Aguardando feedback dos autores</h4>
                <a href="#">Editar tópico</a>
            </div>      

        </div>
    )
}
export default TopicSend