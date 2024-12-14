import React from "react";
import { Link } from "react-router-dom";

export default function ConnectWallet() {

  return (
    <div className="m-10">
      <Link to="https://opticks-dapp.vercel.app" >
        <button className="whitespace-nowrap before:absolute-cover relative overflow-hidden rounded-full bg-gradient-to-bl from-primary to-transparent px-10 py-3 font-raleway font-semibold tracking-wider text-front
      duration-500 before:-z-1 before:bg-primary before:opacity-10 before:duration-inherit hover:scale-90 hover:text-back hover:opacity-70 hover:before:opacity-100">
          Launch Dapp
        </button>
      </Link>
    </div>
  );
}
