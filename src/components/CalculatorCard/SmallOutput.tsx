import { ChangeEvent, useState } from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  heading: string;
  leftIcon: string;
  value: string;
  handleChange: (e: string) => void;
};

function SmallOutput({ heading, leftIcon, value, handleChange }: Props) {
  const [inputHasBeenTouched, setInputHasBeenTouched] = useState(false);

  const handleBlur = () => {
    setInputHasBeenTouched(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 0) setInputHasBeenTouched(false);
    handleChange(e.target.value);
  };

  return (
    <>
      <h2 className="mb-2 text-userDarkGrayishCyan lg:text-lg">{heading}</h2>
      <div className="relative">
        <input
          type="number"
          min="1"
          step="any"
          value={value}
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="0"
          className={`
          border- w-full cursor-pointer rounded-md bg-userVeryLightGrayishCyan
          px-4 py-2 text-right text-2xl text-userVeryDarkCyan caret-userStrongCyan
          hover:outline hover:outline-2 hover:outline-userStrongCyan
          focus:bg-userWhite focus:outline focus:outline-2 focus:outline-userGrayishCyan
          ${
            Number(value) <= 0 &&
            inputHasBeenTouched &&
            "!outline-userErrorOrange !outline !outline-2"
          }`}
        />
        <img
          src={leftIcon}
          alt=""
          className="absolute left-4 top-1/2 h-[18px] w-[12px] -translate-y-1/2 select-none"
        />
      </div>
      <ErrorMessage showWhen={Number(value) <= 0 && inputHasBeenTouched} />
    </>
  );
}

export default SmallOutput;
