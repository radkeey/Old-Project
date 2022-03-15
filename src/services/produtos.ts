import axios from "axios"
import Produto from "../models/produto"

type lerTodosProdutos = (produto: Produto[]) => void
const servicesProdutos ={
    lerTodosProdutos: (callback: lerTodosProdutos) => {
        axios.get<Produto[]>('http://localhost:4000/produtos')
        .then((res) => {
            const produtos: Produto[] = res.data
            callback(produtos)
        })
    }
}

export default servicesProdutos