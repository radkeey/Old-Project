import { FunctionComponent, useState, useEffect } from "react";
import PageHF from "../components/PageHF";
import FormularioReserva from "../components/FormularioReserva"
import Produto from "../models/produto"
import servicesProdutos from "../services/produtos"
import { useParams } from "react-router-dom";

const PaginaDetalheProduto: FunctionComponent = () => {
    
   const { id } = useParams()

   const [produto, setProduto] = useState<Produto>()

    useEffect(() => {
        servicesProdutos.lerProduto(Number.parseInt(id ?? '0'), (produto) => {
            setProduto(produto)
        }) 
    }, [])
    
    
    return (
        <PageHF>    
              
            <div className="product-card">
                <div className="product-image">
                    <img src={produto?.imagem} />
                </div>
                <div className="product-info">
                    <h5>{produto?.nome}</h5>
                    <h6>{produto?.preco}</h6>
                </div>
            </div>

            <FormularioReserva />

        </PageHF>
    )
}
export default PaginaDetalheProduto