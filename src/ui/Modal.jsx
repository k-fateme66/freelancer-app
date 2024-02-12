import React, { useEffect, useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import useOutSideClick from "../hooks/useOutSideClick";

function Modal({ open, title, onClose, children }) {
  const ref = useOutSideClick(onClose);
  return (
    open && (
      <div
        className="backdrop-blur-sm fixed top-0 left-0 
      w-full h-full bg-secondary-800 bg-opacity-30 z-50"
      >
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          rounded-lg bg-secondary-0 p-4 shadow-lg transition-all 
          duration-500 ease-out w-[calc(100vw-1rem)] md:max-w-lg max-h-[calc(100vh-2rem)] 
          overflow-y-auto"
        >
          <div className="border-b border-secondary-300 py-4  flex items-center justify-between">
            <p className=" font-bold text-base text-secondary-700">{title}</p>
            <button>
              <HiMiniXMark onClick={() => onClose()} className="w-5 h-5" />
            </button>
          </div>
          <div className="py-4">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
