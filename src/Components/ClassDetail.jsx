import Star from "../Assests/star.png";
import Speaker from "../Assests/volume_up.svg";
import Play from "../Assests/autoplay.svg";
import Antenna from "../Assests/antenna.svg";
import Doc from "../Assests/doc.svg";
import Man from "../Assests/man.png";
import Lady from "../Assests/lady.png";
import Splash from "../Assests/splash1.png";
import Zig from "../Assests/zig.png";

function ClassDetail() {
  return (
    <div className="bg-[#F8F9FC] w-full pb-[3rem] overflow-x-hidden">
      <div className="w-[95%] pt-[5rem] lg:w-[90%] mx-auto max-w-[90%] flex flex-wrap lg:max-w-[85%]">
        <div className=" w-full lg:w-[50%] ">
          <img src={Star} alt="icon" className="-ml-10" />
          <h2 className="text-[60px] text-center lg:text-left leading-[60px] mb-[2rem] font-[700] text-black ">
            High quality video, audio & live classes
          </h2>
          <p className="text-[16px] text-center lg:text-left w-[80%] mx-auto lg:ml-0 md:w-[70%] capitalize leading-[26px]  mb-[2rem] font-[500] text-[#A1A1A1] ">
            High-defination video is video of higher resolution and quality than
            standard definition. While there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="text-center lg:text-left">
            <button className="bg-primary mr-5 px-[2rem] py-[.9rem] text-white">
              View Courses
            </button>
          </div>
          <div className="flex flex-wrap w-[90%] justify-center lg:justify-start lg:w-[70%] mt-[2rem] gap-4">
            <div className="bg-white p-[1rem] mb-4 align-middle flex pr-[3rem] justify-left">
              <img
                src={Speaker}
                alt="icon"
                className="bg-[#3fa96960] p-1.5 rounded-[5px] mr-4 w-5 h-5"
              />{" "}
              <span className="font-semibold">Audio Classes</span>
            </div>
            <div className="bg-white p-[1rem] mb-4  align-middle flex pr-[3rem] justify-center">
              <img
                src={Antenna}
                alt="icon"
                className="bg-[#F79E8E60] p-1.5 rounded-[5px] mr-4 w-5 h-5"
              />{" "}
              <span className="font-semibold">Live Classes</span>
            </div>
            <div className="bg-white p-[1rem] mb-4 align-middle flex pr-[3rem] justify-center">
              <img
                src={Play}
                alt="icon"
                className="bg-[#9369cd7a]  p-1.5 rounded-[5px] mr-4 w-5 h-5"
              />{" "}
              <span className="font-semibold">Recorded Classes</span>
            </div>
            <div className="bg-white p-[1rem] mb-4 align-middle flex pr-[3rem] justify-center">
              <img
                src={Doc}
                alt="icon"
                className="bg-[#5979cf7c] p-1.5 rounded-[5px] mr-4 w-5 h-5"
              />{" "}
              <span className="font-semibold">50+ notes</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] pt-[2rem] relative">
          <img src={Zig} alt="Man" className="absolute -right-32" />

          <div className=" w-[80%] mx-auto relative bg-red-400 my-[2rem] ">
            <img src={Man} className="absolute w-[90%] z-30" alt="Man" />
            <div className=" absolute -bottom-[35rem] -left-[14rem] z-50">
              <img src={Lady} alt="Man" />
            </div>
            <div>
              <img
                src={Splash}
                alt="Man"
                className="absolute z-2 right-2 top-48"
              />
            </div>
          </div>
          {/* <img src={Side} className="absolute -right-32 -bottom-20" /> */}
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
