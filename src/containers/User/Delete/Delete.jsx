import React,{useState} from 'react';
import axios from 'axios';
import {Modal, ModalBody, ModalHeader,ModalFooter} from 'reactstrap';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { NavLink, Link } from 'react-router-dom';










const Delete = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const[ModalInsertar, setmodalInsertar]=useState(false);
    axios.get("https://videoclub-proyecto5.herokuapp.com/api/users", {
        headers: {
            Authorization: `Beared ${datosUsuario.token}`,
            userData: datosUsuario.user_id
        }
    });
    const abrirModalInsertar=()=>{
        setmodalInsertar(!ModalInsertar);
    }

    return (
        //<pre>{JSON.stringify(datosUsuario, null,2)}</pre>




        <div class="grid grid-cols-2 gap-9 bg-size-auto">

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
               
                <div className="block   h-14 w-60 mt-9 bg-red-800 hover:bg-red-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => abrirModalInsertar()}>Delete</div>
            </div>
            

            
            <Modal isOpen={ModalInsertar} className="md:text-top mt-3 mb-3 pr-4 gap-9" >
            <ModalHeader> Borrar usuario</ModalHeader>
            <ModalBody>
            
            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
            <br/>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_phone}</p>

            </ModalBody>
            </Modal>

        </div>

        

    )
}
export default Delete; 