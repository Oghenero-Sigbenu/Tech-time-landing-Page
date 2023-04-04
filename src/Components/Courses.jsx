import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import Tabs from "./Tab";
import { courses } from "../helpers/data";

function Courses() {
  const [activeTab, setActiveTab] = useState(0);
  const [filteredArray, setFilteredArray] = useState([]);

  const filterItem = () => {
    const result =
      activeTab == 1
        ? courses.filter((item) => item?.type == "Marketing")
        : activeTab == 2
        ? courses.filter((item) => item?.type == "Design")
        : activeTab == 3
        ? courses.filter((item) => item?.type == "Development")
        : courses;
    setFilteredArray(result);
  };

  useEffect(() => {
    filterItem();
  }, [activeTab]);

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

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-10 ">
          <div className="flex flex-wrap gap-4">
            {filteredArray && filteredArray?.map((item, i) => <CourseCard />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
