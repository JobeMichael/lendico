import axios from "axios";

export const CALCULATE_INSTALLMENT_REQUEST = "CALCULATE_INSTALLMENT_REQUEST";
export const CALCULATE_INSTALLMENT_SUCCESS = "CALCULATE_INSTALLMENT_SUCCESS";
export const CALCULATE_INSTALLMENT_FAILURE = "CALCULATE_INSTALLMENT_FAILURE";

export const calculateInstallment = () => {
  return (dispatch) => {
    dispatch(calculateInstallmentRequest());

    axios
      .post(`https://5e900510fe7f2a00165ef778.mockapi.io/api/loanCalculator`)
      .then((res) => {
        dispatch(calculateInstallmentSuccess(res.data));
      })
      .catch((err) => {
        dispatch(calculateInstallmentFailure(err.message));
      });
  };
};

const calculateInstallmentSuccess = (data) => ({
  type: CALCULATE_INSTALLMENT_SUCCESS,
  payload: {
    ...data,
  },
});

const calculateInstallmentRequest = () => ({
  type: CALCULATE_INSTALLMENT_REQUEST,
});

const calculateInstallmentFailure = (error) => ({
  type: CALCULATE_INSTALLMENT_FAILURE,
  payload: {
    error,
  },
});
