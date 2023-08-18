import React from 'react';
import './../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import WorldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

import ServiceList from '../services/ServiceList';

function Home() {
  return (<>
  <Container>
    <div className="home-container">
      <section className="text-section">
        <div className='quote'>
          <Subtitle subtitle={'Know Before You Go'}/>
          <img src={WorldImg} alt="World" />
        </div>
        <h1>Travel More, Create Stories that Last a <span>Lifetime.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa asperiores quidem temporibus tempore tempora.</p>
      </section>
      <section className="media-section">
        <div className="image-container">
          <img src={heroImg} alt="Image 1" />
        </div>
        <div className="video-container">
          <video controls>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="image-container">
          <img src={heroImg02} alt="Image 2" />
        </div>
      </section>
   </div>
   <section>
   < div className='search-bar '>
    <SearchBar></SearchBar>
    </div>
    </section>
    <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services_subtitle">What we serve</h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
   </section>
   <section>
    <Container>
      <Row>
        <Col lg='12' className='"mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
      </Row>
    </Container>
   </section>
   
  
   </Container>
</>
  );
}

export default Home;
