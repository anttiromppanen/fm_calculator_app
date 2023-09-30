import { useState } from "react";
import useCalculatorStore from "../../store/useCalculatorStore";
import StyledRadioButton from "./StyledRadioButton";
import ErrorMessage from "./ErrorMessage";

function PercentageSelector() {
  const percentageState = useCalculatorStore((state) => state.tipPercentage);
  const setTipPercentage = useCalculatorStore(
    (state) => state.setTipPercentage,
  );
  const [customValueInputHasBeenClicked, setCustomValueInputHasBeenClicked] =
    useState(false);

  return (
    <div>
      <h2 className="text-userDarkGrayishCyan lg:text-lg">Select Tip %</h2>
      <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
        <li>
          <StyledRadioButton value="5" />
        </li>
        <li>
          <StyledRadioButton value="10" />
        </li>
        <li>
          <StyledRadioButton value="15" />
        </li>
        <li>
          <StyledRadioButton value="25" />
        </li>
        <li>
          <StyledRadioButton value="50" />
        </li>
        <li>
          <input
            type="number"
            min="1"
            placeholder="Custom"
            onFocus={(e) => setTipPercentage(e.target.value)}
            onChange={(e) => setTipPercentage(e.target.value)}
            onBlur={() => setCustomValueInputHasBeenClicked(true)}
            className={`
              block w-full cursor-pointer rounded-lg bg-userVeryLightGrayishCyan py-2
              text-center text-xl text-userVeryDarkCyan placeholder:text-userDarkGrayishCyan
              hover:outline hover:outline-2 hover:outline-userStrongCyan
            focus:bg-userWhite focus:outline focus:outline-2 focus:outline-userGrayishCyan
              lg:text-2xl
              ${
                Number(percentageState) <= 0 &&
                customValueInputHasBeenClicked &&
                "!outline-userErrorOrange !outline !outline-2"
              }
            `}
          />
        </li>
      </ul>
      <ErrorMessage
        showWhen={
          customValueInputHasBeenClicked && Number(percentageState) <= 0
        }
      />
    </div>
  );
}

export default PercentageSelector;
