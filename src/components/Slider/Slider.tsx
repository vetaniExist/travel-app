import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { storeExample } from "../../store.example";

const Slider = () => {
  const listOfImages:any = storeExample.map((country: any) => {
    const card = {
      original: country.countryImage,
      originalAlt: country.name,
    };
    return card;
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(listOfImages);
  }, [storeExample]);

  return (
      <div className='sliderContainer'>
        {images.length !== 0 ? <ImageGallery items={images} showThumbnails={false} autoPlay={true} /> : null}
      </div>
  );
};

export default Slider;
