import { render } from "@testing-library/react";
import MutationObserver from "mutation-observer";
import React from "react";
import LoanCalculator from "./LoanCalculator";
global.MutationObserver = MutationObserver;

describe("rendering", () => {
  test("renders LoanCalculator correctly", () => {
    const { asFragment } = render(<LoanCalculator />);

    expect(asFragment()).toMatchSnapshot();
  });
});
