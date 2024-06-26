import React from 'react'
import TourCard from '../../shared/TourCard'
//import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
const FeaturedToursList = () => {

  const {data:featuredTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  console.log(featuredTours);


  return (
   <>
   {
    loading && <h4>loading</h4>
   }
 
  
   {!loading && !error && featuredTours.map(tour=>(
    <Col lg='6' className='mb-4' key={tour.id}><TourCard tour={tour._id}/> </Col>
   )

   )

   }
   </>
  )
}

export default FeaturedToursList
