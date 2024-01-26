// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './assets/styles/responsive.css';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';  
import PrivacyPolicy from './pages/Terminos';
import Cockies from './pages/Cockies';
import ResultadosCalificaciones from './pages/ResultadosCalificaciones';
import DetalleCalificacion from './pages/DetalleCalificacion';
import EmailForm from './pages/Email';
import BusquedaAvanzada from './pages/busquedaavanzada';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><HomePage /></Layout>}
        />
        <Route
          path="/ResultadosCalificaciones"
          element={<Layout><ResultadosCalificaciones /></Layout>}
        />
                <Route
          path="/BusquedaAvanzada"
          element={<Layout><BusquedaAvanzada /></Layout>}
        />
        <Route path="/ResultadosCalificaciones/detalle/:id"  element={<Layout><DetalleCalificacion/></Layout>} />

        <Route
          path="/Terminos-Condiciones"
          element={<Layout><PrivacyPolicy/></Layout>}
        />
        <Route
          path="/Politica-de-Cockies"
          element={<Layout><Cockies/></Layout>}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/recuperarContraseña"
          element={<EmailForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;
