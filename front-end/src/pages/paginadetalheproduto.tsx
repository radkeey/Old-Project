import { FunctionComponent, useState } from "react";
import PageHF from "../components/PageHF"; 


const paginaDetalheProduto : FunctionComponent = () => {
    
    
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
                <li> <img  src="" alt="" /> </li>

            </ul>
            <button> Reserve Aqui </button>

            <form>
                <input placeholder='Nome Completo' />
                <input placeholder='E-mail' />
                <input placeholder='Telefone ' />
               {/*  {
                    (campoNumeroInvalido) && <small>Apenas dígitos.</small>
                } */}
                <button  type="button" >Enviar</button>
            </form>

        </PageHF>
    )
}
export default paginaDetalheProduto