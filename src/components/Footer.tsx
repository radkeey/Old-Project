import { FunctionComponent } from "react";
import styles from '../components/cssComponentes/pageFooter.module.css'

const PageFooter : FunctionComponent = () => {
    return (
        <div className={styles.container}>

            <div className={styles.p}>
                <p>P. Shermann, nº 42, Wallabe Way - Sidney CEP 14000-000 <br />
                    Johnson's Store | CNPJ 41.500.600/0001-20
                </p>
            </div>  

            <div className={styles.botoes}>

                <button className={styles.facebook} >Facebook</button>
                <button className={styles.instagram}>Instagram</button>
                <button className={styles.whatsapp}>Whatsapp</button>
            </div>

        </div>
    )
}


    

export default PageFooter
