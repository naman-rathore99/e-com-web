import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
 
const Homeslider = () => {
  return (
   
    <AwesomeSlider animation="cubeAnimation">
    <div data-src="/public/banner_1.jpg" />
    <div data-src="/public/banner_2.jpg" />
    <div data-src="/public/banner_3.jpg" />
  </AwesomeSlider>
  )
}

export default Homeslider