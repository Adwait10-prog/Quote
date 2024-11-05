// // src/components/DubbingRequirements.js
// import React from 'react';

// const DubbingRequirements = () => {
//   return (
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
//       {/* Form fields for Dubbing requirements */}
//       <label className="block mb-2">Service Type</label>
//       <select className="w-full border p-2 rounded mb-4">
//         <option>Dubbing</option>
//         <option>Voiceover</option>
//         <option>Translation</option>
//       </select>
//       <label className="block mb-2">Language Pair</label>
//       <select className="w-full border p-2 rounded mb-4">
//         <option>English to Spanish</option>
//         <option>English to French</option>
//         <option>English to German</option>
//       </select>
//       {/* Other fields for Dubbing Requirements */}
//     </div>
//   );
// };

// export default DubbingRequirements;


// src/components/DubbingRequirements.js
// import React from 'react';

// const DubbingRequirements = () => {
//   return (
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
//       {/* Form fields for Dubbing requirements */}
//       <label className="block mb-2">Service Type</label>
//       <select className="w-full border p-2 rounded mb-4">
//         <option>Dubbing</option>
//         <option>Voiceover</option>
//         <option>Translation</option>
//       </select>
//       <label className="block mb-2">Language Pair</label>
//       <select className="w-full border p-2 rounded mb-4">
//         <option>English to Spanish</option>
//         <option>English to French</option>
//         <option>English to German</option>
//       </select>
//       {/* Other fields for Dubbing Requirements */}
//     </div>
//   );
// };

// export default DubbingRequirements;


// import React, { useState } from 'react';

// const DubbingRequirements = () => {
//   const [checkboxes, setCheckboxes] = useState({
//     aiVoiceover: false,
//     voiceMatch: false,
//     lipMatch: false,
//     premixFiles: false,
//     meFiles: false,
//     soundBalancing: false,
//   });

//   const [openClosed, setOpenClosed] = useState('');

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckboxes((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleOpenClosedChange = (e) => {
//     setOpenClosed(e.target.value);
//   };



//   return (
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
//       <div className="mb-4">
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             name="aiVoiceover"
//             checked={checkboxes.aiVoiceover}
//             onChange={handleCheckboxChange}
//             className="mr-2"
//           />
//           AI Voiceover
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             name="voiceMatch"
//             checked={checkboxes.voiceMatch}
//             onChange={handleCheckboxChange}
//             className="mr-2"
//           />
//           Voice Match Needed
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             name="lipMatch"
//             checked={checkboxes.lipMatch}
//             onChange={handleCheckboxChange}
//             className="mr-2"
//           />
//           Lip Match Needed
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             name="premixFiles"
//             checked={checkboxes.premixFiles}
//             onChange={handleCheckboxChange}
//             className="mr-2"
//           />
//           Premix Files shared by client
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             name="meFiles"
//             checked={checkboxes.meFiles}
//             onChange={handleCheckboxChange}
//             className="mr-2"
//           />
//           M&E Files shared by client
//         </label>  
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             name="soundBalancing"
//             checked={checkboxes.soundBalancing}
//             onChange={handleCheckboxChange}
//             className="mr-2"
//           />
//           Sound Balancing needed
//         </label>
//       </div>
      
//     {/* Open/Closed radio button group */}
//     <div className="mb-4">
//         {/* <h4 className="font-semibold mb-2">Open/Closed Options</h4> */}
//         <label className="block mb-2">
//           <input
//             type="radio"
//             name="openClosed"
//             value="open"
//             checked={openClosed === 'open'}
//             onChange={handleOpenClosedChange}
//             className="mr-2"
//           />
//           Open
//         </label>
//         <label className="block mb-2">
//           <input
//             type="radio"
//             name="openClosed"
//             value="closed"
//             checked={openClosed === 'closed'}
//             onChange={handleOpenClosedChange}
//             className="mr-2"
//           />
//           Closed
//         </label>
//       </div>

//       {/* Service Type */}
//       <label className="block mb-2">Service Type</label>
//       <select className="w-full border p-2 rounded mb-4">
//         <option>Dubbing</option>
//         <option>Voiceover</option>
//         <option>Translation</option>
//       </select>
//       <label className="block mb-2">Language Pair</label>
//       <select className="w-full border p-2 rounded mb-4">
//         <option>English to Spanish</option>
//         <option>English to French</option>
//         <option>English to German</option>
//       </select>
      
      


      
//       {/* Other fields for Dubbing Requirements */}
//     </div>
//   );
// };

// export default DubbingRequirements;

import React, { useState } from 'react';
import Switcher1 from './Switcher1';
import QvoRqquriment_Non_Ai_Dubbing from './QvoRqquriment_Non_Ai_Dubbing';
import QVORequirements from './QVORequirements';

const CheckboxGroup = ({ checkboxes, handleCheckboxChange }) => {
  <div className="mb-4 p-4 border rounded bg-white shadow">
  <label className="block mb-2">Target Language Dialect</label>

  {/* Voice Match Needed Toggle */}
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
    />
    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300">
      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full peer-checked:bg-blue-600"></div>
    </div>
    <span className="ms-3 text-sm font-medium text-gray-900">Voice Match Needed</span>
  </label>

  {/* Lip-Match Needed Toggle */}
  <label className="inline-flex items-center cursor-pointer mt-2">
    <input
      type="checkbox"
      className="sr-only peer"
    />
    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300">
      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full peer-checked:bg-blue-600"></div>
    </div>
    <span className="ms-3 text-sm font-medium text-gray-900">Lip-Match Needed</span>
  </label>

  {/* Premix Files Shared by Client Toggle */}
  <label className="inline-flex items-center cursor-pointer mt-2">
    <input
      type="checkbox"
      className="sr-only peer"
    />
    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300">
      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full peer-checked:bg-blue-600"></div>
    </div>
    <span className="ms-3 text-sm font-medium text-gray-900">Premix Files Shared by Client</span>
  </label>
</div>

  return (
    <div className="mb-4 p-4 border rounded bg-white shadow">
      <h4 className="font-semibold mb-2">Checkbox Options</h4>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="aiVoiceover"
          checked={checkboxes.aiVoiceover}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        AI Voiceover
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="voiceMatch"
          checked={checkboxes.voiceMatch}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        Voice Match Needed
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="lipMatch"
          checked={checkboxes.lipMatch}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        Lip Match Needed
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="premixFiles"
          checked={checkboxes.premixFiles}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        Premix Files shared by client
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="meFiles"
          checked={checkboxes.meFiles}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        M&E Files shared by client
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="soundBalancing"
          checked={checkboxes.soundBalancing}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        Sound Balancing needed
      </label>
    </div>
  );
};

const RadioGroup = ({ openClosed, handleOpenClosedChange }) => {
  return (
    <div className="mb-4 p-4 border rounded bg-white shadow">
      <h4 className="font-semibold mb-2">Open/Closed Options</h4>
      <label className="block mb-2">
        <input
          type="radio"
          name="openClosed"
          value="open"
          checked={openClosed === 'open'}
          onChange={handleOpenClosedChange}
          className="mr-2"
        />
        Open
      </label>
      <label className="block mb-2">
        <input
          type="radio"
          name="openClosed"
          value="closed"
          checked={openClosed === 'closed'}
          onChange={handleOpenClosedChange}
          className="mr-2"
        />
        Closed
      </label>
    </div>
  );
};

const DubbingRequirements = () => {
  const [checkboxes, setCheckboxes] = useState({
    aiVoiceover: false,
    voiceMatch: false,
    lipMatch: false,
    premixFiles: false,
    meFiles: false,
    soundBalancing: false,
  });

  const [openClosed, setOpenClosed] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [minutes, setMinutes] = useState(''); // State for minutes
  const [seconds, setSeconds] = useState(''); // State for seconds

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleOpenClosedChange = (e) => {
    setOpenClosed(e.target.value);
  };



  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  
  return (
    <>
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
      
      {/* Checkbox Group Section */}
      <CheckboxGroup
        checkboxes={checkboxes}
        handleCheckboxChange={handleCheckboxChange}
      />
      
      {/* Radio Group Section */}
      <RadioGroup
        openClosed={openClosed}
        handleOpenClosedChange={handleOpenClosedChange}
      />

      {/* Service Type */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Service Type</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>AI Dubbing</option>
          <option>Voiceover</option>
          <option>Translation</option>
        </select>
      </div>
      
      {/* Language Pair */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Language Pair</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>English to Spanish</option>
          <option>English to French</option>
          <option>English to German</option>
        </select>
      </div>
      <QVORequirements />
      {/* Minutes and Seconds Input */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2 text-sm font-medium text-gray-900">Duration:</label>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="minutes-input" className="block mb-1">Minutes:</label>
            <input 
              type="number" 
              id="minutes-input" 
              value={minutes}
              onChange={handleMinutesChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
          <div className="flex-1">
            <label htmlFor="seconds-input" className="block mb-1">Seconds:</label>
            <input 
              type="number" 
              id="seconds-input" 
              value={seconds}
              onChange={handleSecondsChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
        </div>
      </div>
      
      
          {/* Target Language */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Target Language Dialect</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>Mexican Spanish</option>
          <option>Canadian French</option>
          <option>Premix Files Shared by client</option>
        </select>
      </div>      

    {/* voice match lip match button */}
    <div className="mb-4 p-4 border rounded bg-white shadow">
  <div className="flex items-center mb-2">
    <label className="mr-2 text-sm font-medium text-gray-900">Voice Match Needed</label>
    <div className="flex-1">
      <Switcher1 />
    </div>
  </div>
  
  <div className="flex items-center mb-2">
    <label className="mr-2 text-sm font-medium text-gray-900">Lip Match Needed</label>
    <div className="flex-1">
      <Switcher1 />
    </div>
  </div>
  
  <div className="flex items-center">
    <label className="mr-2 text-sm font-medium text-gray-900">Premix Files Shared by Client</label>
    <div className="flex-1">
      <Switcher1 />
    </div>
  </div>
</div>

      {/* Deliverable Type */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Language Pair</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>High-Res</option>
   
        </select>
      </div>
    </div>
      
      <QvoRqquriment_Non_Ai_Dubbing/>
    </>
  );
};

export default DubbingRequirements;
