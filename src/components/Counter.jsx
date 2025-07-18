import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
