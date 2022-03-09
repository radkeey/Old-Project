import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const PageHeader : FunctionComponent = () => {
    return (
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Pagina-Produtos">Produtos</NavLink>     
        </div>
        
    )
}
export default PageHeader




