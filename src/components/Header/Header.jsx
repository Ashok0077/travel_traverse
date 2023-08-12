import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
import logo from '../../assets/images/logo.png'

const navlinks=[
    {
    path:'/home',
    display:'Home'
    },
    {
    path:'#',
    display:'About'
    },
    {
    path:'/tours',
    display:'Tours'
    },    
];

const authbutton=[
    {
        path:'/login',
        class:'login-button',
        display:'Login'
    },
    {
        path:'/register',
        class:'register-button',
        display:'Register'
    },
];


function header() {
  return (
    <header className="navbar">
    <div className="logo">
      <img src={logo} alt="Logo" />
      <span>TravelTraverse</span>
    </div>
    <nav className="navigation">
      <ul>
        {
            navlinks.map((item,index)=>(
                <li>
                     <Link to={item.path}>{item.display}</Link>
                </li>
            ))
        }
      </ul>
    </nav>
    <div className="auth-buttons">
        {
        authbutton.map((item,index)=>(
            <Link to={item.path} className={item.class}>{item.display}</Link>
        ))
        } 
      </div>
  </header>
  )
}

export default header