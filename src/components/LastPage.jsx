import React from 'react';

const FooterColumn = ({ title, links }) => (
    <div className="flex flex-col leading-loose">
        <h3 id="optionH" className="mb-5 text-xl font-medium uppercase tracking-[3px] text-black">{title}</h3>
        {links.map((link, index) => (
            <h6 key={index} id="optionsubH" className="cursor-pointer text-base font-light text-black hover:opacity-70">{link}</h6>
        ))}
    </div>
);

const LastPage = () => {
    return (
        <div id="lastpage" className="relative flex w-full flex-col items-center justify-center">
            <div id="part1" className="mt-[50vh] w-full px-[50px]">
                <img src="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/659dfe58597e4a0397e9d154_Studio%20Yellow.svg" alt="Studio Yellow" className="h-full w-full object-cover" />
            </div>

            <div id="part2" className="mt-[-1%] flex h-[65vh] w-full flex-col md:flex-row items-center justify-between bg-white px-[50px]">
                <img src="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/659dfefedd853adc780a1382_SY%20Creative%20Inc..svg" alt="SY Creative Inc" className="relative bg-white mb-8 md:mb-0" />
                <div id="footeroptions" className="flex flex-wrap justify-center gap-12 md:gap-24 bg-white">
                    <FooterColumn title="menu" links={['Home', 'Work', 'Solutions', 'Articles', 'Contact']} />
                    <FooterColumn title="people" links={['Work With Us', 'Privacy Policy']} />
                    <FooterColumn title="social" links={['Instagram', 'LinkedIn', 'YouTube']} />
                </div>
            </div>
        </div>
    );
};

export default LastPage;