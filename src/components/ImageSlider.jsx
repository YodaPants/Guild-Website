import React from "react";
import { ImageSliderData } from "./ImageSliderData";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

export const ImageSlider = () => {
  return (
    <div className="flex relative items-center h-screen overflow-hidden">
      <button className="flex absolute my-auto ml-6 focus:outline-none ">
        <IoIosArrowDropleftCircle className="text-6xl text-steel-200 transform hover:scale-125 duration-500 hover:text-steel-400"/>
      </button>
      <button className="flex absolute my-auto right-0 mr-6 focus:outline-none ">
        <IoIosArrowDroprightCircle className="text-6xl text-steel-200 transform hover:scale-125 duration-500 hover:text-steel-400"/>
      </button>
      <div className="flex">
        {ImageSliderData.map((image, index) => {
          return <img src={image.image} alt={index} className=" w-screen" />;
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
