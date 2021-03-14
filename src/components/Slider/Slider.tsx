import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { storeExample } from '../../store.example';
  
const Slider = () => {
  const listOfImages = storeExample.map((country: any) => {
    let card = {
      original: country.mainImage,
      originalAlt: country.title,
      sizes: '100% 70vh '
    }
    return card;
  });

  const [images, setImages] = useState(listOfImages);

  return (
      <div className='sliderContainer'>
        {images.length !== 0 ? <ImageGallery items={images} showThumbnails={false} autoPlay={true} /> : null}
      </div>
  );
};

export default Slider;
