import React from "react";
import Video from "../../../common/Video"
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Contract Analyzer",
    content:
      "Detect vulnerabilities, find optimization opportunities for gas efficiency, and ensure your contracts are secure and reliable.",
    url: "",
  },
  {
    title: "Transaction Insights with HITS Algorithm",
    content:
    "HITS Algorithm to analyze blockchain transactions and identify valuable users and reliable contracts. ",
    url: "",
  },
  {
    title: "Pair Programming",
    content:
      "Pair Programming feature offers an interactive, AI-driven coding experience designed to enhance your learning journey.",
    url: "/solutions",
  },
];

export default function Solutions() {
  return (
    <section className="relative mt-[20vh] h-screen" id="solutions">
      <div className="absolute left-0 top-1/2 flex h-[75vh] w-full -translate-y-1/2 justify-center overflow-hidden">
        <Video
          src="/videos/extend-cubes.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover invert"
          speed={1}
        />

        <div className="absolute-cover bg-gradient-to-br from-primary via-accent to-secondary mix-blend-color" />
        <div className="absolute-cover scale-[101%] bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="p-page relative z-1 flex h-full flex-col items-center">
        <div className="flex h-full flex-col justify-center">
          <h1 className="text-center text-4xl font-medium mobile:text-xl">
          The Ultimate AI-Powered Smart Contract Platform
          </h1>

          <div className="mt-24 flex flex-col items-center gap-y-1 text-center text-xl font-extralight mobile:mt-3 mobile:text-sm">
            <p>Revolutionize Your Blockchain Development with Advanced Tools, AI-Driven Insights,</p>
            <p>
            and Seamless Smart Contract Management.
            </p>
          </div>

          <div className="mt-32 flex justify-between mobile:mt-4 mobile:flex-col mobile:gap-y-5">
            {solutions.map((item, key) => (
              <Link
                to={item.url}
                key={key}
                className="group w-[30%] rounded border-2 border-primary bg-background bg-opacity-75 p-5 outline outline-secondary backdrop-blur-sm hover:bg-opacity-100 mobile:w-full"
              >
                <div className="group-hover:text-bg-gradient flex flex-col gap-y-2 group-hover:bg-gradient-to-tl group-hover:from-secondary group-hover:via-accent group-hover:to-secondary">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-70 group-hover:opacity-100">
                    {item.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
