function getCurrency(currencies) {
  const code = Object.keys(currencies)[0];
  const currency = {
    name: currencies[code].name,
    symbol: currencies[code].symbol,
  };

  currency.string = `${currency.name} ${currency.symbol}`;
  return currency;
}

export default getCurrency;
