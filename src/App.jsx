import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Projects from './components/projects.jsx';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    // Outer container:
    // - min-h-screen: Ensures the app takes at least the full viewport height.
    // - flex flex-col: Stacks children vertically.
    // - bg-black: Provides a fallback background color if the video doesn't load.
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navbar: Stays at the top */}
      <Navbar/>

      {/* Main content area: */}
      {/* - flex-grow: Allows this div to take up all available vertical space after the Navbar. */}
      {/* - relative: Essential for positioning the video and overlay absolutely within it. */}
      {/* - overflow-hidden: Ensures video/overlay don't spill outside this container. */}
      {/* - text-white font-[karla]: Applies global text styling for this section. */}
      <div className="flex-grow relative overflow-hidden text-white font-[karla]">
        {/* Video Background: */}
        {/* - absolute inset-0: Stretches across the entire parent (main content area). */}
        {/* - w-full h-full object-cover: Ensures it covers the area without distortion. */}
        {/* - z-0: Places it at the lowest layer (behind other content). */}
        <video
          autoPlay
          loop
          muted
          playsInline /* Important for mobile browsers to allow autoplay */
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/back5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay: */}
        {/* - absolute inset-0: Stretches across the entire parent. */}
        {/* - bg-black opacity-20: Creates a semi-transparent black overlay. */}
        {/* - z-10: Places it above the video but below the main content. */}
        <div className="fixed inset-0 bg-black opacity-40 z-10"></div>

        {/* Scrollable Content Wrapper: */}
        {/* This is the key div that holds all your foreground content. */}
        {/* - relative z-20: Brings it above the video and overlay. */}
        {/* - w-full h-full: Makes it fill the entire main content area. */}
        {/* - overflow-y-auto: Enables vertical scrolling ONLY if content overflows. */}
        {/* - pb-24 px-4 pt-10: Provides padding around the content. */}
        {/* - flex flex-col items-center: Stacks content vertically and centers it horizontally. */}
        {/* Removed justify-center to allow content to start from the top and scroll naturally. */}
        <div className="relative z-20 w-full h-full overflow-y-auto pb-24 px-4 pt-10 flex flex-col items-center">

          {/* Main content block (image and text sections): */}
          {/* - w-full md:w-[70%]: Responsive width. */}
          {/* - flex flex-col md:flex-row: Stacks vertically on mobile, horizontally on desktop. */}
          {/* - items-center md:items-start: Centers items on mobile, aligns to start on desktop. */}
          {/* - justify-center md:justify-between: Centers items on mobile, spreads them on desktop. */}
          {/* - gap-8 md:gap-16: Spacing between image and text. */}
          {/* Removed pt-70 and md:pt-15 from here, as the outer scrollable div handles padding. */}
          <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-16">

            {/* Image Section: */}
            {/* Added mt-10 to provide space above the image */}
            <div className="flex justify-center order-first md:order-last mt-20 md:mt-30">
              {/* Corrected gradient usage: from-blue-400/10 to-black */}
              <img src="./minulabg.png" alt="minula" className="w-full max-w-[380px] md:w-[400px] h-auto bg-gradient-to-b from-blue-400/10 to-black rounded-full" />
            </div>

            {/* Text Content Section: */}
            <div className="flex flex-col items-center md:mt-30 md:items-start text-center md:text-left order-last md:order-first">
              <h1 className="text-[25px] text-gray-200 font-extrabold">Hi there🖐 I'm</h1>
              <p className="text-[45px] md:text-[55px] font-extrabold text-blue-500">Minula Vihanga</p>
              <h1 className="text-[25px] text-gray-200 font-extrabold mt-4 md:mt-0">I'm a</h1>
              <h1 className="text-[32px] font-semibold text-blue-400 mt-[-5px]">Full Stack Developer</h1>

              <p className="max-w-prose mt-3 text-gray-200 text-[18px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto modi natus aspernatur! Tenetur in, accusantium libero expedita ipsa
                error, qui veniam vero laboriosam quae illo? Ut incidunt sapiente perspiciatis earum.
              </p>

              <button className="w-fit h-12 px-4 py-1 bg-blue-500 rounded-2xl text-white text-[16px] font-semibold mt-5 cursor-pointer hover:bg-blue-700 transition-colors">Download Resume</button>
              <div className="flex gap-4">
                {/* External links using <a> tags with target="_blank" and rel="noopener noreferrer" */}
                <a href="https://github.com/ADMV2001" target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare className="w-8 h-8 mt-4 text-gray-200 cursor-pointer hover:text-white transition-colors"/>
                </a>
                <a href="https://www.linkedin.com/in/minula-vihanga-9031b4293/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-8 h-8 mt-4 text-gray-200 cursor-pointer hover:text-blue-400 transition-colors"/>
                </a>
              </div>
            </div>
          </div>

          <Projects/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
