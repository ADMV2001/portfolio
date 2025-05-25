
import React from 'react';
import Navbar from "./components/Navbar.jsx"; // Assuming Navbar.jsx is in this path
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <>
      {/* Main container: Full screen, relative for positioning video, overflow hidden for video bounds */}
      <div className="w-full h-screen flex flex-col text-white relative overflow-hidden font-[karla] ">
        <video
          autoPlay
          loop
          muted
          playsInline /* Important for mobile browsers to allow autoplay */
          className="absolute inset-0 w-full h-full object-cover z-[-1]" // Video stays in background
        >
          <source src="/back5.mp4" type="video/mp4" />
          Your browser does not support the video tag. hhhh
        </video>

        {/* Optional: Semi-transparent overlay to improve text readability over the video */}
        <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div> {/* Overlay also in background */}

        {/* Scrollable Content Area */}
        {/* - flex-grow: Takes available vertical space.
            - relative: Establishes a stacking context.
            - z-0: Ensures it's above the video/overlay (which are z-[-1]).
            - overflow-y-auto: Enables vertical scrolling ONLY for this div's content.
            - pb-24 (padding-bottom: 6rem or 96px): Prevents content from being hidden by the fixed Navbar.
                                                 Adjust this value based on your Navbar's height.
            - px-4 (padding-left/right: 1rem or 16px): Adds some horizontal padding for the content.
        */}
        
        <div className="flex items-center justify-center flex-grow z-0 overflow-y-auto pb-24 px-4 pt-10">
          
  {/*
    This is the main content container.
    - flex flex-col: Stacks children vertically on mobile.
    - md:flex-row: Stacks children horizontally from medium screens up.
    - w-full: Takes full width on mobile.
    - md:w-[70%]: Takes 70% width on desktop.
    - items-center: Centers children horizontally (when stacked vertically on mobile).
    - md:items-start: Aligns children to the start (top) on desktop.
    - justify-center md:justify-between: Centers children on mobile, then spreads them on desktop.
    - gap-8 md:gap-16: Adds spacing between the image and text sections.
  */}
  <div className=" bg-white/0 w-full md:w-[70%] pt-120  md:pt-15 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-16">

    {/* Image Column: Appears on top on mobile, on the right on desktop */}
    {/*
      - order-first: Makes this div appear first (on top) on mobile.
      - md:order-last: Makes this div appear last (on the right) on desktop.
      - flex justify-center: Centers the image horizontally within its own container on mobile.
    */}
    <div className="flex justify-center order-first md:order-last">
      <div className="bg-white/5 p-5 rounded-4xl"> {/* Retained your custom rounded-4xl */}
        {/*
          - w-full: Image takes full width of its parent container.
          - max-w-[300px]: Limits image width to 300px on small screens.
          - md:w-[400px]: Sets a fixed width for medium screens and up (adjust as needed).
          - h-auto: Maintains aspect ratio.
        */}
        <img src="./minulabg.png" alt="minula" className="w-full max-w-[380px] md:w-[400px] h-auto" />
      </div>
    </div>

    {/* Text Column: Appears below image on mobile, on the left on desktop */}
    {/*
      - order-last: Makes this div appear last (below the image) on mobile.
      - md:order-first: Makes this div appear first (on the left) on desktop.
      - items-center: Centers text horizontally within its column on mobile.
      - md:items-start: Aligns text to the start (left) of its column on desktop.
      - text-center: Centers text content horizontally on mobile.
      - md:text-left: Aligns text content to the left on desktop.
    */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left order-last md:order-first">
      <h1 className="text-[25px] text-gray-200 font-extrabold">Hi there🖐 I'm</h1>
      <p className="text-[55px] font-extrabold text-green-400">Minula Vihanga</p>
      {/* Assuming you want the Karla font here, add font-karla class if not applied globally */}

      <h1 className="text-[25px] text-gray-200 font-extrabold mt-4 md:mt-0">I'm a</h1>
      <h1 className="text-[32px] font-semibold text-green-300 mt-[-5px]">Full Stack Developer</h1>
      {/*
        - max-w-prose: Optimal readability width for paragraphs. Replace `w-135`.
        - text-gray-200: Ensures readability on your background.
      */}
      <p className="max-w-prose mt-5 text-gray-200">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto modi natus aspernatur! Tenetur in, accusantium libero expedita ipsa
        error, qui veniam vero laboriosam quae illo? Ut incidunt sapiente perspiciatis earum.
      </p>

      {/*
        - w-fit: Button width fits content. Replaced `w-50`.
        - px-6: Added more horizontal padding for better button appearance.
      */}
      <button className="w-fit h-12 px-6 py-1 bg-green-500 rounded-2xl text-white text-[18px] font-bold mt-5 cursor-pointer hover:bg-green-600 transition-colors">Download Resume</button>
      <div className="flex gap-4">
        <FaGithubSquare className="w-8 h-8 mt-4 text-gray-200 cursor-pointer hover:text-white transition-colors"/>
        <FaLinkedin className="w-8 h-8 mt-4 text-gray-200 cursor-pointer hover:text-blue-400 transition-colors"/>
      </div>
    </div>

  </div>
</div>

        <Navbar/>
      </div>
    </>
  );
}

export default App;
