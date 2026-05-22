import React from 'react'
import { NavLink } from 'react-router'
import { useTheme } from '../store/Zustand/useThemeStore'
import { useSelector } from 'react-redux';

const NavBar = () => {

    const theme = useTheme((state)=>state.theme);
    const toggleTheme = useTheme((state)=>state.toggleTheme);
    const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
        <div className={`navbar ${theme==='light'? 'bg-base-100':'bg-black'} shadow-sm`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink
                        to='/products'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>
                        Products</NavLink></li>
                    <li><NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>Cart({cartItems.length})</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>About us</NavLink></li>
                </ul>
                </div>
                <a className={`text-xl ${theme==='light'? 'text-black':'text-white'}`}>Products Gallery</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink
                        to='/products'
                        className={({ isActive }) =>
                            `font-medium 
                            ${theme==='light'? 'text-black':'text-white'}
                            ${isActive ? '!text-blue-600' : 'hover:text-blue-600'}
                            `
                        }>Products</NavLink></li>
                <li><NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            `font-medium 
                            ${theme==='light'? 'text-black':'text-white'}
                            ${isActive ? '!text-blue-600' : 'hover:text-blue-600'}
                            `
                        }>Cart({cartItems.length})</NavLink></li>
                <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium 
                            ${theme==='light'? 'text-black':'text-white'}
                            ${isActive ? '!text-blue-600' : 'hover:text-blue-600'}
                            `
                        }>About us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="rounded-2xl btn btn-soft btn-primary m-1.5">Login</a>
                <button className="rounded-2xl btn btn-soft btn-secondary" onClick={toggleTheme}>{theme}</button>
            </div>
        </div>
    </>
  )
}

export default NavBar