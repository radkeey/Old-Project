import { CSSProperties, FunctionComponent, MouseEventHandler, useState } from "react";
import styles from '../components/cssComponentes/formularioReserva.module.css'


const FormularioReserva : FunctionComponent = () => {

    const [aberto, setAberto] = useState(false)
    const [reservado, setReservado] = useState(false)
    const [reservar, setReservar] = useState(false)

    const botaoAbrirClicado: MouseEventHandler = () => {
        setAberto(true)
    }

    const botaoReservado: MouseEventHandler = () => {
        setReservado(true)
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
                    <input className={styles.nome} type="text" placeholder="Nome completo" />
                    <input className={styles.numero} type="number" placeholder="Telefone" required/>
                    <input className={styles.email} type="email" placeholder="E-mail" required/>
                    <button type="button" onClick={botaoReservado}> Confirmar Reserva</button> 
                                       
                </form>
            )
        }
        
    
    </div>

    )
}


export default FormularioReserva