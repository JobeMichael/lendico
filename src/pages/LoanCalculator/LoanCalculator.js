import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  // eslint-disable-next-line no-unused-vars
  const [duration, setDuration] = useState(1);
  const { installment, loading, error: submitError } = useSelector(
    (state) => state.loanCalculator
  );
  console.log("LoanCalculator -> submitError", submitError);

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });

  const onSubmit = async (formValues) => {
    console.log(formValues);
    dispatch(loanCalculatorActions.calculateInstallment({ amount, duration }));
  };

  const yearOptions = [...Array(5)].map((item, index) => ({
    value: index + 1,
    label: `${index + 1} Jahre`,
  }));

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const amountBlurHandler = () => {
    if (amount < 10000) {
      setAmount(10000);
    } else {
      setAmount(100000);
    }
  };

  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };

  console.log("Rendering count");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields-wrapper">
          <NumberFormat
            customInput={Input}
            thousandSeparator="."
            decimalSeparator=","
            name="amount"
            label="Amount"
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
            value={amount}
            infoMsg="EUR 10.000 - 100.000"
            onValueChange={({ formattedValue, value }) => {
              setDuration(value);
            }}
          />
          <Select
            name="duration"
            label="Duration"
            errors={errors}
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
