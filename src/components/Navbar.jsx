// // src/components/Navbar.js
// import React from 'react';
// import DropdownButton from './DropdownButton';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 text-white flex justify-between">
//       <h1 className="text-2xl">Dubbing & Voice Over Service</h1>
//       <div className="flex space-x-4">
//         <DropdownButton label="AI Dubbing Requirement" />
//         <DropdownButton label="Client Quote Requirement" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 text-white flex justify-between">
//       <h1 className="text-2xl">Dubbing & Voice Over Service</h1>
//       <div className="flex space-x-4">
//         <Link to="/ai-dubbing-requirement">
//           <button className="bg-gray-600 px-4 py-2 rounded">AI Dubbing Requirement</button>
//         </Link>
//         <Link to="/client-quote-requirement">
//           <button className="bg-gray-600 px-4 py-2 rounded">Client Quote Requirement</button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-2xl">Dubbing & Voice Over Service</h1>
      <div className="flex space-x-4">
        {/* Added Home link */}
        <Link to="/">
          <button className="bg-gray-600 px-4 py-2 rounded">Home</button>
        </Link>
        <Link to="/ai-dubbing-requirement">
          <button className="bg-gray-600 px-4 py-2 rounded">AI Dubbing Requirement</button>
        </Link>
        <Link to="/client-quote-requirement">
          <button className="bg-gray-600 px-4 py-2 rounded">Client Quote Requirement</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
