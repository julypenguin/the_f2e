import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import NavIcon from './NavIcon'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, XIcon as XIconOutline } from '@heroicons/react/outline'
import TaiwanLeft from '../Icon/TaiwanLeft'
import Triangle from '../Icon/Triangle'
import Square from '../Icon/Square'
import Circle from '../Icon/Circle'
import Dropdown from '../Dropdown/Dropdown';
import Select from '../Select/Select';

const Header = (props) => {

    const menuList = [
        { sid: 1, color: 'red', deep: 500, Shape: Triangle, title: '台灣景點' },
        { sid: 2, color: 'yellow', deep: 500, Shape: Square, title: '美食住宿' },
        { sid: 3, color: 'green', deep: 600, Shape: Circle, title: '景點交通' },
    ]

    const clsList = [
        { sid: 10001, name: '類別', unavailable: true },
        { sid: 10002, name: '景點', unavailable: false },
        { sid: 10003, name: '活動', unavailable: false },
    ]

    return (
        <div className="bg-white sticky top-0 z-10">
            <header className="relative bg-white flex-col flex">
                <div className='flex'>
                    <div className='ml-6 flex justify-center w-full sm:w-auto sm:justify-start lg:ml-12'>
                        <TaiwanLeft className='w-16 h-16' />
                    </div>
                    <nav aria-label="Top" className="hidden items-center flex-1 justify-end mr-12 sm:flex lg:mr-4">
                        {menuList.map(({ sid, color, deep, Shape, title }) => (
                            <div key={sid} className='flex items-center mr-6 cursor-pointer'>
                                <div className={`p-3 rounded-full relative bg-${color}-${deep} mr-2`}>
                                    <div className='absolute inset-0 flex justify-center items-center'>
                                        <Shape className='w-2 h-2' />
                                    </div>
                                </div>
                                <div className={`text-${color}-${deep} underline `}>{title}</div>
                            </div>
                        ))}
                    </nav>
                </div>

                <nav className='ring-1 ring-black ring-opacity-5 flex space-x-8 px-8 justify-between mt-4 mx-4 rounded-md sm:hidden'>
                    {menuList.map(({ sid, color, deep, Shape, title }) => (
                        <div key={sid} className='text-gray-300 py-1 cursor-pointer'>{title}</div>
                    ))}
                </nav>

                <section className='mt-4 mx-4 flex jusify-between'>
                    <Select
                        className='w-5/12 flex-1 mr-2'
                        list={clsList}
                    />

                    <Select
                        className='w-5/12 flex-1 mr-2'
                        list={clsList}
                    />

                    <button className='bg-red-500 text-white rounded-md px-1 py-2'>送出</button>
                </section>
            </header>
        </div>
    );
};

export default Header;