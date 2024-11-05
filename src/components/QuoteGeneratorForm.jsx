import React, { useState } from 'react';
import DubbingRequirements from './DubbingRequirements';

const QuoteGeneratorForm = () => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Quote generated with duration:', minutes, 'minutes', seconds, 'seconds');
  };

  return (
    <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2>
      <DubbingRequirements />

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Service Type</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>QVO Dubbing</option>
        </select>
      </div>

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
      
      <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
        Generate Quote
      </button>
    </form>
  );
};

export default QuoteGeneratorForm;
