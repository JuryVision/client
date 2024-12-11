// src/ImageSlider.js
import React, { useState } from "react";
export default function StakingWorking() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <div className="relative w-full h-64 py-6 overflow-hidden px-2">
        <div
          className="absolute top-0 left-0 w-full h-full flex gap-x-4"
          style={{
            clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
          }}
        >
          <div className="basis-1/4 flex flex-col gap-y-2 items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              1
            </p>
            <img
              src="https://www.mycointainer.com/landing-main/media/assets-list-header-image.346b821d.png"
              className="w-[80%]"
            />
            <h1 className="text-xl font-bold">Stake on the platform</h1>
          </div>
          <div className="basis-1/4 flex flex-col gap-y-2 items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              2
            </p>
            <img
              src="https://www.mycointainer.com/landing-main/media/assets-list-header-image.346b821d.png"
              className="w-[80%]"
            />
            <h1 className="text-xl font-bold">Get voting rights</h1>
          </div>
          <div className="basis-1/4 flex flex-col gap-y-2 items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              3
            </p>
            <img
              src="https://www.mycointainer.com/landing-main/media/assets-list-header-image.346b821d.png"
              className="w-[80%]"
            />
            <h1 className="text-xl font-bold">Give Decisions on cases</h1>
          </div>
          <div className="basis-1/4 flex flex-col gap-y-2 items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              4
            </p>
            <img
              src="https://www.mycointainer.com/landing-main/media/assets-list-header-image.346b821d.png"
              className="w-[80%]"
            />
            <h1 className="text-xl font-bold">Get Rewards if in majority</h1>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex gap-x-4"
          style={{
            clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`,
          }}
        >
          <div className="basis-1/4 flex flex-col items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              1
            </p>
            <img src="/images/stakeLocked.png" />
            <h1 className="text-xl font-bold text-center">
              Didn't stake on the platform
            </h1>
          </div>
          <div className="basis-1/4 flex flex-col items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              2
            </p>
            <img src="/images/stakeLocked.png" />
            {/* <h1 className="text-xl font-bold text-center">
              Dosen't have voting rights
            </h1> */}
          </div>
          <div className="basis-1/4 flex flex-col items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              3
            </p>
            <img src="/images/stakeLocked.png" />
            {/* <h1 className="text-xl font-bold text-center">
              Can't give decision on cases
            </h1> */}
          </div>
          <div className="basis-1/4 flex flex-col items-center">
            <p className="border border-primary rounded-full h-8 w-8 text-center shadow-sm shadow-primary text-xl">
              4
            </p>
            <img src="/images/stakeLocked.png" />
            {/* <h1 className="text-xl font-bold text-center">
              Cannot recieve rewards
            </h1> */}
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-1 h-full bg-primary shadow-primary shadow-xl"
          style={{ left: `${sliderValue}%` }}
        ></div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full slider-primary"
      />
    </div>
  );
}