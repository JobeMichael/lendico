import { render } from "@testing-library/react";
import React from "react";
import MonthlyRate from "./MonthlyRate";

describe("rendering", () => {
  test("renders MonthlyRate correctly", () => {
    const { asFragment } = render(<MonthlyRate monthlyRate="123" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders information message if no value", () => {
    const { getByTestId } = render(<MonthlyRate />);
    const infoText = getByTestId("infoText");

    expect(infoText.innerHTML).toBe(
      "Enter Amount and duration to calculate the installment"
    );
  });

  test("renders error message correctly", () => {
    const { asFragment } = render(<MonthlyRate error="Error" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
