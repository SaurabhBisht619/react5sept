import React, { useState } from "react";
import "./carousel.css";
import Portals from "../../Common/Portals/Portals";
function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="sliderContainer">
      <button className="prevBtn" onClick={prevSlide}>
        <i class="fa-solid fa-backward"></i> Previous
      </button>

      <div className="slider">
        {images.map((image, index) => (
          <div
            style={{
              transform: `translateX(${-400 * currentIndex}px)`,
              transition: "1s",
            }}
            className="image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              key={1}
              className="sliderImage"
              onClick={openModal}
              src={image.url}
              alt=""
            />
            <button className="expandBtn" onClick={openModal}>
              click here
            </button>

            {isHovered && <div className="hover-message">{"Here We will write the description for the image"}</div>}
          </div>
        ))}
      </div>

      <button className="nextBtn" onClick={nextSlide}>
        Next <i class="fa-solid fa-forward"></i>
      </button>

      {isModalOpen && (
        <Portals>
          <img className="portalImage" src={images[currentIndex].url} alt="" />
          <button className="closeBtn" onClick={closeModal}>
            Close Modal
          </button>
        </Portals>
      )}
    </div>
  );
}

export default Carousel;
