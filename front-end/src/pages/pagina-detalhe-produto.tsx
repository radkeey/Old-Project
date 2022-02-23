import { FunctionComponent } from "react";
import PageHF from "../components/PageHF";
import FormularioReserva from '../components/FormularioReserva'


const PaginaDetalheProduto: FunctionComponent = () => {
    
    
    return (
        <PageHF>

            <div>
               <p>
                  Atari <br/>
                   <span>R$ Preço</span> 
               </p> 
            </div>
        

            <div>
                <p>
                    Console 1908 
                </p>
                <div>
                    <img src="" alt=""   />
                </div>
            </div>

            <FormularioReserva />


     
        </PageHF>
    )
}
export default PaginaDetalheProduto