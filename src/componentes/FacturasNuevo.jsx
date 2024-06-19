import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
//import { FacturasGuardar } from "../hooks/ConexionSw";
import { useForm } from "react-hook-form";
import MenusView from './MenusView';
const FacturasNuevo = () => {
    const navgacion = useNavigate();
    const msgError = (texto) => swal({
        
            title:'Error',
            text: texto,
            icon: 'error',
            button: 'Aceptar',
            timer: 2000
        
    });

    const msgOk = (texto) => swal({
        
        title:'Afirmativo',
        text: texto,
        
        button: 'Aceptar',
        timer: 2000
    
});
   const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        
        
        var datos = {
          'Nombre': data.nombre, 
          'cantidad': data.cantidad                          
        };

        
        
    }
    var cantidadDeClaves = Object.keys(errors).length;  
    return (
        <div>
             <MenusView/>
            <h2>GUARDAR FACTURAS</h2>
    <div className="row">
      {errors && cantidadDeClaves > 0 && (
        <p className="alert alert-danger">Faltan datos por llenar</p>
      )}
      <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>          
      <div className="card text-center">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("Identificacion - Cliente", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">ID</label>
                </div>
              </div>
              </div> 
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("nombre", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Producto</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("cantidad", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Cantidad</label>
                </div>
              </div>
            </div>     
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Guardar
            </button>
             <Link to='/facturas' className="btn btn-success">Cancelar</Link>
          </form>

        </div>
      </div>
        </div>
      </div>
    </div>
 
        </div>
    );
};

export default FacturasNuevo;