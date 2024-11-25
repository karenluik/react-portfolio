import React from "react";

function PortfolioItem({title,url,image,stack}){
  return(
    <div className="border-2 border-stone-0000 rounded-md overflow-hidden ">
      <img src={image} alt="Project Snapshot" className="w-full h-36 md:h-48 object-cover curso-pointer project-img p-2"></img>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-5">{stack.map(item => (<span className="inline-block px-2 py-1 font-semibold border-2 border-stone-000 rounded-md">{item}</span> ))}</p>
        <a href={url} target="_blank"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Live Project</button></a>
      </div>
    </div>
    

  )
}

export default PortfolioItem;