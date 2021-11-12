import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import NavIcon from './NavIcon'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, XIcon as XIconOutline } from '@heroicons/react/outline'

const Header = (props) => {

    return (
        <div className="bg-white sticky top-0 z-10">
            <header className="relative bg-white">
                <nav aria-label="Top" className="max-w-7xl mx-auto px-2 sm:px-6">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <NavIcon />
                                </Link>
                            </div>

                            <Navbar {...props} />

                            <div className="ml-auto flex items-center">
                                {/* 台灣景點 */}
                                <div className="ml-4 hidden lg:flex lg:items-center lg:justify-end">
                                    <div
                                        className="text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-800"
                                    >
                                        台灣景點
                                    </div>
                                </div>

                                {/* 美食住宿 */}
                                <button className="mr-2 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    {/* <Icon className='mr-2' icon='globe' /> */}
                                    <span>
                                        美食住宿
                                    </span>
                                </button>

                                {/* 景點交通 */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to="/cart" className="group -m-2 p-2 flex items-center">
                                        {/* <Icon className='mr-2' icon='globe' /> */}
                                        <span>
                                            景點交通
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;