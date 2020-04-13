import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as loanCalculatorActions from "../../store/actions/loanCalculator";
import "./LoanCalculator.css";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(1);
  // TODO Error handler
  // eslint-disable-next-line no-unused-vars
  const { installment, loading, error } = useSelector(
    (state) => state.loanCalculator
  );
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loanCalculatorActions.calculateInstallment({ amount, duration }));
  };

  const amountBlurHandler = () => {
    if (amount < 10000) {
      setAmount(10000);
    } else if (amount > 100000) {
      setAmount(100000);
    }
  };

  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };

  const yearOptions = [...Array(5)].map((item, index) => ({
    value: index + 1,
    label: `${index + 1} Jahre`,
  }));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="fields-wrapper">
          <NumberFormat
            customInput={Input}
            thousandSeparator="."
            decimalSeparator=","
            name="amount"
            label="Amount"
            onBlur={amountBlurHandler}
            value={amount}
            infoMsg="EUR 10.000 - 100.000"
            onValueChange={(values) => {
              const { value } = values;
              setAmount(value);
            }}
          />
          <Select
            name="duration"
            label="Duration"
            optionsData={yearOptions}
            onChange={durationChangeHandler}
            value={duration}
            infoMsg="1 - 5 Jahre"
          />
          <Button disabled={false}>OK</Button>
        </div>
      </form>
      <div className="monthly-rate">
        {loading ? <Spinner /> : <MonthlyRate monthlyRate={installment} />}
      </div>
    </>
  );
};

export default LoanCalculator;
