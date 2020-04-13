import { act, cleanup, fireEvent, render } from "@testing-library/react";
import MutationObserver from "mutation-observer";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import LoanCalculator from "./LoanCalculator";

global.MutationObserver = MutationObserver;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<LoanCalculator />", () => {
  afterEach(cleanup);

  const store = mockStore({
    loanCalculator: {
      installment: 0,
      loading: false,
      error: null,
    },
  });

  let renderResult;

  describe("renders", () => {
    it("renders page properly", () => {
      act(() => {
        renderResult = render(
          <Provider store={store}>
            <LoanCalculator />
          </Provider>
        );
      });
      expect(renderResult.baseElement).toMatchSnapshot();

      const selectDuration = renderResult.baseElement.querySelector(
        "select[name='duration']"
      );
      const inputAmount = renderResult.baseElement.querySelector(
        "input[name='amount']"
      );

      fireEvent.change(selectDuration, {
        target: { value: "3" },
      });
      fireEvent.change(inputAmount, {
        target: { value: "99" },
      });

      console.log(selectDuration.value);
      console.log(inputAmount.value);

      fireEvent.blur(inputAmount);
      console.log(inputAmount.props);

      fireEvent.change(inputAmount, {
        target: { value: "99999999" },
      });

      fireEvent.blur(inputAmount);
      console.log(inputAmount.value);

      const button = renderResult.baseElement.querySelector("button");
      console.log("button", button.innerHTML);
      act(() => {
        fireEvent.click(button);

        const expectedActions = [{ type: "CALCULATE_INSTALLMENT_REQUEST" }];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
