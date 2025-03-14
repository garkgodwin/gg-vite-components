import React, { useState, useEffect } from "react";
import Text from "../../components/Text";
import Page from "../../containers/Page";

const LoaderPage = () => {
  return (
    <Page className={`loader fade-loading`}>
      <Text
        txtData={{
          type: "h1",
          txt: "Please wait...",
          size: "lg",
          fontSize: "4rem",
          ariaHidden: true,
        }}
      />
      <Text txtData={{ fontSize: "2rem", ariaHidden: true }}>
        We are loading your page
      </Text>
    </Page>
  );
};

export default LoaderPage;
