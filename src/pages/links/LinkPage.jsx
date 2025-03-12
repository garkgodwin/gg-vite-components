import React from "react";
import Page from "../../containers/Page";
import Links from "../../samples/Links";

const LinkPage = () => {
  const header = "Links Page";
  return (
    <Page header={header}>
      <Links />
    </Page>
  );
};

export default LinkPage;
