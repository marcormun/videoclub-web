import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid'
import { useSelector,useDispatch } from 'react-redux';
import { searchData } from '../../components/Header/searchSlice';
import { keepFilm } from '../../containers/FilmDetail/detailSlice';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    let peliculas = useSelector(searchData);
    let navegador = useNavigate();
    let dispatch = useDispatch();

    //Hook de películas por defecto al entrar en la aplicación
    const [peliculasDefecto, setPeliculasDefecto] = useState([]);

    //UseEffect

    useEffect(()=>{
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
    }

    return (
        <div className='container mx-auto px4 pt-16'>
            <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Catálogo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
                peliculasDefecto.map(pelicula => {
                    return(
                        <div className=" mt-8 w-64 cursor-pointer" key={pelicula._id} onClick={()=>PeliculaEscogida(pelicula)}>
                            <img className="w-64 h-96" src={pelicula.image}/>
                            <a className="text-base mt-2 hover:text-gray-300">{pelicula.title}</a>
                            <div className="flex justify-center items-center text-gray-400">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </span>
                                <span className='ml-1'>{pelicula.rating}</span>
                                <span className='mx-2'>|</span>
                                <span>Género: {pelicula.genre}</span>

                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Home;