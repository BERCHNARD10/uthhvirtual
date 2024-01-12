import React from 'react';
import { BiUser } from 'react-icons/bi';
import { RiLockPasswordLine } from "react-icons/ri";
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import SecondaryLogo from '../assets/images/secondary-logo.png';

const Register = () => {
return (
    <div>
        <Navbar bg="light" expand="lg" style={{ borderBottom: '2px solid #ccc' }}>
            <Container>
            <Navbar.Brand href="#home">
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
            <b><h2>Registrarse</h2></b>
            <form action="#" method="post">
                <div className="row">
                    <div className="col-md-6">
                        <h6 htmlFor="username">Matricula</h6>
                        <div className="input-group">
                            <div>
                                <i className="bi bi-person"><BiUser /></i>
                            </div>
                            <div>
                                <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                placeholder="Matricula"
                                required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 htmlFor="username">Nombre</h6>
                        <div className="input-group">
                            <div>
                                <i className="bi bi-person"><BiUser /></i>
                            </div>
                            <div>
                                <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Apellido Paterno"
                                required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 htmlFor="username">Apellido Materno</h6>
                        <div className="input-group">
                            <div>
                                <i className="bi bi-person"><BiUser /></i>
                            </div>
                            <div>
                                <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                placeholder="Nombre"
                                required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 htmlFor="username">Apellido Paterno</h6>
                        <div className="input-group">
                            <div>
                                <i className="bi bi-person"><BiUser /></i>
                            </div>
                            <div>
                                <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Apellido Paterno"
                                required
                                />
                            </div>
                        </div>
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
                <Button type="submit" className="btn-login" variant="primary">
                Registrarse
                </Button>
                <p>
                ¿Ya tienes una cuenta? <a href="#">Inicia sesión aquí</a>
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

export default Register;
