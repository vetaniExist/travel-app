import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Rating from "./Rating/Rating";

const lang = "en";

interface SliderInfo {
  country: any,
  isMainPage: boolean
}

const Slider = ({ country, isMainPage }: SliderInfo) => {
  const [selectedImage, setSelectedImage] = useState(0);
  let listOfImages:any = [];
  if (isMainPage) {
    listOfImages = country.map((country2:any) => ({
      original: country2.countryImage,
      originalAlt: country2.name,
      description: country2.name,
    }));
  } else if (country.sights) {
    listOfImages = country.sights.map((sight:any) => ({
      original: sight.image,
      thumbnail: sight.preview.source ? sight.preview.source : sight.image,
      thumbnailTitle: sight.name,
      originalAlt: sight.name,
      description: `${sight.name} - ${sight.description[0][lang]}`,
    }));
  }

  const showIndex = (idx: any) => {
    setSelectedImage(idx);
  };

  return (
      <div className='sliderContainer'>
        {!isMainPage && listOfImages.length && <Rating sightName={listOfImages[selectedImage].originalAlt} />}
        {listOfImages.length !== 0 ? isMainPage
          ? <ImageGallery items={listOfImages}
                          showThumbnails={false}
                          autoPlay={true}
                          lazyLoad={true}
                          slideInterval="7000"/>
          : <ImageGallery items={listOfImages}
                          showThumbnails={true}
                          autoPlay={true}
                          lazyLoad={true}
                          slideInterval="7000"
                          onSlide={showIndex}/> : null}
      </div>
  );
};

export default Slider;
