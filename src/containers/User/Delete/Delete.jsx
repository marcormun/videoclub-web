import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import jwt from 'jwt-decode';






const Delete = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    axios.get("https://videoclub-proyecto5.herokuapp.com/api/users", {
        headers: {
            Authorization: `Beared ${datosUsuario.token}`,
            userData: datosUsuario.user_id
        }
    });


    return (
        //<pre>{JSON.stringify(datosUsuario, null,2)}</pre>




        <div class="grid grid-cols-2 gap-3 ">

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
            <p className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_name}</p>
            

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_email}</p>
            

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Role</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_role}</p>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_address}</p>
            
            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_phone}</p>
            

            <div class="flex  gap-9 items-center justify-center ">
               
                <div className="block   h-14 w-60 mt-9 bg-red-800 hover:bg-red-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => Delete()}>Delete</div>
            </div>

        </div>

    )
}
export default Delete; 