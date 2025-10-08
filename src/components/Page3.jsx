import React from 'react';

const Page3 = () => {
  return (
    <div id="page3" className="relative flex h-full w-full items-center justify-center py-16">
      <div id="play" className="absolute z-10 h-full w-full bg-transparent"></div>
      <video autoPlay loop muted data-scroll data-scroll-speed="2" src="/bg-video2.mp4" className="relative h-[42vw] w-[75vw] rounded-2xl border border-white object-cover"></video>
    </div>
  );
};

export default Page3;