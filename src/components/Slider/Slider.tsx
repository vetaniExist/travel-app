import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

const lang = 'en';

interface SliderInfo {
  country: any,
  isMainPage: boolean
}

const Slider = ({country, isMainPage}: SliderInfo) => {
  let listOfImages:any = [];
  if (isMainPage) {
    listOfImages = country.map((country:any) => {
      return {
        original: country.countryImage,
        originalAlt: country.name,
        description: country.name
      }
    });
  } else {
    if (country.sights) {
      listOfImages = country.sights.map((sight:any) => {
        return {
          original: sight.image,
          thumbnail: sight.preview.source ? sight.preview.source : sight.image,
          thumbnailTitle: sight.name,
          originalAlt: sight.name,
          description: `${sight.name} - ${sight.description[0][lang]}`
        }
      });
    }
    
  }

  return (
      <div className='sliderContainer'>
        {listOfImages.length !== 0 ? isMainPage ? <ImageGallery items={listOfImages} showThumbnails={false} autoPlay={true} lazyLoad={true} /> : <ImageGallery items={listOfImages} showThumbnails={true} autoPlay={true} lazyLoad={true} /> : null}
      </div>
  );
};

export default Slider;
