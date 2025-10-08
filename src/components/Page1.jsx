import React from 'react';
import mainLogo from '../assets/main-logo.svg';

const Page1 = () => {
  return (
    <div id="page1" className="relative flex min-h-screen w-full items-center justify-center">
      <div id="bg-video" className="absolute inset-x-0 top-0 z-10 mx-auto flex h-screen max-w-[1920px] aspect-video w-full items-center justify-center overflow-hidden object-cover">
        <img src={mainLogo} alt="Y logo" className="absolute z-10"/>
        <video autoPlay loop muted src="/bg-video.mp4" className="absolute inset-[-100%] -z-50 m-auto h-full w-full object-cover"></video>
      </div>
    </div>
  );
};

export default Page1;