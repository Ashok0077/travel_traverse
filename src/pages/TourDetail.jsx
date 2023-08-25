import React from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import '../styles/tour-details.css';

const TourDetail=() => {
  const { id } = useParams()
  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour

  return <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={photo} alt="" />

              <div className="tour_info">
                <h2>{title}</h2>
                <p>{desc}</p>
                <p>Price: {price}</p>
                <p>City: {city}</p>
                <p>Distance: {distance}</p>
                <p>Max Group Size: {maxGroupSize}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
};

export default TourDetail;
