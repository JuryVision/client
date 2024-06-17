import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const flag = useRef(false);

  const possibleHeaders = [
    "Businesses         ",
    "Developers         ",
    "Startups         ",
    "Contracts         ",
    "Crypto         ",
    "Disputes         ",
  ];
  const headerIndex = useRef(-1);
  const [headerText, setHeaderText] = useState("");
  const headerCounter = useRef(-1);

  useEffect(() => {
    if (!flag.current) {
      flag.current = true;

      setInterval(() => {
        if (headerCounter.current == -1) {
          setHeaderText("");
          headerIndex.current =
            (headerIndex.current + 1) % possibleHeaders.length;
          headerCounter.current =
            possibleHeaders[headerIndex.current].length * 2;
        }

        if (
          headerCounter.current > possibleHeaders[headerIndex.current].length
        ) {
          setHeaderText((h) =>
            h.concat(
              possibleHeaders[headerIndex.current][
                Math.abs(
                  headerCounter.current -
                    possibleHeaders[headerIndex.current].length * 2 +
                    1
                )
              ]
            )
          );
        }
        if (
          headerCounter.current < possibleHeaders[headerIndex.current].length
        ) {
          setHeaderText((h) => h.slice(0, h.length - 1));
        }

        headerCounter.current = headerCounter.current - 1;
      }, 130);
    }
  }, []);

  return (
    <section className="p-page h-screen flex flex-col justify-center items-center tracking-tighter relative">
      <h1 className="text-7xl font-bold mb-6">The Abribtration Platform</h1>
      <h2
        className="text-9xl font-bold bg-clip-text text-transparent flex"
        style={{
          animation: "header-gradient-animation 20000ms infinite",
          backgroundImage:
            "linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab, #33dd55)",
          backgroundSize: "500% 500%",
        }}
      >
        for {headerText}{" "}
        <figure
          style={{
            animation:
              "header-gradient-animation 20000ms infinite, blink 1500ms infinite",
            backgroundImage:
              "linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab, #33dd55)",
            backgroundSize: "1000% 500%",
          }}
          className="w-2 h-[90%] mt-[2%] ml-4"
        />
      </h2>

      <div className="absolute bottom-0 w-full -z-1">
        <div className="absolute-cover" />
        <img
          src="/images/waving-gradient-home.jpg"
          className="w-full -z-10"
          alt="wave"
          style={{
            animation: "header-wave-animation 20000ms infinite",
          }}
        />
      </div>
    </section>
  );
}
