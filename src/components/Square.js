// import React from 'react';
// import '../styles/Square.css';

// const Square = ({ imageUrl, text }) => {
//   return (
//     <div className="square">
//       <img src={imageUrl} alt="Square" className="square-image" />
//       <p className="square-text">{text}</p>
//     </div>
//   );
// };

// export default Square;

import React from 'react';
import '../styles/Square.css';

const Square = ({ color, imageUrl, buttonText }) => {
  return (
    <div className="square">
      <img src={imageUrl} alt="Person" className="square-image" />
      
      <button className="square-button">{buttonText}</button>
    </div>
  );
};

export default Square;
