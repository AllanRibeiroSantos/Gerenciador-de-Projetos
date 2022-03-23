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


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projetos' element={<Projetos />} />
        <Route exact path='/empresa' element={<Empresa />} />
        <Route exact path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
