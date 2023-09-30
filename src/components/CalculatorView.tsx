import logo from "../assets/images/logo.svg";
import CalculatorCard from "./CalculatorCard/CalculatorCard";

function CalculatorView() {
  return (
    <div className="flex h-full w-full max-w-[920px] flex-col items-center lg:h-auto">
      <img
        src={logo}
        alt="Logo"
        className="my-10 h-[57px] w-[90px] select-none lg:mb-20 lg:mt-40"
      />
      <CalculatorCard />
    </div>
  );
}

export default CalculatorView;
