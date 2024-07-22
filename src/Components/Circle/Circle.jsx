import React, { useEffect, useRef } from 'react';
import './Circle.css';

function Circle() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    let gravity = 1;
    let velocity = 0;
    let position = 0;
    const maxHeight = window.innerHeight - circle.offsetHeight;

    function applyGravity() {
      velocity += gravity;
      position += velocity;

      if (position >= maxHeight) {
        position = maxHeight;
        velocity = -velocity * 0.7; // Bounce effect
      } else if (position <= 0) {
        position = 0;
        velocity = 0;
      }

      circle.style.top = position + 'px';
      requestAnimationFrame(applyGravity);
    }

    applyGravity();

    const handleClick = (event) => {
      const circleRect = circle.getBoundingClientRect();
      const circleX = circleRect.left + circleRect.width / 2;
      const circleY = circleRect.top + circleRect.height / 2;

      for (let i = 0; i < 10; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 50 + 10;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        spark.style.setProperty('--spark-x', `${x}px`);
        spark.style.setProperty('--spark-y', `${y}px`);

        spark.style.left = `${circleX}px`;
        spark.style.top = `${circleY}px`;
        document.body.appendChild(spark);

        // Remove the spark after the animation
        setTimeout(() => {
          spark.remove();
        }, 500);
      }
    };

    circle.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      circle.removeEventListener('click', handleClick);
    };
  }, []);

  return <div className="parent"> <div id="circle" ref={circleRef}></div></div>

 
}

export default Circle;
