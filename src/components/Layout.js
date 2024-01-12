import React from 'react';
import NavigationBar from './Header/Header';
import FooterSection from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Barra de navegación */}
      <NavigationBar />

      {/* Contenido de la aplicación */}
      <div className="container">
        {children}
      </div>

      {/* Pie de página */}
      <FooterSection />
    </div>
  );
}

export default Layout;
