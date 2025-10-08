import React from 'react';

const KnowledgeBox = ({ speed, imgSrc, title, description }) => (
    <div data-scroll data-scroll-speed={speed} className="relative flex h-auto w-full flex-col sm:w-[62vh]">
        <img src={imgSrc} alt={title} className="h-auto w-full rounded-2xl object-cover" />
        <div className="flex flex-col px-4 py-8">
            <h3 className="mb-5 text-xl font-thin uppercase tracking-[3px]">{title}</h3>
            <p className="font-thin leading-snug">{description}</p>
        </div>
    </div>
);

const Page6 = () => {
    return (
        <div id="page6" className="flex w-full flex-col px-4 md:px-[50px] text-white">
            <div id="page6-part1" className="relative mt-[20vh] py-1">
                <h1 className="text-14vh font-thin uppercase text-grey-text tracking-extra-wide">Knowledge</h1>
                <p className="pt-2 text-lg uppercase tracking-[5px] text-primary-yellow">What we use to deliver premium quality</p>
            </div>

            <div id="page6-part2" className="relative mt-16 flex flex-wrap justify-center gap-10 md:justify-between">
                <KnowledgeBox
                    speed={3}
                    imgSrc="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/65ac2d33ba1c9cb5be90f94f_Branding-Image-p-500.webp"
                    title="Branding"
                    description="Our obsession for creating unique and astonishing designs leads our clients to completely reshape and boost their image, generating more credibility and market authority."
                />
                <KnowledgeBox
                    speed={2}
                    imgSrc="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/65ac2d91925725fe2104ef56_Web-Image-p-500.webp"
                    title="Web"
                    description="We combine astonishing designs to the best practices of the web to develop 100% tailor made, functional and breath-taking websites."
                />
                <KnowledgeBox
                    imgSrc="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/65ac2d919a0af346ad05617f_SMKT-Image-p-500.webp"
                    title="SMKT"
                    description="We use technology and culture creation to combine sales and marketing. This data-driven approach unifies people and objectives, increasing the area's achievements."
                />
                 <KnowledgeBox
                    imgSrc="https://cdn.prod.website-files.com/659cd3c36e91b9ccf3bdbfa0/65ac2d91508e35dff80c36f7_Design-Studio-Image-p-500.webp"
                    title="Design Studio"
                    description="We have the best team to provide you with on-demand premium designs that helps your company to grow. On-demand or via subscription, it's your call!"
                />
            </div>
        </div>
    );
};

export default Page6;