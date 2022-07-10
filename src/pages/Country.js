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

const Country = () => {
  const { map, neighbors, info, capital } = strings.country;
  return (
    <Page>
      <SearchBox />
      <Line />
      <CountryBox />
      <ContainerRow>
        <ContainerDark title={map.title} style="w-3/5"></ContainerDark>
        <ContainerDark title={neighbors.title} style="w-1/3">
          <ul>
            <li className="my-5">
              <CountryLineBox />
            </li>
          </ul>
        </ContainerDark>
      </ContainerRow>
      <ContainerRow>
        <ContainerDark title={info.title} style="w-3/5">
          <div className="mb-5">
            <Label Label={info.meta.population} />
            <Label Label={info.meta.area} />
          </div>
          <Line />
          <div className="my-5">
            <Label Label={info.economy.currency} />
            <Label Label={info.economy.gini} />
          </div>
          <Line />
          <div>
            <p></p>
          </div>
        </ContainerDark>
        <ContainerDark title={capital.title} style="w-1/3">
          <ContainerLight></ContainerLight>
        </ContainerDark>
      </ContainerRow>
    </Page>
  );
};

export default Country;
