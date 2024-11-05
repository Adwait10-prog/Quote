import React, { useState } from 'react';

const QVORequirements = () => {
  const [maleFemale, setMaleFemale] = useState('');

  const handleMaleFemaleChange = (e) => {
    setMaleFemale(e.target.value);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">QVO Requirements</h3>
      {/* <label className="block mb-2">Service Type</label> */}
      {/* <select className="w-full border p-2 rounded mb-4">
        <option>Voiceover</option>
        <option>Subtitling</option>
        <option>Translation</option>
      </select> */}
      {/* Additional fields for QVO */}

      {/* Male/Female radio button group */}
      <div className=" mb-4 p-4 border rounded bg-white shadow">
        {/* <h4 className="font-semibold mb-2">Gender Options</h4> */}
        <label className="block mb-2">
          <input
            type="radio"
            name="maleFemale"
            value="male"
            checked={maleFemale === 'male'}
            onChange={handleMaleFemaleChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="maleFemale"
            value="female"
            checked={maleFemale === 'female'}
            onChange={handleMaleFemaleChange}
            className="mr-2"
          />
          Female
        </label>
      </div>
    </div>
  );
};

export default QVORequirements;
