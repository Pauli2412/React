import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import { FacturasGuardar } from "../hooks/ConexionSw";
import MenusView from './MenusView';
const FacturasView = () => {
    const navgacion = useNavigate();
    const msgError = (texto) => swal({
        title: 'Error',
        text: texto,
        icon: 'error',
        button: 'Aceptar',
        timer: 2000

    });
    const [info, setInfo] = useState(undefined);
    const [llamada, setLlamada] = useState(false);
    if (!llamada) {
        const datos = FacturasGuardar().then((data) => {
            setLlamada(true);
            if (data) {
                setInfo(data);
            }
        }, (error) => {
            msgError(error.message);
        });
    }

    return (
        <div className="card - center">
            <MenusView/>
            <div className="card-body">
                <h4 className="card-title">ADMINISTRAR FACTURAS</h4>
                    <Link to='/facturas/guardar' className="btn btn-success">AGREGAR FACTURA</Link>
                    <h4 className="card-title"> ______________________________________________________________________________________</h4>
                    <div className="container">
                            <table className="table align-middle mb-0 bg-white">
                                <thead className="bg-light">
                                    <tr>
                                        <th>id</th>
                                        <th>Codigo</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {info && info.map((element, key) => {
                                        return <tr key={key}>
                                            <td>{element.id}</td>
                                            <td>{element.codigo}</td>
                                            <td>{element.fecha}</td>
                                            <td>{element.total}</td>
                                            <td>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                

    );
};

export default FacturasView;