import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Register = (props) => {

    //Hooks

    const [datosUser, setDatosUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
        address: "",
        city: "",
        payment: "",
        birth: "",
    });

    const [msgError, setMsgError] = useState("");

    const [congratulations, setCongratulations] = useState("");

    //Variables
    let navigate = useNavigate();

    //Handlers
    const updateUserData = (e) => {
        setDatosUser({ ...datosUser, [e.target.name]: e.target.value })
    }

    //Funciones del componente (useEffect)

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })

    //Funciones

    const Register = async () => {

        //Primero, comprobación de campos vacíos

        let mandatory = ['name', 'surname', 'email', 'password', 'password2', 'birth', 'payment'];

        for (let field of mandatory) {
            if (datosUser[field] === '') {
                setMsgError(`Te ha faltado ${[field]} por rellenar`);
                return;
            }
        }

        //Comprobamos que el password esté repetido correctamente

        if (datosUser.password !== datosUser.password2) {
            setMsgError("Los dos password deben de coincidir");
            return;
        }

        //Comprobaciones de formato de datos...


        //Limpiamos error
        setMsgError(false);

            //try {

        //     //axios....comunicamos con el backend

        let resultado = await axios.post("https://videoclub-proyecto5.herokuapp.com/api/auth/register", datosUser);
        

        setCongratulations(true);

        setTimeout(() => {
            navigate("/login");
        }, 2000);
        // } catch (error){
        //     console.log(error)
        // }
    }


    if (congratulations === true) {

        return (
            <div className="registerDesign">
                Bienvenido a nuestra aplicación, {datosUser.name}....
            </div>
        )

    } else {


        console.log(datosUser);
        return (
            <div>


                <div>
                    <div class="grid grid-cols-6 gap-9">
                        <label className="block text-gray-400 font-bold md:text-center mt-3 mb-3 pr-4">Nombre</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='name' title='name' onChange={updateUserData} lenght='30' placeholder='Nombre' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Apellido</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='surname' title='surname' onChange={updateUserData} lenght='30' placeholder='Apellido' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='email' title='email' onChange={updateUserData} lenght='30' placeholder='Email' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Password</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='password' title='password' onChange={updateUserData} lenght='30' placeholder='Password' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Repite Password</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='password2' title='password2' onChange={updateUserData} lenght='30' placeholder='`Password' />


                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
                        <input className="w-64 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='phone' title='phone' onChange={updateUserData} lenght='30' placeholder='Telefono' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='address' title='address' onChange={updateUserData} lenght='30' placeholder='Direccion' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Ciudad</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='city' title='city' onChange={updateUserData} lenght='30' placeholder='Ciudad' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Metodo Pago</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='payment' title='payment' onChange={updateUserData} lenght='30' placeholder='Metodo Pago' />

                        <label className="block text-gray-400 font-bold md:text-top mt-3 mb-3 pr-4">Fecha Nacimiento</label>
                        <input className="w-50 border-2 border-black-100 rounded py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-700" type='text' name='birth' title='birth' onChange={updateUserData} lenght='30' placeholder='Fecha Nacimiento' />

                    </div>
                </div>

                {/* En este div estamos mostrando el contenido del hook msgError, ese contenido a priori siempre son comillas vacías
                pero cuando ocurra algún error, setearemos el hook y entonces se recargará el componente y este mensaje se mostrará */}
                <div className="designMessageError">
                    {msgError}
                </div>

                {/* Siempre que tengamos botones en un return, les incluyo un callback antes de la funcion
                ya que en caso contrario, siempre se ejecutarán la primera vez que se cargue el container/componente
                y no cuando yo haga click que es lo que quiero */}
                <div class="flex justify-center">
                    
                    <div className=" block w-64 mt-2 mb-2 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => Register()}>
                        Registrame
                    </div></div>



            </div>
        )
    }

}
export default Register;