import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/reset.css';
import './App.css';
import './assets/base.css';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Projetos from './components/pages/Projetos';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Footer from './components/layout/Footer';
import NovoProjeto from './components/pages/NovoProjeto';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/novoprojeto' element={<NovoProjeto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
