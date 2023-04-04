import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Indicatior = ({ prevSlide, nextSlide, slide }) => {
  return (
    <>
      <div className="flex justify-between max-w-[90%] lg:max-w-[70%] mx-auto mt-[3rem] mb-[1rem]">
        <h2 className="text-3xl font-bold">{slide.name}</h2>
        <div className="flex">
          <div className="rounded-[50%] border-[.3px] hover:border-secondary p-2 mr-10">
            <ChevronLeftIcon
              className="w-6 text-primary hover:text-secondary"
              onClick={prevSlide}
            />
          </div>
          <div className="rounded-[50%] hover:border-secondary border-[.3px]  p-2">
            <ChevronRightIcon
              className="w-6 text-primary hover:text-secondary"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
      <p className="text-[#928E8E]  max-w-[90%] lg:max-w-[80%] mx-auto my-[2rem]">
        {slide.description}
      </p>
    </>
  );
};

export default Indicatior;
