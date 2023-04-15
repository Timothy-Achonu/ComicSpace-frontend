import React from 'react'
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom'
import Search from './search/Search';
import {BsCartDash} from 'react-icons/bs'
import logo from '../../assets/ComicSpace.png';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <img src={logo} alt='logo'/>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/" >Categories</NavLink>
        <NavLink to="/" >Contact Us</NavLink>
        <NavLink to="/" >About Us</NavLink>
        <Search />
        <div className={styles.cart}>
            Cart 
            <BsCartDash />
        </div>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/register" className={styles.registerBtn}>Register</NavLink>
    </nav>
  )
}
