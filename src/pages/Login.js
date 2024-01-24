import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { BiUser } from 'react-icons/bi';
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import SecondaryLogo from '../assets/images/secondary-logo.png';
import React, { useState, useRef } from 'react';
import { FaEye } from "react-icons/fa";
import '../assets/styles/login.css';  


const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [matriculaError, setMatriculaError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
  
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      trigger,
    } = useForm();
  
    const passwordValue = watch('password');

    const onSubmit = async (data, event) => {
    event.preventDefault();  

    console.log(data);
    try {
        setIsLoading(true);
        console.log('Datos enviados:', JSON.stringify(data));

        const response = await fetch('http://localhost/WebServices/loginUser.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                matriculaAlum: data.matriculaAlum.toString(),
            }),
        });

        const result = await response.json();
    
        if (result.done) {
            console.log('Login exitoso:', result);
        } else {
            console.error('Error en el registro:', result.message);
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
    } finally {
        setIsLoading(false);
    }
};


    const captcha = useRef(null);
    const onchange = () => {
      if(captcha.current.getValue())
      {
        console.log('el usuario no es un robot')
      }
    };
return (
    <div>
        <div className='split-screen'>
            <div className='left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/e/e3/Huejutla_de_Reyes_%2813%29.jpg' alt='Imagen de fondo'></img>
            </div>
        <div className='right'>
        <div className="login-body flex flex-col gap-5 items-center p-4 sm:max-w-[400px] md:max-w-[600px] mx-auto bg-white shadow-lg rounded-md">
            <div className="login-container">
            <img src={SecondaryLogo} alt="Logo" />
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='header-form'>
                <h4 className='MuiTypography-root MuiTypography-h4 mui-1xwxgjt'>La aventura comienza aquí 🚀</h4>
                <p className='MuiTypography-root MuiTypography-body1 mbe-1 mui-3vvmsa'>¡Haz que tu aprendizaje sea fácil y divertido!</p>
                </div>
                <div className='conftainer'>

                    <div className={`entryarea ${matriculaError ? 'has-error' : ''}`}>
                    <input
                        type='text'
                        required
                        className={`input-field ${matriculaError ? 'input-error' : ''}`}
                        {...register('matriculaAlum', { required: true, valueAsNumber: true })}
                        onBlur={() => {
                        trigger('matriculaAlum').then((isValid) => {
                            setMatriculaError(!isValid);
                        });
                        }}
                        onKeyUp={() => {
                        setMatriculaError(false);
                        }}
                    />
                    <div className='labelline'>Matrícula</div>
                    {matriculaError && errors.matriculaAlum?.type === 'required' && (
                        <label className='error-message'>Este campo es requerido</label>
                    )}
                </div>
                <div className={`entryarea ${passwordError ? 'has-error' : ''} ${errors.correo?.type === "pattern" ? 'input-error' : ''}`}>
                    <input
                    type='password'
                    required
                    className={`input-field ${passwordError ? 'input-error' : ''}`}
                    {...register("password", {
                        required: 'Este campo es requerido'
                    })}
                    onBlur={() => {
                        trigger('password').then((isValid) => {
                        setPasswordError(!isValid);
                        });
                    }}
                    onKeyUp={() => {
                        setPasswordError(false);
                    }}
                    />
                    <div className='labelline'>Contraseña</div>
                    {errors.password &&
                    <div className='password-error'>            
                        <label className='error-message'>{errors.password.message}</label>
                    </div>
                    }
                </div>
                <div className='reCaptcha'>
                    <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LcpMlgpAAAAAJeu6_Fh_xevJzOUfZrv6h7I6V3k"
                    onChange={onchange}
                    />
                </div>
                <div className='user-data'>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault'></input>
                    <label className='form-check-label' for='flexCheckDefault'>
                        Recordarme
                    </label>
                </div>
                <Button type="submit" className="btn-login" variant="primary" onClick={handleSubmit(onSubmit)} disabled={isLoading}>
                    {isLoading ? 'Registrando...' : 'Iniciar'}
                </Button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
        </div>

        <footer className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <span className='text-muted'>Términos y Condiciones | Política de Privacidad</span>
        </footer>
    </div>
    );
};

export default Login;
