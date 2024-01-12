import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import SecondaryLogo from '../../assets/images/secondary-logo.png'; 
import '../../assets/styles/nav.css';  


const NavigationBar = () => {

    const navigate = useNavigate();
    const handleClick = () => navigate('/login');
    const register = () => navigate('/register');


    const navbarStyle = {
        padding: '1%',
        borderBottom: '1px solid black', 
    };

    const [registrarseButtonStyle, setRegistrarseButtonStyle] = useState({
        backgroundColor: '#00883e',
        borderColor: '#00883e',
    });

    const registrarseButtonHoverStyle = {
        backgroundColor: '#32343a',
        borderColor: '#32343a',
    };

    const [iniciarSesionButtonStyle, setIniciarSesionButtonStyle] = useState({
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'black',
    });

    const iniciarSesionButtonHoverStyle = {
        backgroundColor: '#32343a',
        borderColor: '#32343a',
        color: 'white',
    };

    return (
        <Navbar bg="light" expand="lg" style={navbarStyle}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="ml-auto">

            <Nav.Link href="#" className="d-inline no-width">
                Para DocenteS
            </Nav.Link>
            <NavDropdown title="Recursos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else</NavDropdown.Item>
            </NavDropdown>
        </Nav>
                <Navbar.Brand href="#" className="d-flex justify-content-center">
                    <img
                        src={SecondaryLogo} 
                        width="65" 
                        alt="Secondary Logo"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Button
                        variant="outline-primary"
                        className="mx-2"
                        style={iniciarSesionButtonStyle}
                        onMouseOver={() => setIniciarSesionButtonStyle(iniciarSesionButtonHoverStyle)}
                        onMouseOut={() => setIniciarSesionButtonStyle({
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            color: 'black',
                        })}
                        onClick={handleClick}
                    >
                        Iniciar Sesión
                    </Button>
                    <Button
                        variant="primary"
                        style={registrarseButtonStyle}
                        className="mx-2"
                        onMouseOver={() => setRegistrarseButtonStyle(registrarseButtonHoverStyle)}
                        onMouseOut={() => setRegistrarseButtonStyle({
                            backgroundColor: '#00883e',
                            borderColor: '#00883e',
                        })}
                        onClick={register}
                    >
                        Registrarse
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
