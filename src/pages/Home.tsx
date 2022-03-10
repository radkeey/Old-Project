import { FunctionComponent } from "react";
import PageHF from "../components/PageHF";

const PageHome : FunctionComponent = () => {
    return (
        <>
           <PageHF>
               <h1>Johson's Store Antiguidades</h1>
               <div>
                  <img src=""  alt=""  />
                  <p>
                        Descrição do produto e <br/>
                        R$ preço
                  </p>
               </div>

               <div>
                   <div>
                    <p>
                        Descrição do produto e <br/>
                        R$ preço
                    </p>
                    <img src="" alt="" />
                   </div>

                   <div>
                    <p>
                        Descrição do produto e <br/>
                        R$ preço
                    </p>
                    <img src="" alt="" />
                   </div>

                   <div>
                    <p>
                        Descrição do produto e <br/>
                        R$ preço
                    </p>
                    <img src="" alt="" />
                   </div>
               </div>

               <p>
                   FORMAS DE PAGAMENTO (PAGAMENTO SOMENTE EM LOJA FÍSICA) <br/>
                   ACEITAMOS:
                </p>              

           </PageHF>
        </>
        
    )
}

export default PageHome