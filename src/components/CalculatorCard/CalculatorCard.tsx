import PercentageSelector from "./PercentageSelector";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import personIcon from "../../assets/images/icon-person.svg";
import SmallOutput from "./SmallOutput";
import TipCalculator from "./TipCalculator";
import useCalculatorStore from "../../store/useCalculatorStore";

function CalculatorCard() {
  const billAmount = useCalculatorStore((state) => state.bill);
  const numOfPeople = useCalculatorStore((state) => state.numOfPeople);
  const setBillAmount = useCalculatorStore((state) => state.setBill);
  const setNumOfPeople = useCalculatorStore((state) => state.setNumOfPeople);

  return (
    <div
      className="
      flex h-fit w-full flex-col rounded-t-3xl bg-userWhite px-8 py-9
      sm:w-2/3 lg:w-full
      lg:flex-row lg:items-center lg:justify-center lg:rounded-3xl lg:p-8"
    >
      <div className="lg:basis-1/2 lg:pr-12">
        <SmallOutput
          heading="Bill"
          leftIcon={dollarIcon}
          value={billAmount.toString()}
          handleChange={setBillAmount}
        />
        <PercentageSelector />
        <div className="mt-10" />
        <SmallOutput
          heading="Number of People"
          leftIcon={personIcon}
          value={numOfPeople.toString()}
          handleChange={setNumOfPeople}
        />
      </div>
      <TipCalculator />
    </div>
  );
}

export default CalculatorCard;
