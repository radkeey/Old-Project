import { FunctionComponent } from "react";
import PageHF from "../components/PageHF";
import FormularioReserva from '../components/FormularioReserva'


const PaginaDetalheProduto: FunctionComponent = () => {
    
    
    return (
        <PageHF>          
            <div className="product-card">
                <div className="product-imag">
                    <img src="" />
                </div>
                <div className="product-info">
                    <h5>Seu produto aqui!</h5>
                    <h6>R$Seu preço aqui!</h6>
                </div>
            </div>

            <div className="product-card">
                <div className="product-image">
                    <img src="" />
                </div>
                <div className="product-info">
                    <h5>Seu produto aqui!</h5>
                    <h6>R$Seu preço aqui!</h6>
                </div>
            </div>

            <FormularioReserva />

        </PageHF>
    )
}
export default PaginaDetalheProduto