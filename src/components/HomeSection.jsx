import React from "react";
import Hero from "../assets/images/w.png";
import { FaLongArrowAltRight } from "react-icons/fa";
function HomeSection() {
  return (
    <section className="bg-[#F7F1FD] w-full  mx-auto h-146 flex justify-between ">
      <div className="w-full max-w-300 mx-auto flex pt-34.5  ">
        <div className="max-w-146px">
          <h1 className="text-7xl pb-6   ">
            Create, Read,
            <br />
            <span className="text-[#2528E1]">Inspire.</span>
          </h1>

          <p className=" text-[20px] pb-6">
            Discover stories written by amazing people. Share <br /> your
            knowledge and inspire others with your unique perspective.
          </p>
          <div className="flex mt-8 gap-4">
            <button className="bg-[#2528E1] text-white py-3 px-8 rounded-2xl flex items-center gap-2">
              Explore Posts <FaLongArrowAltRight />
            </button>

            <button className="bg-white tetx-black py-3 px-8 rounded-2xl">
              Get Started
            </button>
          </div>
        </div>

        <div>
          <img src={Hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
