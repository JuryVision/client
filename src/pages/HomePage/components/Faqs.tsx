import React, { useState } from "react";
import Icon from "../../../common/Icon";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    title: "What is Opticks, and what does it do?",
    content: (
      <p>
       Opticks is an AI-powered platform designed to enhance the blockchain ecosystem. It provides tools like contract analyzers, feature adders, interface makers, and address analyzers, along with a revolutionary Hits Algorithm to evaluate user and contract reliability.
      </p>
    ),
  },
  {
    title: "How does the Contract Analyzer improve smart contracts?",
    content: (
      <p>
      The Contract Analyzer automatically scans smart contracts for gas optimization opportunities, detects bugs, and identifies vulnerabilities. By providing actionable recommendations, it helps developers improve the security and performance of their contracts, reducing costs and risks.
      </p>
    ),
  },
  {
    title: "What is the Hits Algorithm, and how does it work?",
    content: (
      <p>
       The Hits Algorithm evaluates blockchain users and contracts by analyzing their reliability, transaction patterns, and contributions to the ecosystem. It identifies valuable users and contracts while flagging potentially unreliable ones. This helps developers and businesses make informed decisions about which addresses or contracts to trust.
      </p>
    ),
  },
  {
    title: "Can I use Opticks' tools for free?",
    content: (
      <p>
       We are building our solutions in public and offering early access to many of our tools. While some features may remain free, advanced functionality and premium tools might be available under subscription or usage-based pricing. Stay tuned for updates on pricing and access tiers.
      </p>
    ),
  },
  {
    title: "How secure is Opticks for analyzing contracts or addresses?",
    content: (
      <p>
      Security is a top priority at Opticks. Our tools are designed to process data locally or securely, ensuring user privacy and the integrity of the analysis. Additionally, we use industry-standard encryption and best practices to safeguard sensitive information.
      </p>
    ),
  },

  {
    title: "How can I get involved?",
    content: (
      <p>
        There are multiple ways to get involved:
        <br />
        <br />- <b>As a user:</b> You can use the platform..
        <br />
        <br />- <b>As a developer:</b> You can contribute to the codebase,
        propose features, or build on top of the 0pticks.
        <br />
        <br />- <b>As an investor:</b> You can reach out to us at{" "}
        <a
          className="text-secondary"
          target="_blank"
          href="mailto:contact@marsian.dev"
        >
          contact@marsian.dev
        </a>{" "}
        or directly through our contact form.
      </p>
    ),
  },
  {
    title: "Where can I learn more?",
    content: (
      <p>
        For more detailed information, please checkout our website, read our
        whitepaper, or reach out to us directly through our contact form. Follow
        us on social media for regular updates and announcements.
      </p>
    ),
  },
];

export default function Faqs() {
  return (
    <section
      id="faq"
      className="p-page relative mt-[20vh] flex mobile:mt-[15vh] mobile:flex-col"
    >
      <div className="top-[15vh] mt-2 mobile:mt-0 widescreen:sticky widescreen:pr-[10%]">
        <span className="text-bg-gradient bg-gradient-to-br from-accent to-secondary font-poppins text-sm tracking-[7px] opacity-60">
          FAQ
        </span>

        <h1 className="mt-6 font-raleway text-5xl font-semibold leading-none mobile:text-3xl">
          <span className="block font-light">Frequently</span>
          Asked Questions
        </h1>
      </div>

      <div className="flex flex-1 flex-col gap-y-6 mobile:mt-10">
        {faqs.map((faq, key) => (
          <Faq faq={faq} key={key} />
        ))}
      </div>

      <div
        className="absolute left-1/2 top-[45vh] -z-10 h-[30vh] w-[75vw] -translate-x-1/2 rotate-[20deg] rounded-full bg-gradient-to-l from-primary 
        to-secondary opacity-20 blur-[111px]"
      />
    </section>
  );
}

function Faq(props: { faq: { title: string; content: React.ReactNode } }) {
  const [open, setOpen] = useState(false);

  const { faq } = props;

  return (
    <div className="">
      <div
        className="flex cursor-pointer items-center justify-between border border-front border-opacity-25 bg-foreground bg-opacity-10 px-8 py-4"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h4 className="text-xl font-light mobile:text-xl">{faq.title}</h4>
        <button
          className="group relative flex aspect-square h-[1.3em] scale-200 items-center justify-center border border-front border-opacity-20 bg-foreground
        bg-opacity-10 text-3xl font-extralight duration-300"
        >
          <span
            className={twMerge(
              "duration-inherit",
              open && "-rotate-90 scale-150 opacity-0"
            )}
          >
            +
          </span>
          <span className="absolute-center scale-150">-</span>
        </button>
      </div>
      {open && (
        <div className="border border-front border-t-transparent border-opacity-30 px-8 py-6">
          {faq.content}
        </div>
      )}
    </div>
  );
}
