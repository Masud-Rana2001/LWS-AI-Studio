import React from 'react'
import useImageContext from '../../../hooks/useImageContext'

function WidthInput( {setActive } ) {
  const { width, setWidth, setHeight } = useImageContext();


  const handleWidth = (e) => {
    const value = e.target.value;
    if (value > 0 || value <= 1280) {
      setHeight(e.target.value)
      setWidth(e.target.value);
      setActive('')
    }
    if (value < 0 || value > 1280) {
      setHeight(1024)
      setWidth(1024)
    }
  };

  return (
    <div>
  <label
    htmlFor="width"
    className="block text-sm font-medium text-zinc-700 mb-1"
  >
    Width
  </label>
  <input
    type="number"
    id="width"
    value={width}
    onChange={handleWidth}
    
    className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  />
</div>

  )
}

export default WidthInput