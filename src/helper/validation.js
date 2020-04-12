const validation = {
  amount: {
    required: "This field required.",
    pattern: {
      value: /\d+/,
      message: "This input is number only.",
    },
    min: {
      value: 10000,
      message: "This amount should be between 10000 and 100000.",
    },
    max: {
      value: 100000,
      message: "This amount should be between 10000 and 100000.",
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
      message: "Duration should be between 1 to 5 years",
    },
    max: {
      value: 5,
      message: "Duration should be between 1 to 5 years",
    },
  },
};

export default validation;
