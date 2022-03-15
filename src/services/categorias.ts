import axios from "axios";
import Categoria from "../models/categoria";
import servicesConfig from './config'

type LerTodasCallback = (categorias: Categoria[]) => void

const servicesCategoria = {

    lerTodas: (callback: LerTodasCallback) => {
        axios.get<Categoria[]>(`${servicesConfig.backendUrl}/categorias`)
        .then((res) => {
            const categorias: Categoria[] = res.data
            callback(categorias)
        })
    }
}

export default servicesCategoria