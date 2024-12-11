import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
import { twMerge } from "tailwind-merge";
export default function StakingDialogue() {
  const [inputWidth, setInputWidth] = useState(1);
  const [showingFaq, setShowingFaq] = useState(-1);
  return (
    <section className="p-page mt-10" id="staking-dialogue">
      <h1 className="my-7 text-2xl text-center font-semibold">
        Start Staking Now
      </h1>
      <div className="w-2/3 mx-auto p-4 rounded-xl bg-primary/10 border border-front/10 flex flex-col items-center">
        <div className="w-full flex gap-x-3 items-center justify-center">
          <img className="h-[2em]" src="https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png" />
          <input
            className="py-6 text-center bg-transparent border-none outline-none text-4xl duration-200"
            placeholder={"0"}
            min={0}
            style={{ width: `${(inputWidth || 1) + 0.5}ch` }}
            onChange={(e) => {
              setInputWidth(e.target.value.length);
            }}
            type="number"
          />
        </div>
        <button className="bg-background px-10 py-2 rounded-full text-lg font-medium border border-front/10 duration-200 hover:bounce hover:text-primary hover:border-primary">
          Stake
        </button>
        <p className="text-xs flex gap-x-1 py-4">
          By using the app, you confirm compliance with our
          <Link className="underline hover:no-underline" to="/staking-tos">
            Staking Terms of Service.
          </Link>
        </p>
      </div>
      <div className="flex flex-col mx-auto w-2/3 p-5 divide-y-[1px] divide-front/20">
        <h1 className="text-xl font-bold mt-3 pb-5">FAQ</h1>
        {faqs.map((faq, key) => (
          <div
            key={key}
            className={twMerge(
              "flex flex-col gap-y-1 py-3 cursor-pointer",
              showingFaq != key && "hover:scale-[100.5%] duration-200"
            )}
            onClick={() => setShowingFaq(showingFaq == key ? -1 : key)}
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">{faq.title}</h3>
              <button className={twMerge(showingFaq == key && "rotate-180")}>
                <Icon icon="expand_more" className="text-2xl" />
              </button>
            </div>
            <p
              className={twMerge(
                "text-sm text-front/60",
                showingFaq == key
                  ? "opacity-100 h-full duration-300"
                  : "h-0 opacity-0"
              )}
            >
              {faq.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
const faqs = [
  {
    title: "What is Staking",
    content:
      "lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ssq",
  },
  {
    title: "How does this work",
    content:
      "lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss",
  },
  {
    title: "How will this be benificial for me",
    content:
      "lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss",
  },
  {
    title: "How can I trust this",
    content:
      "lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss",
  },
  {
    title: "Why am I making rewards off this",
    content:
      "lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss lorem ipsum dolor sit atem papa asd andj jndlknlkndlk k l ss",
  },
];