import React from 'react';

const Page8 = () => {
    return (
        <div id="page8" className="flex w-full flex-col text-white">
            <div id="page8-part1" className="relative mt-[40vh] px-[45px] py-1">
                <h1 className="text-13vh font-thin uppercase text-grey-text tracking-extra-wide">Global Presence</h1>
                <p className="pt-2 text-sm uppercase tracking-wider text-primary-yellow">Brazil / Canada / USA / UK</p>
            </div>
            <div id="page8-part2" className="mt-[10vh] flex items-center justify-center object-cover">
                <img src="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/659de4c0513530b87a8a9acc_World%20Map.svg" alt="World Map" />
            </div>
        </div>
    );
};

export default Page8;