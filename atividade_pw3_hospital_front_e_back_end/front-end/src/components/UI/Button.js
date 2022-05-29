import React from 'react';

const Button = ({ btntype, children, btnStyles, onClick, type }) => {
   return (
      <button
         type={type}
         className={[`btn ${btntype} ${btnStyles}`]}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
