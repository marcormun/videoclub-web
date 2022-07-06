import React, {useState} from 'react';

const Header = () => {
    return (
        <body className="font-sans bg-gray-900 text-white"> 
            <nav className="border-b border-gray-800">
                <div className="container mx-auto flex items-end justify-between px-6 py-8">
                    <ul className="flex items-center">
                        <li>
                            <a href="#" className="text-white text-2xl font-bold">LOGO</a>
                        </li>
                    </ul>
                    <ul className="flex items-center">
                        <li className='ml-16'>
                            <a href="" className='hover:text-gray-300'>Login</a>
                        </li>
                        <li className='ml-16'>
                            <a href="" className='hover:text-gray-300'>Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </body>
    )
};

export default Header;