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

      // const button = renderResult.baseElement.querySelector("button");
      // console.log("button", button.innerHTML);
      // const { url, response } = mockData;
      // moxios.stubRequest(url, { status: 200, response });
      // act(() => {
      //   fireEvent.click(button,{amount:1,duration:1});
      // });
      // done();
    });
  });
});
