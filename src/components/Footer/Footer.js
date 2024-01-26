import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BiHome, BiEnvelope } from 'react-icons/bi';
import { MdOutlineLocationOn, MdOutlineMailOutline  } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiGuideLine } from "react-icons/ri";
import ChatBox from '../../pages/ChatBox';
import SecondaryLogo from '../../assets/images/main-logo.png';
import '../../assets/styles/footer.css';  

function FooterSection() {
  return (
    <MDBFooter style={{ backgroundColor: '#23262d' }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="3" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <img
                  src={SecondaryLogo}
                  alt="Company Logo"
                  className="img-fluid"
                />
              </h6>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>COMPANIA</h6>
              <p className='text-white'>
                <a href='#!' className='link'>
                  <MdOutlineLocationOn  className="me-1" />
                  Carretera Huejutla - Chalahuiyapa S/N, C.P. 43000, Huejutla de Reyes, Hidalgo.‍
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='link'>
                  <MdOutlineMailOutline  className="me-1" />
                  E-mail: rectoría@uthh.edu.mx
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Recursos</h6>
              <p className='text-white'>
                <a href='#!' className='link'>
                  <RiGuideLine className="me-1" />
                  Guías de productos
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='link'>
                  <GoBook   className="me-1" />
                  Preguntas frecuentes
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='link'>
                  <IoGameControllerOutline   className="me-1" />
                  Gamificación educativa
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>ACERCA DE</h6>
              <p className='text-white'>
                <a href='/Terminos-Condiciones' className='link'>
                  <BiHome className="me-1" />
                  Términos y Condiciones
                </a>
              </p>
              <p className='text-white'>
              <a href='/Politica-de-Cockies' className='link'>

                <BiEnvelope className="me-1" />
                Política de Cockies
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <span className='text-white'>© 2023 Copyright:</span>
        <a className='text-white fw-bold custom-link' href='http://www.uthh.edu.mx/' style={{ color: '#ffffff' }}>
          www.uthh.edu.mx/
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterSection;
