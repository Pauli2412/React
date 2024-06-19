import { useEffect } from 'react';
import '../css/Bootstrap.css';
import { useForm } from 'react-hook-form';
import { IngresarSistema, InicioSesion } from '../hooks/ConexionSw';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const InicioSesionView = () => {
    const navegacion = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm(); // initialise the hook
    const mensaje = (texto) => swal(
        {
            title: "Error",
            text: texto,
            icon: "error",
            button: "Aceptar",
            timer: 2000
        }
    );

    const onSubmit = (data) => {        
        var datos = { 'correo': data.correo, 'clave': data.clave };
        const login =  IngresarSistema(datos).then((info) => {
            if(info && info.token) {
                navegacion('/principal');
            } else {
                mensaje(info.msg);
            }
        });
    };


    return <section className="vh-100">
        <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid" alt="Phone image" />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-outline mb-4">
                            <input type="email" {...register('correo', { required: true, pattern: /\S+@\S+\.\S+/ })} id="form1Example13" className="form-control form-control-lg" />
                            {errors.correo && errors.correo.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere su correo</div>}
                            {errors.correo && errors.correo.type === 'pattern' && <div className='alert alert-danger fade show' role='alert'>Ingrese un correo valido</div>}
                            <label className="form-label" >Correo:</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input {...register('clave', { required: true })} type="password" id="form1Example23" className="form-control form-control-lg" />
                            {errors.clave && errors.clave.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere su correo</div>}
                            <label className="form-label" >Clave:</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg btn-block">Iniciar sesion</button>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>

                        <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                            role="button">
                            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                        </a>
                        <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                            role="button">
                            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>

                    </form>
                </div>
            </div>
        </div>
    </section>



    /*useEffect(() => {
        if (info && info.token) {
            setToken(info.token);
            window.location ='/principal';
            //    navigate('/principal');
        } else if (info && !info.token) {
            mensaje(info.msg);
        }
    }, [info]);


    return vista();*/


    //console.log(error);




};

export default InicioSesionView;