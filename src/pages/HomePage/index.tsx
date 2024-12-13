import React from "react";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Faqs from "./components/Faqs";
import CursorGlow from "../../common/CursorGlow";

export default function () {
  return (
    <>
      <CursorGlow />
      <Hero />
      <Solutions />
      <Faqs />
    </>
  );
}
