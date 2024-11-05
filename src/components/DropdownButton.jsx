// // src/components/DropdownButton.js
// import React, { useState } from 'react';

// const DropdownButton = ({ label }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-600 px-4 py-2 rounded">
//         {label}
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
//           {/* Add dropdown content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownButton;


// src/components/Navbar.js
import React from 'react';
import DropdownButton from './DropdownButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-2xl">Dubbing & Voice Over Service</h1>
      <div className="flex space-x-4">
        <DropdownButton label="AI Dubbing Requirement" />
        <DropdownButton label="Client Quote Requirement" />
      </div>
    </nav>
  );
};

export default Navbar;
