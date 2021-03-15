const initialState = {
  text: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return {
        text: "1",
      };

    default:
      return state;
  }
};

