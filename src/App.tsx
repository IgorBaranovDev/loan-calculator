import React, { useState } from "react";
import Header from "./components/Header/Header";
import LoanForm from "./components/LoanForm/LoanForm";
import AmortizationSchedule from "./components/AmortizationSchedule/AmortizationSchedule";
import { IAmortizationScheduleItem } from "./components/LoanForm/LoanFormTypes";
import { AppContainer } from "./AppStyled";

const App: React.FC = () => {
  const [schedule, setSchedule] = useState<IAmortizationScheduleItem[]>([]);

  return (
    <AppContainer>
      <Header titel="Calculator 🧮" />
      <LoanForm setSchedule={setSchedule} />
      {schedule.length > 0 && <AmortizationSchedule schedule={schedule} />}
    </AppContainer>
  );
};

export default App;
