import React, { useState } from "react";
import orange1 from "../icons/orange1.png";
import orange2 from "../icons/orange2.png";
import orange3 from "../icons/orange3.png";
import orange4 from "../icons/orange4.png";
import orange5 from "../icons/orange5.png";

function IconCarousel() {
  const [currentImage, setCurrentImage] = useState(orange1);

  const images = [orange1, orange2, orange3, orange4, orange5];

  const handleClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div className="icon-carousel">
      <img
        src={currentImage}
        alt={`orange${images.indexOf(currentImage) + 1}`}
        onClick={handleClick}
      />
    </div>
  );
}

export default IconCarousel;
