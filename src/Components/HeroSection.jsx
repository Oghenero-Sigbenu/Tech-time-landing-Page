import NavBar from "./Navbar";
import ProfileImage from "../Assests/Frame 95.png";
import ProfileImage1 from "../Assests/Frame 96.png";
import ProfileImage2 from "../Assests/Frame 97.png";
import ProfileImage3 from "../Assests/Frame 98.png";
import ProfileImage4 from "../Assests/Frame 99.png";
import Girl from "../Assests/girl.png";

function HeroSection() {
  return (
    <div className="bg-primary w-full">
      <div className=" w-[95%] pt-[3rem] lg:w-[90%] mx-auto max-w-[90%] flex flex-wrap lg:max-w-[85%]">
        <div className=" w-full lg:w-[50%] ">
          <div className=" w-full lg:w-[80%] mx-auto flex justify-between my-[4rem]">
            <p className=" rounded-[50%]  border border-[#00c040] w-[9px] h-[9px]"></p>
            <p className=" rounded-[50%]  bg-[#FFBE4E] w-[6px] mt-3 h-[6px] "></p>
          </div>
          <h2 className="text-[64px] leading-[56px] mb-[2rem] font-[700] text-white ">
            Grow your skills to advance your career path
          </h2>
          <p className="text-[16px] w-[70%] leading-[26px]  mb-[2rem] font-[500] text-[#E7E7E7] ">
            Build your future with our quality education. The best and largest
            all-in-one online tutoring platform in the world
          </p>
          <div className="">
            <button className="border-white border-[1px] mr-5 px-[1rem] py-[.5rem] text-white">
              Get Started Now
            </button>
            <button className="bg-white px-[1rem] py-[.5rem] text-primary">
              Enroll now
            </button>
          </div>
          <div className="flex mt-[2rem]">
            <img src={ProfileImage} alt="profile" />
            <img src={ProfileImage1} className="-ml-8" alt="profile" />
            <img src={ProfileImage2} className="-ml-8" alt="profile" />
            <img src={ProfileImage3} className="-ml-8" alt="profile" />
            <img src={ProfileImage4} className="-ml-8" alt="profile" />
            <div className="mt-3 ml-2">
              <h4 className=" font-[800] text-white ">255k+</h4>
              <p className="font-base -mt-2 text-white">Previews</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className=" bg-image"></div>
          <div className="w-[80%] mx-auto bg">
            <img src={Girl} alt="girl" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
