import React from "react";
import Navbar from './components/Navbar';
import Accueil from './components/accueil'
import Jouer from './components/jouer'
import Footer from './components/Footer';
import Connexion from './components/connexion';
import { Classement } from './components/classement';
import { Equipes } from './components/equipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/jouer' element={<Jouer />} />
          <Route path='/classement' element={<Classement />} />
          <Route path='/equipe' element={<Equipes />} />
          <Route path='/connexion' element={<Connexion />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

