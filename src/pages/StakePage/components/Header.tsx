export default function Header() {
    return (
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl tracking-wide font-semibold">
            Secure and Stable way
            <br />
            to get <span className="text-primary font-bold">Voting Rights.</span>
          </h1>
          <button className="mt-6 from-primary/80 to-secondary/80 bg-gradient-to-tr py-2 px-4 rounded-md">
            Stake Now
          </button>
        </div>
        <div className="basis-1/3 rounded-2xl">
          <img
            src="https://coinstats.app/blog/wp-content/uploads/2023/05/How-to-Buy-Sui-800x450.webp"
            className="rounded-2xl"
          />
        </div>
      </div>
    );
  }