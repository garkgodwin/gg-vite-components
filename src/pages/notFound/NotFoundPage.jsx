import React from "react";
import { NavLink } from "react-router";
import "./NotFoundPage.css"; // Make sure to create this CSS file
import Link from "../../components/Link";
import Text from "../../components/Text";
import Page from "../../containers/Page";

const NotFoundPage = () => {
  return (
    <Page className="not-found">
      <Text
        txtData={{
          type: "h1",
          txt: "404",
          size: "lg",
          fontSize: "6rem",
          ariaHidden: true,
          className: "not-found-title",
        }}
      />
      <Text
        txtData={{
          type: "h2",
          txt: "Page Not Found",
          size: "lg",
          ariaHidden: true,
          className: "not-found-subtitle",
        }}
      />
      <Text
        txtData={{
          ariaHidden: true,
          className: "not-found-text",
        }}
      >
        The page you are looking for might have been removed, had its
        name changed, or is temporarily unavailable.
      </Text>
      <Link
        linkData={{
          to: "/",
          txt: "Go Back Home",
          className: "not-found-button",
        }}
      />
    </Page>
  );
};

export default NotFoundPage;
