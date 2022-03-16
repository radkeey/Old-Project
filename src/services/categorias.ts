import axios from "axios";
import Categoria from "../models/categoria";
import Produto from "../models/produto"
import servicesConfig from './config'

type LerTodasCallback = (categorias: Categoria[]) => void
type lerProdutos = (produto: Produto[]) => void

const servicesCategoria = {

    lerTodas: (callback: LerTodasCallback) => {
        axios.get<Categoria[]>(`${servicesConfig.backendUrl}/categorias`)
        .then((res) => {
            const categorias: Categoria[] = res.data
            callback(categorias)
        })
    },

    lerTodosProdutos: (idCategoria: number, callback : lerProdutos) => {
        axios.get<Produto[]>(`${servicesConfig.backendUrl}/categorias/${idCategoria}/produtos`)
        .then((res) => {
            const produtosPorCategoria: Produto[] = res.data
            callback(produtosPorCategoria)
        })
    },
}

export default servicesCategoria