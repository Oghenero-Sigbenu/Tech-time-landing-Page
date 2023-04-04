import Course1 from "../Assests/course1.png";
import Clock from "../Assests/schedule.png";
import Book from "../Assests/menu_book.png";
import Author1 from "../Assests/Author1.png";
import { StarIcon } from "@heroicons/react/solid";

function CourseCard() {
  return (
    <div className="w-[48%] lg:w-[32%] p-4 bg-white">
      <div className="w-full">
        <img src={Course1} alt="Author of course" className="w-full" />
      </div>
      <div>
        <span className="rounded-[15px] px-[.5rem] py-[.1rem] text-[9px] text-primary bg-[#1e5cce77]">
          Design
        </span>
        <span className="float-right flex text-[#A1A1A1]">
          4.7k <StarIcon className="text-[#F6B435] w-4" />
          (32.7k+)
        </span>
      </div>
      <h3
        className="text-
#000F24 font-bold text-[.9rem] lg:text-2xl my-6"
      >
        Introduction too user research in UX Design
      </h3>
      <div className="flex justify-between">
        <div className="flex align-middle">
          <img
            src={Clock}
            className="w-3 lg:w-5 object-contain mr-1"
            alt="icon"
          />
          <span className="text-[#A1A1A1]  text-[.5rem] lg:text-[.9rem]">
            22hrs 30mins
          </span>
        </div>
        <div className="flex item-center float-right">
          <img
            src={Book}
            className="w-3 lg:w-6 object-contain mr-2"
            alt="icon"
          />
          <span className="text-[#A1A1A1] lg:text-[.9rem] text-[.6rem] align-middle">
            22hrs 30mins
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="flex items-center">
          <img src={Author1} alt="author" className="" />
          <h5 className="font-semibold text-[.7rem] lg:text-xl ml-2">
            Leonard Victor
          </h5>
        </div>
        <div>
          <h4 className="text-[#004DB3] font-bold text-[.7rem] lg:text-xl">
            $15.00
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
