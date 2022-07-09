import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import jwt from 'jwt-decode';

const Delete = () => {
    axios.delete("https://videoclub-proyecto5.herokuapp.com/api/users", {

        headers: {
            Authorization: `Beared ${userData.token}`,
            datos_perfil: userData.user_id

        }
    });

};


const Update = () => {
    axios.get("https://videoclub-proyecto5.herokuapp.com/api/users", {
        headers: {
            Authorization: `Beared ${userData.token}`,
            userData: userData.user_id
        }
    }
    );





};



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

                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_address}</p>
                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_phone}</p>

                <div className="content-center h-12 w-64 mt-6 bg-red-700 hover:bg-green-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => Delete()}>Dar de Baja</div>

                <div className="content-center h-12 w-64 mt-6 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => Update()}>Update</div>

            </div>

        </div>



        //</div>
    )
}
export default Profile; 