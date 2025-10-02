import React from 'react'

function DownloadImageCard({url}) {
  return (
        <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
          <div className="absolute bottom-2 right-2  p-1 ">
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
          </div>
          <img
            src={url}
            alt="Anime character in kimono"
            className="w-full h-48 object-cover"
          />
        </div>
  )
}

export default DownloadImageCard