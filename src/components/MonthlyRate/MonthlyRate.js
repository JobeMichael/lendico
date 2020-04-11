import React from "react";
import "./MonthlyRate.css";

const MonthlyRate = ({ monthlyRate }) => {
  return (
    <div className="monthly-rate">
      {monthlyRate ? (
        <>
          <span className="monthly-rate-label">Monthly Installment :</span>
          <span className="monthly-rate-value">{`${monthlyRate} EUR`}</span>
        </>
      ) : (
        <p>Enter Amount and duration to calculate the installment</p>
      )}
    </div>
  );
};

export default MonthlyRate;
