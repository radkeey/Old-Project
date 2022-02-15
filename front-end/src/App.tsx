import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from '../src/pages/home'
import PaginaProdutos from '../src/pages/PaginaProdutos'
import paginaDetalheProduto from './pages/paginadetalheproduto'
import './App.css';
import PageHF from '../src/components/PageHF'


const App: FunctionComponent = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/Pagina-Produtos" element={<PaginaProdutos/>}/>
      <Route path="/Detalhe-Produto" element={<paginaDetalheProduto/>}/>
     
    </Routes>

  </BrowserRouter>

    )
}

export default App
