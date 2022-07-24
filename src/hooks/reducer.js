export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, selectedCountry: action.payload.country };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
