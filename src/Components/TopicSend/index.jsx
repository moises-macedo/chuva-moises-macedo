import { FaCheckDouble } from "react-icons/fa";

const TopicSend = () => {
    return(
        <div>
            <div>
                <h4>Seu tópico foi enviado com sucesso! :D</h4>
            </div>
            <div>
                <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
            </div>
            <div>
                <a href="#">Descubra outros trabalhos!</a>
            </div>
            <div>
                <button>
                    <p>criar novo tópico</p>
                </button>
            </div>
            <span>&nbsp;</span>
            <div>
                <div>
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <p>Carlos Henrique Santos</p>
                </div>
                <div>
                    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                </div>
            </div>
            <div>
                <p><FaCheckDouble/></p>
                <h4>Aguardando feedback dos autores</h4>
                <a href="#">Editar tópico</a>
            </div>      

        </div>
    )
}
export default TopicSend