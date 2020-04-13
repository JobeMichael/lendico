import { act, cleanup, fireEvent, render } from "@testing-library/react";
import MutationObserver from "mutation-observer";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Calculator from "./Calculator";

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
    const setup = () => (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );

    it("renders page properly", () => {
      act(() => {
        renderResult = render(setup());
      });

      expect(renderResult.baseElement).toMatchSnapshot();
    });

    it("should change input data properly", () => {
      act(() => {
        renderResult = render(setup());
      });

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
        target: { value: "9999" },
      });

      expect(selectDuration.value).toBe("3");
      expect(inputAmount.value).toBe("9.999");

      fireEvent.blur(inputAmount);

      expect(inputAmount.value).toBe("10.000");

      fireEvent.change(inputAmount, {
        target: { value: "99999999" },
      });
      fireEvent.blur(inputAmount);

      expect(inputAmount.value).toBe("100.000");
    });

    it("should submit the form", () => {
      act(() => {
        renderResult = render(setup());
      });
      const button = renderResult.baseElement.querySelector("button");
      act(() => {
        fireEvent.click(button);

        const expectedActions = [{ type: "CALCULATE_INSTALLMENT_REQUEST" }];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
