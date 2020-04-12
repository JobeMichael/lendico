const errorHandler = (error) => {
  if (error.response) {
    return "Something wrong with the response, Try agin!";
  } else if (error.request) {
    return "Something wrong with your request, Try agin!";
  } else {
    return "Error while processing your request";
  }
};

export default errorHandler;
