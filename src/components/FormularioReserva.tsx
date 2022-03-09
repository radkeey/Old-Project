import { CSSProperties, FunctionComponent, MouseEventHandler, useState } from "react";
import styles from '../components/cssComponentes/formularioReserva.module.css'


const FormularioReserva : FunctionComponent = () => {

    const [aberto, setAberto] = useState(false)
    const [reservado, setReservado] = useState(false)

    const botaoAbrirClicado: MouseEventHandler = () => {
        setAberto(true)
    }

    return (
    
    <div className={styles.container}>
        {
            (! aberto) && <button onClick={ botaoAbrirClicado }>Reservar</button>
        }
        {
            (reservado) && <p>Reservado!</p>
        }

        {
            (aberto) && (
                <form className={styles.form}>
                    <label>Reserve Aqui!</label>
                    <input type="text" placeholder="Nome completo" />
                    <input type="number" placeholder="Telefone" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <button type="submit"> Confirmar Reserva</button>                    
                </form>
            )
        }
        
    
    </div>

    )
}


export default FormularioReserva