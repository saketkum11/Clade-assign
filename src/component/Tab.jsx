/* eslint-disable no-unused-vars */
import { useState } from "react";

const Tab = () => {
  const [tabs, setTabs] = useState([
    "Job preview",
    "Applicants",
    "Match",
    "Messages",
  ]);
  const [listOfItem, setListOfItem] = useState("Job preview");
  const handleTab = (item) => {
    setListOfItem(item);
  };
  return (
    <ul className="text-xl flex gap-16">
      {tabs?.map((tab, index) => {
        return (
          <>
            <li
              key={index}
              onClick={() => handleTab(tab)}
              className={` ${
                tab === listOfItem
                  ? "text-primary font-semibold"
                  : "text-normalText font-medium"
              } relative flex flex-col items-center justify-center cursor-pointer`}
            >
              <span>{tab}</span>
              {tab === listOfItem && (
                <div className=" absolute top-[2.9rem] h-[2px] bg-primary w-[4rem] "></div>
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Tab;
