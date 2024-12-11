export default function Header() {
    return (
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl tracking-wide font-semibold">
            Secure and Stable way
            <br />
            to get <span className="text-primary font-bold">Voting Rights.</span>
          </h1>
          <button
            className="mt-6 from-primary/80 to-secondary/80 bg-gradient-to-tr py-2 px-4 rounded-md hover:scale-105 duration-300 ease-in"
            onClick={() => {
              document
                .querySelector("section#staking-dialogue")
                ?.scrollIntoView();
            }}
          >
            Stake Now
          </button>
        </div>
        <div className="aspect-video basis-1/3 rounded-2xl">
          <img src="/images/galaxy-people-stakers.jpg" className="rounded-2xl" />
        </div>
      </div>
    );
}
    