import { FunctionComponent } from "react";
import PageHF from "../components/PageHF"; 


const paginadetalheproduto : FunctionComponent = () => {
    return (
        <PageHF>

            <div>
               <p>
                   Descrição do produto <br/>
                   <span>R$ Preço</span> 
               </p> 
            </div>
        

            <div>
                <p>
                    Descrição detalhada do produto
                </p>
                <div>
                    <img src="" alt=""   />
                </div>
            </div>

            <ul>
                <li> <img  src="" alt="" onClick={} /> </li>
            </ul>

        </PageHF>
    )
}