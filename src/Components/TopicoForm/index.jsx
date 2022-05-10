import Hand from "../../Assests/Img/hand.png";
import IconQa from "../../Assests/Img/icon-qa.png";
import Users from "../../Assests/Img/users.png";
import { MdFavorite } from "react-icons/md";
import "../../Assests/Styles/Css/topicoForm.css";
import { useState } from "react";
import CreatingTopic from "../CreatingTopic";
import TopicSend from "../TopicSend";
import TopicExpanded from "../TopicExpanded";



const TopicoForm = () => {
    const [isLike, setIsLike] = useState(false);
    const [isLikeTwo, setIsLiketwo] = useState(false);
    const [isLikebtnOn, setIsLikeBtnOn] = useState(1);
    const [isLikebtn, setIsLikeBtn] = useState(1);
    const [btnCreating, setBtnCreating] = useState(false);
    const [btnSend, setBtnSend] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    


    const handleLike = () => {

        setIsLiketwo(!isLikeTwo);
        setIsLikeBtn(isLikeTwo === false ? isLikebtn + 1 : isLikebtn - 1)
    }
    const handleLikeOn = () => {
        setIsLike(!isLike);
        setIsLikeBtnOn(isLike === false ? isLikebtnOn + 1 : isLikebtnOn - 1)
    }
    const handleSend = () => {
        setBtnSend(!btnSend);
    }

    return (
        <div className="container-topic">
            <div className="topic-title">
                <h3>Discussões</h3>
            </div>

            <div className="topic-feed">
                {btnCreating === false ? (
                    <>
                        <div className="feed-title">
                            <h4>Compartilhe suas ideias ou dúvidas com os autores!</h4>
                        </div>
                        <div className="feed-img">
                            <img src={Hand} alt="recepção" />
                            <img src={IconQa} alt="Garantia da Qualidade" />
                            <img src={Users} alt="União de usuários" />
                        </div>
                        <div className="feed-info">
                            <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
                        </div>
                        <div className="feed-buttonCreate">
                            <button onClick={() => setBtnCreating(true)}>
                                <p>+</p>
                                <p>criar tópico</p>
                            </button>
                        </div>
                    </>

                ) : btnSend === false ? (<CreatingTopic onClick={() => setBtnSend(!btnSend)} />) :
                    <TopicSend onClick={() => setBtnSend(false)} />}

                <div className="feed-line"></div>
                <div className="feed-static">
                    <div className="static-title">
                        <h4>Assunto da pergunta aparece aqui</h4>
                        <p>Carlos Henrique Santos</p>
                    </div>
                    <div className="static-topic">
                        <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                    </div>
                    <div className="static-interaction">
                        <div className="interaction-circle">
                            <span>&nbsp;</span>
                            <span>&nbsp;</span>
                            <span>&nbsp;</span>
                        </div>
                        <button onClick={handleLikeOn} className="interaction-btn">
                            <p className={isLike === true ? "givenLike" : null}><MdFavorite /></p>
                        </button>
                        <div className="interaction-users">
                            <span>{isLikebtnOn}</span>
                            <p>like</p>
                        </div>
                        <div className="interaction-users">
                            <span>1</span>
                            <p>resposta</p>
                        </div>
                    </div>
                </div>
                {isExpanded === false ? (
                    <div className="feed-static">
                        <div className="static-title">
                            <h4>Assunto da pergunta aparece aqui</h4>
                            <p>Carlos Henrique Santos</p>
                        </div >
                        <div className="static-topic">
                            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                        </div>
                        <div className="static-interaction">
                            <div className="interaction-circle" >
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                            </div>
                            <button onClick={handleLike} className="interaction-btn">
                                <p className={isLikeTwo === true ? "givenLike" : null}><MdFavorite /></p>
                            </button>
                            <div className="interaction-users">
                                <span>{isLikebtn}</span>
                                <p>like</p>
                            </div>
                            <div className="interaction-users">
                                <span>4</span>
                                <p onClick={()=> setIsExpanded(!isExpanded)} className="click-res">resposta</p>
                            </div>
                        </div>                        
                    </div>

                ) : (
                    <TopicExpanded onClick={()=> setIsExpanded(!isExpanded)}/>
                )}

            </div>

        </div>
    )
}

export default TopicoForm