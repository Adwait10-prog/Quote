// import React, { useState } from 'react'

// const Switcher1 = () => {
//   const [isChecked, setIsChecked] = useState(false)

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked)
//   }

//   return (
//     <>
//       <label className='flex cursor-pointer select-none items-center'>
//         <div className='relative'>
//           <input
//             type='checkbox'
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//             className='sr-only'
//           />
//           <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
//           <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
//         </div>
//       </label>
//     </>
//   )
// }

// export default Switcher1
import React, { useState } from 'react';

const Switcher1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className={`block h-8 w-14 rounded-full transition-colors ${isChecked ? 'bg-blue-600' : 'bg-[#E5E7EB]'}`}></div>
        <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform ${isChecked ? 'translate-x-6' : ''}`}></div>
      </div>
      <span className='ml-2 text-sm font-medium text-gray-900'>{isChecked ? 'Yes' : 'No'}</span>
    </label>
  );
};

export default Switcher1;
