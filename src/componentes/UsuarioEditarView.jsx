import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../css/style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { Usuario, UsuarioModificar } from "../hooks/ConexionSw";

function UsuarioEditarView() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  //console.log(id+" el id");

  const [llamada, setLlamada] = useState(false);
  if (!llamada) {
    const datos = Usuario(id).then(
      (data) => {
        console.log(data);

        if (data) {
          setValue('apellidos', data.apellidos); 
          setValue('nombres', data.nombres); 
          setValue('identificacion', data.identificacion);
          setValue('tipo', data.tipo);
          setValue('direccion', data.direccion); 
          setValue('telefono',data.telefono);
          setValue('tipo_persona', data.tipo_persona); 
          setValue('correo', "omarmaldonado@gmai.com"); 
          setValue('clave', "123")    
          /*
          setValue("firstName", data.firstName);
          setValue("lastName", data.lastName);
          setValue("maidenName", data.maidenName);
          setValue("age", data.age);
          setValue("gender", data.gender);
          setValue("email", data.email);
          setValue("phone", data.phone);
          
          setValue("image", data.image);
          setValue("username", data.username);
          setValue("birthDate", data.birthDate);
          setValue("bloodGroup", data.bloodGroup);
          setValue("height", data.height);
          setValue("weight", data.weight);
          setValue("eyeColor", data.eyeColor);
          setValue("id", data.id);
          setLlamada(true);*/
        }
      },
      (error) => {
        //console.log(error.message);
        msgError(error.message);
      }
    );
  }
  const navgacion = useNavigate();
  const msgError = (texto) =>
    swal({
      title: "Error",
      text: texto,
      icon: "error",
      button: "Aceptar",
      timer: 2000,
    });

  const msgOk = (texto) =>
    swal({
      title: "Afirmativo",
      text: texto,

      button: "Aceptar",
      timer: 2000,
    });

  const onSubmit = (data) => {
    var ide = data.id;
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
    // console.log(datos);
    const resgistros = UsuarioModificar(datos, ide).then(
      (info) => {
        console.log(info);
        if (info) {
          //  sessionToken(info.token);
          msgOk(
            "Se ha editado el usuario " + data.firstName + " " + data.lastName
          );
          navgacion("/usuarios");
        }
      },
      (error) => {
        //console.log(error.message);
        msgError(error.message);
      }
    );
  };

  var cantidadDeClaves = Object.keys(errors).length;
  return (
    <div className="row">
      {errors && cantidadDeClaves > 0 && (
        <p className="alert alert-danger">Faltan datos por llenar</p>
      )}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Editar usaurios</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id", { required: true })} />

            
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("nombres", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">Nombre</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("apellidos", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">apellidos</label>
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
                  <label className="form-label">identificacion</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("tipo", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">tipo</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                {...register("direccion", { required: true })}
                className="form-control"
              />
              <label className="form-label">direccion</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                {...register("telefono", { required: true })}
                className="form-control"
              />
              <label className="form-label">telefono</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                {...register("tipo_persona", { required: true })}
                className="form-control"
              />
              <label className="form-label">tipo_persona</label>
            </div>

            

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("correo", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">correo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    {...register("clave", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label">clave</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Editar
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
  );
}
export default UsuarioEditarView;
