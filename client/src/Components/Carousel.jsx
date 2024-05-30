import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./css/carousel.css"
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw25a01563/homepage/HeroBanner/fod-bannerd01.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd2ca5678/homepage/HeroBanner/colour-charms-desktop.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4c8c9bfc/homepage/HeroBanner/vday-desktop.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw69625865/homepage/HeroBanner/rivaah-rb-desktop.jpg" onDragStart={handleDragStart} role="presentation" />,

];

const Carousel = () => {
  return (
    <div className="container">
        
    <AliceCarousel mouseTracking items={items} 
    animationDuration={4000}
    animationEasingFunction="ease-in"
    renderNextButton={true}
    
    autoPlay
    infinite
    
    />
    </div>
  );
}





export default Carousel;