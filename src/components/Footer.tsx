import { FunctionComponent } from "react";
import styles from '../style/pageFooter.module.css'

const PageFooter : FunctionComponent = () => {
    return (
        <div className={styles.container}>

            <div className={styles.p}>
                <p>P. Shermann, nº 42, Wallabe Way - Sidney CEP 14000-000 <br />
                    Johnson's Store | CNPJ 41.500.600/0001-20
                </p>
            </div>  

            <div className={styles.botoes}>
                
                <a href="https://pt-br.facebook.com/" target="_blank"><button className={styles.facebook} >Facebook</button></a>
                <a href="https://www.instagram.com/" target="_blank"><button className={styles.instagram}>Instagram</button></a>
                <a href="https://www.whatsapp.com/" target="_blank"><button className={styles.whatsapp}>Whatsapp</button></a>
            </div>

        </div>
    )
}


    

export default PageFooter
