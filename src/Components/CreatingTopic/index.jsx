import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const CreatingTopic = () =>{

    const formSchema = yup.object().shape({

    });

    const { register, reset, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const formSubmit = () => {
        reset();

    }
    return(
        <div>
            <div>
                <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div>
                    <label> Assunto</label>
                    <input type="text" placeholder="Defina um tópico sucinto para notificar os autores..." />
                </div>
                <div>
                    <label>Conteúdo</label>
                    <textarea></textarea>
                    <div>
                        <div>
                            <button>
                                <p>B</p>
                            </button>
                            <button>
                                <p>I</p>
                            </button>
                        </div>
                        <div>
                            <button>
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