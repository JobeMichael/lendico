import React from "react";
import "./MonthlyRate.css";

const MonthlyRate = ({ monthlyRate }) => {
  return (
    <>
      {monthlyRate ? (
        <>
          <span className="monthly-rate-label">Monthly Installment :</span>
          <span className="monthly-rate-value">{`${monthlyRate} EUR`}</span>
        </>
      ) : (
        <p data-testid="infoText">
          Enter Amount and duration to calculate the installment
        </p>
      )}
    </>
  );
};

export default MonthlyRate;
