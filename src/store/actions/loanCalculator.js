import errorHandler from "../../services/errorHandler";
import loanCalculator from "../../services/loanCalculator";

export const CALCULATE_INSTALLMENT_REQUEST = "CALCULATE_INSTALLMENT_REQUEST";
export const CALCULATE_INSTALLMENT_SUCCESS = "CALCULATE_INSTALLMENT_SUCCESS";
export const CALCULATE_INSTALLMENT_FAILURE = "CALCULATE_INSTALLMENT_FAILURE";

export const calculateInstallment = (formValues) => async (dispatch) => {
  dispatch(calculateInstallmentRequest());

  try {
    const res = await loanCalculator.postLoanCalculator(
      "loanCalculator",
      formValues
    );
    dispatch(calculateInstallmentSuccess(res.data));
  } catch (error) {
    dispatch(calculateInstallmentFailure(errorHandler(error)));
  }
};

export const calculateInstallmentSuccess = (data) => ({
  type: CALCULATE_INSTALLMENT_SUCCESS,
  payload: {
    ...data,
  },
});

export const calculateInstallmentRequest = () => ({
  type: CALCULATE_INSTALLMENT_REQUEST,
});

export const calculateInstallmentFailure = (error) => ({
  type: CALCULATE_INSTALLMENT_FAILURE,
  payload: {
    error,
  },
});
