import React from "react";
import { useSelector } from "react-redux";
import Calculator from "../../components/Calculator/Calculator";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./LoanCalculator.css";

const LoanCalculator = () => {
  const { installment, loading, error } = useSelector(
    (state) => state.loanCalculator
  );

  return (
    <>
      <Calculator />
      <div className="monthly-rate">
        {loading ? (
          <Spinner />
        ) : (
          <MonthlyRate monthlyRate={installment} error={error} />
        )}
      </div>
    </>
  );
};

export default LoanCalculator;
