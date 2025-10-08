import React from 'react';

const Page4 = () => {
  return (
    <div id="page4" className="flex h-full w-full flex-col text-white">
      <div id="page4-part1" className="mt-[40vh] flex flex-col px-[50px] py-[30px]">
        <h1 className="text-13vh font-thin text-grey-text tracking-extra-wide">HIGHLIGHTS</h1>
        <p className="p-[10px] uppercase text-primary-yellow">you definitely need to check</p>
      </div>

      <div id="page4-part2" className="flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden object-cover px-[50px] py-[30px] text-white">
        <div id="box1" className="flex w-full flex-col">
          <img src="https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/668e37b71fd67c211119f95f_Mockup-01-p-800.jpg" alt="" className="h-[65vh] w-full rounded-2xl object-cover" />
          <div id="part2" className="mt-6 flex flex-col sm:flex-row items-start gap-4">
            <div id="box1hp" className="flex flex-col gap-4">
              <h3 className="text-xl font-thin uppercase tracking-[5px]">Clicksign</h3>
              <p className="font-extralight leading-[22px] max-w-md">Studio Yellow redefined Clicksign’s digital presence through a meticulously crafted, user-centric website that embodies their new brand identity and reinforces their market leadership.</p>
            </div>
            <div id="viewbutton" className="relative mt-4 sm:mt-0 sm:ml-auto flex h-12 w-48 items-center justify-center rounded-xl transition-all duration-100 hover:border-2 hover:border-golden-yellow hover:text-golden-yellow">
              <h4 className="relative flex items-center justify-center">
                <i className="ri-eye-fill mr-[5px] text-lg"></i>VIEW
              </h4>
            </div>
          </div>
        </div>

        <div data-scroll data-scroll-speed="2" id="box2" className="flex w-full flex-col">
          <img src="https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a9df6bb0aeafc81019a2bf_Video%20Thumb-p-800.webp" alt="" className="h-[65vh] w-full rounded-2xl object-cover" />
          <div id="part2" className="mt-6 flex flex-col sm:flex-row items-start gap-4">
            <div id="box2hp" className="flex flex-col gap-4">
              <h3 className="text-xl font-thin uppercase tracking-[5px]">Alpha</h3>
              <p className="font-extralight leading-[22px] max-w-md">Studio Yellow crafted a brand that amplifies Alpha's authority, mirroring their commitment to quality living spaces.</p>
            </div>
            <div id="viewbutton2" className="relative mt-4 sm:mt-0 sm:ml-auto flex h-12 w-40 items-center justify-center rounded-xl transition-all duration-100 hover:border-2 hover:border-golden-yellow hover:text-golden-yellow">
              <h4 className="relative flex items-center justify-center">
                <i className="ri-eye-fill mr-[5px] text-lg"></i>VIEW
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;