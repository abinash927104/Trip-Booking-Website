import React from 'react'
import '../styles/tourdetails.css'
import {Container,Row,Col,Form,ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import Booking from '../components/Booking/Booking';
const Tourdetails = () => { 
 
  const {id}=useParams();

  const tour=tourData.find(tour=>tour.id===id);

  const {photo,title, des, price,address, reviews,city, distance, maxGroupSize}=tour;
  const totalRating = reviews.reduce((acc,item)=> acc+item.rating,0);
  const avgRating=
  totalRating===0
  ? ""
  :totalRating===1
  ?totalRating
  :totalRating/reviews.length;

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                
                <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-star-s-fill" style={{color:"var(--secondary-color)"}}></i>{avgRating===0 ?null: avgRating} 
                {totalRating===0? 'Not rated' :  <span> ({reviews.length})
                </span>}
                </span>   
                <span>
                <i class="ri-map-pin-fill"></i>{address}
                </span>
                </div>

                <div className="tour__extra-details">
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>${price} per head</span>
                  <span><i class="ri-pin-distance-line"></i>{distance} km</span>
                  <span><i class="ri-group-fill"></i>{maxGroupSize} people</span>
                </div>

                <h5>Description</h5>
                <p>{des} this is description</p>


              </div>
            </div>
          </Col>

            {/* Booking section start here*/}

            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Tourdetails
