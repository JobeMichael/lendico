import { act, cleanup, render } from "@testing-library/react";
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
    });
  });

  const storeLoading = mockStore({
    loanCalculator: {
      installment: 0,
      loading: true,
      error: null,
    },
  });

  it("renders properly with state loading", () => {
    act(() => {
      renderResult = render(
        <Provider store={storeLoading}>
          <LoanCalculator />
        </Provider>
      );
    });

    const loadingEle = renderResult.baseElement.querySelector(".loader");
    expect(loadingEle.innerHTML).toBe("Loading...");
  });
});
