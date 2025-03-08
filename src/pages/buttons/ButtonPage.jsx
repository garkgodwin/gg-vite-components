import React from "react";
import Buttons from "./../../samples/Buttons";
import Page from "../../containers/Page";

const ButtonPage = () => {
  const header = "Buttons Page";
  return (
    <Page header={header}>
      <Buttons />
    </Page>
  );
};

export default ButtonPage;
