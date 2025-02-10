import React from 'react';


const Button = () => {
    return (
      <button
        className="relative font-mono font-medium py-4 px-6 border border-black bg-btn-bg-color-hover overflow-hidden group"
      >
        <span className="relative block overflow-hidden text-black">
          <span className="relative block transition-all group-hover:text-black group-hover:moveUpInitial group-hover:moveUpEnd">
            Button Text
          </span>
        </span>
        <span className="absolute inset-0 bg-btn-bg-color transform origin-right scale-x-0 group-hover:scale-x-100 transition-all ease-out duration-300"></span>
      </button>
    );
  };
  
  export default Button;