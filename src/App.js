import { useState, useEffect } from 'react';
import './css/Bootstrap.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
//import { BrowserRouter as Router, Link, Route, Navigate, useHistory } from 'react-router-dom';
import PrincipalView from './componentes/PrincipalView';
import InicioSesionView from './componentes/InicioSesionView';
import LibroView from './componentes/LibroView';
import ClienteView from './componentes/ClienteView';

import { EstaSession } from './utilidades/UseSession';
import LibroRegistroView from './componentes/LibroRegistroView';
import UsuarioRegistroView from './componentes/UsuarioRegistroView';
import UsuarioEditarView from './componentes/UsuarioEditarView';
import FacturasNuevo from './componentes/FacturasNuevo';
import FacturasView from './componentes/FacturasView';

function App() {
  const MiddleWare = ({ children }) => {
    const autenticado = EstaSession();
    const location = useLocation();
    if (autenticado) {      
      return children;
    } else {
      return <Navigate to='/' state={location} />
    }
  }
  
  const MiddleWareSession = ({ children }) => {
    const autenticado = EstaSession();
    //const location = useLocation();
    if (autenticado) {      
      return <Navigate to='/principal'  />
    } return children;
  }

  return (

    <div>

      <Routes>

        <Route path="/" element={<MiddleWareSession><InicioSesionView /></MiddleWareSession>} exact />
        <Route path='/principal' element={<MiddleWare><PrincipalView /></MiddleWare>}></Route>
        <Route path='/libros' element={<MiddleWare><LibroView /></MiddleWare>}></Route>
        <Route path='/usuarios' element={<MiddleWare><ClienteView /></MiddleWare>}></Route>

        <Route path='/registroLibro' element={<MiddleWare><LibroRegistroView /></MiddleWare>}></Route>
        <Route path='/registroUsuario' element={<MiddleWare><UsuarioRegistroView /></MiddleWare>}></Route>
        <Route path='/editarUsuario/:id' element={<MiddleWare><UsuarioEditarView /></MiddleWare>}></Route>
        <Route
          path="/usuarios/editar/:id"
          element={
            <MiddleWare>
              <UsuarioEditarView />
            </MiddleWare>
          }
        ></Route>
      <Route 
          path="/facturas" 
            element=
              {<MiddleWare><FacturasView/></MiddleWare>}
              ></Route>
        <Route 
          path="/facturas/guardar" 
            element=
              {<MiddleWare><FacturasNuevo/></MiddleWare>}
              ></Route>
        

      </Routes>
    </div>

  );

  /* if (token) {
     return (
 
       <div className="container">
         <div className='row'>
           
          
            
         </div>
       </div>
 
     );
   } else {
     return (
       <div className="container">
         <div className='row'>
           <InicioSesion setToken={setToken} />
         </div>
 
       </div>
     );
   }*/




}

export default App;
