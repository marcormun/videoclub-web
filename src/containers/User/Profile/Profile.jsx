import React from 'react';

import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import jwt from 'jwt-decode';


const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    console.log();

    return (
        //<pre>{JSON.stringify(datosUsuario, null,2)}</pre>

        <div>


            <div class="grid grid-cols-2 gap-2">
                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_name}</p>
                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_email}</p>
                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Role</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_role}</p>

            </div>

        </div>



        //</div>
    )
}
export default Profile; 