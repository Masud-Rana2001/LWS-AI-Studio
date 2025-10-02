import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-48 animate-pulse">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="ml-3 text-gray-200 font-medium text-center">
        <p>
        Image is generating...
        </p>
        <p>
        Please wait 20-30 seconds.
        </p>
          </p>
    </div>
  );
}







