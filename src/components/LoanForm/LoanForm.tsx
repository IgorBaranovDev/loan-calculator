import React, { useState } from "react";
import { ILoanForm } from "./LoanFormTypes";
import { calculateAmortization } from "../../utils/calculateAmortization";
import { Button, Form, Input } from "./LoanFormStyled";

const LoanForm: React.FC<ILoanForm> = ({ setSchedule }) => {
  const [amountCredit, setAmountCredit] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newShedule = calculateAmortization(amountCredit, term, rate);
    setSchedule(newShedule);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Amount of credit:
        <Input
          type="number"
          value={amountCredit}
          onChange={(e) => {
            setAmountCredit(Number(e.target.value));
          }}
        />
      </label>
      <label>
        Duration (in months):
        <Input
          type="number"
          value={term}
          onChange={(e) => {
            setTerm(Number(e.target.value));
          }}
        />
      </label>
      <label>
        Interest rate:
        <Input
          type="number"
          value={rate}
          onChange={(e) => {
            setRate(Number(e.target.value));
          }}
        />
      </label>
      <Button type="submit">Calculate</Button>
    </Form>
  );
};

export default LoanForm;
