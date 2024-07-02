import React, { useState } from 'react';
import useCountryName from './Components/useCountryName';
import './App.css';

function App() {
  const [iso, setIso] = useState('');
  const countryName = useCountryName(iso);

  const handleIso = (event) => {
    setIso(event.target.value.toUpperCase());
  };

  return (
    <div className="App min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Country Information Lookup
          </h2>
        </div>
        <input
          type="text"
          name="iso"
          value={iso}
          onChange={handleIso}
          placeholder="Type the ISO code"
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4"
        />
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          {countryName ? (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                {countryName.name.common}
              </h3>
              <p>
                <strong>Official Name:</strong> {countryName.name.official}
              </p>
              <p>
                <strong>Capital:</strong>{' '}
                {countryName.capital ? countryName.capital[0] : 'N/A'}
              </p>
              <p>
                <strong>Region:</strong> {countryName.region}
              </p>
              <p>
                <strong>Subregion:</strong> {countryName.subregion}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">
              Enter a valid ISO code to get the country name.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
