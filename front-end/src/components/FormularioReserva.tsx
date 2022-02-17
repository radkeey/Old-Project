import { CSSProperties, FunctionComponent, MouseEventHandler, useState } from "react";

const FormularioReserva : FunctionComponent = () => {

    const [aberto, setAberto] = useState(false)
    const [reservado, setReservado] = useState(false)

    const botaoAbrirClicado: MouseEventHandler = () => {
        setAberto(true)
    }

    return (
    
    <div className="container">
        {
            (! aberto) && <button onClick={ botaoAbrirClicado }>Abrir</button>
        }
        {
            (reservado) && <p>Reservado!</p>
        }

        {
            (aberto) && (
                <form style={stylesForm}>
                    <label>Reserve Aqui!</label>
                    <input type="text" placeholder="Nome completo" />
                    <input type="number" placeholder="Telefone" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <button type="submit"> Confirmar Reservar</button>                    
                </form>
            )
        }
        
    
    </div>

    )
}

StyleSheet

const styles: ( => CSSProperties) = {
    form: {

    }
}

const stylesForm: CSSProperties = {
    justifyContent: ''
}


export default FormularioReserva