import React from 'react'
import './Newsletter.css'
import { Container } from 'reactstrap'
const Newsletter = () => {
  return (
   <section className='newsletter'>
    <Container>
     
        
                <div className="newsletter__content">
                    <h2>Subscribe to get info about Beautiful travel destination</h2>
                    <div className="newsletter__input">
                        <input type="email"  placeholder='Enter Your Mail id'/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque odio delectus adipisci animi perferendis.</p>
                </div>
          
         
       
    </Container>
   </section>
  )
}

export default Newsletter
