import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import validation from "../../helper/validation";
import loanCalculator from "../../services/loanCalculator";
import "./LoanCalculator.css";

const LoanCalculator = () => {
  const [monthlyInstallment, setMonthlyInstallment] = useState("");

  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });
  const onSubmit = async (formValues) => {
    console.log(formValues);
    const { amount, duration } = formValues;
    const { data } = await loanCalculator.postLoanCalculator("loanCalculator", {
      amount,
      duration,
    });
    setMonthlyInstallment(data?.monthlyInstallment || "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ErrorMessage</h1>
        <div className="fields-wrapper">
          <Input
            name="amount"
            label="Amount"
            type="number"
            inputRef={register(validation.amount)}
            errors={errors}
          />
          <Input
            name="duration"
            label="Duration"
            type="number"
            inputRef={register(validation.duration)}
            errors={errors}
          />

          <Button disabled={false}>OK</Button>
        </div>
      </form>

      {/* <Spinner /> */}
      <MonthlyRate monthlyRate={monthlyInstallment} />
    </>
  );
};

export default LoanCalculator;
