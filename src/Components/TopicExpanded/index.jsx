import { MdFavorite } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import "../../Assests/Styles/Css/topicExpanded.css"
import { useState } from "react";

const TopicExpanded = ({onClick}) => {
    const [ isLike, setIsLike] = useState(false);
    const [ isLikeBtn, setIsLikeBtn] = useState(4)

    const handleLike = () => {
        setIsLike(!isLike);       
        setIsLikeBtn(isLike === false ? isLikeBtn + 1 : isLikeBtn - 1)
    }
    return (
        <div className="container--topicExpanded">
            <div className="topicExpanded-primary">
                <div className="primary-title">
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <p>Carlos Henrique Santos</p>
                </div>
                <div className="primary-post">
                    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?</p>
                </div>
                <div className="primary-interaction">
                    <div className='primary--interaction-circle' onClick={onClick}>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                    <button onClick={handleLike} className="primary--interaction-btn">
                        <p className={isLike === true ? "givenLike" : null}><MdFavorite /></p>
                    </button>
                    <div className="primary--interaction-users">
                        <span>{isLikeBtn}</span>
                        <p>like</p>
                    </div>
                    <div className="primary--interaction-users">
                        <span>4</span>
                        <p onClick={onClick} className="click-res">resposta</p>
                    </div>
                </div>
            </div>
            <div className="topicExpanded-res">
                <div className="res-title">
                    <p>Adriano da Silva</p>
                    <div className="title-icons">
                        <p>Autor</p>
                        <span><FaCheckDouble /></span>
                    </div>
                </div>
                <p className="res-post">Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
            </div>
            <div className="topicExpanded-exclusive">
                <p>Carlos Henrique Santos</p>                
                <p>Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.</p>
                <p>Obrigada pela resposta, muito interessante o seu trabalho!</p>
            </div>
            <div className="topicExpanded-res">
                <div className="res-title">
                    <p>Carmila Ferreira Andrade</p>
                    <div className="title-icons">
                        <p>Coautor</p>
                        <span><FaCheckDouble /></span>
                    </div>
                </div>
                <p className="res-post">Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                <p className="res-post">Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
            </div>
            <div className="topicExpanded-res">
                <div className="res-title">
                    <p>Ana Carolina</p>
                    <div className="title-icons">
                        <p>Coautor</p>
                        <span><FaCheckDouble /></span>
                    </div>
                </div>
                <p className="res-post">Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
            </div>
        </div>
    )
}

export default TopicExpanded