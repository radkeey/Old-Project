import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaProdutos from './pages/PaginaProdutos'
import PaginaDetalheProduto from './pages/pagina-detalhe-produto'
import './App.css';


const App: FunctionComponent = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<PaginaProdutos/>}/>
      {/* <Route path="/Detalhe-Produto" element={<PaginaDetalheProduto/>}/> */}
     
    </Routes>

  </BrowserRouter>

    )
}

export default App
