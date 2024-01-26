import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const { id } = useParams();

  const getPageName = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return '';
      case '/ResultadosCalificaciones':
        return 'Resultados de Calificaciones';
      case `/ResultadosCalificaciones/detalle/${id}`: // Reemplaza 'id' con la lógica adecuada para extraer el ID
      return `Resultados de Calificaciones / Detalle de Calificación / ${id}`;
      default:
        return '';
    }
  };

  const getNavColor = () => {
    const path = location.pathname;

    switch (path) {
      case '/':
        return 'navbar-light bg-light';
      case '/resultados':
        return 'navbar-dark bg-dark';
      default:
        return '';
    }
  };

  return (
    <nav className={`navbar ${getNavColor()}`}>
      <div className="container">
        <Link className="navbar-brand" to="/inicio">
          Mi Aplicación
        </Link>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item active">{getPageName()}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
