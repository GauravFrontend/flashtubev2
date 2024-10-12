import React from "react";

const page = () => {
  return (
    <>
      <div className=" bg-blue-600 w-full h-full flex">
        <div className="bg-yellow-300 w-[70%] h-min flex flex-col p-4 gap-3 ">
          <div className="bg-black w-full h-[700px] rounded-2xl"></div>
          <div className="bg-black w-full h-[700px] rounded-2xl"></div>
        </div>
        <div className="bg-pink-400 w-[30%] "></div>
      </div>
    </>
  );
};

export default page;
