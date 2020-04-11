const validation = {
  amount: {
    required: "This field required.",
    pattern: {
      value: /\d+/,
      message: "This input is number only.",
    },
    min: {
      value: 1,
      message: "This amount should be between 1 and 10000000.",
    },
    max: {
      value: 10000000,
      message: "This amount should be between 1 and 10000000.",
    },
  },
  duration: {
    required: "This field is required.",
    pattern: {
      value: /\d+/,
      message: "This input is number only.",
    },
    min: {
      value: 1,
      message: "Duration should be between 1 to 10 years",
    },
    max: {
      value: 10,
      message: "Duration should be between 1 to 10 years",
    },
  },
};

export default validation;
