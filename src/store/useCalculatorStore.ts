import { create } from "zustand";

const setToZeroIfValueIsNotPositive = (num: string): number => {
  const numAsNumber = Number(num);
  return numAsNumber >= 1 ? numAsNumber : 0;
};

const isValidNumber = (num: number) =>
  !Number.isNaN(num) && !Number.isFinite(num) && typeof num === "number"
    ? 0
    : num;

interface State {
  bill: string;
  numOfPeople: string;
  tipPercentage: string;
  calculatedTipPerPerson: number;
  calculatedTotalPerPerson: number;
}

interface Actions {
  setBill: (num: string) => void;
  setNumOfPeople: (num: string) => void;
  setTipPercentage: (num: string) => void;
  calculateTipAmount: () => void;
  calculateTotalPerPerson: () => void;
  resetTipAndTotalCalculations: () => void;
}

const useCalculatorStore = create<State & Actions>((set, get) => ({
  bill: "",
  numOfPeople: "1",
  tipPercentage: "0",
  calculatedTipPerPerson: 0.0,
  calculatedTotalPerPerson: 0.0,
  setBill: (num: string) =>
    set(() => ({ bill: setToZeroIfValueIsNotPositive(num).toString() })),
  setNumOfPeople: (num: string) =>
    set(() => ({ numOfPeople: setToZeroIfValueIsNotPositive(num).toString() })),
  setTipPercentage: (num: string) =>
    set(() => ({
      tipPercentage: setToZeroIfValueIsNotPositive(num).toString(),
    })),
  calculateTipAmount: () => {
    const billAsNum = Number(get().bill);
    const tipAsNum = Number(get().tipPercentage);
    const numOfPeopleAsNum = Number(get().numOfPeople);

    const tipPerPerson = (billAsNum * (tipAsNum / 100)) / numOfPeopleAsNum;

    set({ calculatedTipPerPerson: isValidNumber(tipPerPerson) });
  },
  calculateTotalPerPerson: () => {
    const billAsNum = Number(get().bill);
    const tipAsNum = Number(get().tipPercentage);
    const numOfPeopleAsNum = Number(get().numOfPeople);

    const totalPerPerson =
      (billAsNum + billAsNum * (tipAsNum / 100)) / numOfPeopleAsNum;

    set({ calculatedTotalPerPerson: isValidNumber(totalPerPerson) });
  },
  resetTipAndTotalCalculations: () =>
    set({
      calculatedTipPerPerson: 0.0,
      calculatedTotalPerPerson: 0.0,
      bill: "1",
      numOfPeople: "1",
      tipPercentage: "",
    }),
}));

export default useCalculatorStore;
