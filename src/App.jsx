import React from 'react';
import Navbar from "./components/Navbar.jsx"; // Assuming Navbar.jsx is in this path

function App() {
  return (
    <>
      {/* Main container: Full screen, relative for positioning video, overflow hidden for video bounds */}
      <div className="w-full h-screen flex flex-col text-white relative overflow-hidden">
        {/* Background Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline /* Important for mobile browsers to allow autoplay */
          className="absolute inset-0 w-full h-full object-cover z-[-1]" // Video stays in background
        >
          {/* Ensure '/back1.mp4' is correctly placed in your 'public' folder or accessible via URL */}
          <source src="/back5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional: Semi-transparent overlay to improve text readability over the video */}
        <div className="absolute inset-0 bg-black opacity-70 z-[-1]"></div> {/* Overlay also in background */}

        {/* Scrollable Content Area */}
        {/* - flex-grow: Takes available vertical space.
            - relative: Establishes a stacking context.
            - z-0: Ensures it's above the video/overlay (which are z-[-1]).
            - overflow-y-auto: Enables vertical scrolling ONLY for this div's content.
            - pb-24 (padding-bottom: 6rem or 96px): Prevents content from being hidden by the fixed Navbar.
                                                 Adjust this value based on your Navbar's height.
            - px-4 (padding-left/right: 1rem or 16px): Adds some horizontal padding for the content.
        */}
        <div className="flex-grow relative z-0 overflow-y-auto pb-28 pt-4 px-4"> {/* Added pt-4 for top padding */}
          <h1 className="text-4xl font-bold mb-4 text-center">Scrollable Content Area</h1>
          <p className="mb-4 text-lg text-center">This section will scroll, while the video background and navbar remain fixed.</p>

          {/* Example Content - Add more to demonstrate scrolling */}
          <div className="bg-white/20 p-6 rounded-lg shadow-xl mb-6 text-neutral-800">
            <h2 className="text-2xl font-semibold mb-2">Content Block 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="bg-teal-500/30 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-6 text-white">
            <h2 className="text-2xl font-semibold mb-2">Content Block 2</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This block has a different background to show contrast.</p>
            <div className="h-40"></div> {/* Spacer */}
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-xl mb-6 text-neutral-800">
            <h2 className="text-2xl font-semibold mb-2">Content Block 3</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="h-40"></div> {/* Spacer */}
          </div>
          
          <div className="bg-indigo-500/30 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-6 text-white">
            <h2 className="text-2xl font-semibold mb-2">Content Block 4</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <div className="h-40"></div> {/* Spacer */}
          </div>

           <div className="bg-white/20 p-6 rounded-lg shadow-xl mb-6 text-neutral-800">
            <h2 className="text-2xl font-semibold mb-2">Content Block 5 (Your Original Divs)</h2>
             <div className="bg-slate-400 w-full md:w-[300px] h-[100px] my-2 mx-auto">Original White Div 1 (modified for visibility)</div>
             <div className="bg-slate-400 w-full md:w-[300px] h-[100px] my-2 mx-auto">Original White Div 2 (modified for visibility)</div>
             <p>More content to ensure scrolling is very apparent...</p>
            <div className="h-40"></div> {/* Spacer */}
          </div>

          <div className="bg-pink-500/30 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-6 text-white">
            <h2 className="text-2xl font-semibold mb-2">Content Block 6</h2>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            <div className="h-40"></div> {/* Spacer */}
          </div>
          
          <p className="text-center font-semibold py-4">End of scrollable content.</p>

        </div>

        {/* Navbar: Fixed at the bottom, on top of everything (due to its own z-index and fixed positioning) */}
        <Navbar/>
      </div>
    </>
  );
}

export default App;
