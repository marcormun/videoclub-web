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
        user_name: datosUsuario.user_name,
        user_surname: datosUsuario.user_surname,
        user_email: datosUsuario.user_email,
        user_address: datosUsuario.user_address,
        user_city: datosUsuario.user_city,
        user_mobile: datosUsuario.user_mobile,
        user_token: datosUsuario.user_token

    })
  

    //handkeys

    const handlerInputs = (e) => {
        setPerfilUsuario({ ...perfilUsuario, [e.target.name]: e.target.value })

    }



    return (
        //<pre>{JSON.stringify(datosUsuario, null,2)}</pre>




        <div class="grid grid-cols-2 gap-4 bg-size-auto ">
            <pre>{JSON.stringify(datosUsuario, null,2)}</pre>



            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4" value={perfilUsuario.user_name} name='user_name' title='name' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Apellido</label>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3" value={perfilUsuario.user_surname} name='user_surname' title='surname' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"value={perfilUsuario.user_email} name='user_email' title='email' disabled onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"value={perfilUsuario.user_address} name='user_address' title='address' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Localidad</label>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"value={perfilUsuario.user_city} name='user_city' title='city' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
            <input type="text" className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4"value={perfilUsuario.user_mobile} name='user_mobile' title='mobile' onchanges={handlerInputs}></input>

            <div class="flex  gap-9 items-center justify-center">

                <div className="block   h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(updateUser(datosUsuario, perfilUsuario), navigate('/'))}>Guardar</div>
            </div>

        </div>

    )
}
export default Editprofile; 