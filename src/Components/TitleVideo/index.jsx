import { AiFillStar, } from "react-icons/ai";
import { ImDownload3 } from "react-icons/im";

const TitleVideo = () => {
    return (
        <div>
            <div>
                <h2>
                    Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
                </h2>
            </div>
            <div>
                <div>
                    <button>
                        <p><ImDownload3/></p>
                        <p>Download</p>
                    </button>
                    <button>
                        <p><AiFillStar /></p>
                    </button>
                    <button>
                        <div>
                            <p>
                                doi
                            </p>
                        </div>
                    </button>
                </div>
                <div>
                    <a href="#">Como citar esse Trabalho?</a>
                </div>

            </div>

        </div>
    )
}

export default TitleVideo