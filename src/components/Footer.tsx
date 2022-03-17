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

            <div className={styles.images}>
                <a href="https://pt-br.facebook.com/" target="_blank">
                    <img src="/content/face.png" alt=""width="50" height="50"/>
                </a>
                
                <a href="https://whatsapp.com/" target="_blank">
                    <img src="/content/whatsapp.png" alt="" width="50" height="50"/>
                </a>

                <a href="https://instagram.com/" target="_blank">
                    <img src="/content/insta.png" alt=""width="55" height="55"/>
                </a>
                
            </div>
        </div>
    )
}


    

export default PageFooter
