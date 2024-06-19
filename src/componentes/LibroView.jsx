import { useState } from 'react';
import { Libros } from '../hooks/ConexionSw';
import swal from 'sweetalert';
import { Navigate, Link } from 'react-router-dom';
import MenusView from './MenusView';
const mensaje = (texto) => swal(
    {
        title: "Error",
        text: texto,
        icon: "error",
        button: "Aceptar",
        timer: 2000
    }
);

const LibroView = () => {

    const [info, setInfo] = useState(undefined);
    const [llamada, setLlamada] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);    
    const handleShow = () => setShow(true);
    
    if (!llamada) {
        const datos = Libros().then((data) => {
            // llamada = true;
            setLlamada(true);
            console.log(data);
            /* const aux =  undefined;        
             data.lista.map((element, key) => {
                 aux += (<tr><td>{key}</td><td>{element.autores}</td><td>{element.titulo}</td><td>{element.descripcion}</td><td>{element.edicion} {element.editorial}</td><td>{element.anio}</td><td></td></tr>)
             });*/
            setInfo(data);
        }, (error) => {
            //console.log(error);
            mensaje(error.message);
        });
    }



    return (
        <div>
            <MenusView />
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <div className='card text-center'>
                        <div className='card-body'>
                            <h5 className="card-title alert alert-info">ADMINISTRAR LIBROS</h5>
                            <div className='card'>
                                <div className='card-body'>
                                    <Link to="/registroLibro" className='btn btn-success' onClick={<Navigate to='/registroLibro' />}>Nuevo</Link>
                                </div>

                            </div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Nro</th><th>Nombres</th><th>Apellidos</th><th>Identificación</th><th>Tipo Documento</th><th>Dirección</th><th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {info && info.data && info.data.map((element, key) => {
                                        return <tr key={key}>
                                            <td>{(key) + 1}</td>
                                            <td>{element.nombres}</td>
                                            <td>{element.apellidos}</td>
                                            <td>{element.identificacion}</td>
                                            <td>{element.tipo}</td>
                                            <td>{element.direccion}</td>
                                            <td><Link to={'/usuarios/editar/'+element.external} className="btn btn-danger btn-block mb-4"
                                                style={{ marginLeft: 5 }}>Editar</Link>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-3'></div>
            </div>
        </div>


    );
};

export default LibroView;