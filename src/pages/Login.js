import React from 'react';
import { BiUser } from 'react-icons/bi';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import SecondaryLogo from '../assets/images/secondary-logo.png';
import { RiLockPasswordLine } from "react-icons/ri";
import '../assets/styles/login.css';  

const Login = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ borderBottom: '2px solid #ccc' }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={SecondaryLogo}
              alt="Logo"
              width="80"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">UTHH Virtual</Nav.Link>
                {/* <Nav.Link href="#link">Enlace</Nav.Link>
                <NavDropdown title="Opciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Configuración</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Cerrar sesión</NavDropdown.Item>
                </NavDropdown>Navbar */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="login-body">
        <div className="login-container">
          <img src={SecondaryLogo} alt="Logo" />
          <b><h2>Iniciar Sesión</h2></b>
          <form action="#" method="post">
            <h6 htmlFor="username">Usuario</h6>
            <div className="input-group">
              <div>
                <i className="bi bi-person"><BiUser /></i>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Ingresa tu Usuario"
                  required
                />
              </div>
            </div>
            <b><h6 htmlFor="password">Contraseña</h6></b>
            <div className="input-group">
              <div>
                <i className="fas fa-lock"><RiLockPasswordLine /></i>
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu Contraseña"
                  required
                />
              </div>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Recordarme
              </label>
            </div>
            <button type="submit" className="btn-login">
              Iniciar Sesión
            </button>
            <p className="mt-3">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
            <p>
              ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
            </p>
          </form>
        </div>
      </div>
      <footer className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <span className='text-muted'>Términos y Condiciones | Política de Privacidad</span>
      </footer>
    </div>
  );
};

export default Login;
