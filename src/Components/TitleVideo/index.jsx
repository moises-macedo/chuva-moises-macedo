import { AiFillStar, } from "react-icons/ai";
import { ImDownload3 } from "react-icons/im";
import "../../Assests/Styles/Css/titleVideo.css"

const TitleVideo = () => {
    return (
        <div className="container--titleVideo">
            <div className="titleVideo-title">
                <h2>
                    Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
                </h2>
            </div>
            <div className="titleVideo-description">
                <div className="description-btn">
                    <button className="btn-download">
                        <p><ImDownload3/></p>
                        <p>Download</p>
                    </button>
                    <button className="btn-star">
                        <p><AiFillStar /></p>
                    </button>
                    <button className="btn-doi">
                        <div>
                            <p>
                                doi
                            </p>
                        </div>
                    </button>
                </div>
                <div className="titleVideo-link">
                    <a href="#">Como citar esse Trabalho?</a>
                </div>

            </div>

        </div>
    )
}

export default TitleVideo