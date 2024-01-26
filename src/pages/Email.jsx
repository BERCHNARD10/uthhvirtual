import React, { useState } from 'react';

const EmailForm = () => {
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost/webservices/correo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: correoElectronico,
        }),
      });

      const result = await response.json();

      if (result.done) {
        setMensaje(`Solicitud de recuperación de contraseña enviada con éxito. ${result.message}`);
      } else {
        setMensaje(`Error: ${result.message}`);
        if (result.debug_info) {
          console.error('Información de depuración:', result.debug_info);
        }
        if (result.errors) {
          result.errors.forEach(error => {
            console.error('Error específico:', error);
          });
        }
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setMensaje('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Recuperar Contraseña</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="correoElectronico">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correoElectronico"
                    placeholder="Ingresa tu correo electrónico"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-login btn btn-primary btn-block" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
              {mensaje && (
                <div className={`mt-3 alert ${mensaje.includes('éxito') ? 'alert-success' : 'alert-danger'}`} role="alert">
                  {mensaje}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
