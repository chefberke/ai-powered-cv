import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function statusbar() {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 w-24 h-3 rounded-full"></div>
        <div className="bg-gray-200 w-24 h-3 rounded-full"></div>
        <div className="bg-gray-200 w-24 h-3 rounded-full"></div>
        <div className="bg-gray-200 w-24 h-3 rounded-full"></div>
      </div>
      <div className="mt-3">
        <h2 className="text-sm text-black flex items-center gap-1">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
            25% of magic
          </span>
          completed
          <PiStarFourFill className="text-black" />
        </h2>
      </div>
    </div>
  );
}

export default statusbar;
