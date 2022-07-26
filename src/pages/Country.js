import React from "react";
import strings from "../data/strings";
import Page from "../components/containers/Page";
import ContainerDark from "../components/containers/ContainerDark";
import CountryBox from "../components/containers/CountryBox";
import CountryLineBox from "../components/containers/CountryLineBox";
import SearchBox from "../components/SearchBox";
import Line from "../components/Line";
import Label from "../components/Label";
import Map from "../components/Map";
import Weather from "../components/Weather";

const Country = ({
  flags,
  name,
  cca3,
  subregion,
  translations,
  borders,
  languages,
  population,
  area,
  currencies,
  gini,
  independent,
  unMember,
  latlng,
  capital,
  capitalInfo,
  timezones,
}) => {
  const { neighbors, info, capitalContainer } = strings.country;
  const currency = getCurrency(currencies);
  const giniValue = gini ? getGINI(gini) : "no data";
  const languageStr = getLanguages(languages);

  function getCurrency(currencies) {
    const code = Object.keys(currencies)[0];
    const currency = {
      name: currencies[code].name,
      symbol: currencies[code].symbol,
    };

    currency.string = `${currency.name} ${currency.symbol}`;
    return currency;
  }

  function getGINI(gini) {
    const giniValue = {
      year: Object.keys(gini)[0],
    };
    giniValue.index = gini[giniValue.year];
    giniValue.string = `${giniValue.index} (${giniValue.year})`;

    return giniValue;
  }

  function getLanguages(languages) {
    return Object.values(languages).join(", ");
  }

  return (
    <Page>
      <SearchBox isNavbarSearch={true} />
      <Line />
      <CountryBox {...{ flags, name, cca3, subregion, translations }} />
      <div className="flex sm:flex-col lg:flex-row justify-between items-start w-full h-fit">
        <div className="flex-1 mr-5 w-full">
          <ContainerDark style="h-[450px] overflow-hidden">
            <Map coord={latlng} />
          </ContainerDark>
          <ContainerDark title={info.title}>
            <div className="mb-5">
              <Label label={info.meta.lang} value={languageStr} />
            </div>
            <Line />
            <div className="mb-5">
              <Label
                label={info.meta.population}
                value={Intl.NumberFormat("en-US").format(population)}
              />
              <Label
                label={info.meta.area}
                value={Intl.NumberFormat("en-US").format(area) + "km²"}
              />
            </div>
            <Line />
            <div className="my-5">
              <Label label={info.economy.currency} value={currency?.string} />
              <Label
                label={info.economy.gini}
                value={giniValue.string || giniValue}
              />
            </div>
            <Line />
            <div className="mt-5">
              <p>{`${name.common} is ${
                independent ? "independent" : "dependent"
              } and ${unMember ? "a member of UN" : "not a member of UN"}.`}</p>
            </div>
          </ContainerDark>
        </div>
        <div className="w-[350px] sm:w-full lg:w-[350px]">
          <ContainerDark
            title={neighbors.title}
            style="overflow-y-auto h-fit max-h-[450px]"
          >
            <ul className="pl-2">
              {borders?.map((code, index) => (
                <li className="mt-2" key={index}>
                  <CountryLineBox code={code} />
                </li>
              ))}
            </ul>
          </ContainerDark>
          <ContainerDark title={capitalContainer.title}>
            <p className="font-semibold">{capital[0]}</p>
            <Weather latlng={capitalInfo.latlng} timezone={timezones[0]} />
          </ContainerDark>
        </div>
      </div>
    </Page>
  );
};

export default Country;
