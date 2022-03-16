import { FunctionComponent, useState, useEffect } from "react";
import PageHF from "../components/PageHF";
import FormularioReserva from "../components/FormularioReserva"
import Produto from "../models/produto"
import servicesProdutos from "../services/produtos"


const PaginaDetalheProduto: FunctionComponent = () => {
    
   // const id = (Pegar o link com useRouter)

   const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        servicesProdutos.lerTodosProdutos((produtos) => {
            setProdutos(produtos)
        })
    }, [])
    
    
    return (
        <PageHF>    
              
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