import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, userData } from '../userSlice';





const Editprofile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Hocks
    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name:datosUsuario.user_name,
        user_surname: datosUsuario.user_surname,
        user_email: datosUsuario.user_email,
        user_address: datosUsuario.user_address,
        user_city: datosUsuario.user_city,
        user_mobile: datosUsuario.user_mobile,
        user_token: datosUsuario.user_token

    }) 
    
    


    return (
        //<pre>{JSON.stringify(datosUsuario, null,2)}</pre>




        <div class="grid grid-cols-3 gap-9 bg-size-auto ">
            <pre>{JSON.stringify(datosUsuario, null,2)}</pre>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
            <p className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_name}</p>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_email}</p>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Role</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_role}</p>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_address}</p>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_phone}</p>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"></input>

            <div class="flex  gap-9 items-center justify-center">

                <div className="block   h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(updateUser(datosUsuario,perfilUsuario),navigate('/'))}>Guardar</div>
            </div>

        </div>

    )
}
export default Editprofile; 