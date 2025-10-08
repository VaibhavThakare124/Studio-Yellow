// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div
      id="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark text-white"
    >
      <div className="flex flex-col items-center gap-4">
        <img id="loaderLogo" src="/y-logo.svg" alt="Y logo" className="w-28 sm:w-36" />
        <div className="uppercase tracking-widest text-sm text-gray-300">Studio Yellow</div>
      </div>
    </div>
  );
}
