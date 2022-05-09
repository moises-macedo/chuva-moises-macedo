import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "../../Assests/Styles/Css/creatingTopic.css"
import { useState } from "react";

const CreatingTopic = ({textarea, onClick}) =>{

    const [btnBold, setBtnBold] = useState(false);
    const [btnItalic, setBtnItalic] = useState(false)



    const formSchema = yup.object().shape({
        subject: yup.string().min(6),
        textarea: yup.string().min(3).max(500)       

    });

    const { register, reset, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const formSubmit = (data) => {
        textarea(data.textarea)
        reset();

    }
    return(
        <div className="container--creating">
            <div className="creating-title">
                <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores !</p>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="form-subject">
                    <label> Assunto</label>
                    <input type="text" placeholder="Defina um tópico sucinto para notificar os autores..."
                    {...register("subject")} />
                </div>
                <div className="form-content">
                    <label>Conteúdo</label>
                    <textarea className={btnBold=== true? "btnBold": btnItalic === true? "btnItalic": null}
                    {...register("textarea")}>

                    </textarea>
                    <div className="form-btn">
                        <div className="btn-formatted">
                            <button className="formatted-bold" onClick={()=> setBtnBold(!btnBold)}>
                                <p>B</p>
                            </button>
                            <button className="formatted-italic"  onClick={()=>setBtnItalic(!btnItalic)}>
                                <p>I</p>
                            </button>
                        </div>
                        <div className="formatted-send" onClick={onClick} >
                            <button >
                                <p>Enviar</p>
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CreatingTopic