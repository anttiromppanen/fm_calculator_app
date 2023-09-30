import useCalculatorStore from "../../store/useCalculatorStore";

interface Props {
  value: string;
}

function StyledRadioButton({ value }: Props) {
  const tipPercentage = useCalculatorStore((state) => state.tipPercentage);
  const setTipPercentage = useCalculatorStore(
    (state) => state.setTipPercentage,
  );

  const handleChange = () => {
    setTipPercentage(value);
  };

  return (
    <>
      <input
        type="radio"
        name="tip_percentage"
        id={value}
        value={value}
        checked={Number(tipPercentage) === Number(value)}
        onChange={handleChange}
        className="peer sr-only"
      />
      <label
        htmlFor={value}
        className="
          block w-full cursor-pointer rounded-lg bg-userVeryDarkCyan py-2
          text-center text-xl text-userVeryLightGrayishCyan
        peer-checked:bg-userStrongCyan peer-checked:text-userVeryDarkCyan
          lg:text-2xl"
      >
        {value}%
      </label>
    </>
  );
}

export default StyledRadioButton;
