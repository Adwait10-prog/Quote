// src/components/ClientQuoteRequirement.jsx
// import React from 'react';

// const ClientQuoteRequirement = () => {
//   return (
//     <>
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Client Quote Requirement</h2>
//       {/* Add more specific requirements or forms here */}
//       <p>Form fields for Client Quote Requirement will go here.</p>
//     </div>

    

//     </>
//   );
// };

// export default ClientQuoteRequirement;

//?

// src/components/ClientQuoteRequirement.jsx



import React, { useState } from 'react';

const CheckboxGroup = ({ checkboxes, handleCheckboxChange }) => {
  return (
    <div className="mb-4 p-4 border rounded bg-white shadow">

      {/* service Type */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Service Type</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>AI Dubbing</option>
          <option>Voiceover</option>
          <option>Translation</option>
        </select>
      </div>

      {/* Ai VOice Over */}
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
      {/* ... other checkboxes ... */}
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

const CaptionTypeToggle = ({ captionType, setCaptionType }) => {
  return (
    <div className="flex items-center mb-4 p-4 border rounded bg-white shadow">
      <label className="mr-2 font-semibold">Caption Type:</label>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={captionType === 'open'}
          onChange={() => setCaptionType((prev) => (prev === 'open' ? 'closed' : 'open'))}
          className="sr-only"
        />
        <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${captionType === 'open' ? 'bg-blue-600' : 'bg-gray-200'}`}>
          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${captionType === 'open' ? 'translate-x-full' : 'border border-gray-300'}`}></div>
        </div>
      </label>
      <span className="ml-2">{captionType === 'open' ? 'Open Captions' : 'Closed Captions'}</span>
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
  const [captionType, setCaptionType] = useState('closed');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

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
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
      
      <CheckboxGroup
        checkboxes={checkboxes}
        handleCheckboxChange={handleCheckboxChange}
      />
      
      <RadioGroup
        openClosed={openClosed}
        handleOpenClosedChange={handleOpenClosedChange}
      />

      <CaptionTypeToggle captionType={captionType} setCaptionType={setCaptionType} />

   
      
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Language Pair</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>English to Spanish</option>
          <option>English to French</option>
          <option>English to German</option>
        </select>
      </div>

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
      
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Target Language Dialect</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>Voice Match Needed</option>
          <option>Lip-Match Needed</option>
          <option>Premix Files Shared by client</option>
        </select>
      </div>      
    </div>
  );
};

const ClientQuoteRequirement = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Client Quote Requirement</h2>
      <p>Form fields for Client Quote Requirement will go here.</p>
      
      {/* Dubbing Requirements Section */}
      <DubbingRequirements />
    </div>
  );
};

export default ClientQuoteRequirement;
