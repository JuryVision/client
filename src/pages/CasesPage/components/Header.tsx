import React from "react";
import ConnectWallet from "../../../common/ConnectWallet";
export default function Header() {
  const accountStats = [
    {
      title: "Voting Power",
      value: "120",
      action: { text: "Vote", callback: () => {} },
    },
    {
      title: "Staked Tokens",
      value: "234,567",
      action: { text: "Stake", callback: () => {} },
    },
    {
      title: "Redeemable Balance",
      value: "7,357",
      action: { text: "Claim", callback: () => {} },
    },
  ];
  return (
    <section className="h-[30vh] pt-28 p-page flex gap-x-5">
      <div className="basis-1/2 flex flex-col">
        <h1 className="text-xl font-semibold mb-5">Status</h1>
        <div className="rounded-md bg-foreground p-4 border border-front/10 flex flex-col gap-y-3">
          <div className="flex gap-x-3 items-center group cursor-pointer">
            <img src="/icons/cans.png" className="w-[3em] group-hover:bounce" />
            <div className="flex flex-col gap-y-1">
              <h1 className="text-sm text-front/70">Total votes cast today</h1>
              <p className="text-xl font-bold">47,550,371</p>
            </div>
          </div>
          <figure className="h-[1px] my-3 border border-front/5 border-dashed" />
          <div className="flex gap-x-3 items-center group cursor-pointer">
            <img src="/icons/team.png" className="w-[3em] group-hover:bounce" />
            <div className="flex flex-col gap-y-1">
              <h1 className="text-sm text-front/70">Today's featured case</h1>
              <p className="text-base font-medium">
                0x5cab9...D8B81 v/s Zomato
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h1 className="text-xl font-semibold mb-5">Your Position</h1>
        <div className="rounded-md bg-foreground border border-front/10 flex flex-col gap-y-3 flex-1">
          <div className="p-4">
            <ConnectWallet />
          </div>
          <div className="flex px-4 divide-x-[1px] divide-front/10 divide-dashed">
            {accountStats.map((item, key) => (
              <div
                key={key}
                className="flex-1 flex flex-col gap-y-1 items-center p-2"
              >
                <p className="text-xs text-front/70 font-medium tracking-wide">
                  {item.title}
                </p>
                <p className="text-base font-semibold">{item.value}</p>
                {item.action && (
                  <button
                 className="mt-1 bg-background text-front/90 hover:text-front w-2/3 py-1 rounded-sm font-light text-sm duration-200 hover:bounce border border-front/10"
                  >
                    {item.action.text}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}