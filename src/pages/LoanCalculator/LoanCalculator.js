import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
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
    console.log(formValues);
    dispatch(loanCalculatorActions.calculateInstallment(formValues));
  };

  const yearOptions = [...Array(4)].map((item, index) => ({
    value: index + 1,
    label: `${index + 1} year`,
  }));

  console.log(yearOptions);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields-wrapper">
          <Input
            defaultValue="10000"
            name="amount"
            label="Amount"
            type="number"
            inputRef={register(validation.amount)}
            errors={errors}
          />
          <Select
            name="duration"
            label="Duration"
            errors={errors}
            optionsData={yearOptions}
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
