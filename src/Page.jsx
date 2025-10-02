import {useState,useEffect} from 'react'
import { ImageGeneratorProvider } from './provider/ImageGeneratorProvider';
import Loading from './Components/Loading';
import Navbar from './Components/createImage/Navbar';
import Glow from './Components/createImage/Glow';
import PromtInput from './Components/createImage/PromtInput';
import AdanceedSettings from './Components/createImage/advanceSettings/AdanceedSettings';
import ImageParent from './Components/createImage/imageParent/ImageParent';
import LocalStorageProvider from './provider/LocalStorageProvider';
import Downloaded from './Components/download/Downloaded';
import CreateImage from './Components/createImage/CreateImage';
import WelcomeLogin from './Components/WelcomeLogin';


function Page() {
  const [navigate, setNavigate] = useState("create-image");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

    const [localStoragedName, setLocalStoragedName] = useState("");
  
    useEffect(() => {
      const storedName = localStorage.getItem("user-name");
      if (storedName) {
        setLocalStoragedName(storedName);
        setSubmitted(true)
      }
    }, []);

  const handleNavigate = (value) => {
    setNavigate(value)
  };

  return (

    <div >
      {(!submitted ) ?
        <WelcomeLogin name={name} setName={setName} submitted={submitted} setSubmitted={setSubmitted} />
      : (
          <div className="w-11/12 mx-auto py-5">
          <Navbar navigate={navigate} handleNavigate={ handleNavigate} />
           {navigate === "download" &&(<Downloaded />)}
       {navigate === "create-image" && (<CreateImage localStoragedName={localStoragedName}/>)}
          </div>
        )
      }
    
      </div>

  )
}

export default Page