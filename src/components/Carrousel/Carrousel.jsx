import React from "react";
import { useState } from "react";
import leftArrow from "../../asset/left_arrow.png";
import rightArrow from "../../asset/right_arrow.png";

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //flèche de gauche
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  //flèche de droite
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderContainer">
      <div className="slider">
        <img
          key={slides.id}
          src={slides[currentIndex]}
          alt={slides.title}
          className="slider_image"
        />
      </div>
      <img
        src={slides.length === 1 ? "" : leftArrow}
        alt={slides.length === 1 ? "" : "flèche gauche"}
        className="slider_leftArrow"
        onClick={goToPrevious}
      />
      <div className={slides.length === 1 ? "slider_hidden" : "slider_number"}>
        {currentIndex + 1}/{slides.length}
      </div>
      <img
        src={slides.length === 1 ? "" : rightArrow}
        alt={slides.length === 1 ? "" : "flèche droite"}
        className="slider_rightArrow"
        onClick={goToNext}
      />
    </div>
  );
}

export default Carrousel;
