import React from 'react';

const SolutionItem = ({ title, description }) => (
    <div className="flex flex-col md:flex-row items-center p-5">
        <h3 id="nameH3" className="text-5xl lg:text-[5rem] font-thin uppercase tracking-solution">{title}</h3>
        <p id="nameP" className="mt-4 md:mt-0 md:ml-8 flex max-w-[45vh] items-center justify-center text-light-grey leading-snug text-center md:text-left">
            {description}
        </p>
    </div>
);

const Page9 = () => {
    return (
        <div id="page9" className="flex w-full flex-col text-white">
            <div id="page9-part1" className="relative mt-[40vh] px-[45px] py-1">
                <h1 className="text-13vh font-thin uppercase text-grey-text tracking-extra-wide">Solutions</h1>
                <p className="pt-2 text-sm uppercase tracking-wider text-primary-yellow">packaged solutions for your business</p>
            </div>

            <div id="page9-part2" className="relative mt-[15vh] flex flex-col px-[35px]">
                <SolutionItem title="Yncubator" description="For bold start-ups that want to kick-off playing smarter and bigger." />
                <SolutionItem title="Design" description="For businesses in need of a reliable and high standard on-demand creative studio." />
                <SolutionItem title="Revamp" description="For businesses that want to boost their image, increase credibility and market authority." />
                <SolutionItem title="Growth" description="For businesses that want to deep dive and assume leadership in their market." />
            </div>
        </div>
    );
};

export default Page9;