import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css';
const slideImages = [
  { id: 1, image: '/img/MmcfN6.webp' },
  { id: 2, image: '/img/donuts.jpg' },
  { id: 3, image: '/img/5fe43a4d72434.jpg' },
  { id: 4, image: '/img/cacke.jpg' },
  { id: 5, image: '/img/Cookies-Portrait-HD.jpg' },
  { id: 6, image: '/img/chocolateCake.jpg' },
  { id: 7, image: '/img/Tasty-Donuts-and-Coffee.jpg' },
  { id: 8, image: '/img/coconut-pudding-.jpg' }
];
export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className='sliderImg' style={{ 'backgroundImage': `url(${slideImage.image})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>

  )
}