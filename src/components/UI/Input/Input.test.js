import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";

const testProps = {
  label: "Amount",
  name: "amount",
  errors: {},
};

const testFormErrorProps = {
  amount: { type: "required", message: "This field required." },
};

describe("rendering", () => {
  test("renders Input correctly", () => {
    const { asFragment } = render(<Input {...testProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders Input with error", () => {
    const { asFragment } = render(
      <Input {...{ ...testProps, errors: testFormErrorProps }} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
