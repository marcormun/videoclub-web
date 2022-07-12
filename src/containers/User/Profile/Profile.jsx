import React from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import Update from "../Update/Update";
import Delete from "../Delete/Delete";
import jwt from 'jwt-decode';






const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);

    const Delete = () => {
        axios.delete("https://videoclub-proyecto5.herokuapp.com/api/users", {

            headers: {

                Authorization: `Beared ${datosUsuario.token}`,
                datos_perfil: datosUsuario.user_id

            }
        });

    };




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


            <div class="flex  gap-9 items-center justify-center">
                <NavLink to="/Delete" className=" block  h-14 w-64 mt-6 bg-red-800 hover:bg-red-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => Delete()}>Dar de Baja</NavLink>
            </div>
                <div class="flex  gap-9 items-center justify-center">
                <NavLink to="/Update" className=" block   h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => Update()}>Update</NavLink>
            </div>

        </div>






    )
}
export default Profile; 