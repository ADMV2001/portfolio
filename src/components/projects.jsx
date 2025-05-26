import React from 'react'
import { IoLogoGithub } from "react-icons/io";

function Projects() {
  return (
    <div className="w-[95%] h-auto md:w-[70%] flex flex-col mt-31 p-3">
      <h1 className="text-[28px] text-blue-100 font-extrabold mb-3">My Projects</h1>
      <p className="mb-4">I have worked on various range of projects and fell free to watch and refer them below.</p>

      <div className="w-full gap-3 flex flex-row flex-wrap justify-center md:justify-start items-center mt-5 p-1">
        
        {/* Project 1 */}
        <div className="w-100 md:w-80 bg-blue-300 rounded-xl flex flex-col">
            <img src="./zenpath post.gif" alt="zenpath" className="rounded-t-lg h-70 object-cover" />
            
            <div className="bg-white text-black p-4 rounded-b-xl">
                <h1 className="font-semibold">ZenPath</h1>
                <p className="text-[13px] text-gray-500">
                    An online platform where people can come and find solution for their mental issues by consulting a qualified therapist and check their depression state if they want.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <h1 className="px-2 py-1 rounded-full w-fit bg-gray-300 text-[12px] text-gray-700">ReactJs</h1>
                    <h1 className="px-2 py-1 rounded-full w-fit bg-gray-300 text-[12px] text-gray-700">NodeJs</h1>
                    <h1 className="px-2 py-1 rounded-full w-fit bg-gray-300 text-[12px] text-gray-700">ExpressJs</h1>
                    <h1 className="px-2 py-1 rounded-full w-fit bg-green-300 text-[12px] text-gray-700">MongoDB</h1>
                    <h1 className="px-2 py-1 rounded-full w-fit bg-blue-300 text-[12px] text-gray-700">TailwindCSS</h1>
                </div>

                <div className="flex gap-2">
                    <a href="https://github.com/ADMV2001/Zenpath-Frontend" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-2 bg-black rounded-full mt-4 px-3 pb-1 w-fit">
                        <h1 className="mt-[7px] font-semibold text-gray-400 text-[13px]">FRONTEND</h1>
                        
                            <IoLogoGithub className="w-6 h-6 mt-1 text-white cursor-pointer hover:scale-110 transition-transform duration-300"/>
                        
                    </div>
                    </a>
                    <a href="https://github.com/ADMV2001/Zenpath-Backend" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-2 bg-black rounded-full mt-4 px-3 pb-1 w-fit">
                        <h1 className="mt-[7px] font-semibold text-gray-400 text-[13px]">BACKEND</h1>
                        
                            <IoLogoGithub className="w-6 h-6 mt-1 text-white cursor-pointer hover:scale-110 transition-transform duration-300"/>
                        
                    </div>
                    </a>
                </div>
            </div>
        </div>

        
      </div>

    </div>
  )
}

export default Projects
