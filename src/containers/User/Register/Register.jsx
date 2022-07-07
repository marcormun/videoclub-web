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

    const Registrame = async () => {

        //Primero, comprobación de campos vacíos

        let mandatory = ['name','surname','email','password','password2','birth','payment'];

        for(let field of mandatory){
            if(datosUser[field] === ''){
                setMsgError(`Te ha faltado ${[field]} por rellenar`);
                return;
            }
        }

        //Comprobamos que el password esté repetido correctamente

        if(datosUser.password !== datosUser.password2){
            setMsgError("Los dos password deben de coincidir");
            return;
        }

        //Comprobaciones de formato de datos...


        //Limpiamos error
        setMsgError(false);
        
        // try {

        //     //axios....comunicamos con el backend

        //     // let resultado = await axios.post("endpointregister",datosUser);

             setCongratulations(true);

             setTimeout(()=>{
                navigate("/login");
             },2000);
        // } catch (error){
        //     console.log(error)
        // }
    }


    if(congratulations === true){

        return (
            <div className="registerDesign">
                Bienvenido a nuestra aplicación, {datosUser.name}....
            </div>
        )

    }else{


        /* <div className='h-128'>
            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Correo</label>
            <input type='email' class="w-64 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" 
                name='email' title='email' onChange={updateCredentials} lenght='30' placeholder='email@email.com'/>
            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Contraseña</label>
            <input  className="w-64 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700"
                type='password'  name='password' title='password' onChange={updateCredentials} lenght='30' placeholder='*******'/>
            <div className=" block w-64 mt-2 mb-2 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={()=>logeame()}>Login</div>
            <div className='mt-2'>{msgError}</div>
         </div> */
        return (
            <div className='h-128'>
                {/* <pre>{JSON.stringify(datosUser, null,2)}</pre> */}
    
                <div className="registerInputs">
                    <div className="registerInputsLeft">
                    <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
                        <input className='designInput' placeholder='name' type='text' name='name' title='name' onChange={updateUserData} lenght='30' />
                    <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Apellido</label>
                        <input className='designInput' placeholder='surname' type='text' name='surname' title='surname' onChange={updateUserData} lenght='30' />
                    <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
                        <input className='designInput' placeholder='email' type='email' name='email' title='email' onChange={updateUserData} lenght='30' />
                    <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Password</label>
                        <input className='designInput' placeholder='password' type='password' name='password' title='password' onChange={updateUserData} lenght='30' />
                    <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Repite Password</label>
                        <input className='designInput' placeholder='password2' type='password' name='password2' title='password2' onChange={updateUserData} lenght='30' />
    
                    </div>
    
                    <div className="registerInputsRight">
    
                    <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
                        <input className='designInput' placeholder='phone' type='text' name='phone' title='phone' onChange={updateUserData} lenght='30' />
                        <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>    
                        <input className='designInput' placeholder='address' type='text' name='address' title='address' onChange={updateUserData} lenght='30' />
                        <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Ciudad</label>
                        <input className='designInput' placeholder='city' type='text' name='city' title='city' onChange={updateUserData} lenght='30' />
                        <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Metodo Pago</label>
                        <input className='designInput' placeholder='payment' type='text' name='payment' title='payment' onChange={updateUserData} lenght='30' />
                        <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Fecha Nacimiento</label>
                        <input className='designInput'  type='Date' name='birth' title='birth' onChange={updateUserData} lenght='30' />
    
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
                <div className="s block w-64 mt-2 mb-2 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={()=>Registrame()}>
                    Registrame
                </div>


                
            </div>
        )
    }
    
}
export default Register;