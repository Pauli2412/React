import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../css/style.css";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { UsuarioRegistro } from "../hooks/ConexionSw";
import MenusView from './MenusView';


function UsuarioRegistroView() {
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
          'apellidos': data.apellidos, 
          'nombres': data.nombres, 
          'identificacion': data.identificacion,
          'tipo': data.tipo,
          'direccion': data.direccion, 
          'telefono':data.telefono, 
          'tipo_persona': data.tipo_persona, 
          'cuenta': {
              'correo': "omarmaldonado@gmai.com", 
              'clave': "123"             
          }             
          
        };

        /*var datos = {
          "apellidos": "Omar", 
          "nombres": "Prueba", 
          "identificacion": "88588888889",
          "tipo": "CEDULA",
          "direccion": "Test2", 
          "telefono":"0000000000", 
          "tipo_persona": "cliente", 
          "cuenta": {
              "correo": "omarmaldo2nado2@gmail.com", 
              "clave": "1234"
          }             
          
        };*/
       // console.log(datos);
        const resgistros = UsuarioRegistro(datos).then((info) => {
            console.log(info);
            if(info) {
              //  sessionToken(info.token);
              msgOk('Se ha registrado');
                navgacion('/libros');
            }
        }, (error) => {
            //console.log(error.message);    
            msgError(error.message);
        });
    }

    var cantidadDeClaves = Object.keys(errors).length;
  return (
  <div>
    <MenusView />


    <div className="row">
      {errors && cantidadDeClaves > 0 && (
        <p className="alert alert-danger">Faltan datos por llenar</p>
      )}
      <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
            
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Agregar usaurios</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("nombres", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Nombres</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("apellidos", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Apellidos</label>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("identificacion", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Identificacion</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("tipo", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Tipo</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                {...register("direccion", { required: true })}
                className="form-control"
              />
              <label className="form-label">Direccion</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                {...register("telefono", { required: true })}
                className="form-control"
              />
              <label className="form-label">Telefono</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                {...register("tipo_persona", { required: true })}
                className="form-control"
              />
              <label className="form-label">Tipo_persona</label>
            </div>

            

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("correo", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Correo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("clave", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Clave</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Guardar
            </button>
            <Link
              to={"/LibrosView"}
              className="btn btn-danger btn-block mb-4"
              style={{ marginLeft: 5 }}
            >
              Regresar
            </Link>
          </form>

        </div>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default UsuarioRegistroView;
