import React, { useState } from 'react';
import { FilmIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logOut } from '../../containers/User/userSlice';


const Header = () => {
    const credenciales = useSelector(userData);
    let navegador = useNavigate();
    const dispatch = useDispatch();




    const viajar = (destino) => {
        navegador(destino)
    };
    if (!credenciales?.user_role) {
        return (
            <div className="font-sans bg-gray-900 text-white">
                <nav className="border-b border-gray-800">
                    <div className="container mx-auto flex items-end justify-between px-4 py-6">
                        <ul className="flex items-center">
                            <li>
                                <FilmIcon className="h-6 w-6 text-white" />
                            </li>
                            <li>
                                <a href="" className="text-white text-2xl font-bold">&nbsp;FilmClub</a>
                            </li>
                        </ul>
                        <ul className="flex items-center">
                            <li className='ml-16'>
                                <div className="headerButton" onClick={() => viajar("/login")}>Login</div>
                            </li>
                            <li className='ml-16'>
                                <div className='textLink' onClick={() => viajar("/register")}>Register</div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    } else {

        return (
            <div className="font-sans bg-gray-900 text-white">
                <nav className="border-b border-gray-800">
                    <div className="container mx-auto flex items-end justify-between px-4 py-6">
                        <ul className="flex items-center">
                            <li>
                                <FilmIcon className="h-6 w-6 text-white" />
                            </li>
                            <li>
                                <a href="" className="text-white text-2xl font-bold">&nbsp;FilmClub</a>
                            </li>
                        </ul>
                        <ul className="flex items-center">
                            <li className='ml-16'>
                                <div className='textLink' onClick={() => viajar("/profile")}>{credenciales?.user_role}</div>
                            </li>
                            <li className='ml-16'>
                                <div className='textLink' onClick={() => dispatch(logOut())}>log out</div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )

    }
};

export default Header;