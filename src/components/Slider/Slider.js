import React from "react";
import { Carousel } from 'antd';
import { IS_MOBILE } from '../../utils/Constants';
import Slider1 from "../../assets/slider1.jpeg";
import Slider2 from "../../assets/slider2.jpeg";
import Slider3 from "../../assets/slider3.jpeg";
import './Slider.css'



const Slider = ({ data, isLoading }) => {
  return (
    <Carousel
      style={{ backgroundColor: '#fff' }}
    >
      <div>
        <img src={Slider2} height={(IS_MOBILE) ? "200px" :"440px"} width="100%" />
      </div>
      <div>
        <img src={Slider3} height={(IS_MOBILE) ? "200px" :"440px"}  width="100%" />
      </div>
      <div>
        <img src={Slider1} height={(IS_MOBILE) ? "200px" :"440px"}  width="100%" />
      </div>
    </Carousel>
  );
};



export default Slider;
