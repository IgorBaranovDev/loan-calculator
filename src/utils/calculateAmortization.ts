import { IAmortizationScheduleItem } from "../components/LoanForm/LoanFormTypes";

export const calculateAmortization = (
  amountCredit: number,
  term: number,
  rate: number
): IAmortizationScheduleItem[] => {
  const newShedule: IAmortizationScheduleItem[] = [];
  const monthlyRate = rate / 100 / 12;
  let balance = amountCredit;

  for (let month = 1; month <= term; month++) {
    const interest = balance * monthlyRate;
    const principal = amountCredit / term + interest;
    balance -= amountCredit / term;
    newShedule.push({ month, principal, interest, balance });
  }

  return newShedule;
};
