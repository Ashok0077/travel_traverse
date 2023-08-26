import React from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import '../styles/tour-details.css';
import avatar from "../assets/images/avatar.jpg"

const TourDetail=() => {
  const { id } = useParams()
  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  const options={day:'numeric' , month:'long' , year:'numeric'}

  return <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={photo} alt="" />

              <div className="tour_info">
                <h2>{title}</h2>
                
                <div className="d-flex align-items-center gap-5">

                <span className='tour_rating d-flex align-items-center gap-1'>
                <i class="ri-star-fill" style={{'color' : "var(--secondary-color)"}}></i> {calculateAvgRating===0 ? null : avgRating}
                {totalRating===0?("Not Rated"):(
                  <span>({reviews?.length})</span>
                )} 
                </span>

                <span>
                <i class="ri-map-pin-user-fill"></i> {address}
                </span>

                </div>

                <div className="tour_extra-details">
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>{price}/per person</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form>
                  <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                    <span>1 <i class="ri-star-fill"></i></span>
                    <span>2 <i class="ri-star-fill"></i></span>
                    <span>3 <i class="ri-star-fill"></i></span>
                    <span>4 <i class="ri-star-fill"></i></span>
                    <span>5 <i class="ri-star-fill"></i></span>
                  </div>

                  <div className="review_input">
                    <input type="text" placeholder="share your feedback"/>
                    <button className="sfeedback">Submit</button>
                  </div>
                </Form>

                <ListGroup className="user_reviews">
                {
                  reviews?.map(review=>(
                    <div className="review_item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Ashok</h5>
                              <p>
                                {new Date("8-26-2023").toLocaleDateString(
                                  "en-US",options
                              )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                               5<i class="ri-star-fill"></i>
                            </span>
                           </div>
                           <h6> Amazing Tour !!!!!!!!!!</h6>
                      </div>
                    </div>
                  ))

                }
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
};

export default TourDetail;
