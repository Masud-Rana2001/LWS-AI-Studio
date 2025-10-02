
import useImageContext from '../../../hooks/useImageContext'


function RatioPresets( {isActive,setActive } ) {

  
  const { setAspectRatio } = useImageContext();

  const handleRatio = (ratio) => {

    setAspectRatio(ratio);
    setActive(ratio)
  };

    const ratios = [
    { label: '1:1', value: '1:1' },
    { label: '16:9', value: '16:9' },
    { label: '4:3', value: '4:3' },
    { label: '3:2', value: '3:2' },
  ];

  return (
    <div>
  <label className="block text-sm font-medium text-zinc-700 mb-1">
    Aspect Ratio Presets
  </label>
      <div className="flex flex-wrap gap-2" >
        {
          ratios.map(( ratio) => (
            
        <button key={ratio.value} onClick={()=>handleRatio(ratio.value)}
          className={`  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors border  border-gray-400 cursor-pointer 
          ${isActive === ratio.value ? "bg-zinc-800":"bg-zinc-900/10"}
        `}>
          {ratio.label}
        </button>
          ))
        }
        

  </div>
</div>

  )
}

export default RatioPresets