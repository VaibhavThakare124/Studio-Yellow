import React from 'react';

const Page5 = () => {
    return (
        <div id="page5" className="relative flex h-full w-full items-center justify-center overflow-hidden py-[50vh] text-white">
            <div id="image1" className="absolute inset-y-1/2 left-0 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2">
                <img src="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/659dd69f3712afcd19df21f5_Y%20Big.svg" alt="" className="h-full w-full" />
            </div>

            <div id="para" className="z-10 text-center">
                <div id="paraP1" className="text-xl uppercase leading-[3.5vh] tracking-[5px]">
                    <p>It's not growth that makes you look big.</p>
                    <p>It's looking big that fuels your growth.</p>
                </div>
                <div id="paraP2" className="mt-4 text-base uppercase leading-[3.5vh] tracking-[3px] text-quote-yellow">
                    <p>Vinicius Leandrini Magalhaes / CEO, Founder & Creative Director</p>
                </div>
            </div>

            <div id="image2" className="absolute inset-y-1/2 right-0 h-[70vh] w-[70vh] translate-x-1/2 -translate-y-1/2">
                <img src="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/659dd69f3712afcd19df21f5_Y%20Big.svg" alt="" className="h-full w-full" />
            </div>
        </div>
    );
};

export default Page5;