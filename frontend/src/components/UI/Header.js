import React, { useState } from "react";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex items-center mb-10 pr-10 justify-between px-10">
      <div>Logo</div>
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
          U
        </div>
        {isHover && (
          <div className="mt-2 border border-red-400 p-2 rounded">Logout</div>
        )}
      </div>
    </div>
  );
}
