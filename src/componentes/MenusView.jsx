import React from 'react';
import '../css/Bootstrap.css';

import {Link } from 'react-router-dom';
import { CerrarSistema } from '../hooks/ConexionSw';
import logotipo from "../Imagenes/logotipo.png"; 
//const navegacion = useNavigate();
const MenusView = () => {
    const logout = () => {
        CerrarSistema();
        //navegacion('/');
    }
    return (
        /*<header>
            <div
                className="p-5 text-center bg-image col-12"
                style={{
                    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')", width: 1024
                }}
            >
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Heading</h1>
                            <h4 className="mb-3">Subheading</h4>
                            <a className="btn btn-outline-light btn-lg" href="#!" role="button"
                            >Call to action</a
                            >
                        </div>
                    </div>
                </div>
            </div>*/
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">          
                        <Link to='/' >
                                <img src={logotipo} width={120} alt='' />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <li className="nav-item active">                                
                                <Link to="/principal" className='nav-link' aria-current="page">Principal</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/usuarios" className='nav-link'>Usuarios</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to='/facturas'>Facturas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className='nav-link' onClick={logout}>Salir</Link>
                            </li>                       
                        </ul>
                    </div>
                </div>
            </nav>

          

        </header>
    



    );

};
export default MenusView;