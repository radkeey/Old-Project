import { ChangeEventHandler, FunctionComponent, useEffect, useState } from "react";
import PageHF from "../components/PageHF";
import Categoria from '../models/categoria'
import Produto from '../models/produto'
import servicesCategoria from '../services/categorias'
import servicesProdutos from '../services/produtos'

const PaginaProdutos : FunctionComponent = () => {

  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    servicesProdutos.lerTodosProdutos((produtos) => {
      servicesCategoria.lerTodas((categorias) => {
        setProdutos(produtos)
        setCategorias(categorias)
      })
    })
  }, [])

  const categoriaSelecionada: ChangeEventHandler<HTMLSelectElement> = (event) => {
    
    const idCategoria = Number.parseInt(event.target.value)
    if (idCategoria === 0 || idCategoria === NaN) {
      servicesProdutos.lerTodosProdutos((produtos) => {
        setProdutos(produtos)
      })
    }
    else {
      servicesCategoria.lerTodosProdutos(idCategoria, (produtos) => {
        setProdutos(produtos)
      })
    }
  }

    return (
       <PageHF>
            
          <nav className="product-filter">

            <h1>Produtos</h1>

              <div className="collection-sort">
                <label>Filtro de:</label>
                <select onChange={categoriaSelecionada}>
                  <option value="0">Todas Categorias</option>
                  {
                    categorias.map(categoria => (
                      <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                    ))
                  }
                </select>
              </div>
           
          </nav>

          <section className="products">

            {
              produtos.map(produto => (
                <div className="product-card" key={produto.id}>
                  <div className="product-image">
                    <img src={produto.imagem} />
                  </div>
                  <div className="product-info">
                    <h5>{produto.nome}</h5>
                    <h6>{produto.preco}</h6>
                  </div>
                </div>
              ))
            }
            
          </section>
           
       </PageHF>

    )
}
export default PaginaProdutos