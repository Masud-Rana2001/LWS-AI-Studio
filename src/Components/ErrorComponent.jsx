import React from "react";

function ErrorComponent({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-gradient-to-br from-[#1a0b2e] to-[#0f0f0f] rounded-2xl 
    shadow-2xl border border-gray-400 p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-100 mt-2">Oops! Something went wrong</h2>
      <p className="text-gray-100 mt-2">{message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
       🔄️ Try Again
      </button>
    </div>
  );
}

export default ErrorComponent;
