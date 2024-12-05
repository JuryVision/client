import React from "react";
import { formatEvmAddressForDiplay } from "../../../utils";
export default function CasesTable() {
  return (
    <section className="p-page">
      <div className="mt-5 rounded-lg p-5 border border-front/10 bg-foreground">
        <div className="flex items-center border border-front/10 rounded-md overflow-hidden group focus-within:border-primary/50">
          <input
            className="flex-1 bg-background p-2 text-sm"
            placeholder="Search by Plaintiff / Defender / Address"
          />
          <button className="px-4 bg-primary/20 self-stretch group-focus-within:bg-primary group-focus-within:text-back">
            Search
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex p-3 bg-background mt-3 mb-1 rounded-md border border-front/10 text-front/60 tracking-wide">
            <p className="basis-[30%]">{"Plaintiff"}</p>
            <p className="basis-[30%]">{"Defender"}</p>
            <p className="basis-[30%]">{"Time Left"}</p>
          </div>
          <div className="divide-y-[1px] divide-front/5">
            {casesList.map((item, key) => (
              <div key={key} className="flex p-3 text-sm">
                <p className="basis-[30%] truncate">
                  <span className="text-xs">{item.defender}</span>
                  <br />
                  <span className="text-primary text-xs">
                    {formatEvmAddressForDiplay(item.plaintiff)}
                  </span>
                </p>
                <p className="basis-[30%] truncate">
                  {formatEvmAddressForDiplay(item.plaintiff)}
                </p>
                <p className="basis-[30%] truncate">
                  {item.createdAt + item.duration - Date.now()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const casesList = [
  {
    plaintiff: "0x7a3f5BbE901d41B1a5fD99D999e1eB4B4D2Aa3aC",
    defender: "MixRgg",
    createdAt: Date.now(),
    duration: 86400 * 3, // 3 days
    priority: 1,
  },
  {
    plaintiff: "0x3Cf6cB97B6869fC7Ae5b4Bb36f01b715D0eA0c0C",
    defender: "Apple",
    createdAt: Date.now(),
    duration: 86400 * 5, // 5 days
    priority: 0,
  },
  {
    plaintiff: "0x9B2Bd6d51E02b9c89Ce4A4F7F05cD21be835739d",
    defender: "Zomato",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 2,
  },
  {
    plaintiff: "0x1A7Fb54F9a16Aa6d2D5ABb67EaC251e86a579345",
    defender: "Swiggy",
    createdAt: Date.now(),
    duration: 86400 * 7, // 7 days
    priority: 1,
  },
  {
    plaintiff: "0x8a98CcF1A07f99D41Eeb8aE10C4A7aAaaef41B2D",
    defender: "Uber",
    createdAt: Date.now(),
    duration: 86400 * 4, // 4 days
    priority: 0,
  },
  {
    plaintiff: "0xCe3e4B17C865A8a49c72F2cDdE07B5185C16C609",
    defender: "Ola",
    createdAt: Date.now(),
    duration: 86400 * 6, // 6 days
    priority: 2,
  },
  {
    plaintiff: "0x2B7f34a67e901D41b5fD88D198e2eB4B4D2Aa3aC",
    defender: "MixRgg",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 1,
  },
  {
    plaintiff: "0x1Cf6cB97B6869fC7Ae5b4Bb36f01b715D0eA0c0C",
    defender: "Apple",
    createdAt: Date.now(),
    duration: 86400 * 3, // 3 days
    priority: 0,
  },
  {
    plaintiff: "0x6B2Bd6d51E02b9c89Ce4A4F7F05cD21be835739d",
    defender: "Zomato",
    createdAt: Date.now(),
    duration: 86400 * 5, // 5 days
    priority: 2,
  },
  {
    plaintiff: "0x3A7Fb54F9a16Aa6d2D5ABb67EaC251e86a579345",
    defender: "Swiggy",
    createdAt: Date.now(),
    duration: 86400 * 4, // 4 days
    priority: 1,
  },
  {
    plaintiff: "0x7a98CcF1A07f99D41Eeb8aE10C4A7aAaaef41B2D",
    defender: "Uber",
    createdAt: Date.now(),
    duration: 86400 * 7, // 7 days
    priority: 0,
  },
  {
    plaintiff: "0x4Ce3e4B17C865A8a49c72F2cDdE07B5185C16C609",
    defender: "Ola",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 2,
  },
  {
    plaintiff: "0x3a7f5BbE901d41B1a5fD99D999e1eB4B4D2Aa3aC",
    defender: "MixRgg",
    createdAt: Date.now(),
    duration: 86400 * 3, // 3 days
    priority: 1,
  },
  {
    plaintiff: "0x9Cf6cB97B6869fC7Ae5b4Bb36f01b715D0eA0c0C",
    defender: "Apple",
    createdAt: Date.now(),
    duration: 86400 * 5, // 5 days
    priority: 0,
  },
  {
    plaintiff: "0x7B2Bd6d51E02b9c89Ce4A4F7F05cD21be835739d",
    defender: "Zomato",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 2,
  },
  {
    plaintiff: "0x5A7Fb54F9a16Aa6d2D5ABb67EaC251e86a579345",
    defender: "Swiggy",
    createdAt: Date.now(),
    duration: 86400 * 7, // 7 days
    priority: 1,
  },
  {
    plaintiff: "0x8a98CcF1A07f99D41Eeb8aE10C4A7aAaaef41B2D",
    defender: "Uber",
    createdAt: Date.now(),
    duration: 86400 * 4, // 4 days
    priority: 0,
  },
  {
    plaintiff: "0xCe3e4B17C865A8a49c72F2cDdE07B5185C16C609",
    defender: "Ola",
    createdAt: Date.now(),
    duration: 86400 * 6, // 6 days
    priority: 2,
  },
  {
    plaintiff: "0x2B7f34a67e901D41b5fD88D198e2eB4B4D2Aa3aC",
    defender: "MixRgg",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 1,
  },
  {
    plaintiff: "0x1Cf6cB97B6869fC7Ae5b4Bb36f01b715D0eA0c0C",
    defender: "Apple",
    createdAt: Date.now(),
    duration: 86400 * 3, // 3 days
    priority: 0,
  },
  {
    plaintiff: "0x6B2Bd6d51E02b9c89Ce4A4F7F05cD21be835739d",
    defender: "Zomato",
    createdAt: Date.now(),
    duration: 86400 * 5, // 5 days
    priority: 2,
  },
  {
    plaintiff: "0x3A7Fb54F9a16Aa6d2D5ABb67EaC251e86a579345",
    defender: "Swiggy",
    createdAt: Date.now(),
    duration: 86400 * 4, // 4 days
    priority: 1,
  },
  {
    plaintiff: "0x7a98CcF1A07f99D41Eeb8aE10C4A7aAaaef41B2D",
    defender: "Uber",
    createdAt: Date.now(),
    duration: 86400 * 7, // 7 days
    priority: 0,
  },
  {
    plaintiff: "0x4Ce3e4B17C865A8a49c72F2cDdE07B5185C16C609",
    defender: "Ola",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 2,
  },
  {
    plaintiff: "0x3a7f5BbE901d41B1a5fD99D999e1  eB4B4D2Aa3aC",
    defender: "MixRgg",
    createdAt: Date.now(),
    duration: 86400 * 3, // 3 days
    priority: 1,
  },
  {
    plaintiff: "0x9Cf6cB97B6869fC7Ae5b4Bb36f01b715D0eA0c0C",
    defender: "Apple",
    createdAt: Date.now(),
    duration: 86400 * 5, // 5 days
    priority: 0,
  },
  {
    plaintiff: "0x7B2Bd6d51E02b9c89Ce4A4F7F05cD21be835739d",
    defender: "Zomato",
    createdAt: Date.now(),
    duration: 86400 * 2, // 2 days
    priority: 2,
  },
  {
    plaintiff: "0x5A7Fb54F9a16Aa6d2D5ABb67EaC251e86a579345",
    defender: "Swiggy",
    createdAt: Date.now(),
    duration: 86400 * 7, // 7 days
    priority: 1,
  },
  {
    plaintiff: "0x8a98CcF1A07f99D41Eeb8aE10C4A7aAaaef41B2D",
    defender: "Uber",
    createdAt: Date.now(),
    duration: 86400 * 4, // 4 days
    priority: 0,
  },
  {
    plaintiff: "0xCe3e4B17C865A8a49c72F2cDdE07B5185C16C609",
    defender: "Ola",
    createdAt: Date.now(),
    duration: 86400 * 6, // 6 days
    priority: 2,
  },
];