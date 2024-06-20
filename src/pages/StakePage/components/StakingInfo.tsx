export default function StakingInfo() {
  return (
    <div className="flex justify-between mt-12 gap-x-8">
      <div className="flex flex-col items-center gap-y-2 bg-foreground border border-front/10 p-6 rounded-md basis-1/3">
        <p className="text-primary font-bold">Total Staking Assets</p>
        <h1 className="text-2xl font-bold flex gap-x-2 items-center">
          234,434,423.240{" "}
          <img
            src="https://europe1.discourse-cdn.com/sui/original/3X/5/9/59ecd23e9e6a6c765e09f766856b3528b283462f.png"
            className="h-8"
          />
        </h1>
        <p className="text-front/60">≈ $ 325,124.66</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 bg-foreground border border-front/10 p-6 rounded-md basis-1/3">
        <p className="text-primary font-bold">Your Staking Assets</p>
        <h1 className="text-2xl font-bold flex gap-x-2 items-center">
          4,423.240{" "}
          <img
            src="https://europe1.discourse-cdn.com/sui/original/3X/5/9/59ecd23e9e6a6c765e09f766856b3528b283462f.png"
            className="h-8"
          />
        </h1>
        <p className="text-front/60">≈ $ 5.678</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 bg-foreground border border-front/10 p-6 rounded-md basis-1/3">
        <p className="text-primary font-bold">Your Rewards Assets</p>
        <h1 className="text-2xl font-bold flex gap-x-2 items-center">
          67,423.240{" "}
          <img
            src="https://europe1.discourse-cdn.com/sui/original/3X/5/9/59ecd23e9e6a6c765e09f766856b3528b283462f.png"
            className="h-8"
          />
        </h1>
        <p className="text-front/60">≈ $ 10.678</p>
      </div>
    </div>
  );
}
