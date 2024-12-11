import Header from "./components/Header";
import StakingDialogue from "./components/StakingDialogue";
import StakingInfo from "./components/StakingInfo";
import StakingWorking from "./components/StakingWorking";

export default function StakePage() {
  return (
    <div className="pt-24 p-page">
      <Header />
      <StakingInfo />
      {/* <StakingWorking /> */}
      <StakingDialogue />
    </div>
  );
}