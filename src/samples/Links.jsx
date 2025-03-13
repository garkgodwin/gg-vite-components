import React from "react";
import Link from "../components/Link";

const Links = () => {
  return (
    <div className="links">
      <div className="links-sm">
        <Link linkData={{ to: "/", txt: "Primary Link" }} />
        <Link
          linkData={{
            to: "/test",
            txt: "Primary Link No Border",
            bordered: false,
          }}
        />
        <Link
          linkData={{
            to: "/test",
            txt: "Primary Link Filled",
            bordered: false,
            filled: true,
          }}
        />
        <Link
          linkData={{
            to: "https://google.com",
            txt: "Primary Link External",
            type: "external",
          }}
        />
        <Link
          linkData={{
            to: "https://google.com",
            txt: "Primary Link External No Border",
            bordered: false,
            type: "external",
          }}
        />
        <Link
          linkData={{
            to: "https://google.com",
            txt: "Primary Link External Filled",
            bordered: false,
            filled: true,
            type: "external",
          }}
        />
      </div>
    </div>
  );
};

export default Links;
