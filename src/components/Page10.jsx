import React from 'react';

const TestimonialCard = ({ name, role, quote }) => (
    <div className="flex flex-col items-center justify-evenly gap-4 text-center text-white">
        <h3 className="text-xl font-normal uppercase tracking-[5px]">{name}</h3>
        <p className="text-sm">{role}</p>
        <div id="rating" className="text-xl tracking-[8px] text-yellow-400">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
        </div>
        <p className="mt-2 w-[40vh] max-w-xs leading-snug">{quote}</p>
    </div>
);

const Page10 = () => {
    return (
        <div id="page10" className="mt-10 flex h-full w-full flex-wrap items-center justify-evenly gap-8 py-[30vh]">
            <TestimonialCard name="Carlos" role="CEO @ Derma Cuore" quote="They do what they promise, and the results are visible." />
            <TestimonialCard name="Izabella" role="Marketing @ Clicksign" quote="We were impressed with the quality of the deliverables." />
            <TestimonialCard name="Eliandro" role="CEO @ GrooveTech" quote="Studio Yellow's willingness to understand and dedicate itself to deliver a broad strategy were the reasons we choose its services." />
            <TestimonialCard name="Carol Motta" role="Project Manager @ Adventures Inc." quote="Yellow was always by our side bringing intelligence, ideas, a sense of urgency, competence, top-notch execution, and a lot of friendliness." />
        </div>
    );
};

export default Page10;