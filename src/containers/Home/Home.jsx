import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid'
import { useSelector,useDispatch } from 'react-redux';
// import { searchData } from '../../components/Header/searchSlice';
// import { keepFilm } from '../../containers/FilmDetail/detailSlice';
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
            setPeliculasDefecto(peliculas.data.results);
            console.log(peliculas.data.data);
            
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='container mx-auto px4 pt-16'>
            <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Catálogo</h2>
            <div className="grid grid-cols-4 gap-8">
            </div>
        </div>
    )
}
export default Home;