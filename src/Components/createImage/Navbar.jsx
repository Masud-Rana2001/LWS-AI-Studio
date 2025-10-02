import React from 'react' 

import Logo from '../../assets/logo.svg'
function Navbar({navigate, handleNavigate}) {
  return (


      <header className="flex items-center mb-12 justify-between">
  <div className="flex items-center">
    <img src={Logo} className="h-10" />
  </div>
  <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
    <a
      onClick={()=>handleNavigate("create-image")}
      className={`hover:text-zinc-200 font-medium ${navigate === "create-image" && "text-zinc-200"}     cursor-pointer transition-all`}
    >
      Create Image
    </a>
        <a
          onClick={() => handleNavigate("download")}
          className={`hover:text-zinc-200 cursor-pointer transition-all  ${navigate === "download" && "text-zinc-200"} `}
    >
      Downloaded
    </a>
  </ul>
</header>


    
  )
}

export default Navbar