import moxios from "moxios";
import loanCalculator from ".";

describe("loanCalculator", () => {
  const mockData = {
    url: "https://5e900510fe7f2a00165ef778.mockapi.io/api/__TEST__",
    response: { data: [{ id: "c51ce410c124a10e0db5e4b97fc2af39" }] },
  };

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("should successfully post request", async (done) => {
    const { url, response } = mockData;
    moxios.stubRequest(url, { response });

    const data = await loanCalculator.postLoanCalculator("__TEST__");
    expect(data?.data).toEqual(response);

    const request = moxios.requests.mostRecent();
    expect(request.config.method).toEqual("post");
    expect(request.headers["Content-Type"]).toEqual("application/json");
    expect(request.url).toEqual(url);

    done();
  });

  it("should fail", async (done) => {
    const { url, response } = mockData;
    moxios.stubRequest(url, { status: 400, response });

    await loanCalculator.postLoanCalculator("__TEST__");

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400 }).then(() => {
        try {
          console.log(request)
          done();
        } catch (err) {
          done.fail(err);
        }
      });
    });

    await loanCalculator.postLoanCalculator("__TEST__");
    done();
  });
});
