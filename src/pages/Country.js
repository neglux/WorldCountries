import React from "react";
import ContainerDark from "../components/containers/ContainerDark";
import ContainerLight from "../components/containers/ContainerLight";
import Label from "../components/containers/Label";
import CountryBox from "../components/CountryBox";
import CountryLineBox from "../components/CountryLineBox";
import Line from "../components/Line";
import Page from "../components/containers/Page";
import SearchBox from "../components/SearchBox";
import strings from "../data/strings";
import ContainerRow from "../components/containers/ContainerRow";

const Country = ({
  flags,
  name,
  cca3,
  subregion,
  translations,
  maps,
  borders,
  population,
  area,
  currencies,
  gini,
}) => {
  const { map, neighbors, info, capital } = strings.country;
  const currencyCode = Object.keys(currencies)[0];
  const currencyName = currencies[currencyCode].name;
  const currencySymbol = currencies[currencyCode].symbol;
  const currencyString = `${currencyName} ${currencySymbol}`;
  let giniYear;
  let giniIndex;
  if (gini) {
    giniYear = Object.keys(gini)[0];
    giniIndex = gini[giniYear];
  }
  return (
    <Page>
      <SearchBox />
      <Line />
      <CountryBox {...{ flags, name, cca3, subregion, translations }} />
      <ContainerRow>
        <ContainerDark title={map.title} style="w-3/5">
          {/* https://developers.google.com/maps/documentation/maps-static/start */}
        </ContainerDark>
        <ContainerDark title={neighbors.title} style="w-1/3">
          <ul className="pl-2">
            {borders.map((code) => (
              <li className="mt-2">
                <CountryLineBox code={code} />
              </li>
            ))}
          </ul>
        </ContainerDark>
      </ContainerRow>
      <ContainerRow>
        <ContainerDark title={info.title} style="w-3/5">
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
          <div>
            <p></p>
          </div>
        </ContainerDark>
        <ContainerDark title={capital.title} style="w-1/3">
          {/* https://open-meteo.com/en/docs#api-documentation */}
          <ContainerLight></ContainerLight>
        </ContainerDark>
      </ContainerRow>
    </Page>
  );
};

export default Country;
