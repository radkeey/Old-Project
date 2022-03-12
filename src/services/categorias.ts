import axios from "axios";
import Categoria from "../models/categoria";

type LerTodasCallback = (categorias: Categoria[]) => void

const servicesCategoria = {

    lerTodas: (callback: LerTodasCallback) => {
        axios.get<Categoria[]>('https://old-project-back-end.herokuapp.com/')
        .then((res) => {
            const categorias: Categoria[] = res.data
            callback(categorias)
        })
    }
}

export default servicesCategoria