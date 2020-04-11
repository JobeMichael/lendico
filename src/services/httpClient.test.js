import moxios from "moxios";
import httpClient from "./httpClient";

describe("httpClient", () => {
  let client: any = null;

  beforeEach(() => {
    client = httpClient();
    moxios.install(client.instance);
  });

  afterEach(() => {
    moxios.uninstall(client.instance);
  });

  it("creates an axios client", async (done) => {
    moxios.stubRequest("http://www.somesite.com/awesome-url", {
      status: 200,
      responseText: "__TEST__",
    });

    const response = await client.instance.get(
      "http://www.somesite.com/awesome-url"
    );
    expect(response.request.headers).toEqual({
      Accept: "application/json",
    });
    expect(response.status).toBe(200);
    done();
  });
});
