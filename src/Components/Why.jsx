import Star from "../Assests/star.png";
import Boy from "../Assests/boy.png";
import { ClockIcon, UserGroupIcon } from "@heroicons/react/solid";

function Why() {
  return (
    <div className="bg-[#F8F9FC] w-full pb-[3rem] overflow-x-hidden">
      <div className="w-[95%] pt-[5rem] lg:w-[90%] mx-auto max-w-[90%] flex flex-wrap lg:max-w-[85%]">
        <div className=" w-full lg:w-[50%] ">
          <h2 className="text-[60px] text-center lg:text-left leading-[60px] mb-[2rem] font-[700] text-black ">
            This is why we are best from others
          </h2>
          <p className="text-[16px]  text-center lg:text-left  mx-auto lg:ml-0  capitalize leading-[26px]  mb-[2rem] font-[500] text-[#A1A1A1] ">
            High-defination video is video of higher resolution and quality than
            standard definition. While there’s no standard meaning for high
            definition, Generally any standard video image
          </p>
          <div className="">
            <img src={Boy} />
          </div>
        </div>
        <div className="w-full lg:w-[50%]  pt-[2rem] relative">
          <div className="flex w-[90%] mx-auto flex-wrap gap-4">
            <div className="w-[48%] bg-white py-[2rem] px-[1rem]">
              <div className="bg-[#AECD5E] w-7 h-7 mb-4 rounded-[5px]  flex justify-center">
                <ClockIcon className="w-4 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Experienced Mentors</h4>
              <p className="text-[#A1A1A1]">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className="w-[48%] bg-white py-[2rem] px-[1rem]">
              <div className="bg-[#AECD5E] w-6 h-6  mb-4  rounded-[5px]  flex justify-center">
                <ClockIcon className="w-3 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Experienced Mentors</h4>
              <p className="text-[#A1A1A1]">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className="w-[48%] bg-white py-[2rem] px-[1rem]">
              <div className="bg-[#ED6BA6]  mb-4  w-6 h-6 rounded-[5px]  flex justify-center">
                <UserGroupIcon className="w-3 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Experienced Mentors</h4>
              <p className="text-[#A1A1A1]">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className="w-[48%]  bg-white py-[2rem] px-[1rem]">
              <div className="bg-[#ED6BA6]  mb-4  w-6 h-6 rounded-[5px]  flex justify-center">
                <UserGroupIcon className="w-3 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Experienced Mentors</h4>
              <p className="text-[#A1A1A1]">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
