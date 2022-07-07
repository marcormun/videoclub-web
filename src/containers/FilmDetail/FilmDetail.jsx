import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { takeData } from './detailSlice'; 

const FilmDetail = () => {

    let detallesPelicula = useSelector(takeData);
    let navegador = useNavigate();
    useEffect(()=>{
        
        console.log(detallesPelicula);
    },[]);
     return (
         <div className='movie-info border-b border-gray-800'>
            <div className="container mx-auto px-4 py-16 flex">
                <img src={detallesPelicula?.image} alt="" className='w-96'/>
            </div>
         </div>
     )
}
export default FilmDetail;