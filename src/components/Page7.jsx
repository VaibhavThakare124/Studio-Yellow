import React from 'react';

const logos = [
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a091021daee31d0cc60282_62556e6828c21b4766e41b60_TNF.webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/666297553b4035e3f6178141_Clicksign-p-500.webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a0910249e83c7f810e3265_62556efdab664a64f9143a69_Cruzeiro-do-Sul-Virtaul.webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a091013fe16039727b076c_63a351f3ae122e8589613117_2Future%2520(1).webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a091025e8303fd69254331_61fb427e38cc015d0cd7a1a1_Brains.webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a09104d51b4e27af3e21cf_6199a34faf38fe2bba45b74b_biolab.webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a5ed4c6ea3b09b1fe4da2e_Novartis.webp",
  "https://cdn.prod.website-files.com/659dcf2bb625d80830cd6e4f/65a09102059fbccf71484bc1_61fb4270e4a153164a277fc7_Aromazo.webp"
];

const Page7 = () => {
    return (
        <div id="page7" className="flex w-full flex-col text-white">
            <div id="page7-part1" className="relative mt-[40vh] px-[45px] py-1">
                <h1 className="text-13vh font-thin uppercase text-grey-text tracking-extra-wide">Trusted by big players</h1>
                <p className="pt-2 text-sm uppercase tracking-wider text-primary-yellow">Since 2013 Helping great brands to achieve their goals</p>
            </div>

            <div id="page7-part2" className="relative h-full w-full overflow-hidden leading-snug">
                <div id="line1" className="mt-[15vh] flex w-max gap-5 px-[5vh]">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt={`logo ${index}`} className="h-[23vh] w-[23vh] rounded-xl object-cover" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page7;