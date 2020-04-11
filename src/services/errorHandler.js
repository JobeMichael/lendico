const errorHandler = (error) => {
  if (error.response) {
    //console.log("Response Error", error.response);
  } else if (error.request) {
    //console.log("Request Error", error.response);
  } else {
    //console.log("Error", error.message);
  }
  return { message: "API Error" };
};

export default errorHandler;
