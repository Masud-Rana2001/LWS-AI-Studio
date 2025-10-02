
import Dice from '../../../assets/images/dice.png'
import useImageContext from '../../../hooks/useImageContext';


function SeedInput() {
  
  const {seed, setSeed} = useImageContext()
   // প্রতিটি ছবির জন্য ইউনিক seed
  const handleGenerateSeed = () => {
     
       const seedvalue = Math.floor(Math.random() * 1000000000);
        setSeed(seedvalue)
     
  };


  

  return (
    
    <div>
  <label
    htmlFor="seed"
    className="block text-sm font-medium text-zinc-700 mb-1"
  >
        Seed (for reproducible results)
          (Your seed is{' '}
        <span className='text-gray-300'>
           {seed}
        </span>)
  </label>
  <div className="flex items-center border border-zinc-700/70 rounded-md bg-zinc-900/10">
  <input
    required
    id="seed"
    className="w-full  px-3 py-2 outline-none"
    placeholder="Roll the dice and generate a random seed"
  />
  <img
  
  onClick={handleGenerateSeed}
   src={Dice} alt="dice" className=" bg-transparent w-8 h-8  border-gray-500 rounded-full hover:rotate-180 duration-300 mr-2 cursor-pointer" />
</div>

</div>

  )
}

export default SeedInput