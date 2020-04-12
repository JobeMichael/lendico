import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import validation from "../../helper/validation";
import * as loanCalculatorActions from "../../store/actions/loanCalculator";
// import loanCalculator from "../../services/loanCalculator";
import "./LoanCalculator.css";

const LoanCalculator = () => {
  const { installment, loading } = useSelector((state) => state.loanCalculator);

  // const [monthlyInstallment, setMonthlyInstallment] = useState("");
  // eslint-disable-next-line no-unused-vars
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });

  const onSubmit = async (formValues) => {
    dispatch(loanCalculatorActions.calculateInstallment());
    // setLoading(true);
    // const { amount, duration } = formValues;
    // const { data } = await loanCalculator.postLoanCalculator("loanCalculator", {
    //   amount,
    //   duration,
    // });
    // // setMonthlyInstallment(data?.monthlyInstallment || "");
    // setLoading(false);
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
