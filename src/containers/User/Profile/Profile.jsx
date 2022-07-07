import React from 'react';

import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import jwt from 'jwt-decode';


const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    console.log();
    
     return (
         <div className='profileDesign'>{datosUsuario.user_mail}{datosUsuario.token}{datosUsuario.user_role}
          <pre>{JSON.stringify(datosUsuario, null,2)}</pre>
         </div>
     )
}
export default Profile; 