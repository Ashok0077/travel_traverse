import React, { useRef, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Container, Row, Button } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import './header.css';

const navlinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];



const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stickyHeaderFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky_navbar');
    } else {
      headerRef.current.classList.remove('sticky_navbar');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeaderFunc);

    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <span>TravelTraverse</span>
            </div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {navlinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active_link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? 
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                : <>
              
                  <Button className='btn btn-warning'>
                     <Link to="/login">Login</Link>
                  </Button>
                  <Button className='btn btn-warning' >
                     <Link to="/register">Register</Link>
                  </Button>
                
                  </>
                }
              </div>

              <span className="mobile-menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
              </span>

            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
