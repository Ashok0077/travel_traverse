import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const quick_links=[
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

const quick_links2=[
  {
  path:'/gallery',
  display:'Gallery'
  },
  {
  path:'/login',
  display:'Login'
  },
  {
  path:'/register',
  display:'Register'
  },    
];

function Footer() {
  return (
   <Container>
    <Row>
      <Col lg="3">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime asperiores</p>
            <div className="social_links d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i class="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
            </div>
        </div>
      </Col>
      <Col lg='3'>
        <h5 className="footer_link-title">Discovery</h5>
        <ListGroup className='footer_quick-links'>
          {
            quick_links.map((item, index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path} >{item.display}</Link>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </Col>
      <Col lg='3'>
      <h5 className="footer_link-title">Quick Links</h5>
        <ListGroup className='footer_quick-links'>
          {
            quick_links2.map((item, index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path} >{item.display}</Link>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </Col>
      <Col lg='3'>
      <h5 className="footer_link-title">Contact</h5>
        <ListGroup className='footer_quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>

                <h6 className="mb-0 d-flex align-items-center">
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6><p>Delhi, India</p>
               
              </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
   </Container>
  )
}

export default Footer