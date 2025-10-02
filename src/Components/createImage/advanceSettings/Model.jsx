
import useImageContext from '../../../hooks/useImageContext';

function Model() {

const { availableModels , model, setModel} = useImageContext()
  
  return (
  <div>
  <label
    htmlFor="model"
    className="block text-sm font-medium text-zinc-700 mb-1"
  >
    Model
      </label>
      
  <select
        id="model"
        value={model}
        onChange={(e)=>setModel(e.target.value)}
    className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      >
        {
          availableModels.map((m) => (
            <option key={m} value={m} className="bg-zinc-900">
               {m.charAt(0).toUpperCase() + m.slice(1)} 
            </option>)
          )
        }
  </select>
</div>

  )
}

export default Model