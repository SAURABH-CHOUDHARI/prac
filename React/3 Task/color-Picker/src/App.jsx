import React, { useState, useRef } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const colorInputRef = useRef(null);

  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleButtonClick = () => {
    colorInputRef.current.click();
  };

  return (
    <div
      className="flex items-center justify-center flex-col h-screen w-screen"
      style={{ backgroundColor: bgColor }}
    >
      <input
        type="color"
        className="hidden"
        ref={colorInputRef}
        onChange={handleColorChange}
        value={bgColor}
      />
      <button
        onClick={handleButtonClick}
        className="px-5 py-2 bg-red-500 active:scale-95 duration-1000 shadow-md rounded-xl text-white hover:bg-red-600 transition-colors"
      >
        Change Color
      </button>
    </div>
  );
};

export default App;