import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import toTranslate from "../Translate";

interface SliderInfo {
  country: any,
  isMainPage: boolean,
  lang: string
}

const Slider = ({country, isMainPage, lang}: SliderInfo) => {
  let listOfImages:any = [];
  if (isMainPage) {
    listOfImages = country.map((country:any) => {
      return {
        original: toTranslate(country.countryImage, lang),
        originalAlt: toTranslate(country.name, lang),
        description:  toTranslate(country.name, lang)
      }
    });
  } else {
    if (country.sights) {
      listOfImages = country.sights.map((sight:any) => {
        return {
          original: sight.image,
          thumbnail: sight.preview.source ? sight.preview.source : sight.image,
          thumbnailTitle: toTranslate(sight.name, lang),
          originalAlt: toTranslate(sight.name, lang),
          description: `${toTranslate(sight.name, lang)} - ${toTranslate(sight.description[0]["en"], lang)}`,
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
