import errorHandler from "./errorHandler";
describe("errorHandler", () => {
  it("should returns response error ", () => {
    const result = errorHandler({ request: "error" });

    expect(result).toBe("Something wrong with your request, Try agin!");
  });

  it("should returns request error ", () => {
    const result = errorHandler({ response: "error" });

    expect(result).toBe("Something wrong with the response, Try agin!");
  });

  it("should returns common error ", () => {
    const result = errorHandler({});

    expect(result).toBe("Error while processing your request");
  });
});
