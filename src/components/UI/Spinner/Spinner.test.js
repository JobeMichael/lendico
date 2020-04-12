import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";

describe("rendering", () => {
  test("renders Spinner correctly", () => {
    const { asFragment } = render(<Spinner/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
