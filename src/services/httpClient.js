import axios from "axios";

const httpClient = (config) => {
  const JSON_MIME_TYPE = "application/json";
  const instance = axios.create({
    headers: {
      common: { Accept: JSON_MIME_TYPE },
      post: { "Content-Type": JSON_MIME_TYPE },
      put: { "Content-Type": JSON_MIME_TYPE },
      patch: { "Content-Type": JSON_MIME_TYPE },
    },
    ...config,
  });

  return {
    instance,
  };
};

export default httpClient;
