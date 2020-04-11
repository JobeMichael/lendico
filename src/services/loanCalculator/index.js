import { getUrl } from "../../helper/getUrl";
import errorHandler from "../errorHandler";
import httpClient from "../httpClient";

const postLoanCalculator = async (resource, payload) => {
  const { instance } = httpClient();

  return await instance
    .post(getUrl(resource), payload)
    .catch((e) => ({ error: errorHandler(e) }));
};

export default { postLoanCalculator };
