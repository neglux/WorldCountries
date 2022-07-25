export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, selectedCountry: action.payload.country };
    case "SET_RSLT":
      return { ...state, searchResults: action.payload.data };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
