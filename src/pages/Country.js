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
  const currencyCode = Object.keys(currencies)[0];
  const currencyName = currencies[currencyCode].name;
  const currencySymbol = currencies[currencyCode].symbol;
  const currencyString = `${currencyName} ${currencySymbol}`;
  const primaryLangCode = Object.keys(languages)[0];
  let giniYear;
  let giniIndex;
  if (gini) {
    giniYear = Object.keys(gini)[0];
    giniIndex = gini[giniYear];
  }

  return (
    <Page>
      <SearchBox isNavbarSearch={true} />
      <Line />
      <CountryBox {...{ flags, name, cca3, subregion, translations }} />
      <div className="flex justify-between items-start w-full h-fit">
        <div className="flex-1 mr-5">
          <ContainerDark style="h-[450px] overflow-hidden">
            <Map coord={latlng} />
          </ContainerDark>
          <ContainerDark title={info.title}>
            <div className="mb-5">
              <Label
                label={info.meta.lang}
                value={languages[primaryLangCode]}
              />
            </div>
            <Line />
            <div className="mb-5">
              <Label label={info.meta.population} value={population} />
              <Label label={info.meta.area} value={area} />
            </div>
            <Line />
            <div className="my-5">
              <Label label={info.economy.currency} value={currencyString} />
              <Label label={info.economy.gini} value={giniIndex} />
            </div>
            <Line />
            <div className="mt-5">
              <p>{`${name.common} is ${
                independent ? "independent" : "dependent"
              } and ${unMember ? "a member of UN" : "not a member of UN"}.`}</p>
            </div>
          </ContainerDark>
        </div>
        <div className="w-[350px]">
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
