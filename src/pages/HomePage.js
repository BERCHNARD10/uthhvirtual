import { Container, Row, Col, Button } from 'react-bootstrap';
import HomeImg from '../assets/images/home-img.png';
import React, { useState } from 'react';
import ChatBox from './ChatBox';

const HomePage = () => {

  const [registrarseButtonStyle, setRegistrarseButtonStyle] = useState({
      backgroundColor: '#00883e',
      borderColor: '#00883e',
  });

  const registrarseButtonHoverStyle = {
      backgroundColor: '#32343a',
      borderColor: '#32343a',
  };

  return (
    <div className="home-container">
      <Container fluid className="first-section" style={styles.section}>
        <Row className="text-content">
          <Col md={6}>
            <h2>El conocimiento es el ala del alma, y el deseo de aprender, su motor.</h2>
            <p>
              ¿Estás listo para embarcarte en un emocionante viaje de aprendizaje interactivo? Te presentamos esta innovadora plataforma educativa que está diseñada para llevar tu educación a un nivel completamente nuevo. UTHH Virtual ayuda a los educadores a crear experiencias de aprendizaje atractivas que pueden personalizar, administrar y medir desde lecciones creadas por los docentes hasta un emocionante videojuego educativo.
            </p>
            <Button
              variant="primary"
              style={registrarseButtonStyle}
              className="mx-2"
              onMouseOver={() => setRegistrarseButtonStyle(registrarseButtonHoverStyle)}
              onMouseOut={() => setRegistrarseButtonStyle({
              backgroundColor: '#00883e',
              borderColor: '#00883e',
              })}>
                Iniciar sesión en el Aula Virtual
            </Button>
          </Col>
          <Col md={6} className="mx-auto">
            <img
              src={HomeImg}
              alt="Imagen Descriptiva"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <ChatBox />
    </div>
  );
};
const styles = {
  section: {
    margin: '4rem 0',
  },
};

export default HomePage;
