import { toast } from 'react-toastify';
import {useContext} from 'react';

import Loading from '../../Loading'
import useImageGenerator from '../../../hooks/useImageGenerator'
import downloader from '../../../utils/downloader'

import LocalStorageContext from '../../../context/localStorageContext'

function ImageCard({ imgUrl, index }) {
  
  const { isLoading } = useImageGenerator()
  
  
  const {downloaded,addToDownload } = useContext(LocalStorageContext)

  // Download Original Image
  const foundInDownload = downloaded.find(item => item.url === imgUrl);


  const handleDownload = (imgUrl) => {  
    if (!foundInDownload) {
      downloader(imgUrl, index);
      addToDownload(imgUrl)
      toast.success('Downloaded successfully ! ✨', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    }
  }



  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">



      <div onClick={()=>handleDownload(imgUrl)}
        className="absolute bottom-2 right-2  p-1 ">
        {
          foundInDownload ? (
                <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50"
              xmlSpace="preserve"
              width="24"
              height="24"
              fill="#000000"
              title="Downloaded"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle style={{ fill: "#25AE88" }} cx={25} cy={25} r={25} />{" "}
                <polyline
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10
                  }}
                  points=" 38,15 22,33 12,25 "
                />{" "}
              </g>
            </svg>
          ) :
            (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image-down-icon lucide-image-down"
        >
          <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
          <path d="m14 19 3 3v-5.5" />
          <path d="m17 22 3-3" />
          <circle cx={9} cy={9} r={2} />
            </svg>
            )
        }
      </div>
      
      {
        imgUrl ? (
        <img
            src={imgUrl}
            alt={imgUrl}
            className={`w-full h-48 object-cover transition-opacity duration-700 
              ${isLoading ? "opacity-0" : "opacity-100" }`}/>
        ) : (
           <div className="w-full h-48 flex items-center justify-center bg-white/70 rounded-xl">
          <Loading />
        </div> 
        )
      }
  
</div>

  )
}

export default ImageCard