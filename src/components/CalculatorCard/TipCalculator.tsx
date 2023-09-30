import { useEffect } from "react";
import CountUp from "react-countup";
import useCalculatorStore from "../../store/useCalculatorStore";

function TipCalculator() {
  const billState = useCalculatorStore((state) => state.bill);
  const tipState = useCalculatorStore((state) => state.tipPercentage);
  const numOfPeopleState = useCalculatorStore((state) => state.numOfPeople);
  const tipAmountPerPerson = useCalculatorStore(
    (state) => state.calculatedTipPerPerson,
  );
  const totalAmountPerPerson = useCalculatorStore(
    (state) => state.calculatedTotalPerPerson,
  );
  const calculateTipAmount = useCalculatorStore(
    (state) => state.calculateTipAmount,
  );
  const calculateTotalPerPerson = useCalculatorStore(
    (state) => state.calculateTotalPerPerson,
  );
  const resetCalculator = useCalculatorStore(
    (state) => state.resetTipAndTotalCalculations,
  );

  useEffect(() => {
    calculateTipAmount();
    calculateTotalPerPerson();
  }, [
    billState,
    tipState,
    numOfPeopleState,
    calculateTipAmount,
    calculateTotalPerPerson,
  ]);

  return (
    <div
      className="
        flex w-full flex-col justify-between rounded-2xl bg-userVeryDarkCyan px-6 pb-6 pt-11
        lg:mt-0 lg:h-full lg:basis-1/2 lg:pb-9
        "
    >
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="select-none text-sm text-userLightGrayishCyan lg:text-base">
              Tip Amount
            </h3>
            <p className="select-none text-xs text-userGrayishCyan lg:text-sm">
              / person
            </p>
          </div>
          <p className="text-3xl text-userStrongCyan lg:text-5xl">
            <CountUp
              preserveValue
              end={tipAmountPerPerson}
              duration={1}
              decimals={2}
              prefix="$"
              decimal="."
            />
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h3 className="select-none text-sm text-userLightGrayishCyan lg:text-base">
              Total
            </h3>
            <p className="select-none text-xs text-userGrayishCyan lg:text-sm">
              / person
            </p>
          </div>
          <p className="text-3xl text-userStrongCyan lg:text-5xl">
            <CountUp
              preserveValue
              end={totalAmountPerPerson}
              duration={1}
              decimals={2}
              prefix="$"
              decimal="."
            />
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => resetCalculator()}
        disabled={tipAmountPerPerson === 0}
        className="
        disabled:bg-userDisabledButtonBg disabled:text-userDisabledButtonText
          mt-8 w-full rounded-md
        bg-userStrongCyan py-2 text-xl text-userVeryDarkCyan lg:py-3 lg:text-2xl"
      >
        RESET
      </button>
    </div>
  );
}

export default TipCalculator;
