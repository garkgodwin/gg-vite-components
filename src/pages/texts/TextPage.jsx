import React from "react";
import Texts from "../../samples/Texts";
import Page from "../../containers/Page";

const TextPage = () => {
  const header = "Texts Page";
  return (
    <Page header={header}>
      <Texts />
    </Page>
  );
};

export default TextPage;
