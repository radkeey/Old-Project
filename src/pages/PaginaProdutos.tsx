import { FunctionComponent } from "react";
import PageHF from "../components/PageHF"; 

const PaginaProdutos : FunctionComponent = () => {
    return (
       <PageHF>
            
            <nav className="product-filter">

  <h1>Produtos</h1>

  <div className="sort">

    <div className="collection-sort">
      <label>Filtro de:</label>
      <select>
        <option value="/">Todos Produtos</option>
      </select>
    </div>

    <div className="collection-sort">
      <label>Ordenar por:</label>
      <select>
        <option value="/">Destaques</option>
      </select>
    </div>

  </div>

</nav>

<section className="products">

  <div className="product-card">
    <div className="product-image">
      <img src="" />
    </div>
    <div className="product-info">
      <h5>Vídeo Game Nintendo-64</h5>
      <h6>R$:799,90</h6>
    </div>
  </div>
  
  <div className="product-card">
    <div className="product-image">
      <img src="" />
    </div>
    <div className="product-info">
      <h5>Walkman Sony</h5>
      <h6>R$:199,00</h6>
    </div>
  </div>
  
    <div className="product-card">
    <div className="product-image">
      <img src="" />
    </div>
    <div className="product-info">
      <h5>Televisor Telefunken 26" Colorida - Muzeez</h5>
      <h6>R$:780,00</h6>
    </div>
  </div>
  
    <div className="product-card">
    <div className="product-image">
      <img src="" />
    </div>
    <div className="product-info">
      <h5>Rádio Antigo Em Madeira AM/FM 220V</h5>
      <h6>R$:549,90</h6>
    </div>
  </div>
  
    <div className="product-card">
    <div className="product-image">
      <img src="" />
    </div>
    <div className="product-info">
      <h5>Atari-2600-Heavy-Sixe-FL</h5>
      <h6>R$:1200,00</h6>
    </div>
  </div>
  
    <div className="product-card">
    <div className="product-image">
      <img src="" />
    </div>
   
    </div>
  

</section>
           
       </PageHF>

    )
}
export default PaginaProdutos