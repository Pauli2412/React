import React from "react";
import { Link } from "react-router-dom";

const PiePagina = () =>{
    return (
        <div>
           <footer className='text-white py-4 bg-dark'>
                <div className="container">
                    <nav className="row">                          
                        <ul className="col-12 col-md-3 list-unstyled">
                                <li className="fond-weigth-bold mb-2">Tecnología vanguardista </li>
                                <li className="text-center">En PrOlimpia estamos comprometidos en alcanzar el éxito en cada servicio de que ofrecemos. Por eso, implementamos las mejores herramientas y equipos innovadores para garantizar un resultado profesional. </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                                <li className="fond-weigth-bold mb-2">¿Quienes Somos? </li>
                                <li className="text-center">Somos una agencia reconocida por ofrecer un presupuesto de acuerdo a las necesidades de cada cliente. Asimismo, ofrecemos productos de limpieza con los mejores precios del mercado. upuesto sin ningún compromiso.

                        </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                                <li className="fond-weigth-bold mb-2">Atención personalizada </li>
                                <li className="text-center">Para nuestra agencia limpieza lo más importante son los clientes. Por ello, contamos con un personal especializado para atender todas tus dudas e inquietudes en todo momento.</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                                <li className="fond-weigth-bold mb-2">ENLACES</li>
                                <li>
                                    <Link to='/IngresarProducto'>Productos</Link>
                                </li>
                                <li>
                                    <Link to='/RealizarPedidos'>Pedidos</Link>
                                </li>
                        </ul>     
                    </nav>  
                </div>
            </footer>
        </div>
    )
}
export default PiePagina;