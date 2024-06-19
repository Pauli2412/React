import { useState, useEffect } from 'react';
import axios from 'axios';
import { CerrarSession, ObtenerSession, Session } from '../utilidades/UseSession';
const URL = 'http://localhost:8080/api/v1';


export const Opac = (accion = true) => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (accion) callApi();
    }, []);
    const callApi = async (nombre) => {
        try {
            const { data, status, statusText } =
                await axios.get(URL + '/opac');
            setInfo(data);
            console.log(data);
        } catch (error) {
            //console.log(error);
            setError(error);
        }

    }
    return { info, error, execute: callApi };
};


export const InicioSesion = (data, accion = true) => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (accion) callApi(data);
    }, []);
    const callApi = async (datos) => {
        try {
            const { data, status, statusText } =
                await axios.post(URL + '/inicio_sesion', datos);
            setInfo(data);
            console.log(data);
        } catch (error) {
            //console.log(error);
            setError(error);
        }

    }
    return { info, error, execute: callApi };
};

export const IngresarSistema = async (data) => {
    return await axios.post(URL + '/inicio_sesion', data)
        .then((response) => {
            console.log(response);
            if (response.data.data && response.data.data.token) {
                const session = Session(response.data.data.token);
            }
            return response.data.data;
        });
}
export const CerrarSistema = async () => {
    /*return await axios.post(URL+'/autenticar', data)
    .then((response)=>{
        console.log(response);
        if(response.data && response.data.token) {            
            const session = Session(response.data.token);            
        }
        return response.data;
    });*/
    await CerrarSession();
    return true;
}
//TODO
    //lamado al servicio web para borrar token
//LIBRO
export const Libros = async (token) => {
    console.log('ejecucion');
    const config = {headers: {
        'Authorization': ObtenerSession()
    }};
    return await axios.get(URL + '/personas', config)
        .then((response) => {
                
            return response.data;
        });
}

export const Usuario = async (id) => {
    const config = {
        headers: {
            'Authorization': ObtenerSession()
        },
      };
    return await axios.get(URL+'/personas/obtener/'+id,config).then((respnse)=> {
        
        return respnse.data;
    });
}

export const UsuarioRegistro = async (data) => {
    console.log('ejecucion usuarioregistro');

    const config = {
        headers: {
            'Authorization': ObtenerSession()
        },
      };
    return await axios.post(URL+'/personas/guardar', data,config).then((response)=> {
        
        console.log(response);
        return response.data.data;
        
    });
    
}

export const UsuarioModificar = async (data, id) => {
    const config = {
        headers: {
            'Authorization': ObtenerSession()
        },
      };
    return await axios.put(URL+'users/'+id, data,config).then((respnse)=> {
        console.log(respnse);
        return respnse.data;
    });
}
export const FacturasGuardar = async (data) => {
    //console.log('ejecucion usuarioregistro');

    const config = {
        headers: {
            'Authorization': ObtenerSession()
        },
      };
    return await axios.post(URL+'/facturas/guardar', data,config).then((response)=> {
        
        console.log(response);
        return response.data.data;
        
    });
    
}