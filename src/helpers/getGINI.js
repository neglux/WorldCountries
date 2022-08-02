function getGINI(gini) {
  const giniValue = {
    year: Object.keys(gini)[0],
  };
  giniValue.index = gini[giniValue.year];
  giniValue.string = `${giniValue.index} (${giniValue.year})`;

  return giniValue;
}

export default getGINI;
