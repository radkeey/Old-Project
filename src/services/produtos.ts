import axios from "axios"
import Produto from "../models/produto"
import Categoria from "../models/categoria"
import servicesConfig from './config'

type lerProdutos = (produto: Produto[]) => void
type lerProduto = (produto: Produto) => void

const servicesProdutos = {

    lerTodosProdutos: (callback: lerProdutos) => {
        axios.get<Produto[]>(`${servicesConfig.backendUrl}/produtos`)
        .then((res) => {
            const produtos: Produto[] = res.data
            callback(produtos)
        })
    },

    lerProduto: (id: number, callback: lerProduto) => {
        axios.get<Produto>(`${servicesConfig.backendUrl}/produtos/${id}`)
        .then((resp) => {
            const produto: Produto = resp.data
            callback(produto)
        })
    }
}

export default servicesProdutos