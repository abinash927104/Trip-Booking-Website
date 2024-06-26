import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
      imgUrl: weatherImg,
      title: "Calculate Weather",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cum"
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cum"
},
{
  imgUrl: customizationImg,
  title: "Customization",
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cum"
}
];

const ServiceList = () => {
  return (
    <>
    {
      servicesData.map((item,index)=>(
        <Col lg='6' key={index}>
          <ServiceCard item={item}/>
        </Col>
      )

      )
    }
    </>
   
  )
}

export default ServiceList
