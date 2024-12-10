export default function Header() {
  return (
    <div className="flex justify-between items-center pt-6">
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
     <div className="relative basis-1/3 rounded-2xl flex overflow-hidden">
     <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
     <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
  <img
    src="/public/images/yellow_wave.webp"
    alt="Wave"
    className="absolute -z-10 w-[150%] -translate-y-6"
  />
  <img
    src="/public/icons/bsc.webp"
    alt="BSC Icon"
    className="rounded-2xl w-[50%] translate-x-20"
  />
</div>
    </div>
  );
}
