import React from "react";
import Statusbar from "@/components/statusbar";

function box() {
  return (
    <div className="bg-white w-[450px] h-[550px] rounded-xl shadow-sm">
      <div className="p-8">
        <Statusbar />
      </div>
    </div>
  );
}

export default box;
