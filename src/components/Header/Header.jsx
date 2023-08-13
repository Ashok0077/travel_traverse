import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import "./header.css"
import logo from '../../assets/images/logo.png'


const navlinks=[
    {
    path:'/home',
    display:'Home'
    },
    {
    path:'/about',
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
                      <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active_link':""}>{item.display}</NavLink>
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