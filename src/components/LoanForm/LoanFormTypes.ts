export interface ILoanForm {
  setSchedule: React.Dispatch<
    React.SetStateAction<IAmortizationScheduleItem[]>
  >;
}

export interface IAmortizationScheduleItem {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}
