import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const items = ["All Categories", "Design", "Development", "Marketing"];

  return (
    <nav className="flex gap-5 w-full  items-center justify-center overflow-x scroll">
      {items.map((item, i) => (
        <p
          className={`${
            i === activeTab
              ? " bg-white text-primary font-bold rounded-md text-[10px] sm:text-[12px] px-2 py-2 sm:px-5 sm:py-4 "
              : "hover:border-primary hover:border bg-white text-[#]  rounded-md"
          } text-[10px] sm:text-[12px] px-2 py-2 sm:px-5 sm:py-4   uppercase cursor-pointer`}
          onClick={() => setActiveTab(i)}
          key={i}
        >
          {item}
        </p>
      ))}
    </nav>
  );
};

export default Tabs;
