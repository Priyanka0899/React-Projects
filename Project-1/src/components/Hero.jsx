import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='hero'>
        <main className='hero container'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias voluptas cupiditate delectus quibusdam beatae tempora hic. Dolores, deserunt dicta.
                </p>
                <div className='hero-btn'>
                    <button className='btn'>Shop Now</button>
                    <button className='second-btn'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Available On</p>
                    <div className='brand-icons'>
                        <img src="/amazon.png" alt="amazon-logo"/>
                        <img src="/flipkart.png" alt="flipkart-logo"/>
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                    <img src="/shoe_image.png" alt="shoe-img"/>
            </div>
        </main> 
        </div>
    </>
  )
}

export default Hero
