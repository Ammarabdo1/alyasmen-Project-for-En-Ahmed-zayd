import React, { useState, useEffect, useRef } from "react";

const Media = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Track whether the interval should run
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility state based on the component's visibility
        setIsVisible(entry.isIntersecting);
        setIsRunning(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current); // Start observing the component
    }

    // Clean up the observer on component unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []); // Run once on component mount

  useEffect(() => {
    let interval;

    if (isRunning) {
      // Start the interval only if isRunning is true
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 300) {
            setIsRunning(false); // Stop the interval when count exceeds 300
            return prevCount;
          }
          return prevCount + 1; // Increment the counter
        });
      }, 10); // 10 ms interval for fast counting
    }

    if (!isVisible) {
      setCount(0); // Reset the count if the component is not visible
    }

    // Clean up the interval when isRunning becomes false or on component unmount
    return () => clearInterval(interval);
  }, [isRunning, isVisible]); // Dependency on both isRunning and isVisible

  return (
    <div ref={componentRef} style={{ fontSize: "24px", textAlign: "center", marginTop: "20px" }}>
      <h2>Social media</h2>
      <p>{count}</p> {/* Display the current count */}
    </div>
  );
};

export default Media;
