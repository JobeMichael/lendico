import {
  CALCULATE_INSTALLMENT_FAILURE,
  CALCULATE_INSTALLMENT_REQUEST,
  CALCULATE_INSTALLMENT_SUCCESS,
} from "../actions/loanCalculator";
import loanCalReducer, { initialState } from "./loanCalculator";

describe("applications reducer", () => {
  it("handles request action", () => {
    const requestAction = {
      type: CALCULATE_INSTALLMENT_REQUEST,
    };

    expect(loanCalReducer(initialState, requestAction)).toEqual({
      loading: true,
      error: null,
      installment: 0,
    });
  });

  it("handles success action", () => {
    const successAction = {
      type: CALCULATE_INSTALLMENT_SUCCESS,
      payload: {
        monthlyInstallment: 20,
      },
    };

    expect(loanCalReducer(initialState, successAction)).toEqual({
      error: null,
      installment: 20,
      loading: false,
    });
  });

  it("handles failure action", () => {
    const failureAction = {
      type: CALCULATE_INSTALLMENT_FAILURE,
      payload: {
        error: "Error",
      },
    };

    expect(loanCalReducer(initialState, failureAction)).toEqual({
      error: "Error",
      installment: 0,
      loading: false,
    });
  });

  it("handles anything to default state ", () => {
    const defaultAction = {
      type: "ANYTHING",
    };

    expect(loanCalReducer(initialState, defaultAction)).toEqual({
      error: null,
      installment: 0,
      loading: false,
    });
  });
});
