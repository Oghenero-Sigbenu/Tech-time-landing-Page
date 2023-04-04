import React, { useState } from "react";
import { review } from "../helpers/data";
import Indicatior from "./Indicator";
// import { ProjectText } from "./index";

const CardSlider = () => {
  const [current, setCurrent] = useState(0);

  const length = review.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="">
      {review.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <Indicatior
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                slide={slide}
              />
            )}
          </div>
        );
      })}

      <div className="  mt-[3rem] mb-[5rem]  max-w-[120%] lg:max-w-[150%] mx-auto ">
        <div className="full ">
          <div className="  mx-auto flex justify-between rounded-md w-[full] ">
            <div className="  w-[20%]  rounded-md py-[2rem] bg-white">
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. The best and largest all-in-one online tutoring
                platform in the world
              </p>
            </div>
            {review.map((item, index) => (
              <div
                key={index}
                className="bg-white  w-[25%] rounded-md  py-[2rem]"
              >
                <p>{item?.content}</p>
              </div>
            ))}
            {/* <div className="  w-[20%] rounded-md  py-[2rem]">
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. The best and largest all-in-one online tutoring
                platform in the world
              </p>
            </div> */}
          </div>
        </div>
        <div className="text-center">
          {review.map((slide, index) => (
            <span
              key={index}
              className={`${
                index === current ? "bg-red-400" : ""
              } "cursor-pointer h-[15px] w-[15px] mx-3 my-[3rem] bg-[#bbb] rounded-[50%] inline-block transition-all duration-5 ease-in"`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
