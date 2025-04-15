import React from 'react';
import { ReactTyped } from 'react-typed';

const AnimatedText = ({ sentence }) => {
  return (
    <h2 className="text-anime">
      <ReactTyped
        startWhenVisible
        strings={[sentence]}  // The sentence to be typed
        typeSpeed={100}        // Speed of typing (in ms)
        backSpeed={50}         // Speed of backspacing (in ms)
        backDelay={1000}       // Delay before starting backspacing
        startDelay={500}       // Delay before starting the typing
        loop={false}           // Set to true if you want it to loop
        showCursor={true}      // Show the blinking cursor
        cursorChar="."         // Cursor character
      />
    </h2>
  );
};

export default AnimatedText;
