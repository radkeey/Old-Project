import { ChangeEventHandler, FunctionComponent, useEffect, useState } from "react";
import PageHF from "../components/PageHF";
import Categoria from '../models/categoria'
import Produto from '../models/produto'
import servicesCategoria from '../services/categorias'
import servicesProdutos from '../services/produtos'
import styles from "../style/paginaProdutos.module.css"

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
            
          <nav>

            <h1 className={styles.titulo}>Produtos</h1>

              <div className={styles.filtroCategoria}>
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

          <section>

            {
              produtos.map(produto => (
                <div className={styles.containerProduto}>
                  <div className={styles.cardProduto} key={produto.id}>
                    <div>
                      <a href={`/Detalhe-Produto/${produto.id}`}>
                        <img src={produto.imagem} />
                      </a>
                    </div>
                    <div className={styles.descricao}>
                      <h5>{produto.nome}</h5>
                      <h6>{produto.preco}</h6>
                    </div>
                  </div>
                </div>
              ))
            }
            
          </section>
           
       </PageHF>

    )
}
export default PaginaProdutos