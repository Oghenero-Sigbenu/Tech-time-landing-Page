import CardSlider from "./CardSlider";

function Reviews() {
  return (
    <div className="bg-[#F8F9FC] w-full pb-[3rem] overflow-x-hidden">
      <div className="w-[95%] pt-[5rem] lg:w-[90%] mx-auto max-w-[90%]  lg:max-w-[85%]">
        <h2 className="text-[60px] w-[90%] mx-auto text-center leading-[60px] mb-[2rem] font-[700] text-black ">
          Browse Our Popular Courses
        </h2>
        <p
          className="text-[16px] w-[80%]   md:w-[50%] mx-auto text-center 
    capitalize leading-[26px]  mb-[2rem] font-[500] text-[#A1A1A1] "
        >
          High-defination video is video of higher resolution and quality than
          standard definition. While there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <CardSlider />
    </div>
  );
}

export default Reviews;
