import {
  CALCULATE_INSTALLMENT_FAILURE,
  CALCULATE_INSTALLMENT_REQUEST,
  CALCULATE_INSTALLMENT_SUCCESS,
} from "../actions/loanCalculator";

export const initialState = {
  loading: false,
  installment: 0,
  error: null,
};

export default function loanCalculator(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_INSTALLMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CALCULATE_INSTALLMENT_SUCCESS:
      return {
        loading: false,
        error: null,
        installment: action.payload.monthlyInstallment,
      };
    case CALCULATE_INSTALLMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
