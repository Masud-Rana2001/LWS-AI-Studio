import React from "react";
import { ImageIcon ,Download  } from "lucide-react"; 

function EmptyState({type, title , text}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-md p-8">
      {type === 'empty-img' &&   <ImageIcon className="w-16 h-16 text-gray-400 mb-4" />}
      {type === 'empty-download' &&   <Download className="w-16 h-16 text-gray-400 mb-4" />}
    
      <h2 className="text-2xl font-semibold text-white">{title }</h2>
      <p className="text-gray-400 mt-2 max-w-md">
        {text}
      </p>
    </div>
  );
}

export default EmptyState;
