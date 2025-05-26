import React from 'react'

function Navbar() {
  return (
    // --- Outermost container: Make it fixed to the bottom ---
    // Added: fixed bottom-0 left-0 right-0 (or inset-x-0) w-full to ensure it spans the viewport width
    // Added: z-50 to ensure it's above most other content (adjust as needed)
    // The inner div will then be centered within this fixed container.
    <div className="fixed top-0 left-0 right-0 w-full flex justify-center z-50 pb-4"> {/* pb-4 is optional, adds some padding from the very bottom edge */}
      
      {/* --- Main Navbar Container --- */}
      {/* Mobile: Takes up 80% width initially, smaller height, less padding, smaller gap */}
      {/* Medium screens and up: Adjusts width as defined */}
      {/* Removed mx-auto from here as the parent div now handles centering */}
      <div className="w-[94%] sm:w-[94%] md:w-[94%] lg:w-[94%] xl:w-[94%] h-[80px] sm:h-[70px] md:h-[80px] border-b-[1px] border-blue-400 backdrop-blur-3xl flex justify-center items-center gap-2 sm:gap-2 md:gap-2 lg:gap-3 shadow-lg p-1 sm:p-2 px-4">
        <div className="hidden md:hidden lg:block md:absolute left-48 text-blue-300 text-[30px] font-bold ">Portfolio</div>
        {/* --- Projects Icon --- */}
        {/* Mobile: Smaller width, padding, image size, text size */}
        {/* Medium screens and up: Gradually increases size */}
        {/* Adjusted w-[65px] to w-full for better flex distribution if text below icons vary in length, then control size via parent's gap and item's aspect or fixed width */}
        {/* Reverted to fixed widths for consistency with your design */}
        <div className="flex md:flex md:absolute right-48 gap-2">
        <div className="opacity-100 z-10 flex flex-col justify-center items-center bg-white/40 p-1 px-2 sm:p-2 sm:px-3 rounded-lg sm:rounded-xl w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] cursor-pointer hover:bg-gradient-to-r from-blue-600 to-[#00b4d8] hover:scale-108 transition-transform duration-300">
          <img src="projects1.png" alt="Projects" className="opacity-100 z-10 w-[25px] sm:w-[22px] md:w-[25px]" />
          <h1 className="text-white text-[10px] sm:text-[9px] md:text-[10px] mt-[4px] sm:mt-[4px] font-semibold text-center">Projects</h1>
        </div>

        {/* --- Skills Icon --- */}
        <div className="opacity-100 z-10 flex flex-col justify-center items-center bg-white/40 p-1 px-2 sm:p-2 sm:px-3 rounded-lg sm:rounded-xl w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] cursor-pointer hover:bg-gradient-to-r from-blue-600 to-[#00b4d8] hover:scale-108 transition-transform duration-300">
          <img src="skills1.png" alt="Skills" className="opacity-100 z-10 w-[25px] sm:w-[22px] md:w-[25px]" />
          <h1 className="text-white text-[10px] sm:text-[9px] md:text-[10px] mt-[4px] sm:mt-[4px] font-semibold text-center">Skills</h1>
        </div>

        {/* --- Chatbot Icon (Central Icon) --- */}
        {/* Mobile: Smaller overall size, image size */}
        {/* Medium screens and up: Gradually increases size */}
        {/* Adjusted width and height to better contain the image if it was overflowing too much */}
        <div className="opacity-100 z-10 flex flex-col justify-center items-center bg-white/40 px-1 rounded-xl w-[60px] h-[60px] sm:w-[60px] sm:h-[55px] md:w-[65px] md:h-[60px] cursor-pointer hover:scale-115 transition-transform duration-300">
          <img src="chatbot4.png" alt="Chatbot" className="w-[45px] sm:w-[75px] md:w-[50px] mt-1" /> {/* Adjusted image size to better fit new container dimensions */}
        </div>

        {/* --- Education Icon --- */}
        <div className="opacity-100 z-10 flex flex-col justify-center items-center bg-white/40 p-1 px-2 sm:p-2 sm:px-3 rounded-lg sm:rounded-xl w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] cursor-pointer hover:hover:bg-gradient-to-r from-blue-600 to-[#00b4d8] hover:scale-108 transition-transform duration-300">
          <img src="education1.png" alt="Education" className="opacity-100 z-10 w-[25px] sm:w-[22px] md:w-[25px]" />
          <h1 className="text-white text-[10px] sm:text-[9px] md:text-[10px] mt-[4px] sm:mt-[4px] font-semibold text-center">Education</h1>
        </div>

        {/* --- Contact Icon --- */}
        <div className="opacity-100 z-10 flex flex-col justify-center items-center bg-white/40 p-1 px-2 sm:p-2 sm:px-3 rounded-lg sm:rounded-xl w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] cursor-pointer hover:hover:bg-gradient-to-r from-blue-600 to-[#00b4d8] hover:scale-108 transition-transform duration-300">
          <img src="contact1.png" alt="Contact" className="opacity-100 z-10 w-[25px] sm:w-[22px] md:w-[25px]" />
          <h1 className="text-white text-[10px] sm:text-[9px] md:text-[10px] mt-[3px] sm:mt-[4px] font-semibold text-center">Contact</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar