import {useState} from 'react';

import HeightInput from "./HeightInput";
import Model from "./Model";
import RatioPresets from "./RatioPresets";
import SeedInput from "./SeedInput";
import WidthInput from "./WidthInput";

const AdanceedSettings = () => {
  const [isActive, setActive] = useState('1:1');
  return (
    <div className='border border-zinc-700/70 mb-6 rounded-lg p-4'>
       <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Advanced Settings</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Model Selection  */}
        <Model />
        {/* Seed Input : Auto Generated, readonly for user  */}
        <SeedInput />
        {/* Width Input  */}
        <WidthInput isActive={isActive} setActive={setActive } />
        {/* Height Input */}
        <HeightInput isActive={isActive} setActive={setActive }  />
        {/* Aspect Ratio Presets */}
        <RatioPresets isActive={isActive} setActive={setActive } />
      </div>
      
    </div>
  );
};

export default AdanceedSettings;