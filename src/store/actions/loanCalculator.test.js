import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState } from "../reducers/loanCalculator";
import {
  calculateInstallment,
  calculateInstallmentFailure,
  calculateInstallmentRequest,
  calculateInstallmentSuccess,
  CALCULATE_INSTALLMENT_FAILURE,
  CALCULATE_INSTALLMENT_REQUEST,
  CALCULATE_INSTALLMENT_SUCCESS,
} from "./loanCalculator";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockData = {
  url: "https://5e900510fe7f2a00165ef778.mockapi.io/api/loanCalculator",
  response: { data: [{ amount: "1000" }] },
};

describe("loanCalculator", () => {
  describe("actions", () => {
    it("calculateInstallmentRequest creates an action", () => {
      const expectedAction = {
        type: CALCULATE_INSTALLMENT_REQUEST,
      };

      expect(calculateInstallmentRequest()).toEqual(expectedAction);
    });

    it("calculateInstallmentSuccess creates an action", () => {
      const expectedAction = {
        type: CALCULATE_INSTALLMENT_SUCCESS,
        payload: {},
      };

      expect(calculateInstallmentSuccess({})).toEqual(expectedAction);
    });

    it("calculateInstallmentFailure creates an action", () => {
      const expectedAction = {
        type: CALCULATE_INSTALLMENT_FAILURE,
        payload: { error: undefined },
      };

      expect(calculateInstallmentFailure()).toEqual(expectedAction);
    });
  });

  describe("async actions", () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("calculateInstallment success", async (done) => {
      const { url, response } = mockData;
      moxios.stubRequest(url, { status: 200, response });

      const store = mockStore({
        loanCalculator: initialState,
      });
      const expectedActions = [
        { type: CALCULATE_INSTALLMENT_REQUEST },
        {
          type: CALCULATE_INSTALLMENT_SUCCESS,
          payload: response,
        },
      ];

      await store.dispatch(calculateInstallment());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });

    it("calculateInstallment failure", async (done) => {
      const { url } = mockData;
      moxios.stubRequest(url, { status: 400 });

      const store = mockStore({
        loanCalculator: initialState,
      });
      const expectedActions = [
        { type: CALCULATE_INSTALLMENT_REQUEST },
        {
          type: CALCULATE_INSTALLMENT_FAILURE,
          payload: { error: "Something wrong with the response, Try agin!" },
        },
      ];

      await store.dispatch(calculateInstallment());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
