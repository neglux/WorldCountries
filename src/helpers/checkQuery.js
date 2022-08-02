function checkQuery(query) {
  const isEmpty = (query) => !query;
  const isLongerThanLimit = (query) => query.length >= 3;

  return !isEmpty(query) && isLongerThanLimit(query);
}

export default checkQuery;
