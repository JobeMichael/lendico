import { getUrl } from "../../helper/getUrl";
import httpClient from "../httpClient";

const postLoanCalculator = async (resource, payload) => {
  const { instance } = httpClient();

  return await instance.post(getUrl(resource), payload);
};

export default { postLoanCalculator };
