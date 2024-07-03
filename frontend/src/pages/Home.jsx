import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/eiffel.avif'
import heroImg2 from '../assets/images/heroimg2.webp'
import heroimg3 from '../assets/images/heroimg3.png'
import experienceImg from '../assets/images/experience.jpg'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList'
import ImagesGallery from '../components/image-gallery/ImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
  <>
  <section>
   <Container>
    <Row>
      <Col lg='6'>
        <div className="hero__content">
         
          <h1>Travelling opens the door to creating{" "}
          <span className='highlight'>memories</span>
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil id hic veritatis quis. Provident delectus, doloribus a laudantium ad aspernatur reiciendis non blanditiis aut ratione, culpa repellat, minima minus cum eius iste unde voluptatibus commodi laborum officiis? Reiciendis, illum in?
          </p>
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero__img-box mt-4" >
          <img src={heroimg3} alt="" controls />
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg2} alt="" />
        </div>
      </Col>
      <SearchBar/>
    </Row>
   </Container>
   </section>
    {/* hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <h5 className='service__subtitle'>What we serve</h5>
            <h2 className='service__title'>We offer our best services</h2>
          </Col>

          <ServiceList/>
        </Row>
      </Container>
    </section>
      {/* featured tour section start*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5' >
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured_tour-title'> Our Featured Tours</h2>
            </Col>
            <FeaturedToursList/>
          </Row>
        </Container>
      </section>

        {/* experience tour section start*/}

      <section>
        <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br /> we will serve you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> minima tempore sit repellendus aliquam odio!
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>20k+</span>
                <h6>Succesful Trip</h6>
              </div>
              <div className="counter__box">
                <span>3k+ </span>
                <h6>Regular Cllient</h6>
              </div>
              <div className="counter__box">
                <span>10 </span>
                <h6> Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
        </Container>
      </section> 
        {/* gallery tour section start*/}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Gallery"}/>
                <h2 className='gallery__title'>
                  Visit our customer tour gallery
                </h2>
            </Col>
            <Col lg='12'>
              <ImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

        {/*  testimonial section start*/}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Customers Love"}/>
              <h2 className="testimonial__title">
                What People say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>

          </Row>
        </Container>
      </section>  
       {/*  newsletter section start*/}
       <Newsletter/>

  </>
  )
}

export default Home
