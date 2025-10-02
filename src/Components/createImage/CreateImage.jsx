import { useState, useEffect } from 'react'
import Glow from './Glow'
import PromtInput from './PromtInput'
import AdanceedSettings from './advanceSettings/AdanceedSettings'
import ImageParent from './imageParent/ImageParent'

function CreateImage() {
   const [localStoredName, setLocalStoredName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("user-name");
    if (storedName) {
      setLocalStoredName(storedName);
    }
  }, []);


  return (
    <main className="relative z-10">
      <h2 className="text-4xl font-bold mb-8">Let's create a masterpiece, {localStoredName || "Guest" }! <span className="text-2xl">👋</span>
      </h2>
      <Glow />
        <PromtInput />
        <AdanceedSettings />
       <ImageParent />
    </main>
  )
}

export default CreateImage