import React from "react";
import Container from "../../Shared/Container";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="background-hero w-full mt-30 max-w-350 mx-auto">
      <Container>
        <div className=" max-w-3xl text-center mx-auto space-y-10">
          <h1 className="font-semibold text-5xl/snug sm:text-6xl/snug">
            Everything for your <span className="text-primary">Home</span> &
            Future.
          </h1>

          <p className="text-xl ">
            Instant everything. Incredible prices. Big heart.
          </p>

          <div className="flex flex-col  sm:flex-row gap-4 sm:gap-0 items-center w-full justify-center">
            <div className="relative inline-block w-full sm:w-auto min-w-62.5 ">
              <select
                name=""
                id=""
                className="border w-full  min-w-62.5   border-gray-300 rounded-l-md rounded-r-md sm:rounded-r-none bg-gray-50 p-3  appearance-none outline-none"
              >
                <option value="">Select insurance type..</option>
                <option value="">Life insurance</option>
                <option value="">Health insurance</option>
                <option value="">Property insurance</option>
                <option value="">Motor insurance</option>
              </select>

              <div className="absolute right-3 top-3.5 z-10">
                <ChevronDown></ChevronDown>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row w-full sm:w-auto">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Zip Code"
                className="w-full sm:w-50 border border-gray-300 border-r-none p-3 bg-gray-50 outline-none rounded-r-md sm:rounded-r-none"
              />
              <button className="bg-primary text-white hover:bg-black p-3 px-5 rounded-r-md hover:cursor-pointer rounded-l-md sm:rounded-l-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
