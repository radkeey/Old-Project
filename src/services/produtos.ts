import axios from "axios"
import Produto from "../models/produto"
import servicesConfig from './config'

type lerTodosProdutos = (produto: Produto[]) => void
const servicesProdutos ={
    lerTodosProdutos: (callback: lerTodosProdutos) => {
        axios.get<Produto[]>(`${servicesConfig.backendUrl}/produtos`)
        .then((res) => {
            const produtos: Produto[] = res.data
            callback(produtos)
        })
    }
}

export default servicesProdutos