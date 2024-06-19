//rsc
import React from 'react';
import '../css/Bootstrap.css';
import MenusView from './MenusView';
import PiePagina from './PiePagina';
import productos from "../Imagenes/productos.png"; 
import empleados from "../Imagenes/empleados.png"; 
const PrincipalView = () => {

    return (
        <div className='row'>
            <MenusView/>
            <div className='row'>
                <div className='row'><h1>BIENVENIDO QUERID@ USUARI@</h1></div>
                <div className='row'>
                <img src={empleados} width={120} alt='' />
                <img src={productos} width={120} alt='' />
                
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <PiePagina/>
        </div>
    );
};

export default PrincipalView;