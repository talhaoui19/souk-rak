import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 bg-[#ffffff] bg-opacity-60 flex justify-center pt-24 z-50">
      <div className="w-7 h-7 border-2 border-[var(--main-color)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
