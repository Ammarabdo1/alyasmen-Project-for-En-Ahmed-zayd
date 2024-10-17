import React, { useState, useRef } from "react";
import styled from "styled-components";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

// Wrapper for the two images
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  z-index: ${props => props.mousePosition >= 10 ? '100' : '-1' } ;
   ${props => (props.mousePosition < 10 || props.serviceType != 'internal') && 'display: none;' }
`;

// First Image (Initial Image)
const FirstImage = styled.img`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: clip-path 0.1s ease-out;
  clip-path: ${(props) => props.clipPath};
`;

// Second Image (Hidden Initially)
const SecondImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Central Line (moves with mouse)
const CentralLine = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.left}px;
  width: 4px;
  height: 100%;
  background-color: white;
  pointer-events: none;
`;

// Draggable Icon (centered on the line)
const DragIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-46%, -50%);
  cursor: grab;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  pointer-events: auto;
`;

const ConvertImage = ({serviceType}) => {
  const [mousePosition, setMousePosition] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const imageWrapperRef = useRef(null);

  // Handle mouse down or touch start event to start dragging
  const handleStartDragging = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  // Handle mouse up or touch end event to stop dragging
  const handleStopDragging = () => {
    setIsDragging(false);
  };

  // Handle mouse move or touch move event to update position while dragging
  const handleMove = (e) => {
    if (isDragging && imageWrapperRef.current) {
      const rect = imageWrapperRef.current.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      if (x >= 0 && x <= rect.width) {
        setMousePosition(x);
      }
    }
  };

  return (
    <ImageWrapper
      ref={imageWrapperRef}
      onMouseMove={handleMove}
      onMouseUp={handleStopDragging}
      onMouseLeave={handleStopDragging}
      onTouchMove={handleMove} // Touch support
      onTouchEnd={handleStopDragging}
      mousePosition={mousePosition}
      serviceType={serviceType}
    >
      <SecondImage
        src={`images/convertImages/${serviceType}.jpg`}
        alt="Second Image"
      />
      <FirstImage
        src={`images/convertImages/${serviceType}-empty.jpg`}
        alt="First Image"
        clipPath={`polygon(0 0, ${mousePosition}px 0, ${mousePosition}px 100%, 0 100%)`}
      />

      <CentralLine left={mousePosition} />

      <DragIcon
        style={{ left: `${mousePosition}px` }}
        onMouseDown={handleStartDragging}
        onTouchStart={handleStartDragging} // Touch support
      >
        <SwapHorizIcon />
      </DragIcon>
    </ImageWrapper>
  );
};

export default ConvertImage;
