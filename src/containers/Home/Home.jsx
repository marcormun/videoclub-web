import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid'
import { useSelector,useDispatch } from 'react-redux';
import { searchData } from '../../components/Header/searchSlice';
import { keepFilm } from '../../containers/FilmDetail/detailSlice';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    // let peliculas = useSelector(searchData);
    let navegador = useNavigate();
    let dispatch = useDispatch();

    //Hook de películas por defecto al entrar en la aplicación
    const [peliculasDefecto, setPeliculasDefecto] = useState([]);

    //UseEffect

    useEffect(()=>{
        //Recordamos que este es el primero de todos los useEffect, se ejecuta
        //nada más se ha montado el componente.
        //Algo muy importante a recordar es que al useEffect NO le gusta que trabajemos dentro 
        //de él con try catch, el quiere una funcion externa que haga eso, para no entrar
        //en bucles infinitos
        PeliculasApi();
    },[]);

    //Funciones
    const PeliculasApi = async () => {
        try {
            let peliculas = await axios.get("https://videoclub-proyecto5.herokuapp.com/api/films");
            
            //seteo las películas al hook para que se recargue el componente
            setPeliculasDefecto(peliculas.data.data);
            console.log(peliculas.data.data);
            
        } catch (error) {
            console.log(error)
        }
    };
    const PeliculaEscogida = (pelicula) => {

        //Primer paso, guardamos la película escogida en RDX

        dispatch(keepFilm(pelicula));


        //Segundo paso, redirigimos a FilmDetail donde veremos
        //los detalles de la película y si estamos logeados (tenemos token),
        //podremos alquilar la película.

        setTimeout(()=>{
            navegador("/detail");
        },500);

        console.log(pelicula);
    }

    return (
        <div className='container mx-auto px4 pt-16'>
            <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Catálogo</h2>
            <div className="grid grid-cols-4 gap-8">
            {
                peliculasDefecto.map(pelicula => {
                    return(
                        <div className="cardFilm mt-8 w-64 cursor-pointer" key={pelicula.id} onClick={()=>PeliculaEscogida(pelicula)}>
                            <img className="peliDesign w-64 h-96" src={pelicula.image}/>
                        <a className="text-lg mt-2 hover:text-gray-300">{pelicula.title}</a>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Home;