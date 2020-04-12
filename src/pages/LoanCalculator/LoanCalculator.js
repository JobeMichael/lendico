import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import validation from "../../helper/validation";
import * as loanCalculatorActions from "../../store/actions/loanCalculator";
import "./LoanCalculator.css";

const LoanCalculator = () => {
  const { installment, loading, error: submitError } = useSelector(
    (state) => state.loanCalculator
  );
  console.log("LoanCalculator -> submitError", submitError);

  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });

  const onSubmit = async (formValues) => {
    dispatch(loanCalculatorActions.calculateInstallment());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <div className="monthly-rate">
        {loading ? <Spinner /> : <MonthlyRate monthlyRate={installment} />}
      </div>
    </>
  );
};

export default LoanCalculator;
